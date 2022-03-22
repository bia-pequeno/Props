import React, { Component } from "react"

import { createGlobalStyle } from "styled-components"
import styled from "styled-components"
import About from "./components/About"

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Frank+Ruhl+Libre:wght@900&family=Montserrat+Alternates:wght@500&family=Montserrat:ital,wght@1,600&family=Raleway:ital,wght@0,500;1,400&display=swap');
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: 'Raleway', sans-serif;
  }
  body{
    background-color: #D2BBA0
  }
`
const Title = styled.h1`
  font-size: 40px;
  margin: 25px;
`

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: spece-evenly;
  align-items: center;
`
const Box = styled.div`
  height: 100%;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content:space-evenly;
`
const List = styled.ul`
  list-style: none
`
const Li = styled.li`
  margin: 10px
`



export default class App extends Component {
  render() {
    return (
      <Container>
        <GlobalStyle />
        <Title>Informações:</Title>
        <Box>
          <List>
            <Li> <About nome={"Feyre"} idade={"21"} estudo={"Pintura"}/></Li> 
            <Li><About nome={"Aurora"} idade={"24"} estudo={"Artes Cenicas"}/></Li>
            <Li><About nome={"Jasper"} idade={"38"} estudo={"Psicologo"}/></Li>
            <Li><About nome={"Annebeth"} idade={"17"} estudo={"Arquitetura"}/></Li>
            <Li><About nome={"Ryle"} idade={"27"} estudo={"Neurocirurgião"}/></Li>
            <Li> <About nome={"Lily"} idade={"22"} estudo={"Florista"}/></Li>
            <Li><About nome={"Erica"} idade={"12"} estudo={"Administração"}/></Li>
            <Li><About nome={"Mare"} idade={"29"} estudo={"Direito"}/></Li>
          </List> 
        </Box>
      </Container>
    )
  }
}

