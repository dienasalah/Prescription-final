import React, { Component } from 'react';
import Context from './Context';
import styled from 'styled-Components';


let Pdf = styled.img `
width: 50px;
 height: 50px;

`


let List = styled.div `

background-color: #F0F0F0;
padding: 10px 30px 10px 30px;
margin: 20px 60px;
height: 60px;
align-items: center;
display: flex;
justify-content: space-between;


`

let Container = styled.div `
background-color :#FFFFFF;
`

let Text = styled.div `
background-color: #F0F0F0;
    font-size: 1.7rem;
    font-weight: bold;
`


class Textlist extends Component {
  render() {
    return (
      <Context.Consumer>
        {

          (ctx) => {
            return (  
              <Container>
                {
                  ctx.state.pation_info.map((item, i) => {
                    return <List key={i}>
                    <Text>{i+1 + '# '}{item.patient_name}</Text>
                    <Pdf  src={require('./assets/pdf-file-format-symbol.svg')}></Pdf>
                    
                    
                    </List>
                })
              }
              </Container> )
               }
           
        }
        
        </Context.Consumer>
    )
  }
}

export default Textlist