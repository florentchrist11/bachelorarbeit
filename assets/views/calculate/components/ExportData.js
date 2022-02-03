import React from 'react'
import GetAppIcon from '@material-ui/icons/GetApp';
import * as FileSaver from 'file-saver';
import * as XLSX from 'xlsx';
import IconButton from "@material-ui/core/IconButton";

const  dataTransformer = (response) => {
    let normalizeMatrix = [];
    let aggregationArray = [];

    if( response.length > 0){
        let criteria = response[0].criteria
        let itemCriteria = response[0].itemsCriteria
        let aggregation = response[0].aggregation
        let normalized = response[0].normalizeMatrix
        let nameCulonm = response[0].nameCulonm

        let matrixIndex = 0
        itemCriteria.map((item , index) => {
            itemCriteria.map((i , k) => {
                let matrixObj = {name: nameCulonm[matrixIndex]}
                criteria.map((it) => {
                    matrixObj[it.name] = normalized[it.name][`${index}-${k}`]
                })
                matrixIndex++
                normalizeMatrix.push(matrixObj)
            })
        })

        itemCriteria.map((item , index) => {
            let obj = {Aggregation: item.name}
            itemCriteria.map((i , k) => obj[i.name] = aggregation[`${k}-${index}`])
            obj['z-LeavingFlow'] = parseFloat(item.leavingFlow)
            aggregationArray.push(obj)
        })

        let objEntering = {Aggregation: 'z-enteringFlow'}
        itemCriteria.map((item) =>  objEntering[item.name] = parseFloat(item.enteringFlow))
        objEntering['z-LeavingFlow'] = ''
        aggregationArray.push(objEntering)
    }

    return {
        normalizeMatrix: normalizeMatrix,
        aggregation: aggregationArray
    }
}

export const ExportData = ({data, itemsCriteria, criteria}) => {
    const fileType = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
    const fileExtension = '.xlsx';

    const exportToCSV = (dataSend) => {
        let wb = XLSX.utils.book_new();
        wb.SheetNames.push("Criteria");
        wb.SheetNames.push("Item criteria");
        wb.SheetNames.push("Normalize matrix");
        wb.SheetNames.push("Aggregation");
        wb.SheetNames.push("Result flow");

        let transformData = dataTransformer(dataSend)

        wb.Sheets["Criteria"] = XLSX.utils.json_to_sheet(criteria);
        wb.Sheets["Item criteria"] = XLSX.utils.json_to_sheet(itemsCriteria);
        wb.Sheets["Normalize matrix"] = XLSX.utils.json_to_sheet(transformData['normalizeMatrix']);
        wb.Sheets["Aggregation"] = XLSX.utils.json_to_sheet(transformData['aggregation']);
        wb.Sheets["Result flow"] = XLSX.utils.json_to_sheet(dataSend[0].sortItems);

        const excelBuffer = XLSX.write(wb, { bookType: 'xlsx', type: 'array' });
        const data = new Blob([excelBuffer], {type: fileType});
        FileSaver.saveAs(data, 'mcdm_data' + fileExtension);
    }

    return (
        <IconButton  onClick={() => exportToCSV(data)}>
            <GetAppIcon/>
        </IconButton>)
}