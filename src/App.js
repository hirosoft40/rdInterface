import React, { Component } from "react";
import Graph from './components/Graph';


class App extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      header: [],
      figures: []
    };
    this.connectToApi = this.connectToApi.bind(this); 
  }

  //=== API CALL =====
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
      console.log("results", results);
      if (results.message === "RequestRecords") {
        // setting data information
        this.setState({
          figures: results.records.data
        });
      } else {
        // setting header info
        this.setState({
          header: results.head.fields
        });
      }
    });
  }
  // ====  END ===

  componentDidMount() {
    this.connectToApi();
  }

  render() {
    // console.log(this.state);
    return <div>

      <Graph records = {this.props.figures} />

        </div>;
  }
}

export default App;