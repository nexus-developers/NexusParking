import styled from 'styled-components';

export const ModalContainer = styled.div`
    width: 80%;
    height: 80%;
    background-color: #fff;
    border-radius: 5px;

`
export const CloseButton = styled.div`
    display: flex;
    justify-content: flex-end;
    margin:5px 20px 0 0 ;

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

export const FormAddClient = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 40px;

    hr{
        width: 95%;
        margin: 30px 0;
    }
`

export const Form1 = styled.div`
    display: flex;
    flex-direction: row;
    margin-right: 30px;
    justify-content: space-between;

    div{

        input{
            width: 350px;

        }
        
        h5{
            margin-bottom: 20px;
            color: #707070;
            font-weight:bold;
            font-size: 18px;
        }

        margin-right: 40px;

    }
    
`

export const Form2 = styled.div`
    margin-top: 20px; 
    display: flex;
    flex-direction: row;
    margin-right: 30px;

    div{

        input{
            width: 350px;

        }
        
        h5{
            margin-bottom: 20px;
            color: #707070;
            font-weight:bold;
            font-size: 18px;
        }

        margin-right: 40px;
    }
`

export const FormCheck = styled.div`
    display: flex;
    flex-direction: column;

    label{
        color: #707070;
        font-weight: bold;
    }

    input[type='radio']{
        color: #FFA43B;
    }
`

export const CreateClientButton = styled.div`
    display: flex;
    justify-content: flex-end;
    margin-right: 30px;

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