import React, {useEffect, useState} from "react";
import {Grid, makeStyles} from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import NormalizeMatrix from "../../ResultComponents/NormalizeMatrix";
import useFetchApi from "../../../../../components/hooks/useFetchApi";
import OutrankingFlow from "../../ResultComponents/OutrankingFlow";
import Aggregation from "../../ResultComponents/Aggregations";
import ItemSorts from "../../ResultComponents/ItemsSorts";
import D3Graph from "../../AlgoComponents/Graph/D3Graph";
import {ExportData} from "../../../components/ExportData";
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import FormAnalysis from "../../AlgoComponents/sensibility_analysis/FormAnalysis";
import Conclusion from "../../ResultComponents/Conclusion";

const useStyles = makeStyles((theme) => ({
    root: {
        backgroundColor: theme.palette.background.dark,
        minHeight: '100%',
    },
    container: {
        minWidth: '100%',
        margin: theme.spacing(2)
    },
    floatRight: {
        float: 'right'
    },
    title: {
        color: theme.palette.text.primary,
        textAlign: 'center',
        margin: theme.spacing(3)
    },
    heading: {
        fontSize: theme.typography.pxToRem(15),
        fontWeight: theme.typography.fontWeightRegular,
    },
}));


export default function FinalStep({criteria, itemsCriteria, setCriteria, setItemsCriteria, weight}) {
    const classes = useStyles();
    const [items, setItems] = useState([])
    const [normalizeMatrix, setNormalizeMatrix] = useState([])
    const [sortItems, setSortItems] = useState([])
    const [nameCulonm, setNameCulonm] = useState([])
    const [aggregation, setAggregation] = useState([])
    const [conclusion, setConclusion] = useState([])
    const [graphData, setGraphData] = useState([])

    //------------------------------
    const [is, setIs] = useState(0)
    const {data: response, postData, loading} = useFetchApi('/api/matrix/calculate/')

    useEffect(() => { postData({criteria, itemsCriteria})}, [is]);

    useEffect(() => {
        if (response.length > 0) {
            setItems(response[0].itemsCriteria)
            setAggregation(response[0].aggregation)
            setSortItems(response[0].sortItems)
            setNameCulonm(response[0].nameCulonm)
            setNormalizeMatrix(response[0].normalizeMatrix)
            setConclusion(response[0].conclusion)
            setGraphData(response[0].graphData)
        }
    }, [response])

    const onSend = () => setIs(p => p + 1)

    return (
        <Grid container
              direction="row"
              justify="center"
              alignItems="center">
            <Grid item xs={12} sm={12}>
                <Accordion>
                    <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1a-content" id="panel-0">
                        <Typography className={classes.heading}>Sensitivity analysis</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <FormAnalysis setCriteria={setCriteria} onSend={onSend} criteria={criteria} weight={weight}/>
                    </AccordionDetails>
                </Accordion>

                <Grid item xs={12} container  direction="row"
                      justify="center" alignItems="center">
                    <Grid item xs={10}>
                        <Typography variant="h5" onClick={() => onSend()} className={classes.title}>
                            Result
                        </Typography>
                    </Grid>
                    <Grid item xs={2}>
                        <ExportData data={response} itemsCriteria={itemsCriteria} criteria={criteria}/>
                    </Grid>
                </Grid>

                <Accordion>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                        id="panel-1">
                        <Typography className={classes.heading}>Item criteria</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <NormalizeMatrix loading={loading} criteria={criteria}
                                         normalizeMatrix={normalizeMatrix} items={items}/>
                    </AccordionDetails>
                </Accordion>
                <Accordion>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel2a-content"
                        id="panel-2"
                    >
                        <Typography className={classes.heading}>Normalize matrix</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <OutrankingFlow loading={loading} itemsCriteria={items}
                                        nameColunm={nameCulonm} criteria={criteria}
                                        normalizeMatrix={normalizeMatrix}/>
                    </AccordionDetails>
                </Accordion>

                <Accordion>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel2a-content"
                        id="panel-3"
                    >
                        <Typography className={classes.heading}>Aggregation</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Aggregation loading={loading} aggregration={aggregation} items={items}/>
                    </AccordionDetails>
                </Accordion>

                <Accordion>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel2a-content"
                        id="panel-4"
                    >
                        <Typography className={classes.heading}>Comparaison graph</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        {graphData.links && <D3Graph data={graphData}/>}
                    </AccordionDetails>
                </Accordion>

                <Accordion>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel2a-content"
                        id="panel-4"
                    >
                        <Typography className={classes.heading}>Promethee I Conclusion</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        {conclusion.length > 0 && <Conclusion items={conclusion} loading={loading}/>}
                    </AccordionDetails>
                </Accordion>

                <Accordion>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel2a-content"
                        id="panel-5"
                    >
                        <Typography className={classes.heading}>Promethee II Conclusion</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <ItemSorts items={sortItems} loading={loading}/>
                    </AccordionDetails>
                </Accordion>
            </Grid>
        </Grid>
    );
};

