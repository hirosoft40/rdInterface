var exampleSocket = new WebSocket('ws://rdsfastrack.com/backend/', ['com.campbellsci.webdata'])

exampleSocket.addEventListener('open', function (event) {
    console.log('Hello Server!')
    exampleSocket.send('{"message":"AddRequests","requests":[{"uri":"LNDB:8782_Flowback","mode":"most-recent","p1":"43200","transaction":1,"order":"collected"}]}')
  })

// ***SIMPLE CALL***
  exampleSocket.addEventListener('message', function (mEvent) {  
     console.log(JSON.parse(mEvent.data));
   })

   