import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Spinner from '../spinner/spinner';
import Error from '../errorMsg/error';

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
const RandomItem = ({getRandomItem, start, end, children}) => {
    const [loader, setLoader] = useState(true);
    const [error, setError] = useState(false);
    const [itemInfo, setItem] = useState()
    const onError = (err) => {
        setLoader(false);
        setError(true);
    }
    const getRandom = () => {
        const id = Math.floor(Math.random() * end + start);
        getRandomItem(id)
            .then((rs) => {
                setItem(rs)
                setLoader(false)
            })
            .catch(err => onError(err))
    }
    useEffect(() => {
        const interval = setInterval(() => {
            getRandom();
        }, 2000)
        return function () {
            clearInterval(interval);
        }
    }, [])
    let content = loader ? <Spinner /> : <View chlds={children} itemInfo={itemInfo} />
    content = error ? <Error /> : content;
    return (
        <RandomBlock>
            {content}
        </RandomBlock>
    );
}

const View = ({ itemInfo, chlds }) => {
    const { name, gender, born, died, culture } = itemInfo;
    return (
        <>
            <TitleOfRandomBlock>Random Character: {name}</TitleOfRandomBlock>
            <ul className="list-group list-group-flush">
            {
                    React.Children.map(chlds, (item) =>{
                        return React.cloneElement(item, {itemInfo})
                    })
                }
            </ul>
        </>
    )
}

export default RandomItem;