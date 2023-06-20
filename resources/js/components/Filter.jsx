import React from "react";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Typography from "@mui/material/Typography";
import {
    TextField,
    Box,
    Accordion,
    AccordionSummary,
    AccordionDetails,
    RadioGroup,
    Radio,
} from "@mui/material";
import { styled } from "@mui/system";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useTranslation } from "react-i18next";
import { useCustomization } from "../container/ProductCustomize/Customization";

export default function Filter() {
    const { filter, setFilter } = useCustomization();

    const checkboxColor = {
        color: "primary.main",
        "&.Mui-checked": {
            color: "primary",
        },
    };

    const width = "30px";

    const AccordionStyle = {
        boxShadow: "none",
        backgroundColor: "#00000000",
        "&:before": {
            display: "none",
        },
    };

    const handleChange = (event) => {
        setFilter(event.target.name);
    };

    const { t } = useTranslation();

    return (
        <Box>
            {/* <Typography sx={{mb:1}} fontWeight="bolder ">Price</Typography>
            <TextField sx={{
                '& legend': {display: 'none'}, 
                '& fieldset': {top: 0},
                width: {width},
                mr: 2,
            }} variant="outlined" InputProps={{
                startAdornment: <InputAdornment position="start">Rp</InputAdornment>
            }}></TextField>
            <TextField size="small" sx={{
                '& legend': {display: 'none'}, 
                '& fieldset': {top: 0},
                width: {width}
            }} variant="outlined" InputProps={{
                startAdornment: <InputAdornment position="start">Rp</InputAdornment>
            }}></TextField>
            <hr></hr> */}
            <Accordion
                elevation={0}
                sx={AccordionStyle}
                disableGutters={true}
                defaultExpanded={false}
            >
                <AccordionSummary
                    sx={{
                        pl: "0px",
                    }}
                    expandIcon={<ExpandMoreIcon />}
                >
                    <Typography
                        fontSize={{ laptop: 15, desktop: 17 }}
                        className="fw-bolder"
                    >
                        {t("sideMotif")}
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <RadioGroup defaultValue={"semua"}>
                        <FormControlLabel
                            control={
                                <Radio
                                    sx={checkboxColor}
                                    onChange={handleChange}
                                    name="semua"
                                    value="semua"
                                />
                            }
                            label={
                                <Typography
                                    fontSize={{ laptop: 12, desktop: 17 }}
                                >
                                    Semua
                                </Typography>
                            }
                        />
                        <FormControlLabel
                            control={
                                <Radio
                                    sx={checkboxColor}
                                    onChange={handleChange}
                                    name="manis"
                                    value="manis"
                                />
                            }
                            label={
                                <Typography
                                    fontSize={{ laptop: 12, desktop: 17 }}
                                >
                                    Manis
                                </Typography>
                            }
                        />
                        <FormControlLabel
                            control={
                                <Radio
                                    sx={checkboxColor}
                                    onChange={handleChange}
                                    name="chakra"
                                    value="chakra"
                                />
                            }
                            label={
                                <Typography
                                    fontSize={{ laptop: 12, desktop: 17 }}
                                >
                                    Chakra
                                </Typography>
                            }
                        />
                        <FormControlLabel
                            control={
                                <Radio
                                    sx={checkboxColor}
                                    onChange={handleChange}
                                    name="bhirawa"
                                    value="bhirawa"
                                />
                            }
                            label={
                                <Typography
                                    fontSize={{ laptop: 12, desktop: 17 }}
                                >
                                    Bhirawa
                                </Typography>
                            }
                        />
                        {/* <FormControlLabel
                            control={<Checkbox sx={checkboxColor} />}
                            label={<Typography fontSize={{laptop: 12, desktop: 17}}>Mindhi</Typography>}
                        />
                        <FormControlLabel
                            control={<Checkbox sx={checkboxColor} />}
                            label={<Typography fontSize={{laptop: 12, desktop: 17}}>Duwo</Typography>}
                        />
                        <FormControlLabel
                            control={<Checkbox sx={checkboxColor} />}
                            label={<Typography fontSize={{laptop: 12, desktop: 17}}>Chentil</Typography>}
                        /> */}
                    </RadioGroup>
                </AccordionDetails>
            </Accordion>
            <hr></hr>
            {/* <Accordion
                sx={AccordionStyle}
                disableGutters={true}
                defaultExpanded={false}
            >
                <AccordionSummary
                    sx={{
                        pl: "0px",
                    }}
                    expandIcon={<ExpandMoreIcon />}
                >
                    <Typography fontSize={{laptop: 15, desktop: 17}} className="fw-bolder">{t('sideUkuran')}</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <FormGroup>
                            <FormControlLabel
                                control={<Checkbox sx={checkboxColor} />}
                                label={<Typography fontSize={{laptop: 12, desktop: 17}}>S</Typography>}
                            />
                            <FormControlLabel
                                control={<Checkbox sx={checkboxColor} />}
                                label={<Typography fontSize={{laptop: 12, desktop: 17}}>M</Typography>}
                            />
                            <FormControlLabel
                                control={<Checkbox sx={checkboxColor} />}
                                label={<Typography fontSize={{laptop: 12, desktop: 17}}>ML</Typography>}
                            />
                            <FormControlLabel
                                control={<Checkbox sx={checkboxColor} />}
                                label={<Typography fontSize={{laptop: 12, desktop: 17}}>XL</Typography>}
                            />
                            <FormControlLabel
                                control={<Checkbox sx={checkboxColor} />}
                                label={<Typography fontSize={{laptop: 12, desktop: 17}}>XXL</Typography>}
                            />
                    </FormGroup>
                </AccordionDetails>
            </Accordion>
            <hr></hr> */}
        </Box>
    );
}
