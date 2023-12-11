import React, { useState, useEffect, useRef } from 'react';

const Item = ({ item, handleChange }) => {
    const [slide, setSlide] = useState(false);

    const firstUpdate = useRef(true);

    console.log(item)

    useEffect(() => {
        if (firstUpdate.current) {
            firstUpdate.current = false;
            return;
        }

        setSlide(true)

    }, [item]);

    return <div className={`${slide ? 'animated' : ''} item`}>
      <input type="checkbox" onChange={() => handleChange(item.id)} checked={item.done} />
      <span>{item.text}</span>
    </div>
}

export default Item;