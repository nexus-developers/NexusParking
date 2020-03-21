import React from 'react';

// Extern Components
import { Container } from '../../Components/Container/Container';

import { IoIosSearch } from 'react-icons/io'

// Intern Styles
import {
  InternContainer,
  Title,
  SticksEffect,
  DarkSticky,
  OrangeSticky,
  Menu,
  MenuTitleDiv,
  MenuTitle,
  MenuDescription,
  SearchCamp,
  SearchButton
} from './styles'

export default function Dashboard() {
  return (
    <Container>
      <InternContainer>
        <Title>Início</Title>
        <SticksEffect>
          <div>
            <DarkSticky/>
          </div>
          <div>
            <OrangeSticky/>
          </div>
        </SticksEffect>

        <Menu>
          <MenuTitleDiv>
              <MenuTitle>
                Carros Estacionados
              </MenuTitle>
              <MenuDescription>
                Exibindo todos os carros estacionados no momento
              </MenuDescription>
          </MenuTitleDiv>

          <SearchCamp>
            <div class="input-group">
              <div class="input-group-prepend">
                <span class="input-group-text" id="basic-addon1">
                  <IoIosSearch/>
                </span>
              </div>
              <input type="text" placeholder='Digite a placa para buscar o carro...' class="form-control"/>
            </div>

            <SearchButton>
              Buscar
            </SearchButton>
          </SearchCamp>
        </Menu>
      </InternContainer>
    </Container>
  );
}
