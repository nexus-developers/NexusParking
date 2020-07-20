import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: row;
`;

export const SmallText = styled.small`
display: flex;
    margin-top: 50px;
    justify-content: flex-end;
    align-items: flex-end;
    padding: 15px;
`

export const LoginContainer = styled.div`
    background-color: #FFFFFF;
    height: 100%;
    width: 100%; 
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    h5{
        margin: 50px 0 10px 0;
        font-size: 15px;
        color: #424242;
    }
`

export const LogoContainer = styled.div`
    img{
        width: 400px;
        margin-top: 30px;
    }
    `

export const FormContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 80px;
    
    label{
        color: #FFA43B;
        font-weight: bold;
        font-size: 16px;
    }
    
    small{
        color: #707070;
        font-weight: 700;
        margin-bottom: 5px;
        font-size: 10px;
    }

    input{
        width: 400px;
    }

    a{
        margin-top: 10px;
        text-decoration: underline;
        color: #FFA43B;
    }
    
    `

export const UserForm = styled.div`
    display: flex;
    flex-direction: column;
    `

export const PasswordForm = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 30px;
    `

export const SubmitButton = styled.button`
    width: 400px;
    height: 45px;
    background-color: #FFA43B;
    margin-top: 40px;
    border: none;
    border-radius: 4px;
    color: #fff;
    font-weight: bold;
`

export const RegisterButton = styled.button`
    width: 400px;
    height: 45px;
    background-color: #fff;
    border: 2px solid #FFA43B;
    border-radius: 4px;
    color: #FFA43B;
    font-weight: bold;
    `

export const CarouselContainer = styled.div`
    background-color: #FFA43B;
    height: 100vh;
    width: 100%; 
    display: flex;
    flex-direction: column;
`

export const Title1 = styled.h1`
    color: #424242;
    font-size: 60px;
    font-weight: bold;
    margin-top: 30px;
    margin-left: 20px;
`

export const Title2 = styled.h1`
    color: #ffffff;
    font-size: 100px;
    font-weight: bold;
    margin-top: 5px;
    margin-left: 20px;
`

export const Carousel = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-top: 80px;

    ol{
        li{
            height: 20px;
            width: 20px;
            margin-right: 10px;

            &:active,
            &:focus{
               background-color: #424242;
               height: 24px;
               width: 24px;
            }
        }
    }
`

export const CarouselTextSmall = styled.h1`
    color: #fff;
    font-size: 20px;
    margin-left: 20px;
    font-weight: bold;
    margin-top: 40px;
`

export const CarouselTextLarge = styled.h1`
    display: flex;
    flex-direction: row;
    color: #fff;
    font-size: 50px;
    margin-left: 20px;
    font-weight: bold;

    span{
        display: flex;
        justify-content: flex-end;
        align-items: flex-end;
        font-size: 16px;
        margin-bottom: 13px;
        margin-left: 5px;
    }
`
