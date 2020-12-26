import React from 'react';
const Field = ({label, itemInfo, item}) => {
    return (
        <li className="list-group-item d-flex justify-content-between">
            <span className="term">{label}</span>
            <span>{itemInfo[item]}</span>
        </li>
    )
}
export default Field;