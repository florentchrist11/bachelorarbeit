import React, {useEffect, useState} from "react";
import {Grid, Button, makeStyles} from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import FormCriteria from "../../AlgoComponents/FormCriteria";
import BorderLinearProgress from "../../AlgoComponents/BorderLinearProgress";
import Tables from "../../../../../components/Tables/Tables";
import AppAlert from "../../../../../components/AppAlert/AppAlert";
import AddIcon from '@material-ui/icons/Add';
import Tooltip from "@material-ui/core/Tooltip";
import Toolbar from "@material-ui/core/Toolbar";
import FirstTablesRow from "./FirstTablesRow";

const useStyles = makeStyles((theme) => ({
    root: {
        paddingLeft: theme.spacing(2),
        paddingRight: theme.spacing(1)
    },
    title: {
        flex: '0.9 0.9 60%'
    },
    marginTop: {
        marginTop: theme.spacing(1)
    }
}));

const StepOneTooblbar = ({title, setOpen}) => {
    const classes = useStyles()

    return (
        <Toolbar className={classes.root}>
            <Typography className={classes.title} variant="h5" component="div">
                {title}
            </Typography>

            <Tooltip title="Add criteria">
                <Button variant="contained" color="secondary" size="small"
                        startIcon={<AddIcon/>} onClick={() => setOpen(s => !s)}>
                    Add criteria
                </Button>
            </Tooltip>
        </Toolbar>
    );
};

const tableTitle = [
    {
        name: 'Name'
    },
    {
        name: 'Weight'
    },
    {
        name: 'Unit'
    },
    {
        name: 'Preference function'
    },
    {
        name: '- P: Preference'
    },
    {
        name: '- Q: Indifference'
    },
    {
        name: '- S: Gaussien'
    },
    {
        name: 'Edit'
    },
    {
        name: 'Remove'
    },

];




export default function FirstStep({criteria, method, weight, setWeight}) {
    const [open, setOpen] = useState(false)
    const classes = useStyles()

    useEffect(() => {
        weight === 100 && setOpen(false)
    }, [weight])

    function addCriteria(data) {
        method([...criteria, data])
    }

    function removeCriteria(index, data) {
        const oldCriteria = [...criteria]
        const id = oldCriteria.indexOf(index)
        id === -1 && oldCriteria.splice(index, 1)
        method(oldCriteria)
    }

    return (
        <Grid container
              direction="row"
              justify="space-between"
              alignItems="center">

            <Grid item xs={12} className={classes.marginTop}>
                <AppAlert severity={'info'}
                          message={'This bar show the progression of weight criteria in % ' +
                          'and you can go to the next step if weight = 100 %'}/>
            </Grid>

            <Grid item xs={12} className={classes.marginTop}>
                <BorderLinearProgress value={parseFloat(weight)}/>
            </Grid>

            <Grid item xs={12} className={classes.marginTop}>
                <Tables title={tableTitle} loading={false}
                        toolbar={<StepOneTooblbar setOpen={setOpen} title={'Criteria'}/>}>
                    {criteria.map((row, index) => (
                        <FirstTablesRow weight={weight} criteria={criteria} setCriteria={method} key={index}
                                        index={index} row={row} removeCriteria={removeCriteria}/>
                    ))}
                </Tables>
            </Grid>
            <FormCriteria method={addCriteria} weight={weight} setOpen={setOpen} open={open}/>
        </Grid>
    );
};

