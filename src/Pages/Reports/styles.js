import styled from 'styled-components';

export const ModalContainer = styled.div`
    width: 80%;
    height: 80%;
    background-color: #fff;
    border-radius: 5px;
    position: fixed;
`

export const CloseButton = styled.div`
    display: flex;
    justify-content: flex-end;
    margin: 5px 20px 0 0;

    button{
        border: none;
        outline: none;
        background-color: transparent;
    }
`

export const InternModalContainer = styled.div`
    margin-top: 30px;
    margin-left: 40px;
`

export const Title = styled.h1`
    font-size: 30px;
    font-weight: bold;
    color: #FFA43B;
`

export const ContainerCalendar = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`

export const Create = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 3%;

    button{
        background-color: #FFA43B;
        width: 280px;
        height: 40px;
        border: none;
        outline: none;
        border-radius: 4px;
        color: #fff;
        font-weight: bold;
    }
`