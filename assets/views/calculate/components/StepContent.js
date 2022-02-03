import React from 'react';
import FirstStep from "../algo/StepComponents/FirstStep/FirstStep";
import SecondStep from "../algo/StepComponents/SecondStep/SecondStep";


export default function getStepContent(step, criteria, itemsCriteria, addCriteria,
                                       addItemsCriteria, choiceMethod, setChoiceMethod, weight, setWeight) {
    switch (step) {
        case 0:
            return <FirstStep criteria={criteria} method={addCriteria} weight={weight} setWeight={setWeight}/>;
        case 1:
            return <SecondStep criteria={criteria} itemsCriteria={itemsCriteria} method={addItemsCriteria}/>;
        default:
            return 'Unknown step';
    }
}