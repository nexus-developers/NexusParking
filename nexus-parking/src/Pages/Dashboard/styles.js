import styled from 'styled-components';

export const InternContainer = styled.div`
    margin-left: 40px;
    margin-top: 20px;
    /* overflow-x: hidden; */
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

export const MenuTitleDiv = styled.div`
    
`

export const MenuTitle = styled.h1`
    font-size: 24px;
    color: #FFA43B;
    font-weight: bold;
`

export const MenuDescription = styled.p`
    color: #424242;
    font-weight: bold;
`

export const SearchCamp = styled.div`
    margin-right: 20px;
    display: flex;
    flex-direction: row;
    align-items: flex-end;
    margin-bottom: 24px;


    span{
        height: 37px;
    }

    input{
        width: 450px;
        height: 37px;
        margin-right: 20px;
    }
`

export const SearchButton = styled.button`
    width: 150px;
    height: 37px;
    background-color: #FFA43B;
    color: #fff;
    border: none;
    border-radius: 4px;
    font-weight: bold;
`


export const CardsContainer = styled.div`
    margin-top: 30px;
`

export const Cards = styled.div`

display: flex;
/* margin-right: 20px; */

`


export const Card = styled.div`
    width: 400px;
    padding: 10px;
    height: 150px;
    border-radius: 4px;
    margin-right: 20px;
    margin-bottom: 20px;

    &:hover{
        border: 2px solid  #FFA43B;
    }
    

    header{
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: flex-end;
        margin-top: 5px;

        span{
            color: #707070;
        }
    }
`
export const BadgeElement = styled.div`
    width: 15px;
    height: 15px;
    border-radius: 50%;
    background-color: ${ props => props.finalizado ? '#DC3131' : '#7CE61F' };
    margin-right: 5px;
`

export const CarModel = styled.h5`
    color: #FFA43B;
    font-weight: bold;
    margin-top: 5px;
`

export const Divisor = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`

export const CarInformations = styled.div`
    display: flex;
    flex-direction: column;
`

export const LicensePlate = styled.p`
    font-weight: bold;
    color: #C4C4C4;
`

export const CarColor = styled.p`
    color: #C4C4C4;
`

export const FinishButton = styled.button`
    margin-top: 20px;
    width: 150px;
    height: 40px;
    background-color: ${props => props.finalizado ? '#6DD611' : '#FFA43B'};
    border: none;
    border-radius: 4px;
    color: #fff;
    font-weight: bold;
`
export const AreaDivisor = styled.div`
    margin-top: 50px;
    display: flex;
    justify-content: center;
    flex-direction: row;
`

export const Hr = styled.hr`
    width: 200px;
    margin-right: 20px;
    margin-left: 20px;
    border: 1px solid #C4C4C4;
`

export const AreaDivisorText = styled.p`
    text-align: center;
    margin-top: 3px;
    color: #C4C4C4;
    font-weight: bold;
`
