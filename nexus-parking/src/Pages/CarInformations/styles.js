import styled from 'styled-components';

export const InternContainer = styled.div`
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
    width: 70%;
    height: 60%;
    background-color: #fff;
    border-radius: 5px;

`
export const CloseButton = styled.div`
    display: flex;
    justify-content: flex-end;
    margin:10px 10px 0 0 ;

    button{
        border: none;
        outline: none;
        background-color: transparent;
    }
`
export const ModalInternContainer = styled.div`
    margin-left: 60px;
    margin-top: 50px;
`

export const ModalTitle = styled.h5`
    color: #FFA43B;
    font-size: 40px;
`

export const ModalInformations1 = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    div{
        display: flex;
        flex-direction: column;
        margin-top: 40px;
        margin-right: 80px;
    }
`

export const Title = styled.p`
    color: #707070;
    font-weight: bold;
    font-size: 23px;
`

export const Description = styled.p`
    color: #707070;
`
export const ModalInformations2 = styled.div`
    display: flex;
    flex-direction: row;

    div{
        display: flex;
        flex-direction: column;
        margin-top: 20px;
        margin-right: 110px;
    }
`

export const BadgeContainer = styled.div`
    display: flex;
    justify-content: flex-end;
    flex-direction: row;
    margin-left: 20px;

    span{
            color: #707070;
            margin-right: 60px;
            margin-bottom: 10px;
        }
`
export const BadgeElement = styled.div`
    width: 15px;
    height: 15px;
    border-radius: 50%;
    background-color: ${ props => props.finalizado ? '#DC3131' : '#7CE61F' };
    margin-right: 5px;
    margin-top: 5px;

`