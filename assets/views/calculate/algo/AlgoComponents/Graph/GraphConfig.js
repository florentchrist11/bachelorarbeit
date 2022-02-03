import React from 'react';

const GraphConfig = {
    nodeHighlightBehavior: true,
    height: 400,
    directed: true,
    width: 800,
    d3: {
        alphaTarget: 0.05,
        gravity: -600,
        linkLength: 150,
        linkStrength: 1,
        //disableLinkForce: true
    },
    node: {
        color: "#d3d3d3",
        labelProperty: "name",
        size: 500,
        highlightStrokeColor: "blue",
        highlightFontSize: 14,
        fontSize: 14,
    },
    link: {
        highlightColor: "blue",
    },
};

export default GraphConfig;