import React from "react";
import {Grid, IconButton, makeStyles} from "@material-ui/core";
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import Typography from "@material-ui/core/Typography";
import FormDynamicItems from "../../AlgoComponents/FormDynamicItems";
import DeleteIcon from '@material-ui/icons/Delete';
import Tables from "../../../../../components/Tables/Tables";
import Toolbar from "@material-ui/core/Toolbar";
import AppAlert from "../../../../../components/AppAlert/AppAlert";

const useStyles = makeStyles((theme) => ({
    root: {
        minHeight: '100%',
    },
    container: {
        marginBottom: theme.spacing(2)
    },
    floatRight: {
        float: 'right'
    },
    title: {
        color: theme.palette.text.primary,
        textAlign: 'center',
        margin: theme.spacing(3)
    },
    rootToolbar: {
        paddingLeft: theme.spacing(2),
        paddingRight: theme.spacing(1)
    },
    titleToolbar: {
        flex: '1 1 100%'
    }
}));

const StepTwoTooblbar = ({title}) => {
    const classes = useStyles()

    return (
        <Toolbar className={classes.rootToolbar}>
            <Typography className={classes.titleToolbar} variant="h5" component="div">
                {title}
            </Typography>
        </Toolbar>
    );
};

export default function SecondStep({criteria, method, itemsCriteria}) {
    const classes = useStyles();

    function removeItemsCriteria(index) {
        const oldItemsCriteria = [...itemsCriteria]
        const id = oldItemsCriteria.indexOf(index)
        {
            id === -1 && oldItemsCriteria.splice(index, 1)
        }
        method(oldItemsCriteria)
    }

    return (
        <Grid container
              direction="row"
              justify="space-between"
              alignItems="flex-start">
            <Grid item xs={12} sm={4}>
                <Typography variant="h5" className={classes.title}>
                    Add you are item criteria
                </Typography>
                <FormDynamicItems criteria={criteria} method={method} itemsCriteria={itemsCriteria}/>
            </Grid>

            <Grid item xs={12} sm={8}>
                <Grid item xs={12} className={classes.container}>
                    <AppAlert severity={'info'}
                              message={'Two minimun item criteria'}/>
                </Grid>

                <Tables title={[{name: 'Name'}, ...criteria, {name: 'Remove'}]} toolbar={<StepTwoTooblbar
                    title={'List of item criteria'}/>}>
                    {itemsCriteria.map((row, index) => (
                        <TableRow key={index}>
                            <TableCell align="center">{row.name}</TableCell>
                            {criteria.map((rowCell, indexCriteria) =>
                                (<TableCell key={indexCriteria} align="center">{row[rowCell.name]}</TableCell>)
                            )}
                            <TableCell align="center">
                                <IconButton onClick={() => removeItemsCriteria(index)}>
                                    <DeleteIcon/>
                                </IconButton>
                            </TableCell>
                        </TableRow>
                    ))}
                </Tables>
            </Grid>
        </Grid>
    );
};

