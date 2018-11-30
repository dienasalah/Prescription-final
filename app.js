import React, { Component } from 'React';
import ReactDOM from 'react-dom';
import Context from './Context';
import Header from './haeder';
import Textlist from './Textlist';
import Am from './Am';
import firebase from 'firebase';
import 'babel-polyfill';

var z=[]
var y=[]
var durs=[]

 // Initialize Firebase
 var config = {
    apiKey: "AIzaSyCJ3GJi063CvBJsU9XKzibS9a_APdHzk_M",
    authDomain: "chat-e5689.firebaseapp.com",
    databaseURL: "https://chat-e5689.firebaseio.com",
    projectId: "chat-e5689",
    storageBucket: "chat-e5689.appspot.com",
    messagingSenderId: "528255546102"
  };
  firebase.initializeApp(config);


class App extends Component {
    constructor() {
        super()
        this.state = {
            prescription: [{},{},{}],
            modalState: false,
            patient_name: '',
            patient_age: '',
            selcted_drug:'',
            drugs:[],
            pa_drug:[],
            drug_value:'',
            pation_info:[]
            
            

        }
        this.getDrugs()


        firebase.firestore().collection('prescription').orderBy('date', 'asc').onSnapshot((snapshot)=>{
            let pation_info = []
        
            snapshot.forEach((doc)=>{
                pation_info.push(doc.data())
              this.setState({
                pation_info: pation_info
              })
              })
              })

        

    }
  async  getDrugs(){
        let response = await fetch('https://healthdata.demo.socrata.com/resource/jaa8-k3k2.json')
        let x =await response.json()
        x.forEach(element => {
            
            y=element.drug_name
            z.push(y)
            
           
           
        });
        
        this.setState({

            drugs:z
        })

        }


        
    
    render() {
        return (
            <Context.Provider value={{
                state: this.state,
                actions: {
    
                    toggle: ()=>{
                      this.setState({
                        modalState: !this.state.modalState
                      })
                    },
                    onChangeName: (value) =>{
                      this.setState({
                          patient_name: value
                      })
                    },


                    onChangeDrug: (value) =>{
                        this.setState({
                            
                            drug_value: value
                            
                        })
                        
                      },

                     
                      onAdd: () =>{
                          let dru  =this.state.drug_value
                      
                          durs.push(dru)
                          console.log(durs)
                        this.setState({
                            pa_drug:durs,
                           
                           drug_value:''
                            
                        })
                        
                      },

                    


                    onChangeAge: (value) =>{
                      this.setState({
                         
                          patient_age : value
                      })
                    }
          
                 }
            }}>

                <Header />
                <Textlist />
               
               <Am />

            </Context.Provider>

        )
    }



}
ReactDOM.render(<App />, document.getElementById('root'))