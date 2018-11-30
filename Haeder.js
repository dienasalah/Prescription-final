import React, { Component } from 'react';
import Context from './Context';
import styled from 'styled-Components';



let Add = styled.button`

    background-color: #009FB4;
    border: none;
    border-radius: 60px;
    width: 180px;
    height: 60px;
    font-size: 16px;
    font-family: Arial;
    font-weight: bold;
    color: white;
    margin-right: 40px;

`



let Container = styled.header `

background-color: #132E41;
height: 120px;
width: 100%;
box-shadow: 2px 4px 15px #707070;
display: flex;
justify-content: space-between;
align-items: center;
padding: 0px;np
margin: 0px;

`

let Text = styled.div `

font-family: Magneto;
padding-top: 76px;
position: absolute;
color: white;

padding-left: 127px;
font-size: 35px;

`


class Header extends Component {
    render() {
      return (
        <Context.Consumer>
          {
            (ctx)=>{
              return (
                <React.Fragment>
                <Container>
                  <img width="120px" height="120px" src={require('./assets/logo.jpg')}></img>
                  <Text>Dr. Diena Salah</Text>
                   <Add onClick={() => {
                  ctx.actions.toggle()
                  }}>Add Prescription</Add>
                   
                </Container>
          
                </React.Fragment>
              )
            }
          }
        </Context.Consumer>
      )
    }
  }
  
  export default Header