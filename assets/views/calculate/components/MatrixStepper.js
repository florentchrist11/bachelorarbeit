import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import withStyles from "@material-ui/core/styles/withStyles";
import {StepConnector} from "@material-ui/core";
import clsx from "clsx";
import ClassIcon from '@material-ui/icons/Class';
import PostAddIcon from '@material-ui/icons/PostAdd';
import TransformIcon from '@material-ui/icons/Transform';

const ColorlibConnector = withStyles( (theme) => ({
    alternativeLabel: {
        top: 22,
    },
    active: {
        '& $line': {
            backgroundColor: theme.palette.secondary.main,
        },
    },
    completed: {
        '& $line': {
            backgroundColor: theme.palette.secondary.main,
        },
    },
    line: {
        height: 3,
        border: 0,
        backgroundColor: '#eaeaf0',
        borderRadius: 1,
    },
}))(StepConnector);

const useColorlibStepIconStyles = makeStyles( (theme) => ({
    root: {
        backgroundColor: '#ccc',
        zIndex: 1,
        color: '#fff',
        width: 50,
        height: 50,
        display: 'flex',
        borderRadius: '50%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    active: {
        backgroundColor: theme.palette.secondary.main,
        boxShadow: theme.shadows[23],
    },
    completed: {
        backgroundColor: theme.palette.secondary.main,
    },
}));

function ColorlibStepIcon(props) {
    const classes = useColorlibStepIconStyles();
    const { active, completed } = props;

    const icons = {
        1: <ClassIcon />,
        2: <PostAddIcon />,
        3: <TransformIcon />,
    };

    return (
        <div
            className={clsx(classes.root, {
                [classes.active]: active,
                [classes.completed]: completed,
            })}
        >
            {icons[String(props.icon)]}
        </div>
    );
}

ColorlibStepIcon.propTypes = {
    /**
     * Whether this step is active.
     */
    active: PropTypes.bool,
    /**
     * Mark the step as completed. Is passed to child components.
     */
    completed: PropTypes.bool,
    /**
     * The label displayed in the step icon.
     */
    icon: PropTypes.node,
};

const useStyles = makeStyles((theme) => ({
    root: {
        borderRadius: theme.spacing(0.5),
        backgroundColor: theme.palette.primary
    }
}));

export default function MatrixStepper({ steps , activeStep }) {
    const classes = useStyles();

    return (
        <Stepper alternativeLabel className={classes.root} elevation={3} activeStep={activeStep}
                 connector={<ColorlibConnector />}>
            {steps.map((label) => (
                <Step key={label}>
                    <StepLabel StepIconComponent={ColorlibStepIcon}>{label}</StepLabel>
                </Step>
            ))}
        </Stepper>
    );
}