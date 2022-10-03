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
} from "@mui/material";
import React from "react";
import ButtonBeli from "../components/ButtonBeli";
import { useParams } from "react-router";
import { Link } from "react-router-dom";

export default function ProductPage(props) {
    const [size, setSize] = React.useState("");
    const [product, setProduct] = React.useState([]);
    const [loading, setLoading] = React.useState(true);
    let isMounted = true;
    const { productId } = useParams();
    // const catalog = JSON.parse(JSON.stringify(require("../catalog.json")));
    React.useEffect(() => {
        const fetchData = async () => {
            setLoading(true)
            try {
                axios.get(`api/products`).then((res) => {
                    if (res.data.status === 200) {
                        setProduct(res.data.products);
                        setLoading(false);
                    }
                });
            } catch(error) {
                console.error(error.message)
            }
        }
        fetchData()
        isMounted = false;
    }, []);

    if (loading) {
        return <Typography>Loading....</Typography>;
    } else {
        var currentProduct = ""
        currentProduct = product.filter(item => item.id == productId)
        console.log(currentProduct)
    }

    const handleChange = (event) => {
        setSize(event.target.value);
    };
    return (
        <Container sx={{ px: 10 }}>
            <Grid
                spacing={15}
                container
                display={{ mobile: "none", laptop: "flex" }}
            >
                <Grid item laptop={6}>
                    <Box>
                        {/* <Box
                            sx={{ width: "100%" }}
                            component="img"
                            src={`../images/catalog-1.png`}
                        /> */}
                        {currentProduct.have3d ? (
                            <model-viewer
                                camera-controls
                                style={{ width: "400px", height: "400px" }}
                                src={`../3dModel/${currentProduct[0].model}/scene.gltf`}
                            ></model-viewer>
                        ) : (
                            <Box
                                sx={{ width: "400px", height: "400px" }}
                                component="img"
                                src={`../catalog/${currentProduct[0].image_detail1}`}
                            />
                        )}
                        <Box my={5}>
                            <Typography fontSize={36} fontWeight={"medium"}>
                                Deskripsi
                            </Typography>
                            <Typography>{currentProduct[0].description}</Typography>
                        </Box>
                    </Box>
                </Grid>
                <Grid item laptop={6}>
                    <Box
                        sx={{ border: "1px solid #D9D9D9", borderRadius: 1 }}
                        p={2}
                    >
                        <Box>
                            <Typography fontSize={30} fontWeight="medium">
                                {currentProduct[0].product_name}
                            </Typography>
                            <Typography fontSize={20}>
                                Rp {currentProduct[0].price}
                            </Typography>
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
                                    label="Pilih Ukuran"
                                    onChange={handleChange}
                                >
                                    <MenuItem value={10}>Ten</MenuItem>
                                    <MenuItem value={20}>Twenty</MenuItem>
                                    <MenuItem value={30}>Thirty</MenuItem>
                                </Select>
                            </FormControl>
                            <TextField
                                onChange={(event) =>
                                    event.target.value < 0
                                        ? (event.target.value = 0)
                                        : event.target.value
                                }
                                id="jumlah-barang"
                                label="Quantity"
                                type="number"
                                InputLabelProps={{
                                    shrink: true,
                                }}
                                variant="outlined"
                                sx={{ mt: 3 }}
                            />
                            <ButtonBeli />
                        </Box>
                    </Box>
                </Grid>
            </Grid>
        </Container>
    );
}
