import React, {useEffect, useState} from 'react';
import styled from 'styled-components'
const CharDetail = styled.div`
    background-color: #fff;
    padding: 25px 25px 15px 25px;
    margin-bottom: 40px;
`;
const TitleBlock = styled.h4`
    margin-bottom: 20px;
    text-align: center;
`;
const SelectError = styled.div`
    color: #fff;
    text-align: center;
    font-size: 26px;
`
const CharDet = (props) => {
    const content = props.itemInfo ? <Char itemInfo={props.itemInfo} /> : 'No Data';
    return (
        <CharDetail className="rounded">
            {content}
        </CharDetail>
    )


}
export default CharDet;
const Char = (props) => {
    const { name, gender, born, died, culture } = props.itemInfo
    return (
        <>
            <TitleBlock>{name}</TitleBlock>
            <ul className="list-group list-group-flush">
                <li className="list-group-item d-flex justify-content-between">
                    <span className="term">Gender</span>
                    <span>{gender}</span>
                </li>
                <li className="list-group-item d-flex justify-content-between">
                    <span className="term">Born</span>
                    <span>{born}</span>
                </li>
                <li className="list-group-item d-flex justify-content-between">
                    <span className="term">Died</span>
                    <span>{died}</span>
                </li>
                <li className="list-group-item d-flex justify-content-between">
                    <span className="term">Culture</span>
                    <span>{culture}</span>
                </li>
            </ul>
        </>
    );
}