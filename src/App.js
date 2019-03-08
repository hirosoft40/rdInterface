import React, { Component } from "react";
import "./App.css";
import TopButtons from "./components/TopButtons";
import MainGraph from "./components/Graph/MainGraph";

class App extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     data: {}
  //   };
  //   this.renderData = this.renderData.bind(this);
  // }

  // renderData() {
  //   var exampleSocket = new WebSocket("ws://rdsfastrack.com/backend/", [
  //     "com.campbellsci.webdata"
  //   ]);

  //   exampleSocket.addEventListener("open", function(event) {
  //     console.log("Hello Server!");
  //     // exampleSocket.send('{"message":"AddRequests","requests":[{"uri":"LNDB:8782_Flowback","mode":"most-recent","p1":"43200","transaction":1,"order":"collected"}]}')
  //     exampleSocket.send(
  //       '{"message":"AddRequests","requests":[{"uri":"LNDB:8782_Flowback","mode":"most-recent","p1":"10","transaction":1,"order":"collected"}]}'
  //     );
  //   });

  //   // ***SIMPLE CALL***
  //   exampleSocket.addEventListener("message", function(mEvent) {

  //     data.map(item => console.log(item));
  //     // this.setState({
  //     //   data: JSON.parse(mEvent.data)
  //     // });
  //     // console.log(this.state.data);
  //   });
  // }

  render() {
    return (
      <div>
        {/* {this.renderData} */}
        <MainGraph />
      </div>
    );
  }
}

export default App;
