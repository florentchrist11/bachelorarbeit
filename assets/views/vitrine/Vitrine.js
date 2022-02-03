import React from "react";
import Banner from "./components/Banner";
import Brand from "./components/Brand";
import {makeStyles} from "@material-ui/core";
import Page from "../../components/Page";
import Container from "@material-ui/core/Container";
import BrandPreference from "./components/BrandPreference";

const useStyles = makeStyles((theme) => ({
    root: {
        backgroundColor: theme.palette.background.dark,
        minHeight: '60%'
    },
    container: {
        minWidth: '100%'
    }
}));

const Vitrine = () => {
    const classes = useStyles();

    return (
        <Page  className={classes.root}
            title="Home">
            <Container maxWidth="lg">
                <Brand/>
                <BrandPreference/>
            </Container>
        </Page>
    );
};

export default Vitrine;
