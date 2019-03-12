// export const fetchTableData = item => {
//   return {
//     type: "FETCH_TABLE_DATA",
//     header: item.header,
//     finaldata: item
//   };
// };

//   export const connectToApi= ()=>{
//   var exampleSocket = new WebSocket('ws://rdsfastrack.com/backend/', ['com.campbellsci.webdata'])

//       exampleSocket.addEventListener('open',  (event)=> {
//       console.log('Hello Server!')
//      exampleSocket.send('{"message":"AddRequests","requests":[{"uri":"LNDB:8782_Hour_Table","mode":"since-record","p1":"1","transaction":1,"order":"collected"}]}')
//   })
  
// // ***SIMPLE CALL***
  
//     exampleSocket.addEventListener('message', async  (mEvent)=> {  
//     // const results= await JSON.parse(mEvent.data).records.data
//     const results =await JSON.parse(mEvent.data);
//     if(results.message==="RequestRecords"){
//       this.setState({
//          finalData:results.records.data
//       })
//     }
//     else{
//       //seting header info
//       this.setState({
//         header:results.head.fields
//       });
//     }
//     })
// }