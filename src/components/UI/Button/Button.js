import React from 'react';

const Button = (props) => {
    const { color, type, label } = props;

    const btnStyle = {
        all: 'unset',
        backgroundColor: type == 'blue' ? '#4AB9CA' : type == 'orange' ? '#FF9900' : type,
        color: color ?? 'white',
        textTransform: 'uppercase',
        fontWeight: 600,
        borderRadius: 15
    }

    return (
        <button style={{...btnStyle, ...props.style}} className={props.className}>
            <p style={{ ...props.textStyle }}>{label}</p>
        </button>
    )
}

export default Button;