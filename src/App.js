import React, { Component } from "react";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      results1: []
    };
    this.connectToApi = this.connectToApi.bind(this);
  }

  connectToApi() {
    var exampleSocket = new WebSocket("ws://rdsfastrack.com/backend/", [
      "com.campbellsci.webdata"
    ]);

    exampleSocket.addEventListener("open", event => {
      console.log("Hello Server!");
      exampleSocket.send(
        '{"message":"AddRequests","requests":[{"uri":"LNDB:8782_Flowback","mode":"most-recent","p1":"10","transaction":1,"order":"collected"}]}'
      );
    });

    // ***SIMPLE CALL***
    exampleSocket.addEventListener("message", async mEvent => {
   

      const results = await JSON.parse(mEvent.data);
      if (results.message === "RequestRecords") {
        this.setState({
          results1: results.records.data
        });
      }
    });
  }

  componentDidMount() {
    this.connectToApi();
  }

  render() {
    // console.log(this.state.results1);
    return <div>test</div>;
  }
}

export default App;
