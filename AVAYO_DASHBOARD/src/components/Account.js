import * as React from "react";

import Account from "./account/";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Fade from "@mui/material/Fade";

export default function Accounts(props) {
    const Item = styled(Paper)(({ theme }) => ({
        backgroundColor: "rgba(0, 0, 0, 0.3)",
        ...theme.typography.body2,
        padding: theme.spacing(1),
        
        textAlign: "center",
        color: "white",
        border: "solid thin #2ccbff",
        borderRadius: "10px",
        paddingTop: "1rem",
        paddingBottom: "1rem",
        boxShadow: "0px 0px 11px 2px #2CCBFF ",
    }));
    return (
        <>
            <Fade in={true} style={{ transitionDelay: "100ms" }}>
                <Box sx={{ flexGrow: 1, maxWidth: "1000px", mx: "auto" }}>
                    <Grid container spacing={3}>
                        <Grid item xs={12} sm={4}>
                            <Item>
                                <Typography color={'#2ccbff'} variant="h6" component="div" gutterBottom>
                                NaN
                                </Typography>
                                <Typography variant="h4" gutterBottom>
                                NaN
                                </Typography>
                                <Typography color={'#2ccbff'} variant="body1" gutterBottom>
                                NaN
                                </Typography>
                            </Item>
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <Item>
                                <Typography color={'#2ccbff'} variant="h6" component="div" gutterBottom>
                                NaN
                                </Typography>
                                <Typography variant="h4" gutterBottom>
                                NaN
                                </Typography>
                                <Typography color={'#2ccbff'} variant="body1" gutterBottom>
                                NaN
                                </Typography>
                            </Item>
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <Item>
                                <Typography color={'#2ccbff'} variant="h6" component="div" gutterBottom>
                                NaN
                                </Typography>
                                <Typography variant="h4" gutterBottom>
                                NaN
                                </Typography>
                                <Typography color={'#2ccbff'} variant="body1" gutterBottom>
                                NaN
                                </Typography>
                            </Item>
                        </Grid>
                        <Grid item xs={12} sm={12}>
                            <Item>
                                <Box className={"account_box"}>
                                    <Typography variant="h6">NaN</Typography>
                                    <Typography variant="h6">NaN</Typography>
                                </Box>
                                <Box className={"account_box"}>
                                    <Typography variant="h6">NaN</Typography>
                                    <Typography variant="h6">NaN</Typography>
                                </Box>
                                <Box className={"account_box"}>
                                    <Typography variant="h6">NaN</Typography>
                                    <Typography variant="h6">NaN</Typography>
                                </Box>
                                <Box className={"account_box"}>
                                    <Typography variant="h6">NaN</Typography>
                                    <Typography variant="h6">NaN</Typography>
                                </Box>
                                <Box className={"account_box"}>
                                    <Typography variant="h6">NaN</Typography>
                                    <Typography variant="h6">NaN</Typography>
                                </Box>
                                <Box className={"account_box"}>
                                    <Typography variant="h6">NaN</Typography>
                                    <Typography variant="h6">NaN</Typography>
                                </Box>
                                <Box className={"account_box"}>
                                    <Typography variant="h6">NaN</Typography>
                                    <Typography variant="h6">NaN</Typography>
                                </Box>
                            </Item>
                        </Grid>
                    </Grid>
                </Box>
            </Fade>
        </>
    );
}
