import React from 'react';

function PopulationLabels(props) {

// let {classNamePart} = props;
return(
    <div className="population-color-tags has-text-weight-bold">
        <p>{props.text}</p>
        <span className={`tag is-${props.classNamePart}-2000`}> {props.labelsValues[0]}</span>
        <span className={`tag is-${props.classNamePart}-1000`}> {props.labelsValues[1]}</span>
        <span className={`tag is-${props.classNamePart}-500`}> {props.labelsValues[2]}</span>
        <span className={`tag is-${props.classNamePart}-300`}> {props.labelsValues[3]}</span>
        <span className={`tag is-${props.classNamePart}-100`}> {props.labelsValues[4]}</span>
        <span className={`tag is-${props.classNamePart}-50`}> {props.labelsValues[5]}</span>
    </div>
);
}
export default PopulationLabels;