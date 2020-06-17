import React, {useEffect, useRef} from 'react';

export const PrevProps = (value) => {
    const ref = useRef();
    useEffect(() => {
      ref.current = value;
    });
    return ref.current;
}