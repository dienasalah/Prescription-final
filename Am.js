import React, { Component } from 'react';
import styled from 'styled-Components';
import Context from './Context';
import ReactModal from 'react-modal';
import { Autocomplete, TextInput } from 'evergreen-ui';
import * as firebase from 'firebase';
import 'firebase/firestore';




const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',


        background: '#B2D1D8',

        padding: '200px 20px'

    }
};

let Title = styled.h1`
  
  color: #132E41;
  font-family: Magneto;
  position: absolute;
  top: 10px;
  `
let Input = styled.input`
  color: #132E41;
    border: solid 1px;
    border-radius: 20px;
    padding-left: 10px;
    margin-right: 10px;
    height: 30px;
    border-color: #132E41;
    outline : none;
    margin-bottom: 10px;

  `

let B = styled.button`
  background-color: #132E41;
  height: 35px;
  width: 100px;
  border: 0px;
  border-radius: 20px;
  font-family: Magneto;
  color: white;
  font-size: 20px;
  position: absolute;
  bottom: 30px;
  right: 300px;
  `





class Am extends Component {

    constructor() {

        super()
        this.state = {

        }


    }





    render() {


        return (

            <Context.Consumer>

                {

                    (ctx) => {

                        return (

                            <ReactModal
                                isOpen={ctx.state.modalState}
                                style={customStyles}
                            >
                                <Title>
                                    Prescription
                  </Title>
                                <Input value={ctx.state.patient_name}
                                    onChange={(event) => { ctx.actions.onChangeName(event.target.value) }}
                                    placeholder="Patient Name" type="text" />

                                <Input
                                    onChange={(event) => { ctx.actions.onChangeAge(event.target.value) }}
                                    value={ctx.state.patient_age}
                                    placeholder="Patient Age"
                                    type="number" />

                                <Autocomplete
                                    title="Drugs"
                                    onChange={(changedItem) => ctx.actions.onChangeDrug(changedItem)}
                                    value={ctx.state.drug_value}
                                    items={ctx.state.drugs}

                                >
                                    {(props) => {
                                        const { getInputProps, getRef, inputValue } = props
                                        return (
                                            <TextInput
                                                placeholder="Drugs"
                                                value={inputValue}
                                                innerRef={getRef}
                                                {...getInputProps()}
                                            />
                                        )
                                    }}
                                </Autocomplete>
                                <div>
                                    {
                                        ctx.state.pa_drug.map((item, i) => {
                                            return (<div>
                                                <p key={i}>{item}</p>

                                            </div>)

                                        })


                                    }
                                </div>

                                <button onClick={() => {



                                    ctx.actions.onAdd()
                                }}>Add drug</button>


                                <B onClick={() => {

                                    firebase.firestore().collection('prescription').add({
                                        patient_name: ctx.state.patient_name,
                                        patient_age: ctx.state.patient_age,
                                        date: Date.now(),
                                        drugs_list:ctx.state.pa_drug
                                    })

                                    ctx.actions.toggle()
                                }}>Save</B>

                            </ReactModal>

                        )
                    }
                }

            </Context.Consumer>


        )
    }

}
export default Am;