import React from 'react';
import styles from './Button.module.css';

const Button = (props) => {
    const { color, type, label } = props;

    const btnStyle = {
        backgroundColor: type == 'blue' ? '#4AB9CA' : type == 'orange' ? '#FF9900' : type,
        color: color ?? 'white',
    }

    return (
        <button 
            onClick={props.pressed}
            style={{...btnStyle, ...props.style}} 
            className={[styles.btn, props.className].join(' ')}
        >
            <p style={{ margin: 0, ...props.textStyle }}>{label}</p>
        </button>
    )
}

export default Button;