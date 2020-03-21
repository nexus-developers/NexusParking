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
  SearchButton,
  CardsContainer,
  Cards,
  Card,
  BadgeElement,
  CarModel,
  Divisor,
  CarInformations,
  LicensePlate,
  CarColor,
  FinishButton,
  AreaDivisor,
  Hr,
  AreaDivisorText
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
      
      <CardsContainer>
        <Cards className='row' >
            <Card className='shadow'>
              <header>
                  <BadgeElement green/>
                  <span>Entrada: 14:00h</span>
              </header>
              <CarModel>
                Renault Sandero - Stepway
              </CarModel>
              <Divisor>
                <CarInformations>
                  <LicensePlate>Placa: PJE - 1234</LicensePlate>
                  <CarColor>Cor: Laranja</CarColor>
                </CarInformations>
                <FinishButton>
                    Finalizar
                </FinishButton>
              </Divisor>
            </Card>

            <Card className='shadow'>
              <header>
                  <BadgeElement green/>
                  <span>Entrada: 14:00h</span>
              </header>
              <CarModel>
                Renault Sandero - Stepway
              </CarModel>
              <Divisor>
                <CarInformations>
                  <LicensePlate>Placa: PJE - 1234</LicensePlate>
                  <CarColor>Cor: Laranja</CarColor>
                </CarInformations>
                <FinishButton>
                    Finalizar
                </FinishButton>
              </Divisor>
            </Card>

            <Card className='shadow'>
              <header>
                  <BadgeElement green/>
                  <span>Entrada: 14:00h</span>
              </header>
              <CarModel>
                Renault Sandero - Stepway
              </CarModel>
              <Divisor>
                <CarInformations>
                  <LicensePlate>Placa: PJE - 1234</LicensePlate>
                  <CarColor>Cor: Laranja</CarColor>
                </CarInformations>
                <FinishButton>
                    Finalizar
                </FinishButton>
              </Divisor>
            </Card>
        

        <Card className='shadow'>
              <header>
                  <BadgeElement green/>
                  <span>Entrada: 14:00h</span>
              </header>
              <CarModel>
                Renault Sandero - Stepway
              </CarModel>
              <Divisor>
                <CarInformations>
                  <LicensePlate>Placa: PJE - 1234</LicensePlate>
                  <CarColor>Cor: Laranja</CarColor>
                </CarInformations>
                <FinishButton>
                    Finalizar
                </FinishButton>
              </Divisor>
            </Card>

            <Card className='shadow'>
              <header>
                  <BadgeElement green/>
                  <span>Entrada: 14:00h</span>
              </header>
              <CarModel>
                Renault Sandero - Stepway
              </CarModel>
              <Divisor>
                <CarInformations>
                  <LicensePlate>Placa: PJE - 1234</LicensePlate>
                  <CarColor>Cor: Laranja</CarColor>
                </CarInformations>
                <FinishButton>
                    Finalizar
                </FinishButton>
              </Divisor>
            </Card>
            </Cards>
      </CardsContainer>
      
      <AreaDivisor>
        <Hr/>
        <AreaDivisorText>Isso é tudo</AreaDivisorText>
        <Hr/>
      </AreaDivisor>

      <MenuTitleDiv>
        <MenuTitle>
          Carros Recentes
        </MenuTitle>
        <MenuDescription>
          Exibindo todos que saíram recentimente
        </MenuDescription>
      </MenuTitleDiv>
      <CardsContainer>
        <Cards className='row' >
            <Card className='shadow'>
              <header>
                  <BadgeElement finalizado/>
                  <span>Saída: 18:00h</span>
              </header>
              <CarModel>
                Renault Sandero - Stepway
              </CarModel>
              <Divisor>
                <CarInformations>
                  <LicensePlate>Placa: PJE - 1234</LicensePlate>
                  <CarColor>Cor: Laranja</CarColor>
                </CarInformations>
                <FinishButton finalizado>
                    Finalizado
                </FinishButton>
              </Divisor>
            </Card>
          </Cards>
        </CardsContainer>
      </InternContainer>
    </Container>
  );
}
