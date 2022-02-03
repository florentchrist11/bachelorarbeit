import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Skeleton from '@material-ui/lab/Skeleton';

const useStyles = makeStyles({
    table: {
        minWidth: '100%',
    },
});

export default function Tables({toolbar = '', title, loading, children, size = 'medium'}) {
    const classes = useStyles();

    return (
        <TableContainer component={Paper}>
            {toolbar}
            <Table className={classes.table} size={size}>
                <TableHead>
                    <TableRow>
                        {loading ?
                            <TableCell colSpan={title.length}>
                                <Skeleton variant="rect" width="100%" height={30}/>
                            </TableCell>
                            : (<>
                                    {title.map((item, index) => (
                                        <TableCell key={index} align="center">
                                            {`${item.name} ${item.weight !== undefined ? `( ${item.weight} )` : ''} `}
                                        </TableCell>
                                    ))}
                                </>
                            )}
                    </TableRow>
                </TableHead>
                <TableBody>
                    {loading ?
                        <TableRow>
                            <TableCell colSpan={title.length}>
                                <Skeleton variant="rect" width="100%" height={100}/>
                            </TableCell>
                        </TableRow>
                        : <>{children}</>
                    }
                </TableBody>
            </Table>
        </TableContainer>
    );
}