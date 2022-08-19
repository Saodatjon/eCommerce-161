import styled from "styled-components";
import { space, color, flexbox, border, grid, layout, shadow, background  } from "styled-system";

export const Box = styled.div`
    position:relative;
    width:${(props) => props.w}
    height:${(props) => props.h}
    padding:${(props)=> props.p}

    ${space};
    ${color};
    ${border};
    ${layout};
    ${flexbox};
    ${grid};
    ${shadow};
    ${background};
    
`
     
export const CircleBox = styled(Box)`
   position:relative;
   width: ${props => props.w};
   height: ${props => props.h};
   border:1px solid;
   border-color:${props => props.borderColor};
   border-radius:50%;
   display:flex;
   justify-content: center;
   align-items:center;
`

