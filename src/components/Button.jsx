import styled from 'styled-components'
import { border, color, fontSize, layout, space } from 'styled-system'

export const Button = styled.button`
    background-color: transparent;
    border: none;
    cursor: pointer;
    font-size: 16px;
    ${(props) => props.size}
    ${color};
    ${border};
    ${fontSize};
    ${space}
    ${layout}
`