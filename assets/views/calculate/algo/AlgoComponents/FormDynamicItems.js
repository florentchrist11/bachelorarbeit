import React from "react";
import {makeStyles} from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import {useForm} from "react-hook-form";
import InputAdornment from "@material-ui/core/InputAdornment";

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


export default function FormDynamicItems({criteria, method, itemsCriteria}) {
    const classes = useStyles();
    const {register, handleSubmit, formState, reset} = useForm({mode: "onChange"});

    const onSubmit = (data) => {
        method([...itemsCriteria, data])
        reset()
    }
    return (
        <form noValidate autoComplete="off" onSubmit={handleSubmit(onSubmit)}>
            <Grid container>
                <Grid item mt={2} xs={12} sm={12} container direction="row"
                      justify="space-between" alignItems="center">
                    <Grid item sm={12} className={classes.container}>
                        <TextField label="Name of item (*)" fullWidth
                                   inputRef={register({required: true})}
                                   name="name"/>
                    </Grid>
                    {criteria.map((criteria, index) => (
                        <Grid item xs={12} sm={6} key={index} className={classes.container}>
                            <TextField
                                label={`${criteria.name} (*)`}
                                inputRef={register({required: true})}
                                type="number"
                                fullWidth
                                name={criteria.name}

                                InputProps={{
                                    endAdornment: <InputAdornment position="end">{criteria.unit}</InputAdornment>,
                                }}
                            />
                        </Grid>
                    ))}
                </Grid>

                <Grid item mt={2} xs={12} className={classes.container}>
                    <Button fullWidth disabled={!formState.isValid}
                            variant="contained" type="submit">
                        ADD ITEM CRITERIA
                    </Button>
                </Grid>

            </Grid>

        </form>
    );
};

