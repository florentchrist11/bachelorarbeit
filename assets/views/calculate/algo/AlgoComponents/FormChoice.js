import React from "react";
import {makeStyles} from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import {Controller, useForm} from "react-hook-form";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Radio from "@material-ui/core/Radio";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
    root: {
        color: theme.palette.text.secondary,
        marginTop: theme.spacing(3),
        marginBottom: theme.spacing(3)
    },
    container: {
        minWidth: '100%',
        margin: theme.spacing(2)
    },
    title: {
        color: theme.palette.text.primary,
        textAlign: 'center',
        margin: theme.spacing(3)
    }
}));

const defaultValues = {
    method: ""
};

export default function FormChoice({method, choice}) {

    const classes = useStyles();
    const {handleSubmit, control, reset, formState} = useForm({defaultValues: defaultValues, mode: "onChange"});

    const onSubmit = data => {
        method(parseInt(data.method))
        reset(defaultValues)
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <Grid container
                  direction="column"
                  justify="center"
                  alignItems="center">
                <Grid item mt={2} xs={11} sm={12}>
                    <Typography variant="h4" className={classes.title}>
                        Choose the method that you want to use.
                    </Typography>

                    <Controller
                        as={
                            <RadioGroup aria-label="gender">
                                <FormControlLabel
                                    value="0"
                                    control={<Radio/>}
                                    label="Weighted Sum Model (WSM)"
                                />
                                <FormControlLabel
                                    value="1"
                                    control={<Radio/>}
                                    label="Weighted Product Model (WPM)"
                                />
                            </RadioGroup>
                        }
                        rules={{required: true}}
                        className={classes.container}
                        name="method"
                        control={control}
                    />

                    <Button fullWidth disabled={!formState.isValid} className={classes.container}
                            variant="contained" type="submit">
                        ADD YOUR METHOD
                    </Button>
                </Grid>


            </Grid>
        </form>
    );
};

