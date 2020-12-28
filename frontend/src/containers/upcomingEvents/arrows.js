import React from 'react';

const Next = (props) => {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, display: 'block', background: 'red' }}
            onClick={onClick}
        />
    );
};

const Prev = (props) => {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, display: 'block', background: 'red' }}
            onClick={onClick}
        />
    );
};

export default Next;
