import React from 'react';
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import Slider from "@material-ui/core/Slider";
import RemoveIcon from '@material-ui/icons/Remove';
import AddIcon from '@material-ui/icons/Add';

function CriteriaSensibilityAction({item , index , weight, setCriteria , criteria}) {

    const onChangeWeight = (event, newValue , item , index) => {
        let diffWeight = newValue - item.weight
        let oldCriteria = [...criteria]
        if( diffWeight > 0 ){
            let newWeight = weight + diffWeight
            newWeight <= 100 ?  oldCriteria[index].weight = newValue : null
        }else{
            oldCriteria[index].weight = newValue
        }
        setCriteria(oldCriteria)
    }

    const onClickAction = (item , index, add) => {
        let oldCriteria = [...criteria]
        if(add){
            let newWeight = weight + 1
            newWeight <= 100 ? oldCriteria[index].weight = item.weight + 1 : null
        }else{
            oldCriteria[index].weight = item.weight - 1
        }
        setCriteria(oldCriteria)
    }

    return (
        <Grid item container xs={12}>
            <Grid item xs={4}>
                <Typography gutterBottom>{item.name}</Typography>
            </Grid>
            <Grid item xs={1} style={{ textAlign: 'center'}}>
                <IconButton onClick={() => onClickAction(item , index, false)} size="small">
                    <RemoveIcon/>
                </IconButton>
            </Grid>
            <Grid item xs={5}>
                <Slider value={item.weight} min={0} max={100} valueLabelDisplay="auto"
                        onChange={(event, newValue) =>
                            onChangeWeight(event, newValue , item , index)}/>
            </Grid>
            <Grid item xs={1} style={{ textAlign: 'center'}}>
                <IconButton onClick={() => onClickAction(item , index, true)}
                            size="small" disabled={weight === 100}>
                    <AddIcon/>
                </IconButton>
            </Grid>
            <Grid item xs={1} style={{ textAlign: 'right'}}>
                <Typography gutterBottom>{item.weight} %</Typography>
            </Grid>
        </Grid>
    );
}

export default CriteriaSensibilityAction;