import React, { Component } from 'react';
import EnhancedTable from './components/EnhancedTable'
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state={
      header:[],
      finalData:[]
  
    };
    
    this.connectToApi=this.connectToApi.bind(this)
  }

  componentDidMount(){
    this.connectToApi();
  }

  connectToApi(){
    var exampleSocket = new WebSocket('ws://rdsfastrack.com/backend/', ['com.campbellsci.webdata'])

exampleSocket.addEventListener('open', (event)=> {
    console.log('Hello Server!')
    exampleSocket.send('{"message":"AddRequests","requests":[{"uri":"LNDB:8782_Hour_Table","mode":"since-record","p1":"1","transaction":1,"order":"collected"}]}')
  })

// ***SIMPLE CALL***
  exampleSocket.addEventListener('message', async (mEvent)=> {  
     //console.log(JSON.parse(mEvent.data))
    const results = await JSON.parse(mEvent.data);
     if(results.message==="RequestRecords") {
      // console.log(results.records.data)
      this.setState({
        finalData:this.state.finalData.concat(results.records.data)
        
     })
     }
     else{
      this.setState({
        header:this.state.header.concat(results.head.fields)
      });
     }
   })
  }
  render() {
    //console.log(this.state.finalData)
    return (
      <div><EnhancedTable finalData={this.state.finalData}/></div>
    );
  }
}



export default App;
