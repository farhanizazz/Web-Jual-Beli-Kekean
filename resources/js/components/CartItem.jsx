import React from "react";
import {
    Box,
    Grid,
    Typography,
    Select,
    MenuItem,
    FormControl,
    InputLabel,
    TextField,
    IconButton,
} from "@mui/material";
import Stack from "@mui/material/Stack";
import DeleteIcon from "@mui/icons-material/Delete";
import { LoadingButton } from "@mui/lab";

export default function CartItem({
    name,
    price,
    img,
    qty,
    onQtyChange,
    value,
    onDeleteClick,
    sx
}) {
    const handleChange = (event) => {
        setSize(event.target.value);
    };

    return (
        <Box sx={sx} pt={2} id="CartItem" >
            <Grid container spacing={3}>
                <Grid item laptop={3}>
                    <Box
                        sx={{
                            width: { laptop: 90, desktop: 110, mobile: 80 },
                            height: { laptop: 90, desktop: 110 },
                            aspectRatio: 1 / 1,
                            objectFit: "cover",
                            borderRadius: 0.5,
                            ml: 2,
                        }}
                        component="img"
                        src={`../storage/${img}`}
                    />
                </Grid>
                <Grid item laptop={9}>
                    <Stack
                        maxWidth={510}
                        direction={"row"}
                        justifyContent={"space-between"}
                    >
                        <Box>
                            <Typography fontSize={{ laptop: 20, mobile: 18 }}>{name}</Typography>
                            <Typography color={"#7D7D7D"} fontSize={{ mobile: 12 }}>
                                {`Rp. ${Number(price).toLocaleString()}`}
                            </Typography>
                        </Box>
                        <Box display={{mobile: 'none', laptop: 'block'}}>
                            <IconButton onClick={onDeleteClick} color="primary">
                                <DeleteIcon />
                            </IconButton>
                        </Box>
                    </Stack>
                    <Stack alignItems={'center'} mt={{ desktop: 2 }} spacing={2} direction={'row'}>
                        <Typography fontSize={{ mobile: 12 }}>Size: {value}</Typography>
                        <Typography fontSize={{ mobile: 12 }} display={{ mobile: 'none' }}> Jumlah: </Typography>
                        <TextField
                            onChange={onQtyChange}
                            size="small"
                            id="jumlah-barang"
                            type="number"
                            InputLabelProps={{
                                shrink: true,
                            }}
                            InputProps={{ style: { fontSize: 12 } }}
                            sx={{
                                "& legend": { display: "none" },
                                "& fieldset": { top: 0 },
                                width: 75,
                                display: {mobile: 'none'}
                            }}
                            variant="outlined"
                            value={qty}
                        />
                    </Stack>
                </Grid>
            </Grid>
        </Box>
    );
}
