import React from 'react';
import Container from "@material-ui/core/Container";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import {makeStyles} from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import {NavLink as RouterLink} from "react-router-dom";
import InputIcon from '@material-ui/icons/Input';

const useStyles = makeStyles((theme) => ({
    firstBloc: {
        width: '100%',
        height: '70px',
        borderRadius: theme.spacing(0.5),
        marginTop: theme.spacing(1),
        boxShadow: theme.shadows[4],
        alignItems: 'center'
    },
    secondBloc: {
        height: '40px' ,
        width: '40%',
        marginTop: theme.spacing(-2)
    },
    name: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.primary
    }
}));


export default function Banner() {
    const classes = useStyles();
    return (
        <Container maxWidth="lg">
            <Grid  direction="column"
                   justify="center" mt={1} container
                   alignItems="center">

                <Grid  item className={classes.firstBloc} >
                    <Typography variant="h4" className={classes.name}>
                        Start your fisrt decision matrice , to hold the best chioce
                    </Typography>
                </Grid>

                <Grid className={classes.secondBloc} item  >
                    <Button fullWidth startIcon={<InputIcon />}
                            to={"/start/"}
                            component={RouterLink}
                            variant="contained" color="secondary">
                        START
                    </Button>
                </Grid>
            </Grid>
        </Container>
    );
}