import React from 'react';
import {Graph} from "react-d3-graph";
import GraphConfig from "./GraphConfig";
import CardMedia from "@material-ui/core/CardMedia";
import {Grid} from "@material-ui/core";

function D3Graph({data}) {

    // graph payload (with minimalist structure)
    return (
        <Graph
            id="graph-id" // id is mandatory
            data={data}
            config={GraphConfig}
        />
    );
}

export default D3Graph;