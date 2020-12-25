import React from 'react';
import styled from 'styled-components';
const ListGroupItem = styled.div`
    cursor: pointer;
`
const ItemList = (props) => {
    const elements = props.itemList.map((item, key) => {
        return (
            <ListGroupItem onClick={()=>props.showItem(item)} key={key} className="list-group-item">
                {item.name}
            </ListGroupItem>
        )
    })
    return (
        <ul className="item-list list-group">
            {elements}
        </ul>
    );
}
export default ItemList;