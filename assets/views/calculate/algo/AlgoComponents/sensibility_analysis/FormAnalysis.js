import React from 'react';
import Grid from "@material-ui/core/Grid";
import {makeStyles} from "@material-ui/core";
import Button from "@material-ui/core/Button";
import CriteriaSensibilityAction from "./CriteriaSensibilityAction";

const useStyles = makeStyles((theme) => ({
    root: {
        color: theme.palette.text.secondary,
        marginTop: theme.spacing(3),
        marginBottom: theme.spacing(3)
    },
    container: {
        padding: theme.spacing(2)
    }
}));


function FormAnalysis({criteria , setCriteria , weight, onSend}) {
    const classes = useStyles();

    return (
        <Grid container direction="row" justify="space-between" alignItems="center">
            <Grid item xs={12} className={classes.container}>
                {criteria.map((item , index) =>
                    <CriteriaSensibilityAction key={index} index={index} item={item}
                        weight={weight} setCriteria={setCriteria} criteria={criteria}/>)}
            </Grid>

            <Grid item xs={12} className={classes.container}>
                <Button disabled={weight !== 100} onClick={() => onSend()} fullWidth variant="contained" color="primary" type="submit">
                    VALIDATE
                </Button>
            </Grid>
        </Grid>
    );
}

export default FormAnalysis;