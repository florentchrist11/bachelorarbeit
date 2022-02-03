import React from "react";
import {withStyles} from "@material-ui/core/styles";
import LinearProgress from "@material-ui/core/LinearProgress";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";

const CustomLinearProgress = withStyles((theme) => ({
    root: {
        height: 10,
        borderRadius: 5,
        width: '100%'
    },
    colorPrimary: {
        backgroundColor:
            theme.palette.grey[theme.palette.type === "light" ? 200 : 700]
    },
    bar: {
        borderRadius: 5,
        backgroundColor: theme.palette.secondary.main
    }
}))(LinearProgress);

export default function BorderLinearProgress({value}) {
    return (<Box display="flex" alignItems="center">
        {value === null ? (
            <Box width="100%">
                <CustomLinearProgress/>
            </Box>
        ) : (
            <>
                <Box width="95%" mr={1}>
                    <CustomLinearProgress variant="determinate" value={value}/>
                </Box>
                <Box minWidth="5%" style={{ textAlign: 'right'}}>
                    <Typography variant="body2" color="textSecondary">{value} %</Typography>
                </Box>
            </>
        )}

    </Box>);
}

BorderLinearProgress.defaultProps = {
    value: null
};
