import React, {useEffect, useState} from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Page from "../../components/Page";
import {Container} from "@material-ui/core";
import MatrixStepper from "./components/MatrixStepper";
import Title from "./components/Title";
import Grid from "@material-ui/core/Grid";
import getStepContent from "./components/StepContent";
import StepperGridFooter from "./components/StepperGridFooter";
import FinalStep from "./algo/StepComponents/FinalStep/FinalStep";

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
    },
    button: {
        marginRight: theme.spacing(1),
    },
    stepperRoot: {
        minWidth: '100%',
        marginTop: theme.spacing(2),
        marginBottom: theme.spacing(2),
    },
    stepperBody: {
        minHeight: '400px',
        width: '100%',
        borderRadius: theme.spacing(0.5),
        boxShadow: theme.shadows[4],
    },
    stepperContent: {
        minHeight: '350px',
        width: '95%',
        margin: theme.spacing(1)
    },
    instructions: {
        marginTop: theme.spacing(1),
        marginBottom: theme.spacing(1),
    }
}));


export default function Calculate() {
    const classes = useStyles();
    const [activeStep, setActiveStep] = React.useState(0);
    const [choiceMethod, setChoiceMethod] = React.useState(null);
    const [criteria, setCriteria] = React.useState([]);
    const [itemsCriteria, setItemsCriteria] = React.useState([]);
    const [weight, setWeight] = useState(0);

    useEffect(() => {
        let defaultWeight = 0
        criteria.map((item) => {
            defaultWeight += item.weight
        })
        setWeight(defaultWeight)
    } , [criteria])

    const steps = ['Add your matrix criteria', 'Add items to compare'];
    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };
    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleReset = () => {
        setActiveStep(0);
        setCriteria([])
        setItemsCriteria([])
        setChoiceMethod(0)
        setWeight(0)
        setChoiceMethod(0)
    };

    return (
        <Page className={classes.root}
              title="Start matrix">
            <Container className={classes.root} maxWidth="lg">

                <Title title={'BUILD YOUR MCDM MATRIX IN TWO STEPS'}/>
                <MatrixStepper steps={steps} activeStep={activeStep}/>

                <Grid direction="row" justify="flex-start"
                     container className={classes.stepperRoot}
                     alignItems="center">

                    <Grid item xs={12} container
                          direction="column"
                          justify="flex-end"
                          alignItems="center" className={classes.stepperBody}>

                    { activeStep === steps.length ?
                        (<>
                            <Grid item xs={12} className={classes.stepperContent}>
                                <FinalStep setCriteria={setCriteria}  weight={weight} setWeight={setWeight}
                                           setItemsCriteria={setItemsCriteria}
                                           criteria={criteria} itemsCriteria={itemsCriteria} choice={choiceMethod}/>
                            </Grid>
                            <StepperGridFooter>
                                <Grid item xs={12}>
                                    <Button onClick={handleReset} fullWidth
                                            variant="contained"
                                            className={classes.button}>
                                        Reset
                                    </Button>
                                </Grid>
                            </StepperGridFooter>
                    </>) :
                    (<>
                        <Grid item xs={12} className={classes.stepperContent}>
                            {getStepContent(activeStep, criteria, itemsCriteria,
                                setCriteria, setItemsCriteria, choiceMethod, setChoiceMethod, weight, setWeight)}
                        </Grid>

                    <StepperGridFooter>
                        <Grid item xs={6}>
                            <Button disabled={activeStep === 0} onClick={handleBack}
                                    fullWidth className={classes.button}>
                                Back
                            </Button>
                        </Grid>
                        <Grid item xs={6}>
                            <Button disabled={criteria.length < 2 ||
                            activeStep === 0 && weight < 100 ||
                            activeStep === 1 && itemsCriteria.length < 2 ||
                            activeStep === 2 && choiceMethod === null}
                                    fullWidth variant="contained" color="secondary"
                                    onClick={handleNext}
                                    className={classes.button}>
                                {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
                            </Button>
                        </Grid>
                    </StepperGridFooter>
                    </>)}
                </Grid>
            </Grid>
            </Container>
        </Page>
    );
}