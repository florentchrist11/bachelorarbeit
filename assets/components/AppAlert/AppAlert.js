import React from 'react';
import {createStyles, makeStyles} from '@material-ui/core/styles';
import Alert from '@material-ui/lab/Alert';
import IconButton from '@material-ui/core/IconButton';
import Collapse from '@material-ui/core/Collapse';
import CloseIcon from '@material-ui/icons/Close';

const useStyles = makeStyles((theme) =>
    createStyles({
        root: {
            minWidth: '100%',
            '& > * + *': {
                marginTop: theme.spacing(2),
            },
        },
    }),
);

export default function AppAlert({severity, message, isOpen = true, closable = null}) {
    const classes = useStyles();
    const [open, setOpen] = React.useState(isOpen);

    const onClose = () => {
        if (closable === null) {
            {
                open ? setOpen(false) : setOpen(true)
            }
        }
    }

    return (
        <div className={classes.root}>
            <Collapse in={open}>
                <Alert
                    severity={severity}
                    action={
                        <IconButton
                            aria-label="close"
                            color="inherit"
                            size="small"
                            onClick={() => onClose()}
                        >
                            <CloseIcon fontSize="inherit"/>
                        </IconButton>
                    }
                >
                    {message}
                </Alert>
            </Collapse>
        </div>
    );
}