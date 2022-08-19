import styled from "styled-components";

export const Image = styled.img`
    width:100%;
    height:100%;
    object-fit:${(props) => props.objectFit};
    border-radius:${(props) => props.borderRadius};
`

export const ImageMain = styled.img`
    padding: 30px 60px;
    width:100%;
    height:100%;
    object-fit:${(props) => props.objectFit};
    border-radius:${(props) => props.borderRadius};
`