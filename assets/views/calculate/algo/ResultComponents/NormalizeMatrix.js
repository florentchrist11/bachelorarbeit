import React from 'react';
import {Grid, makeStyles} from "@material-ui/core";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import Tables from "../../components/Tables";
import Typography from "@material-ui/core/Typography";

NormalizeMatrix.propTypes = {};

const useStyles = makeStyles((theme) => ({
    root: {
        backgroundColor: theme.palette.background.dark,
        minWidth: '100%',
        marginTop: theme.spacing(3)
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

function titleCriteria(criteria) {
    let nameTitle = {
        name: 'Criteria'
    }
    return ([nameTitle, ...criteria])
}


function NormalizeMatrix({items, loading, criteria}) {
    const classes = useStyles()

    return (
        <Grid container
              className={classes.root}
              direction="row"
              justify="center"
              alignItems="center">
            <Grid item xs={12}>
                <Tables title={titleCriteria(criteria)} loading={loading}>
                    {items.map((item, index) => (
                            <TableRow key={index}>
                                <TableCell align="center">{item.name}</TableCell>
                                {criteria.map((criteria, critriaIndex) => (
                                    <TableCell key={critriaIndex} align="center">
                                        {item[criteria.name]}
                                    </TableCell>))
                                }
                            </TableRow>
                        )
                    )}
                </Tables>
            </Grid>
        </Grid>
    );
}

export default NormalizeMatrix;