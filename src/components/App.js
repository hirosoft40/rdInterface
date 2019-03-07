import React, { Component } from "react";
import EnhancedTable from './EnhancedTable'
import "./App.css";
var finaldata=[]

class App extends Component {
  
  render() {
    var exampleSocket = new WebSocket('ws://rdsfastrack.com/backend/', ['com.campbellsci.webdata'])

      exampleSocket.addEventListener('open', function (event) {
      console.log('Hello Server!')
     exampleSocket.send('{"message":"AddRequests","requests":[{"uri":"LNDB:8782_Hour_Table","mode":"since-record","p1":"1","transaction":1,"order":"collected"}]}')
  })

// ***SIMPLE CALL***
  // var headerarr=[]
  // var newresults=[]
    exampleSocket.addEventListener('message', async function (mEvent) {  
     console.log(JSON.parse(mEvent.data));
    //  var tabledata=await JSON.parse(mEvent.data).records.data
    

    //  console.log(tabledata)
    //  finaldata=[...tabledata]
    //  console.log("hi",finaldata)
  //     var columns=JSON.parse(mEvent.data).head.fields
  //     const result= columns.map((item)=>{
  //         return item.name;
  //    })
  //    console.log(result)
  //    headerarr=[...result]
  //    console.log(headerarr)
    })
    // console.log("end",finaldata)
    return <div className="main">
    <EnhancedTable finaldata={finaldata}/>
    <p>{console.log("hihi",finaldata)}</p>
    </div>
  } 
}

export default App;
