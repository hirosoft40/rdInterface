## Real Time Data Dashboard

### `Challenges`

(1) WebSocket API
We have experience with REST API and Socket.IO, so initially we were not expecting any challenge here, until we found that we received 2 separate responses in 1 request.
We tried to store response into 2 state or 2 variables which was not successful. After hours of try and errors, we were able to store data successfully by changing syntax to Arrow Function, and handle storing depeinding on type of response data.

### `Built with`

- Websocket API
- React
- Plotly
- CSS

### `Library`

- Material-ui
- react-liquid-gauge
- react-csv

### `Authors`

<ul>
<li><a href="https://github.com/gysobu">Sobha Boddapati</a>: Table and its Websocket API call
</li>
<li><a href="https://github.com/jeanjosephgeorge">Jean George </a>: Grid system and overall design of MainGraph, Plot, LiquidGauge
</li>
<li><a href="https://github.com/acecoder93">Anuj Saheba</a>: MainGraph, Adjusters, Websocket API call
</li>
<li><a href="https://github.com/hirosoft40">Hiroko Ross</a>: LiquidGauge, Websocket API call, export table data to csv file
</li>
</ul>
