import React from 'react';
import {Grid, makeStyles} from "@material-ui/core";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import Tables from "../../components/Tables";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";

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
    margin: {
        margin: theme.spacing(1)
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


function Conclusion({items, loading}) {
    const classes = useStyles()

    return (
        <Grid container
              className={classes.root}
              direction="row"
              justify="center"
              alignItems="center">
            <Grid item xs={4} className={classes.margin}>
                <CardMedia
                    component="img"
                    alt="brand"
                    style={{  weight: '100%' }}
                    image="/static/mcdm_img/comparaison-promethee-1.png"
                    title="Banner"/>
            </Grid>
            <Grid item xs={7} className={classes.margin}>
                <Typography>
                    "The PROMETHEE I partial ranking is obtained from the positive
                    and the negative outranking flows. Both flows do not usually induce the same
                    rankings. PROMETHEE I is their intersection.
                    where respectively stand for preference, indifference and incomparability.
                    When a higher power of is associated to a lower weakness of with
                    regard to The information of both outranking flows is consistent and may
                    therefore be considered as sure.
                    When both positive and negative flows are equal.
                    When a higher power of one alternative is associated to a lower weakness of the other. This often happens when is good on a set of criteria on which
                    is weak and reversely is good on some other criteria on which is weak. In
                    174 MULTIPLE CRITERIA DECISION ANALYSIS
                    such a case the information provided by both flows is not consistent. It seems
                    then reasonable to be careful and to consider both alternatives as incomparable.
                    The PROMETHEE I ranking is prudent: it will not decide which action is best
                    in such cases. It is up to the decision-maker to take his responsibility".
                </Typography>
            </Grid>
            <Grid item xs={12}>
                <Tables title={[{name: 'Conclusion'}]} loading={loading}>
                    {items.map((item, index) => (
                        <TableRow key={index}>
                            <TableCell align="center">{item}</TableCell>
                        </TableRow>)
                    )}
                </Tables>
            </Grid>
        </Grid>
    );
}

export default Conclusion;