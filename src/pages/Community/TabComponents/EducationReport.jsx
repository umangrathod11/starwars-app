import React from 'react';
import { EDUCATION, EDU_TO_TEXT } from '../../../constants/general';
import { getPersonNameLabel } from '../helper';

export const EducationReport = () => {
    
    const records = []
    const groupedData = {};
    
    EDUCATION.map(obj => obj.value).forEach((level) => groupedData[level] = []);
    
    records.forEach((obj) => groupedData[obj.education].push(obj));

    const sortedValues = EDUCATION.map(obj => obj.value).sort((a, b) => {
        return groupedData[b].length - groupedData[a].length;
    })
    
    const tableRows = [];
    sortedValues.map((level) => {
        const totalRows = groupedData[level].length;
        const rowSpanCount = totalRows > 0 ? totalRows : 1; // basic rule of html
        let row = (<tr key={level} data-group={level}>
            <td rowSpan={rowSpanCount}>{EDU_TO_TEXT[level]}</td>
            <td rowSpan={rowSpanCount}>{groupedData[level].length}</td>
            <td>{getPersonNameLabel(groupedData[level][0])}</td>
        </tr>);
        tableRows.push(row);
        /* append other rows */
        for (let i = 1; i < groupedData[level].length; i++) {
            const record = groupedData[level][i];
            row = (
                <tr key={record.id}>
                    <td>{getPersonNameLabel(record)}</td>
                </tr>
            );
            tableRows.push(row);
        }
    })
    return (
        <table>
            <thead>
                <tr>
                    <th>Education Level</th>
                    <th>Total Count</th>
                    <th>Members List</th>
                </tr>
            </thead>
            <tbody>
                {tableRows}
            </tbody>
        </table>
    );

   
}

EducationReport.propTypes = {};
