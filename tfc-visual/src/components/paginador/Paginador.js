import React, { useEffect, useState } from "react";
import Pagination from 'react-bootstrap/Pagination';

const Paginador = (props) => {
    const [active, setActive] = useState(1);
    const [min, setMin] = useState(1);
    const [max, setMax] = useState(5);

    useEffect(() => {
        //setActive(true);
    }, []);

    const items = [];
    for (let number = min; number <= max; number++) {
        items.push(
            <Pagination.Item key={number} active={number === active} onClick={() => activeLol(number)}>
                {number}
            </Pagination.Item>,
        );
    }

    const activeLol = (number) => {
        if(number === max){
            setMax(max + 1);
            setMin(min + 1);
        } else if(number === min && min > 1){
            setMax(max - 1);
            setMin(min - 1);
        }

        setActive(number);
            
    }

    const restrict = (min) =>{
        if(min > 1){
            setMin(min - 1);
            setMax(max - 1);
            setActive(active - 1);
        } else if(min < active)
            setActive(active - 1);
    }

    const restrict2 = (max) =>{
        if(max < 300){
            setMax(max + 1);
            setMin(min + 1);
                setActive(active + 1);
        }
    }
/*
 * Ver paginador de aliexpress
 */

    return (
        <Pagination>
            <Pagination.Prev onClick={() => restrict(min)}/>
                <Pagination>{items}</Pagination>
            <Pagination.Next onClick={() => restrict2(max)}/>
        </Pagination>
    );

};

export default Paginador;