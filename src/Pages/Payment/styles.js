import styled from 'styled-components';

export const PaymentContainer = styled.div`
    width: 40%;
    height: 80%;
    background-color: #FFF;
    border-radius: 4px;
    justify-content: center;
    align-items: center;
    
    h1{
        color: #FFA43B;
        font-size: 50px;
        text-align: center;
    }

    h5{
        font-size: 70px;
        color: #424242;
        font-weight:bold;
        text-align: center;
    }

    p{
        margin-left: 70px;
        color: #707070;
    }

    @media(min-width: 1920px){
        h1{
            margin-top: 9%;
        }

        p{
            margin-top: 4.5%;
        }
    }
`;

export const CloseButton = styled.div`
    display: flex;
    justify-content: flex-end;
    margin:10px 20px 0 0 ;

    button{
        border: none;
        outline: none;
        background-color: transparent;
    }
`
export const Title = styled.h2`
    color: #FFA43B;
    font-size: 30px;
    text-align: center;

    @media(min-width: 1920px){
        margin-top: 4.5%;
    }
`

export const ValueHour = styled.div`
    margin: 20px 0 0 70px;
    font-weight: bold;
    color: #707070;
`

export const PaymentForm = styled.div`
    h3{
        color: #FFA43B;
        font-size: 20px;
        margin-left: 70px;
        font-weight: bold;
        margin-top: 40px;
    }
`

export const Radio = styled.div`
    margin-left: 70px;

    input{
        margin-right: 10px;
        margin-top: 10px;
    }

    label{
        margin-right: 40px;
        color: #707070;
    }
`

export const  PaymentButtonContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 3%;
`
export const PaymentButton = styled.button`
    width: 300px;
    height: 45px;
    background-color: ${props => props.pago ? '#6DD611' : '#FFA43B'};
    color: #FFF;
    font-weight: bold;
    border: none;
    outline: none;
    border-radius: 4px;
`