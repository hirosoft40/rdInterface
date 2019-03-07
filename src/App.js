import React, { Component } from "react";
import "./App.css";
import Graph from "./components/Graph";

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
      let results = [],
        results1 = [];

      results = await JSON.parse(mEvent.data);
      if (results.message === "RequestRecords") {
        results1.push(results.records.data);
        this.setState({
          results1: results1
        });
      }
    });

    // const promise1 = new Promise((resolve, reject) => {
    //   exampleSocket.addEventListener("open", event => {
    //     console.log("Hello Server!");
    //     exampleSocket.send(
    //       '{"message":"AddRequests","requests":[{"uri":"LNDB:8782_Flowback","mode":"most-recent","p1":"10","transaction":1,"order":"collected"}]}'
    //     );
    //   });

    //   exampleSocket.addEventListener("message", mEvent => {
    //     // if (mEvent.data.message === "RequestRecords") {
    //     resolve(mEvent.data);
    //     // console.log(mEvent.data)
    //     // setTimeout(resolve(JSON.parse(mEvent.data)), 1000);
    //     // }
    //   });
    // });
    // promise1.then(value => {
    //   console.log("value", value);
    //   this.setState({
    //     results1: value
    //   });
    // });
  }

  componentDidMount() {
    this.connectToApi();
  }

  render() {
    console.log(this.state.results1);
    // if(resutls1)
    return <div>test</div>;
  }
}

export default App;

// setValue(res1, res2) {
//   this.setState({
//     head: res1,
//     body: res2
//   });
// }

// componentDidMount() {
//   this.getDataFromApi();
//   this.setState({
//     head: res1,
//     body: res2
//   });
//}

// export default App;
