import styled from 'styled-components';

export const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(255, 255, 255, 0.3);
  backdrop-filter: blur(3px);
  display: flex;
  align-items: center;
  justify-content: center;
  
`;

export const ModalContainer = styled.div`
    width: 85%;
    height: 85%;
    background-color: #fff;
    border-radius: 5px;

`
export const Title = styled.h1`
    margin-top: 20px;
    margin-left: 60px;
    font-size: 80px;
    font-weight: bold;
    color: #FFA43B;
`

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

export const AreaInputs1 = styled.div`
    margin-top: 60px;
    margin-left: 60px;
    display: flex;
    flex-direction: row;

    .secondInputRegister{
        margin-left: 100px;
    }

    div{
        

        h5{
            margin-bottom: 20px;
            font-size: 16px;
        }

        input{
            width: 550px;
        }
    }
`

export const AreaInputs2 = styled.div`
    margin-top: 60px;
    margin-left: 60px;
    display: flex;
    flex-direction: row;

    .secondInputRegister{
        margin-left: 50px;
    }

    div{
        

        h5{
            margin-bottom: 20px;
            font-size: 16px;
        }
    }
`
export const AreaInputs3 = styled.div`
    margin-top: 60px;
    margin-left: 60px;
    display: flex;
    flex-direction: column;

    h5{
        margin-bottom: 20px;
    }
`

export const Radios = styled.div`
    display: flex;
    flex-direction: row;
    
    div{
        text-align: center;
        
        label{
            /* margin-left: px; */
            margin-right: 30px;
            color: #FFA43B;
            font-weight: bold;
            font-size: 16px;
        }
    }
`

export const RegisterButton = styled.button`
    width: 400px;
    height: 50px;
    background-color: #FFA43B;
    margin-left: 200px;
    border: none;
    border-radius: 4px;
    color: #fff;
    font-weight: bold;
`
