import React, {useState} from 'react';
import TableCell from "@material-ui/core/TableCell";
import getPreference from "../../../components/getPreference";
import {IconButton} from "@material-ui/core";
import TableRow from "@material-ui/core/TableRow";
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import DoneIcon from '@material-ui/icons/Done';
import TextField from "@material-ui/core/TextField";

function FirstTablesRow({ row, removeCriteria , index, criteria, setCriteria, weight }) {
    const [edit, setEdit] = useState(false)
    const [editable, setEditable] = useState(row)

    const onValideEdit  = (index, row) => {
        if(edit){
            setEdit(false)
        }else{
            setEdit(true)
        }
    }

    const onCriteriaChange = (e) => {
        let value = e.target.value
        let name = e.target.name
        let oldCriteria = [...criteria]
        if( name === 'weight' ){
            value === '' ? value = 0 : value = parseFloat(value)
            if(value <= 100){
                oldCriteria[index][name] = value
                setEditable(prev => ({...prev, [name]: value}))
            }
        }else{
            oldCriteria[index][name] = value
            setEditable(prev => ({...prev, [name]: value}))
        }
        setCriteria(oldCriteria)
    }

    return (
        <TableRow key={index}>
            <TableCell component="th" scope="row" align="center">
                {edit ? <TextField name="name" onChange={(e) => onCriteriaChange(e)}
                                   value={editable.name}/> : `${row.name}` }
            </TableCell>
            <TableCell align="center">
                {edit ? <TextField name="weight" onChange={(e) => onCriteriaChange(e)}
                                   value={editable.weight}/> : `${row.weight} %` }
            </TableCell>
            <TableCell align="center">
                {edit ? <TextField name="unit" onChange={(e) => onCriteriaChange(e)}
                                   value={editable.unit}/> : `${row.unit}` }
            </TableCell>
            <TableCell align="center">{getPreference(row.preferenceFunction)}</TableCell>
            <TableCell align="center">{row.p ? `${row.p} ${row.unit}` : 'n/d'}</TableCell>
            <TableCell align="center">{row.q ? `${row.q} ${row.unit}` : 'n/d'}</TableCell>
            <TableCell align="center">{row.s ? `${row.s} ${row.unit}` : 'n/d'}</TableCell>
            <TableCell align="center">
                <IconButton onClick={() => onValideEdit(index, row)}>
                    {edit ? <DoneIcon/> : <EditIcon/>}
                </IconButton>
            </TableCell>
            <TableCell align="center">
                <IconButton onClick={() => removeCriteria(index, row)}>
                    <DeleteIcon/>
                </IconButton>
            </TableCell>
        </TableRow>
    );
}

export default FirstTablesRow;