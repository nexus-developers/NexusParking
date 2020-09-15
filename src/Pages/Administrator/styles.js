import styled from 'styled-components';

export const InternContainer = styled.div`
    margin-left: 40px;
    margin-top: 20px;
`

export const Title = styled.h1`
    font-size: 50px;
    color: #FFA43B;
    font-weight: bold;
    margin-bottom: 0;
`

export const SticksEffect = styled.div`
    display: flex;
    flex-direction: row;
    padding-bottom: 30px;
`

export const DarkSticky = styled.hr`
    width: 40px;
    height: 16px;
    background-color: #424242;
    border-radius: 15px;
    margin-right: 15px;
`

export const OrangeSticky = styled.hr`
    width: 150px;
    height: 16px;
    background-color: #FFA43B;
    border-radius: 15px;
`

export const Menu = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    
`

export const MenuTitle = styled.h1`
    font-size: 24px;
    color: #FFA43B;
    font-weight: bold;
`

export const Hr = styled.hr`
    width: 90%;
    margin-right: 20px;
    margin-left: 20px;
    margin-top: 3%;
    margin-bottom: 3%;
    border: 1px solid #C4C4C4;
`

export const AttPerfil = styled.div`
    width: 90%;
`

export const Form = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    div{
        width: 100%;
        display: flex;
        flex-direction: row;

        input{
            width: 100%;
            margin-top: 5%;
            margin-right: 2%;

            border: none;
            border-bottom: 1px solid #FFA43B;
            font-size: 20px;
        }
    }

    button{
        margin-top: 10%;
        background: #FFA43B;
        border: none;
        border-radius: 100px;
        width: 40%;
        height: 50px;
        color: #fff;
        font-weight: bold;
        font-size: 20px;
    }
`