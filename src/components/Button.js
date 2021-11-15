import React from 'react';
import "./Button.css";

const STYLES = [
    "btn--outline",
    "btn--solid",
    "btn--link",
    "btn--link--clicked",
    "btn--title",
    "btn--outline--white"
]

const SIZES = [
    "btn--medium",
    "btn--large",
    "btn--link--size",
    "btn--title-size"
]

export const Button = ({
    children,
    type,
    onClick,
    buttonStyle,
    buttonSize,
}) => {

    const checkButtonStyle = STYLES.includes(buttonStyle) ? buttonStyle : STYLES[0];

    const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0];

    return (
        <>
            <button className = {`btn ${checkButtonStyle} ${checkButtonSize}`}onClick={onClick} type={type}>
                {children}
            </button>
        </>
    )
}


