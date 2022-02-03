import React from "react";
import {Grid, makeStyles} from "@material-ui/core";
import FormChoice from "../../AlgoComponents/FormChoice";

const useStyles = makeStyles((theme) => ({
    root: {
        backgroundColor: theme.palette.background.dark,
        minHeight: '100%',
    },
    container: {
        minWidth: '100%',
        margin: theme.spacing(2)
    },
    floatRight: {
        float: 'right'
    },
    title: {
        color: theme.palette.text.primary,
        textAlign: 'center',
        margin: theme.spacing(3)
    }
}));

export default function ThirdStep({method, choice}) {
    const classes = useStyles();

    return (
        <Grid container
              direction="row"
              justify="center"
              alignItems="center">
            <Grid item xs={12}>
                <FormChoice method={method} choice={choice}/>
            </Grid>
        </Grid>
    );
};

