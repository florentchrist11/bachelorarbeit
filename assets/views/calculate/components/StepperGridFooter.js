import React from "react";
import {makeStyles} from "@material-ui/core";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles((theme) => ({
    stepperFooter: {
        minHeight: '50px',
        width: '95%',
        float: 'right',
        margin: theme.spacing(1)
    }
}));

export default function StepperGridFooter ({children})  {
    const classes = useStyles();

    return (
        <Grid item xs={12} container direction="column" justify="center"
              alignItems="flex-end" className={classes.stepperFooter}>
            <Grid item xs={12} sm={4} container spacing={1}>
                {children}
            </Grid>
        </Grid>
    );
};
