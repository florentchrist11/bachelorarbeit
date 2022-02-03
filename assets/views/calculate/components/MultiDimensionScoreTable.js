import React from "react";
import {makeStyles} from "@material-ui/core";
import Table from "@material-ui/core/Table";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import TableBody from "@material-ui/core/TableBody";
import TableContainer from "@material-ui/core/TableContainer";
import GradeIcon from '@material-ui/icons/Grade';
import {green, red} from '@material-ui/core/colors';
import NotInterestedIcon from '@material-ui/icons/NotInterested';

const useStyles = makeStyles((theme) => ({
    root: {
        boxShadow: theme.shadows[4],
    },
    container: {
        minWidth: '100%'
    }
}));

export default function MultiDimensionScoreTable({criteria, result}) {
    const classes = useStyles();

    return (
        <TableContainer elevation={2} className={classes.root}>
            <Table aria-label="a dense table">
                <TableHead>
                    <TableRow>
                        <TableCell component="th" align="center">NAME</TableCell>
                        {criteria.map((data, index) =>
                            <TableCell component="th" key={index} align="center">{data.name} ( {data.weight} %
                                )</TableCell>
                        )}
                        <TableCell component="th" align="center">SCORE</TableCell>
                        <TableCell component="th" align="center">BADGE</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {result.map((row, index) => (
                        <TableRow key={index}>
                            <TableCell align="center">{row.name}</TableCell>
                            {criteria.map((rowCell, index) =>
                                (<TableCell key={index} align="center">{row[rowCell.name]}</TableCell>)
                            )}
                            <TableCell align="center">{row.score}</TableCell>
                            <TableCell align="center">
                                {index === 0 && <GradeIcon style={{color: green[500]}}/>}
                                {index === criteria.length && <NotInterestedIcon style={{color: red[500]}}/>}
                            </TableCell>
                        </TableRow>
                    ))
                    }
                </TableBody>
            </Table>
        </TableContainer>
    );
};

