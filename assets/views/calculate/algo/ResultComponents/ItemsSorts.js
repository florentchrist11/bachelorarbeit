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

function titleCriteria() {
    return ([{name: 'Name'}, {name: 'Entering Flow'}, {name: 'LeavingFlow'}, {name: 'Flow'}])
}


function ItemSorts({items, loading}) {
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
                    image="/static/mcdm_img/comparaison-promethee-2.PNG"
                    title="Banner"/>
            </Grid>
            <Grid item xs={7} className={classes.margin}>
                <Typography>
                    "ROMETHEE II consists of the complete ranking. It is often the
                    case that the decision-maker requests a complete ranking. The net outranking
                    flow can then be considered.
                    It is the balance between the positive and the negative outranking flows. The
                    higher the net flow, the better the alternative, so that:
                    When PROMETHEE II is considered, all the alternatives are comparable. No
                    incomparabilities remain, but the resulting information can be more disputable
                    because more information gets lost by considering the difference (5.16).
                    The following properties hold:
                    When is more outranking all the alternatives on all the criteria,
                    when it is more outranked.
                    In real-world applications, we recommend to both the analysts and the
                    decision-makers to consider both PROMETHEE I and PROMETHEE II. The
                    complete ranking is easy to use, but the analysis of the incomparabilities often
                    helps to finalise a proper decision.
                    As the net flow provides a complete ranking, it may be compared with
                    a utility function. One advantage of is that it is built on clear and simple
                    preference information (weights and preferences functions) and that it does rely
                    on comparative statements rather than absolute statements"
                </Typography>
            </Grid>
            <Grid item xs={12}>
                <Tables title={titleCriteria()} loading={loading}>
                    {items.map((item, index) => (
                            <TableRow key={index}>
                                <TableCell align="center">{item.name}</TableCell>
                                <TableCell align="center">{item.enteringFlow}</TableCell>
                                <TableCell align="center">{item.leavingFlow}</TableCell>
                                <TableCell align="center">{item.diffFlow}</TableCell>
                            </TableRow>
                        )
                    )}
                </Tables>
            </Grid>
        </Grid>
    );
}

export default ItemSorts;