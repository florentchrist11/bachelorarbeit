import React from 'react';
import Grid from "@material-ui/core/Grid";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Logo from "../../../components/Logo";
import {Link as RouterLink} from "react-router-dom";

const defaultProps = {
    bgcolor: '#999',
    mt: 10,
    color: '#0decec',
    style: { width: '100%', height: '500px' },
};

export default function Brand() {

    return (
            <Grid direction="row" style={{ width: '100%', minHeight: '400px' }}
                  justify="flex-start"  container  alignItems="center">
                <Grid item xs={12} sm={4}>
                    <CardMedia
                        component="img"
                        alt="brand"
                        style={{ height: '100%' }}
                        image="/static/images/start_brand.png"
                        title="Banner"/>
                </Grid>

                <Grid item xs={12} sm={8} style={{ textAlign: 'center', padding: '50px' }}>
                    <Typography variant="h1" component="h2" gutterBottom>
                        LEARN PROMETHEE METHODS
                    </Typography>
                    <Typography variant="body1" gutterBottom style={{ marginTop: '10px' }}>
                        Sometimes a decision between many alternatives (options, criteria)
                          can be complicated when many criteria
                         have to be considered.
                        The Promethee Procedure is a procedure designed to help in such situations. 
                        It consists in figuring out what is the best choice between
                        Alternatives is. For example, if a new vehicle is bought, then one has
                        the choice between different models and there are many different criteria (color, initial registration, fuel type, power, vehicle type, transmission and environmental friendliness) for the good choice. The multi-criteria decision support is essentially a method for decision support, with the help of which analyzes
                        becomes which options are better. The aim of this work is to provide the MCDA process Promethee as web-based learning software for students so that they can better understand how the process works.
                    </Typography>

                    <RouterLink to={"/start/"}>
                        <Button variant="outlined"
                                color="secondary" style={{ marginTop: '20px' }}>
                            GET STARTED
                        </Button>
                    </RouterLink>
                </Grid>
            </Grid>
    );
}
