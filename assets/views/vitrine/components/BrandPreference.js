import React from 'react';
import Grid from '@material-ui/core/Grid';
import {makeStyles} from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import Accordion from "@material-ui/core/Accordion";
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import CardMedia from "@material-ui/core/CardMedia";

const useStyles = makeStyles((theme) => ({
    root: {
        backgroundColor: theme.palette.background.default
    },
    imageBloc: {
        width: '100%',
        height: '100%',
        margin: theme.spacing(3),
    },
    image: {
        width: '100%',
        height: '100%',
        borderRadius: theme.spacing(0.5),
        boxShadow: theme.shadows[2],
    },
    title: {
        color: theme.palette.text.primary,
        textAlign: 'center',
        margin: theme.spacing(3)
    },
    desc: {
        color: theme.palette.text.primary,
        marginBottom: theme.spacing(1),
        marginTop: theme.spacing(1)
    },
    startButton: {
        textAlign: 'center',
        margin: 'auto'
    },
    button: {
        marginTop: theme.spacing(4)
    },
    heading: {
        fontSize: theme.typography.pxToRem(15),
        fontWeight: theme.typography.fontWeightRegular,
    },
}));

export default function BrandPreference() {
    const classes = useStyles();

    return (
        <Grid direction="row" justify="space-between"
              style={{ marginTop: '20px',marginBottom: '50px' }} container  alignItems="center">
            <Grid item xs={5}>
                <Grid item xs={12}>
                    <Typography variant="h3" gutterBottom>
                        Preference function
                    </Typography>
                </Grid>
                <Grid item xs={12}>
                    <Typography variant="body1" gutterBottom style={{ marginTop: '10px' }}>
                        "A specific preference function is associated separately to each criterion in a multicriteria
                        decision problem. We thus hereafter consider the case of a single criterion.<br/>
                        The following figure shows the shape of a typical preference function (type V – linear
                        preference function).<br/>
                        The horizontal axis corresponds to the value of the difference between two actions on one
                        single criterion. It is important to remember that it is the difference between two values that
                        matters here and not absolute values: preference functions are used to compare two
                        actions.<br/>
                        The vertical axis corresponds to a degree of preference between two actions: a value of 0
                        means no preference at all, while a value of 1 means absolute undisputable preference for
                        the better action".

                    </Typography>
                </Grid>
            </Grid>
            <Grid item xs={6}>
                <Accordion>
                    <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1a-content" id="panel-0">
                        <Typography className={classes.heading}>Type I – Usual preference function</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Grid direction="row" justify="space-between" container  alignItems="center">
                            <Grid item xs={12} sm={6}>
                                <CardMedia
                                    component="img"
                                    alt="brand"
                                    style={{ weight: '100%', margin: '20px' }}
                                    image="/static/mcdm_img/usual-formule.png"
                                    title="Banner"/>
                                <CardMedia
                                    component="img"
                                    alt="brand"
                                    style={{  weight: '100%', margin: '20px' }}
                                    image="/static/mcdm_img/usual-graph.png"
                                    title="Banner"/>
                            </Grid>
                            <Grid item xs={12} sm={5}>
                                <Typography variant="body1" gutterBottom style={{ marginTop: '10px' }}>
                                    "This is the simplest of all preference functions. It has no thresholds and returns a binary
                                    result:<br/>
                                    • Two actions with equal values (difference = 0) are indifferent (preference degree =
                                    0).<br/>
                                    • Two actions with different values (difference > 0) generate a full preference
                                    (preference degree = 1) even if the difference is very small.<br/><br/>
                                    This type of preference function should be used very carefully as it doesn’t distinguish
                                    between very small differences, that could be negligible, and much larger ones".
                                </Typography>
                            </Grid>
                        </Grid>
                    </AccordionDetails>
                </Accordion>
                <Accordion>
                    <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1a-content" id="panel-0">
                        <Typography className={classes.heading}>Type II – U-shape preference function</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Grid direction="row" justify="space-between" container  alignItems="center">
                            <Grid item xs={12} sm={6}>
                                <CardMedia
                                    component="img"
                                    alt="brand"
                                    style={{  weight: '100%', margin: '20px' }}
                                    image="/static/mcdm_img/usharp-formule.png"
                                    title="Banner"/>
                                <CardMedia
                                    component="img"
                                    alt="brand"
                                    style={{  weight: '100%', margin: '20px' }}
                                    image="/static/mcdm_img/usharp-graph.png"
                                    title="Banner"/>
                            </Grid>
                            <Grid item xs={12} sm={5}>
                                <Typography variant="body1" gutterBottom style={{ marginTop: '10px' }}>
                                    "The U-shape preference function introduces the notion of indifference threshold (Q) but is
                                    still binary:<br/>
                                    • Two actions with close values {`(difference <= Q) are indifferent (preference degree =
                                    0).`}<br/>
                                    • Two actions with more different values (difference > Q) generate a full preference
                                    (preference degree = 1).<br/><br/>
                                    Its range of use is quite limited in practice".
                                </Typography>
                            </Grid>
                        </Grid>
                    </AccordionDetails>
                </Accordion>
                <Accordion>
                    <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1a-content" id="panel-0">
                        <Typography className={classes.heading}>Type III – V-shape preference function
                        </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Grid direction="row" justify="space-between" container  alignItems="center">
                            <Grid item xs={12} sm={6}>
                                <CardMedia
                                    component="img"
                                    alt="brand"
                                    style={{  weight: '100%', margin: '20px' }}
                                    image="/static/mcdm_img/vsharp-formule.png"
                                    title="Banner"/>
                                <CardMedia
                                    component="img"
                                    alt="brand"
                                    style={{  weight: '100%', margin: '20px' }}
                                    image="/static/mcdm_img/vsharp-graph.png"
                                    title="Banner"/>
                            </Grid>
                            <Grid item xs={12} sm={5}>
                                <Typography variant="body1" gutterBottom style={{ marginTop: '10px' }}>
                                    "The V-shape preference function introduces the notion of preference threshold (P) and of
                                        variable preference degree:<br/>
                                        • Two actions with equal values (difference = 0) are indifferent (preference degree =
                                        0).<br/>
                                        • Two actions with quite different values (difference > P) generate a full preference
                                        (preference degree = 1).<br/>
                                        • Two actions with smaller different values {`(difference <= P) generate a preference
                                        degree proportional to the difference (preference degree = difference / P).`}"
                                </Typography>
                            </Grid>
                        </Grid>
                    </AccordionDetails>
                </Accordion>
                <Accordion>
                    <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1a-content" id="panel-0">
                        <Typography className={classes.heading}>Type IV – Level preference function</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Grid direction="row" justify="space-between" container  alignItems="center">
                            <Grid item xs={12} sm={6}>
                                <CardMedia
                                    component="img"
                                    alt="brand"
                                    style={{  weight: '100%', margin: '20px' }}
                                    image="/static/mcdm_img/level-formule.png"
                                    title="Banner"/>
                                <CardMedia
                                    component="img"
                                    alt="brand"
                                    style={{  weight: '100%', margin: '20px' }}
                                    image="/static/mcdm_img/level-graph.png"
                                    title="Banner"/>
                            </Grid>
                            <Grid item xs={12} sm={5}>
                                <Typography variant="body1" gutterBottom style={{ marginTop: '10px' }}>
                                    "The Level preference function includes two thresholds: Q and P. According to the definition
                                    of theses thresholds, three distinct cases appear:<br/>
                                    • Two actions with very close values {`(difference <= Q) are indifferent (preference degree = 0).`}<br/>
                                    • Two actions with quite different values {`(difference > P) generate a full preference (preference degree = 1).`}<br/>
                                    • In between, two actions with different values {`(Q < difference <= P) generate a weak\n' +
                                    'preference degree (preference degree = 1/2).`}"
                                </Typography>
                            </Grid>
                        </Grid>
                    </AccordionDetails>
                </Accordion>
                <Accordion>
                    <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1a-content" id="panel-0">
                        <Typography className={classes.heading}>Type V – Linear preference function</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Grid direction="row" justify="space-between" container  alignItems="center">
                            <Grid item xs={12} sm={6}>
                                <CardMedia
                                    component="img"
                                    alt="brand"
                                    style={{  weight: '100%', margin: '20px' }}
                                    image="/static/mcdm_img/linear-formule.png"
                                    title="Banner"/>
                                <CardMedia
                                    component="img"
                                    alt="brand"
                                    style={{  weight: '100%', margin: '20px' }}
                                    image="/static/mcdm_img/linear-graph.png"
                                    title="Banner"/>
                            </Grid>
                            <Grid item xs={12} sm={5}>
                                <Typography variant="body1" gutterBottom style={{ marginTop: '10px' }}>
                                    "The Linear preference function also includes two thresholds: Q and P. The main difference
                                    with Type IV (Level) preference function is that the degree of preference is linearly
                                    increasing between the Q and P thresholds:<br/>
                                    • Two actions with very close values {`(difference <= Q) are indifferent (preference degree = 0).`}
                                    • Two actions with quite different values (difference > P) generate a full preference
                                    (preference degree = 1).<br/><br/>
                                    • In between, two actions with different values {`(Q < difference < P) generate a
                                    preference degree that is linearly increasing from 0 to 1 as the difference is
                                    increasing from Q to P (preference degree = (difference - Q) / (P - Q) )`}".
                                </Typography>
                            </Grid>
                        </Grid>
                    </AccordionDetails>
                </Accordion>
                <Accordion>
                    <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1a-content" id="panel-0">
                        <Typography className={classes.heading}>Type VI – Gaussian preference function</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Grid direction="row" justify="space-between" container  alignItems="center">
                            <Grid item xs={12} sm={6}>
                                <CardMedia
                                    component="img"
                                    alt="brand"
                                    style={{  weight: '100%', margin: '20px' }}
                                    image="/static/mcdm_img/gauss-formule.png"
                                    title="Banner"/>
                                <CardMedia
                                    component="img"
                                    alt="brand"
                                    style={{  weight: '100%', margin: '20px' }}
                                    image="/static/mcdm_img/gauss-graph.png"
                                    title="Banner"/>
                            </Grid>
                            <Grid item xs={12} sm={5}>
                                <Typography variant="body1" gutterBottom style={{ marginTop: '10px' }}>
                                    "{'The Gaussian preference function has been designed as an alternative to the Linear (type V)\n' +
                                    'preference function. It has a smoother shape without flat indifference and full preference\n' +
                                    'areas. At the same time, it doesn’t have any indifference or preference thresholds. Its shape\n' +
                                    'is determined by another parameter: the S Gaussian threshold which defines the position of\n' +
                                    'the inflexion point of the preference function curve. Practically, the value of the S threshold\n' +
                                    'should be in between the values of the Q and P thresholds, as it corresponds to a preference\n' +
                                    'degree of 0.39). It is however more difficult to define than the Q and P thresholds.\n'}"
                                </Typography>
                            </Grid>
                        </Grid>
                    </AccordionDetails>
                </Accordion>
            </Grid>
        </Grid>
    );
}