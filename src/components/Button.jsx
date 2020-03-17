import styled from 'styled-components'

const Button = styled.button`
    background-color: yellow; 
    border: none;
    color: #545454;
    padding: 15px 32px;
    text-align: center;
    text-decoration: none;
    font-size: 16px;
    margin-left: 10px;

    :focus {
        outline: none;
        border: 1px solid yellow;
        box-shadow: 0 0 10px #FFFF99;
}
`
export default Button
