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

function Aggregation({items, aggregration, loading}) {
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
                    image="/static/mcdm_img/aggregation-info.PNG"
                    title="Banner"/>
            </Grid>
            <Grid item xs={7} className={classes.margin}>
                <Typography>
                    "Let a and b &#8364; to A let:
                    &#960;(a,b) is expressing with which degree a is preferred b to over all the criteria
                    and  &#960;(b,a) how is b preferred to a.In most of the cases there are criteria for
                    which is better than and criteria for which b is better than a consequently &#960;(a,b)
                    and &#960;(b,a) are usually positive. The following properties hold for all Let a and b &#8364; to A";
                </Typography>
            </Grid>
            <Grid item xs={4} className={classes.margin}>
                <CardMedia
                    component="img"
                    alt="brand"
                    style={{  weight: '100%' }}
                    image="/static/mcdm_img/positive-flow.PNG"
                    title="Banner"/>
                <CardMedia
                    component="img"
                    alt="brand"
                    style={{  weight: '100%', marginTop: '15px' }}
                    image="/static/mcdm_img/negative-flow.PNG"
                    title="Banner"/>
            </Grid>
            <Grid item xs={7} className={classes.margin}>
                <Typography>
                    "The positive outranking flow expresses how an alternative is outranking
                    all the others. It is its power, its outranking character. The higher &#966;+(a) the
                    better the alternative.<br/><br/>
                    The negative outranking flow expresses how an alternative is outranked by
                    all the others. It is its weakness, its outranked character. The lower  &#966;-(a) the
                    better the alternative".
                </Typography>
            </Grid>
            <Grid item xs={12}>
                <Tables title={[{name: 'Aggregation'}, ...items, {name: 'Leaving flow'}]} loading={loading}>
                    {items.map((item, k) => (
                        <TableRow key={k}>
                            <TableCell align="center">{item.name}</TableCell>
                            {items.map((it, i) =>
                                (<TableCell key={i} align="center">{aggregration[`${i}-${k}`]}</TableCell>)
                            )}
                            <TableCell align="center">{item.leavingFlow}</TableCell>
                        </TableRow>
                    ))}
                    <TableRow>
                        <TableCell align="center">Entering flow</TableCell>{items.map((it, i) =>
                        (<TableCell key={i} align="center">{it.enteringFlow}</TableCell>))}
                    </TableRow>
                </Tables>
            </Grid>
        </Grid>
    );
}

export default Aggregation;