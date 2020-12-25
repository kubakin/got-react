import React, {useEffect, useState} from 'react';
import styled from 'styled-components';
import GotService from '../../service/gotService';
import Spinner from '../spinner/spinner'

const ListGroupItem = styled.div`
    cursor: pointer;
`
const ItemList = (props) => {
    const [itemList, setList] = useState([]);
    const [loader, setLoad] = useState(true);

    useEffect(() => {
        const page = Math.floor(Math.random() * 10 + 1);
        new GotService().getAllCharacters(page, 3)
            .then(rs => {
                setList(rs)
                setLoad(false);
            })

    }, []);
    const elements = itemList.map((item, key) => {
        return (
            <ListGroupItem onClick={()=>props.showItem(item)} key={key} className="list-group-item">
                {item.name}
            </ListGroupItem>
        )
    })
    const content = loader ? <Spinner/> : elements
    return (
        <ul className="item-list list-group">
            {content}
        </ul>
    );
}
export default ItemList;