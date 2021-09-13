/* eslint-disable no-unused-vars */
import React from 'react'
import './IntervalButton.css'

const STYLES = [
    'intbtn--primary',
    'intbtn--outline'
]

const SIZES = [
    'intbtn--medium',
    'intbtn--large'
]

export const IntervalButton = ({
    children,
    type,
    onClick,
    buttonStyle,
    buttonSize
}) => {
    const checkButtonStyle = STYLES.includes(buttonStyle) ? buttonStyle : STYLES[0]
    const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0]
    return(
        <button className={`intbtn ${checkButtonStyle} ${checkButtonSize}`} onClick={onClick} type={type}>
            {children}
        </button>
    )
}