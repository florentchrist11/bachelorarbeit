import React from "react";
import {makeStyles, Typography} from "@material-ui/core";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles((theme) => ({
    root: {
        color: theme.palette.text.secondary,
        marginTop: theme.spacing(3),
        marginBottom: theme.spacing(3)
    },
    container: {
        minWidth: '100%'
    }
}));

export default function Title ({title}){
    const classes = useStyles();

    return (
        <Grid container
              direction="row"
              justify="flex-start"
              className={classes.root}
              alignItems="center" >
            <Grid item xs={12} >
                <Typography mt={3} mb={3} variant="h2" >
                    {title}
                </Typography>
            </Grid>
        </Grid>
    );
};

