import {
    Container,
    Grid,
    Box,
    Typography,
    InputLabel,
    MenuItem,
    FormControl,
    Select,
    TextField,
    Skeleton,
    RadioGroup,
    FormControlLabel,
    Radio,
    InputAdornment,
    IconButton,
} from "@mui/material";
import React, { Suspense, useMemo } from "react";
import ButtonBeli from "../components/ButtonBeli";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import ButtonKeranjang from "../components/ButtonKeranjang";
import axios from "axios";
import swal from "sweetalert";
import { useQueryClient } from "@tanstack/react-query";
import Model3d from "./Model3d";
import { Canvas } from "@react-three/fiber";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import { fontWeight, width } from "@mui/system";
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { environment } from "../environments/environment";

export default function ProductPage(props) {
    const queryClient = useQueryClient();
    const [size, setSize] = React.useState("");
    const [sizes, setSizes] = React.useState({
        S: "0",
        M: "0",
        ML: "0",
        L: "0",
        XL: "0",
        XXL: "0",
    });
    const [product, setProduct] = React.useState([]);
    const [loading, setLoading] = React.useState(true);
    const [quantity, setQuantity] = React.useState(1);
    let isMounted = true;
    const { productId } = useParams();
    // const catalog = JSON.parse(JSON.stringify(require("../catalog.json")));
    React.useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            axios.get(`api/products/${productId}`).then((res) => {
                if (res.data.status === 200) {
                    setProduct(res.data.products);
                    setSizes(res.data.size);
                    setLoading(false);
                }
            });
        };
        fetchData();
        isMounted = false;
    }, []);

    // if (!loading) {
    //     var product"";
    //     currentProduct = product.filter((item) => item.id == productId);
    //     console.log(currentProduct);
    // }

    const handleChange = (event) => {
        setSize(event.target.value);
    };

    function submitToCart(e) {
        const data = {
            product_id: productId,
            product_qty: quantity,
            product_size: size,
        };
        axios.post("/api/add-to-cart", data).then((res) => {
            if (res.data.status === 201) {
                queryClient.invalidateQueries("cartLength");
                swal("Success", res.data.message, "success");
            } else if (res.data.status === 409) {
                swal("Warning", res.data.message, "warning");
            } else if (res.data.status === 401) {
                swal("Error", res.data.message, "error");
            } else if (res.data.status === 404) {
                swal("Error", res.data.message, "error");
            } else if (res.data.status === 500) {
                swal("Warning", res.data.message, "warning");
            }
        });
    }
    const availableSizes = []
    const [availSizes, setAvailSizes] = React.useState([])
    useMemo(() => {
        if (!loading) {
            for (let key in sizes) {
                if (sizes[key] > 0) {
                    availableSizes.push(key)
                }
            }
            availableSizes.shift()
            setAvailSizes(availableSizes)
        }
    }, [loading])
    return (
        <Container sx={{ px: { laptop: 10, mobile: 5 }, mt: 5 }}>
            {/* start of laptop display */}
            <Grid
                spacing={15}
                container
                display={{ mobile: "none", laptop: "flex" }}
            >
                <Grid item laptop={6}>
                    {loading ? (
                        <>
                            <Skeleton
                                variant="rounded"
                                width="538px"
                                height="400px"
                            />
                            <Skeleton
                                variant="text"
                                sx={{ fontSize: 36, mt: 5 }}
                            />
                            <Skeleton variant="text" sx={{ fontSize: 12 }} />
                        </>
                    ) : (
                        <Box>
                            {!!Number(product.has_3d) ? (
                                <div className="sketchfab-embed-wrapper" style={{ height: '300px' }}>
                                    {/* <Suspense>
                                        <Canvas>
                                            <Model3d model={product.model_3d} />
                                        </Canvas>
                                    </Suspense> */}
                                    <model-viewer style={{ height: '300px' }} src={environment.fileUrl + product.model_3d} shadow-intensity="1" disable-zoom="" camera-controls="" auto-rotate="" ar-status="not-presenting" disable-pan>
                                    </model-viewer>

                                </div>
                            ) : (
                                <Carousel showThumbs={false} showStatus={false} infiniteLoop>
                                    {product.imageUrl.map((item, id) => (
                                        // <Box
                                        //     key={id}
                                        //     sx={{
                                        //         height: "400px",
                                        //         objectFit: "scale-down",
                                        //         alignItems: 'center'
                                        //     }}
                                        //     component="img"
                                        //     src={`../storage/${item.path}`}
                                        // />
                                        <div>
                                            <img
                                                src={`../storage/${item.path}`}
                                                style={{
                                                    objectFit: 'contain',
                                                    height: '400px'
                                                }}
                                            />
                                        </div>
                                    ))}
                                </Carousel>
                                // <Box
                                //     sx={{
                                //         width: "538px",
                                //         height: "400px",
                                //         objectFit: "cover",
                                //     }}
                                //     component="img"
                                //     src={`../catalog/${product.image_detail1}`}
                                // />
                            )}
                            <Box my={5}>
                                <Typography fontSize={36} fontWeight={"medium"}>
                                    Deskripsi
                                </Typography>
                                <Typography>{product.description}</Typography>
                            </Box>
                        </Box>
                    )}
                </Grid>
                <Grid item laptop={6}>
                    <Box
                        sx={{ border: "1px solid #D9D9D9", borderRadius: 1 }}
                        p={2}
                    >
                        <Box>
                            {loading ? (
                                <Skeleton
                                    variant="text"
                                    sx={{ fontSize: 36 }}
                                />
                            ) : (
                                <Typography fontSize={30} fontWeight="medium">
                                    {product.product_name}
                                </Typography>
                            )}
                            {loading ? (
                                <Skeleton
                                    variant="text"
                                    sx={{ fontSize: 24 }}
                                />
                            ) : (
                                <Typography fontSize={20}>
                                    Rp. {Number(product.price).toLocaleString()}
                                </Typography>
                            )}
                        </Box>
                        <Box pt={3}>
                            <FormControl sx={{ width: 300 }}>
                                <InputLabel id="demo-simple-select-label">
                                    Pilih Ukuran
                                </InputLabel>
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="ukuran"
                                    value={size}
                                    displayEmpty={true}
                                    label="Pilih Ukuran"
                                    onChange={handleChange}
                                >
                                    <MenuItem
                                        disabled={!Number(sizes.XS)}
                                        value={"XS"}
                                    >
                                        Xtra Small (XS)
                                    </MenuItem>
                                    <MenuItem
                                        disabled={!Number(sizes.S)}
                                        value={"S"}
                                    >
                                        Small
                                    </MenuItem>
                                    <MenuItem
                                        disabled={!Number(sizes.M)}
                                        value={"M"}
                                    >
                                        Medium
                                    </MenuItem>
                                    <MenuItem
                                        disabled={!Number(sizes.L)}
                                        value={"L"}
                                    >
                                        Large
                                    </MenuItem>
                                    <MenuItem
                                        disabled={!Number(sizes.XL)}
                                        value={"XL"}
                                    >
                                        Xtra Large (XL)
                                    </MenuItem>
                                    <MenuItem
                                        disabled={!Number(sizes.XXL)}
                                        value={"XXL"}
                                    >
                                        Xtra Xtra Large (XXL)
                                    </MenuItem>
                                </Select>
                            </FormControl>
                            <br />
                            <TextField
                                onChange={(event) => {
                                    if (event.target.value < 0) {
                                        event.target.value = 0;
                                        setQuantity(event.target.value);
                                    } else {
                                        event.target.value;
                                        setQuantity(event.target.value);
                                    }
                                }}
                                id="jumlah-barang"
                                label="Quantity"
                                type="number"
                                InputLabelProps={{
                                    shrink: true,
                                }}
                                variant="outlined"
                                sx={{ mt: 3, width: 300 }}
                                value={quantity}
                            />
                            <Grid container>
                                <Grid item laptop={6}>
                                    <ButtonKeranjang
                                        id={productId}
                                        onClick={submitToCart}
                                    />
                                </Grid>
                            </Grid>
                        </Box>
                    </Box>
                </Grid>
            </Grid>
            {/* end of laptop display */}

            {/* start of mobile display */}
            <Box
                container
                display={{ mobile: "flex", laptop: "none" }}
            >
                {loading == true ? (
                    <Typography>
                        Loading cuy
                    </Typography>
                ) : (
                    <Box sx={{ mt: 3 }}>
                        {!!Number(product.has_3d) ? (
                            <div className="sketchfab-embed-wrapper" style={{ height: '300px' }}>
                                {/* <Suspense>
                                    <Canvas>
                                        <Model3d model={product.model_3d} />
                                    </Canvas>
                                </Suspense> */}
                                <model-viewer style={{ height: '300px' }} src={environment.fileUrl + product.model_3d} shadow-intensity="1" disable-zoom="" camera-controls="" auto-rotate="" ar-status="not-presenting" disable-pan>
                                </model-viewer>
                            </div>
                        ) : (
                            <Carousel showThumbs={false} showStatus={false} infiniteLoop>
                                {product.imageUrl.map((item, id) => (
                                    // <Box
                                    //     key={id}
                                    //     sx={{
                                    //         height: "400px",
                                    //         objectFit: "scale-down",
                                    //         alignItems: 'center'
                                    //     }}
                                    //     component="img"
                                    //     src={`../storage/${item.path}`}
                                    // />
                                    <div>
                                        <img
                                            src={`../storage/${item.path}`}
                                            style={{
                                                objectFit: 'contain',
                                                height: '300px'
                                            }}
                                        />
                                    </div>
                                ))}
                            </Carousel>
                        )}
                        <Typography fontSize={24} mt={2}>
                            {product.product_name}
                        </Typography>
                        <Typography fontSize={12} fontWeight={'light'}>
                            Rp. {Number(product.price).toLocaleString()}
                        </Typography>
                        <Box py={2} borderTop={'1px solid #CCCCCC'} borderBottom={'1px solid #CCCCCC'} mt={2}>
                            <Typography fontSize={14}>
                                Pilih Ukuran
                            </Typography>
                            <RadioGroup
                                row
                                aria-labelledby="demo-row-radio-buttons-group-label"
                                name="row-radio-buttons-group"
                                onChange={handleChange}
                            >
                                {
                                    availSizes.map((item, id) => {
                                        console.log(item)
                                        return (
                                            <FormControlLabel value={String(item)} control={<Radio checkedIcon={<Typography fontWeight='light' color={'#464646'} sx={{
                                                width: '28px',
                                                height: '28px',
                                                lineHeight: '27px',
                                                borderRadius: '50%',
                                                fontSize: '14px',
                                                color: '#464646',
                                                textAlign: 'center',
                                                border: '1px solid #F97700',
                                                fontWeight: 'light'
                                            }}>{item}</Typography>} icon={<Typography fontWeight='light' color={'#464646'} sx={{
                                                width: '28px',
                                                height: '28px',
                                                lineHeight: '27px',
                                                borderRadius: '50%',
                                                fontSize: '14px',
                                                color: '#464646',
                                                textAlign: 'center',
                                                border: '1px solid #B0B0B0',
                                                fontWeight: 'light'
                                            }}>{item}</Typography>} />} />
                                        )
                                    })
                                }
                            </RadioGroup>

                            <Typography mt={2} fontSize={14}>
                                Quantity
                            </Typography>
                            <TextField
                                onChange={(event) => {
                                    if (event.target.value < 0) {
                                        event.target.value = 0;
                                        setQuantity(event.target.value);
                                    } else {
                                        event.target.value;
                                        setQuantity(event.target.value);
                                    }
                                }}
                                id="jumlah-barang"
                                type="number"
                                InputLabelProps={{
                                    shrink: true,
                                }}
                                inputProps={{ min: 0, style: { textAlign: 'center' } }}
                                InputProps={{
                                    startAdornment: <InputAdornment position="start"><IconButton onClick={() => {
                                        if (quantity <= 1) {
                                            setQuantity(1)
                                        } else {
                                            setQuantity(quantity - 1)
                                        }
                                    }}><RemoveIcon fontSize='small' /></IconButton></InputAdornment>, endAdornment: <InputAdornment position="end"><IconButton onClick={() => setQuantity(quantity + 1)}><AddIcon fontSize='small' /></IconButton></InputAdornment>
                                }}
                                variant="outlined"
                                sx={{
                                    mt: 2,
                                    width: 140,
                                    '& legend': { display: 'none' },
                                    '& fieldset': { top: 0 },
                                }}
                                size='small'
                                value={quantity}

                            />
                            <ButtonKeranjang
                                id={productId}
                                onClick={submitToCart}
                            />
                        </Box>
                        <Typography mt={2} fontSize={14}>
                            Deskripsi
                        </Typography>
                        <Typography fontWeight={'light'} fontSize={10} textAlign='justify' mt={0.5}>
                            {product.description}
                        </Typography>
                    </Box>
                )}
            </Box>
            {/* end of mobile display */}
        </Container >
    );
}
