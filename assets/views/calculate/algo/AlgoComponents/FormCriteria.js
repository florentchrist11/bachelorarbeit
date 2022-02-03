import React, {useState} from "react";
import {Checkbox, makeStyles} from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import {Controller, useForm} from "react-hook-form";
import AppDialog from "../../../../components/AppDialog/AppDialog";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";
import AppAlert from "../../../../components/AppAlert/AppAlert";
import FormHelperText from "@material-ui/core/FormHelperText";

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

const defaultValues = {
    name: "",
    unit: "",
    weight: "",
    preferenceFunction: '',
    beneficial: false,
    s: '',
    q: '',
    p: ''
};

const perferenceInput = {
    0: {
        p: false,
        q: false,
        s: false
    },
    1: {
        p: false,
        q: true,
        s: false
    },
    2: {
        p: true,
        q: false,
        s: false
    },
    3: {
        p: true,
        q: true,
        s: false
    },
    4: {
        p: true,
        q: true,
        s: false
    },
    5: {
        p: false,
        q: false,
        s: true
    }
}

export default function FormCriteria({method, weight, setOpen, open}) {
    const classes = useStyles();
    const [pref, setPref] = useState(0)
    const {handleSubmit, control, reset, formState, getValues} = useForm({
        defaultValues: defaultValues,
        mode: "onChange"
    });

    const onPreferenceChange = (value) => {
        setPref(value)
        reset({
            name: getValues('name'),
            unit: getValues('unit'),
            weight: getValues('weight'),
            beneficial: getValues('beneficial'),
            preferenceFunction: value,
            s: '',
            q: '',
            p: ''
        })
    }

    const onWeightChange = (value, onChange) => {
        value === '' ? value = 0 : value = parseInt(value)
        onChange(value)
    }

    const onSubmit = data => {
        method(data);
        reset(defaultValues)
    }

    return (
        <AppDialog title={'Add criteria'} isOpen={open} setOpen={setOpen}>
            <form onSubmit={handleSubmit(onSubmit)}>
                <Grid container direction="row" justify="space-between" alignItems="center">
                    <Grid item xs={12} className={classes.container}>
                        <AppAlert severity={'info'}
                                  message={`Percent remend ${100 - weight} %`}/>
                    </Grid>

                    <Grid item xs={9} className={classes.container}>
                        <Controller as={<TextField label="Name of criteria *" fullWidth/>}
                                    name="name"
                                    rules={{required: true}}
                                    control={control}/>
                    </Grid>

                    <Grid item xs={3} className={classes.container}>
                        <FormControl component="fieldset">
                            <Controller
                                render={({value, onChange}) =>
                                    <Checkbox checked={value} onChange={(e) => onChange(e.target.checked)}/>}
                                name="beneficial"
                                type="checkbox"
                                control={control}
                            />
                            <FormHelperText>if is beneficial</FormHelperText>
                        </FormControl>
                    </Grid>

                    <Grid item xs={12} sm={6} className={classes.container}>
                        <Controller render={({value, onChange}) =>
                            <TextField label="weight in % *" value={value}
                                       onChange={(e) =>  onWeightChange(e.target.value, onChange)}
                                       fullWidth helperText="The max value is 100 - weight"/>}
                                    name="weight" type="number"
                                    rules={{required: true, min: 1, max: 100 - weight}}
                                    control={control}/>
                    </Grid>

                    <Grid item xs={12} sm={6} className={classes.container}>
                        <Controller as={<TextField label="unit *" fullWidth helperText="The max length is 5"/>}
                                    name="unit"
                                    rules={{required: true, maxLength: 5}}
                                    control={control}/>
                    </Grid>

                    <Grid item xs={12} className={classes.container}>
                        <FormControl fullWidth>
                            <InputLabel id="label">Preference function (*)</InputLabel>
                            <Controller
                                render={(props) => (
                                    <Select labelId="label" id="select"
                                            value={props.value}
                                            onChange={(e) => {
                                                props.onChange(e)
                                                onPreferenceChange(e.target.value)
                                            }}>
                                        <MenuItem value=""/>
                                        <MenuItem value={0}>Usual criterion</MenuItem>
                                        <MenuItem value={1}>U-shape criterion</MenuItem>
                                        <MenuItem value={2}>V-shape criterion</MenuItem>
                                        <MenuItem value={3}>Level criterion</MenuItem>
                                        <MenuItem value={4}>V-shape with indiference criterion</MenuItem>
                                        <MenuItem value={5}>Gaussian criterion</MenuItem>
                                    </Select>)}
                                name="preferenceFunction"
                                rules={{required: true}}
                                control={control}
                            />
                        </FormControl>
                    </Grid>

                    <Grid item className={classes.container}>
                        <Controller as={<TextField label="Preference *" disabled={!perferenceInput[pref].p} fullWidth/>}
                                    name="p" type="number"
                                    rules={{required: perferenceInput[pref].p}}
                                    control={control}/>
                    </Grid>

                    <Grid item xs className={classes.container}>
                        <Controller
                            as={<TextField label="Indifference *" disabled={!perferenceInput[pref].q} fullWidth/>}
                            name="q" type="number"
                            rules={{required: perferenceInput[pref].q}}
                            control={control}/>
                    </Grid>

                    <Grid item xs className={classes.container}>
                        <Controller as={<TextField label="Gaussien *" disabled={!perferenceInput[pref].s} fullWidth/>}
                                    name="s" type="number"
                                    rules={{required: perferenceInput[pref].s}}
                                    control={control}/>
                    </Grid>

                    <Grid item xs={12} className={classes.container}>
                        <Button disabled={weight === 100 || !formState.isValid} fullWidth
                                variant="contained" color="primary" type="submit">
                            ADD CRITERIA
                        </Button>
                    </Grid>

                </Grid>
            </form>
        </AppDialog>

    );
};

