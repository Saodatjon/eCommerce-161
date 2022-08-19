import styled from 'styled-components'
import { layout, border, color } from 'styled-system'

export const InputStyle = styled.input`
    padding: 10px 20px;
    font-weight: 400;
    font-size: 16px;
    line-height: 138%;
    color: #1b1c21;
    background: #ffffff;
    border: 1px solid #d0d2d7;
    border-radius: 5px;
    &::placeholder {
        color: #7d818e;
    }
    &::-webkit-outer-spin-button,
    &::-webkit-inner-spin-button {
        /* display: none; <- Crashes Chrome on hover */
        -webkit-appearance: none;
        margin: 0; /* <-- Apparently some margin are still there even though it's hidden */
    }
    &[type='number'] {
        -moz-appearance: textfield; /* Firefox */
    }
    ${layout}
    ${border}
`
export const LabelStyle = styled.label`
    display: block;
    font-weight: 400;
    font-size: 14px;
    line-height: 143%;
    color: #353949;
    margin-bottom: 5px;
    ${color}
`

export const TextAreaStyle = styled.textarea`
    padding: 10px 20px;
    font-weight: 400;
    font-size: 16px;
    line-height: 138%;
    color: #1b1c21;
    background: #ffffff;
    border: 1px solid #d0d2d7;
    border-radius: 5px;
    resize: none;
    &::placeholder {
        color: #7d818e;
    }
    ${layout}
`