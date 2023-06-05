import { makeStyles } from "@mui/styles";
import {
    Container,
    Paper,
    FilledInput,
    InputLabel,
    FormControl,
    Grid,
    FormGroup,
    FormControlLabel,
    Checkbox,
    Typography,
    Button,
    FormHelperText,
} from "@mui/material";
import React from "react";
import { DropzoneDialog } from "mui-file-dropzone";
import { useNavigate } from "react-router";
import { toBase64Handler } from "../../../base64converter/base64Converter";



export default function AddTexture() {
    const [imageDropzone, setImageDropzone] = React.useState(false);
    const [sizes, setSizes] = React.useState({
        S: false,
        M: false,
        XS: false,
        L: false,
        XL: false,
        XXL: false,
    });
    const [input, setInput] = React.useState({
        nama: "",
        image: '',
        error_list: {
            nama: "",
            image: '',
        },
    });

    const history = useNavigate();

    function handleOpenImage() {
        setImageDropzone(true);
    }

    function handleCloseImage() {
        setImageDropzone(false);
    }

    const checkboxColor = {
        color: "primary.main",
        "&.Mui-checked": {
            color: "primary",
        },
    };

    const useStyles = makeStyles((theme) => ({
        root: {
            borderRadius: 10,
        },
        input: {
            "&:-webkit-autofill": {
                borderRadius: 10,
            },
        },
    }));

    const handleInput = (e) => {
        setInput({
            ...input,
            [e.target.name]: e.target.value,
        });
    };

    const handleCheckbox = (e) => {
        setInput({
            ...input,
            has_3d: e.target.checked,
        });
    };

    const handleSize = (e) => {
        setSizes({
            ...sizes,
            [e.target.name]: e.target.checked,
        });
    };

    const onFileChange = (e) => {
        let files = e.target.files;
        let fileReader = new FileReader();
        fileReader.readAsDataURL(files[0]);

        fileReader.onload = (event) => {
            // this.setState({
            //     selectedImage: event.target.result,
            // })
            setInput({
                ...input,
                model_3d: event.target.result,
            });
        };
    };

    const handleImage = async (files) => {
        const base64img = await toBase64Handler(files);
        setInput({ ...input, image: JSON.stringify(base64img) });

        // if(!files[1]) {
        //     files[1] = {name: ''}
        // }
        // if(!files[2]) {
        //     files[2] = {name: ''}
        // }

        //Old code
        // let imgData = new FormData();
        // if (files.length == 1) {
        //     setInput({
        //         ...input,
        //         image_detail1: files[0].name,
        //         // image_detail2: files[1].name,
        //         // imagedetail3: files[2].name
        //     });
        //     imgData.append("image", files[0]);
        // } else if (files.length == 2) {
        //     setInput({
        //         ...input,
        //         image_detail1: files[0].name,
        //         image_detail2: files[1].name,
        //         // image_detail3: files[2].name
        //     });
        //     imgData.append("image[]", files[0]);
        //     imgData.append("image[]", files[1]);
        // } else if (files.length == 3) {
        //     setInput({
        //         ...input,
        //         image_detail1: files[0].name,
        //         image_detail2: files[1].name,
        //         image_detail3: files[2].name,
        //     });
        //     imgData.append("image[]", files[0]);
        //     imgData.append("image[]", files[1]);
        //     imgData.append("image[]", files[2]);
        // }

        // const res = await axios.post("api/save-image", imgData);
        // if (res.data.status === 200) {
        //     console.log(res.data.message);
        // }
        handleCloseImage();
    };

    const saveTexture = async (e) => {
        e.preventDefault();
        axios.get("/sanctum/csrf-cookie").then((response) => {
            axios.post("api/texture", input).then((res) => {
                if (res.data.status === 200) {
                    console.log(res.data.message);
                    history("/admin/texture");
                } else {
                    setInput({
                        ...input,
                        error_list: res.data.validation_errors,
                    });
                }
            });
        });
        // axios.get("/sanctum/csrf-cookie").then((response) => {
        //     axios.post("/api/login", input).then((res) => {
        //         if (res.data.status === 200) {
        //             console.log(res.data.message);
        //             setInput({
        //                 nama: "",
        //                 price: "",
        //                 description: "",
        //                 has_3d: e.target.checked,
        //             });
        //         }
        //     });
        // });
    };

    const classes = useStyles();
    return (
        <Container sx={{ my: 5 }}>
            <Paper elevation={5}>
                <Container sx={{ py: 5 }}>
                    <form onSubmit={saveTexture} encType="multipart/form-data">
                        <Grid container spacing={2}>
                            <Grid item mobile={12}>
                                <FormControl fullWidth variant="filled">
                                    <InputLabel htmlFor="component-filled">
                                        Nama Tekstur
                                    </InputLabel>
                                    <FilledInput
                                        value={input.nama}
                                        onChange={handleInput}
                                        name="nama"
                                        id="component-filled"
                                        disableUnderline={true}
                                        classes={{
                                            root: classes.root,
                                            input: classes.input,
                                        }}
                                    />
                                </FormControl>
                                <FormHelperText
                                    sx={{ color: "red", fontSize: 10 }}
                                >
                                    {input.error_list.nama}
                                </FormHelperText>
                            </Grid>

                            <Grid item mobile={12}>
                                <Typography fontWeight={"medium"}>
                                    Gambar Tekstur
                                </Typography>
                                <Button
                                    variant="contained"
                                    onClick={handleOpenImage}
                                >
                                    <Typography color={"white"}>
                                        Add Image
                                    </Typography>
                                </Button>
                                <DropzoneDialog
                                    open={imageDropzone}
                                    onClose={handleCloseImage}
                                    onSave={handleImage}
                                    filesLimit={1}
                                    maxFileSize={50000000}
                                    acceptedFiles={["image/*"]}
                                />
                                <Typography color={"red"}>
                                    {input.error_list.image}
                                </Typography>
                            </Grid>

                            <Grid sx={{ mt: 5 }} item mobile={12}>
                                <Button onClick={() => history("/admin")}>
                                    <Typography color={"main"}>
                                        Cancel
                                    </Typography>
                                </Button>
                                <Button
                                    sx={{ ml: 2 }}
                                    variant="contained"
                                    type="submit"
                                >
                                    <Typography color={"white"}>
                                        Submit
                                    </Typography>
                                </Button>
                            </Grid>
                        </Grid>
                    </form>
                </Container>
            </Paper>
        </Container>
    );
}
