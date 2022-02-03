import React from "react";
import {makeStyles} from "@material-ui/core";
import Table from "@material-ui/core/Table";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import TableBody from "@material-ui/core/TableBody";
import TableContainer from "@material-ui/core/TableContainer";

const useStyles = makeStyles((theme) => ({
    root: {
        boxShadow: theme.shadows[4],
    },
    container: {
        minWidth: '100%'
    }
}));

export default function ItemsTable({title, children}) {
    const classes = useStyles();

    return (
        <TableContainer elevation={2} className={classes.root}>
            <Table aria-label="a dense table" size="small">
                <TableHead>
                    <TableRow>
                        {title.map((value) => <TableCell component="th" key={value} align="center">{value}</TableCell>)}
                    </TableRow>
                </TableHead>
                <TableBody>
                    {children}
                </TableBody>
            </Table>
        </TableContainer>
    );
};

