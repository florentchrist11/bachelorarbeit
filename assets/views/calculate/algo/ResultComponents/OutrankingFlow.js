import React from 'react';
import {Grid, makeStyles} from "@material-ui/core";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import Tables from "../../components/Tables";
import Typography from "@material-ui/core/Typography";


const useStyles = makeStyles((theme) => ({
    root: {
        backgroundColor: theme.palette.background.dark,
        minWidth: '100%',
        marginTop: theme.spacing(3)
    },
    container: {
        minWidth: '100%',
        marginTop: theme.spacing(2)
    },
}));


function OutrankingFlow({itemsCriteria, loading, normalizeMatrix, nameColunm, criteria}) {
    const classes = useStyles()

    return (
        <Grid container
              className={classes.root}
              direction="row"
              justify="center"
              alignItems="center">
            <Grid item xs={12}>
                <Typography >
                    "In each case 1, 2 or 3 parameters have to be defined, their significance is
                    clear:<br/>
                    q is a threshold or indifference;
                    p is a threshold of strict preference;
                    s is an intermediate value between and
                    The indifference threshold is the largest deviation which is considered as
                    negligible by the decision maker, while the preference threshold is the smallest
                    deviation which is considered as sufficient to generate a full preference.
                    The identification of a generalised criterion is then limited to the selection
                    of the appropriate parameters. It is an easy task.<br/>
                    In case of type 5 a threshold of indifference and a threshold of strict preference have to be selected.
                    In case of a Gaussian criterion (type 6) the preference function remains
                    increasing for all deviations and has no discontinuities, neither in its shape, nor
                    in its derivatives. A parameter has to be selected, it defines the inflection point
                    of the preference function. We then recommend to determine first a and a
                    and to fix in between. If is close to the preferences will be reinforced for
                    small deviations, while close to they will be softened.
                    As soon as the evaluation table { '{Gj({.})}' } is given, and the weights Wj and
                    the generalised criteria { '{Gj({.})}, Pj(a,b)' } are defined for i = 1,2,3, ........ ,n; J = 1,2,3,.......,k
                    the PROMETHEE procedure can be applied".
                </Typography>
            </Grid>
            {criteria.map((cri, index) => (
                <Grid item xs={12} key={index} className={classes.container}>
                    <Tables title={[{name: cri['name']}, ...itemsCriteria,]} loading={loading}>
                        {itemsCriteria.map((items, k) => (
                            <TableRow key={k}>
                                <TableCell align="center">{items.name}</TableCell>
                                {itemsCriteria.map((iv, i) => (
                                        <TableCell align="center" key={i}>
                                            {k === i ? '-' : normalizeMatrix[cri['name']][`${i}-${k}`]}
                                        </TableCell>
                                    )
                                )}
                            </TableRow>
                        ))}
                    </Tables>
                </Grid>
            ))}
        </Grid>
    );
}

export default OutrankingFlow;