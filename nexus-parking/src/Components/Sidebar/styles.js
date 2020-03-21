import styled from 'styled-components';

export const Container = styled.div`
  top: 0;
  height: 100vh;
  width: 16vw;
  display: flex;
  flex-direction: column;
  position: fixed;
  z-index: -2;

`;

export const LogoContainer = styled.div`
  
  img{
    width: 250px;
    margin-top: 10px;
  }
`

export const MenuContainer = styled.ul`
  list-style: none;
  margin-top: 60px;
  margin-left: 30px;

  a{
    text-decoration: none;
  }

  li{
    display: flex;
    text-decoration: none;
    color: #424242;
    font-weight: bold;
    align-items: center;
    
    svg{
      margin-right: 6px;
    }
  }
`

