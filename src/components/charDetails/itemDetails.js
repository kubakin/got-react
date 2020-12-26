import React, { useEffect, useState } from 'react';
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

const ItemDet = (props) => {
    const [data, setData] = useState()
    useEffect(()=>{
        props.getData(props.itemInfo)
        .then(rs=>setData(rs))
    },[props.itemInfo])
    
    const content = data ? <Item chlds={props.children} itemInfo={data} /> : 'No Data';
    return (
        <CharDetail className="rounded">
            {content}
        </CharDetail>
    )


}
export default ItemDet;

const Item = ({chlds, itemInfo}) => {
    return (
        <>
            <TitleBlock>{itemInfo.name}</TitleBlock>
            <ul className="list-group list-group-flush">
                {
                    React.Children.map(chlds, (item) =>{
                        return React.cloneElement(item, {itemInfo})
                    })
                }
            </ul>
        </>
    );
}