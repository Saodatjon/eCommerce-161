import styled from 'styled-components'

export const DropdownStyle = styled.div`
    display: flex;
    align-items: center;
    position: relative;
    h4 {
        margin-right: 10px;
        &:hover {
            color: #e2195b;
        }
    }
`

export const DropdownPanelStyle = styled.div`
    position: absolute;
    top: 100%;
    padding: 20px;
    display: flex;
    flex-direction: column;
    background: #ffffff;
    border: 1px solid #f2f6f7;
    box-shadow: 0px 10px 30px rgba(34, 42, 70, 0.1);
    border-radius: 10px;
    z-index: 100;
    opacity: ${(props) => (props.open ? 1 : 0)};
    visibility: ${(props) => (props.open ? 'visible' : 'hidden')};
    transition: all 0.3s ease;
    h4 {
        display: block;
        margin-bottom: 10px;
        width: auto;
    }
    h4:hover {
        color: #0093a2;
    }
`