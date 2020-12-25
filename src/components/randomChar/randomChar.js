import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import GotService from '../../service/gotService'
import Spinner from '../spinner/spinner'
const RandomBlock = styled.div`
    background-color: #fff;
    padding: 25px 25px 15px 25px;
    margin-bottom: 40px;
`;
const TitleOfRandomBlock = styled.h4`
    margin-bottom: 20px;
    text-align: center;
`;
const Term = styled.span`
    font-weight: bold;
`;




const RandomChar = () => {
    const [loader, setLoader] = useState(true);
    const [person, setPerson] = useState({
        name: '',
        sex: '',
        born: '',
        died: '',
        culture: ''
    })
    useEffect(() => {
        const id = Math.floor(Math.random() * 140 + 25);
        let gotService = new GotService()
        gotService.getCharacter(id)
            .then((rs) => {
                for (let i in rs) {
                    console.log(i)
                }
                setPerson(rs)
                setLoader(false)
            })
    }, [])
    const content = loader ? <Spinner /> : <View person={person} />
    return (
        <RandomBlock>
            {content}
        </RandomBlock>
    );
}

const View = ({ person }) => {
    const { name, gender, born, died, culture } = person;
    return (
        <>
            <TitleOfRandomBlock>Random Character: {name}</TitleOfRandomBlock>
            <ul className="list-group list-group-flush">
                <li className="list-group-item d-flex justify-content-between">
                    <Term>Gender </Term>
                    <span>{gender}</span>
                </li>
                <li className="list-group-item d-flex justify-content-between">
                    <Term>Born </Term>
                    <span>{born}</span>
                </li>
                <li className="list-group-item d-flex justify-content-between">
                    <Term>Died </Term>
                    <span>{died}</span>
                </li>
                <li className="list-group-item d-flex justify-content-between">
                    <Term>Culture </Term>
                    <span>{culture}</span>
                </li>
            </ul>
        </>
    )
}

export default RandomChar;