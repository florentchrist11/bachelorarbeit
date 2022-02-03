import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import {makeStyles} from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import Button from "@material-ui/core/Button";

function Copyright() {
    return (
        <Typography variant="body2" color="textSecondary" align="center">
            {'Copyright © '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

const useStyles = makeStyles((theme) => ({
    footer: {
        borderTop: `1px solid ${theme.palette.divider}`,
        paddingTop: theme.spacing(6),
        paddingBottom: theme.spacing(6),
        position: 'relative',
        bottom: 0,
        width: '100% !important',
        height: '200px !important',
    },
}))


export default function Footer() {
    const classes = useStyles();

    return (
        <React.Fragment>
            <Container maxWidth="lg" component="footer" className={classes.footer}>
                <Grid container spacing={4} justify="space-evenly">
                    <Grid item xs={6} sm={3}>
                        <Typography variant="h6" color="textPrimary" gutterBottom>
                            Adress
                        </Typography>
                        <Typography variant="h6" color="textPrimary" gutterBottom>
                            Carl von Ossietzky Universität Oldenburg
                            Ammerländer Heerstraße 114-118 <br/>
                            26129 Oldenburg <br/>
                            Email:florentchrist1@gmail.com
                        </Typography>
                    </Grid>
                </Grid>

                <Box mt={5}>
                    <Copyright />
                </Box>
            </Container>
        </React.Fragment>
    );
}