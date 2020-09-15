import styled from 'styled-components';

export const AdmContainer = styled.div`
    width: 20%;
    height: 40%;
    background-color: #FFF;
    border-radius: 4px;
    justify-content: center;
    align-items: center;
    border: 1px solid #FFA43B;

    @media(min-width: 1920px) {
        height: 30%;
    }

    h1 {
        color: #FFA43B;
        font-size: 30px;
        text-align: center;
    }

    /* form {
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin: 20px 20px 20px 20px;

        button {
            width: 100%;
            padding-top: 3%;
            padding-bottom: 3%;
            background-color: #fff;
            border: 2px solid #FFA43B;
            border-radius: 4px;
            color: #FFA43B;
            font-weight: bold;
            margin-top: 8%;

            @media(min-width: 1920px) {
                padding-top: 1%;
                padding-bottom: 1%;;
            }
        }
    } */

    label {
        width: 100%;
        color: #FFA43B;
        font-weight: bold;
        font-size: 16px;
        margin-top: 3%;
    }

    input {
        width: 100%;
        border: none;
        border-bottom: 1px solid #FFA43B;
        font-size: 16px;
        margin-top: 4%;
    }
`

export const CloseButton = styled.div`
    display: flex;
    justify-content: flex-end;
    margin: 10px 20px 0 0;

    button {
        border: none;
        outline: none;
        background-color: transparent;
    }
`

export const Form = styled.div`
    /* width: 100%; */
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 20px 20px 20px 20px;

    button {
        width: 100%;
        padding-top: 3%;
        padding-bottom: 3%;
        background-color: #fff;
        border: 2px solid #FFA43B;
        border-radius: 4px;
        color: #FFA43B;
        font-weight: bold;
        margin-top: 8%;

        @media(min-width: 1920px) {
            padding-top: 1%;
            padding-bottom: 1%;;
        }
    }
`

export const Error = styled.p`
    color: #FF0000;
`