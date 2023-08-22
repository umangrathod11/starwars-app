import React, { useContext } from 'react';
import { getPersonNameLabel } from '../helper';

export const GeoGraphyReport = () => {
    const records = [];
    const groupedData = {};
    records.forEach((obj) => {
        groupedData[obj.city] = groupedData[obj.city] || [];
        groupedData[obj.city].push(obj);
    });
    const sortedCities = Object.keys(groupedData).sort((a, b) => groupedData[b].length - groupedData[a].length);

    const tableRows = [];
    sortedCities.map((city) => {
        const totalRows = groupedData[city].length;
        const rowSpanCount = totalRows > 0 ? totalRows : 1; // basic rule of html
        let row = (<tr key={city} data-group={city}>
            <td rowSpan={rowSpanCount}>{city}</td>
            <td rowSpan={rowSpanCount}>{groupedData[city].length}</td>
            <td>{getPersonNameLabel(groupedData[city][0])}</td>
        </tr>);
        tableRows.push(row);
        /* append other rows */
        for (let i = 1; i < groupedData[city].length; i++) {
            const record = groupedData[city][i];
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
                    <th>City</th>
                    <th>Total Count</th>
                    <th>Members</th>
                </tr>
            </thead>
            <tbody>
                {tableRows}
            </tbody>
        </table>
    );
}

GeoGraphyReport.propTypes = {};