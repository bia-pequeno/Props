import styled from "styled-components"

const Profile = styled.div`
    width:50vw;
    height:10vw;
    border: 0.5vw ridge #F2EFC7;
    display: flex;
    align-items:center;
    justify-content:space-evenly;
    font-size:1.5vw;
    background-color: #F7FFE0;
    color: black;
`

const About = ({nome, idade, estudo}) => {
    return(
        <Profile>
            <p>Nome: {nome}</p>
            <p>Idade: {idade}</p>
            <p>Interesse: {estudo}</p>
        </Profile>
    )
}

export default About