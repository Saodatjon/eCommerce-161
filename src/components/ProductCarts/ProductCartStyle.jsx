import styled from 'styled-components'

export const ProductCart1Style = styled.div`
    position: relative;
    height: 430px;
    width: ${(props) => 100 / props.col}%;
    border-radius: 5px;
    overflow: hidden;
    padding: 0 10px;
    margin-bottom: 20px;
  

    &:hover{
        box-shadow: -3px  10px  30px pink; 
     
    }
`

export const ProductCart1ContentStyle = styled.div`
    position: relative;
    height: 40%;
    width:100%;
    border: 1px solid #e2e4eb;
    border-top: 0;
    padding: 20px;
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    /* text-decoration: line-through; */

    &:hover{
        border: 1px solid #fff;
    }
`

export const ProductBtn = styled.button`
    padding: 10px 15px;
    background: transparent;
    border-radius: 5px;
    border: 1px solid #e2195b;
    transition: all 0.3s ease;
    display: flex;
    align-items: center;
    cursor: pointer;

    span {
        transition: all 0.3s ease;
    }
    svg {
        margin-right: 10px;
        path {
            transition: all 0.3s ease;
        }
    }

    &:hover {
        background: #e2195b;
        span {
            color: #fff;
        }
        path {
            fill: #fff;
            stroke: #fff;
        }
    }
`
export const ProductCart2Style = styled.div`
    padding: 20px;
`
export const ProductCart3Style = styled.div``