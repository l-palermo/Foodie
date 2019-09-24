import React from 'react';

const Button = (props) => {
    console.log(props.style);
    return (
        <button 
            style = {props.styles}
            onClick = {props.action}>
            {props.title}
        </button>
        )
}

export default Button;