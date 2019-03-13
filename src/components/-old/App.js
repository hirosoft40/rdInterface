// // import React, { Component } from "react";
// // import EnhancedTable from './tables/EnhancedTable'
// // import "./App.css";

// var finaldata = [];

// class App extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       header: [],
//       finalData: []
//     };
//     this.connectToApi = this.connectToApi.bind(this);
//   }

//   componentDidMount() {
//     this.connectToApi();
//   }
//   connectToTableApi() {
//     var exampleSocket = new WebSocket("ws://rdsfastrack.com/backend/", [
//       "com.campbellsci.webdata"
//     ]);

//     exampleSocket.addEventListener("open", event => {
//       console.log("Hello Server!");
//       exampleSocket.send(
//         '{"message":"AddRequests","requests":[{"uri":"LNDB:8782_Hour_Table","mode":"since-record","p1":"1","transaction":1,"order":"collected"}]}'
//       );
//     });

//     // ***SIMPLE CALL***

//     exampleSocket.addEventListener("message", async mEvent => {
//       // const results= await JSON.parse(mEvent.data).records.data
//       const results = await JSON.parse(mEvent.data);
//       if (results.message === "RequestRecords") {
//         this.setState({
//           finalData: results.records.data
//         });
//       } else {
//         //seting header info
//         this.setState({
//           header: results.head.fields
//         });
//       }
//     });
//   }
//   render() {
//     return (
//       <div className="main">
//         <EnhancedTable
//           finalData={this.state.finalData}
//           header={this.state.header}
//         />
//       </div>
//     );
//   }
// }

// // export default App;
