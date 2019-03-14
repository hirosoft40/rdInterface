## Real Time Data Dashboard (For Oil Company Client)

### `Summary`
- Internet of things (IoT) has a large impact across many industries. For this particular case, an oil client utilized physical hardware at a well to measure certain metrics, and our team of 4 was assigned to develop a real-time dashboard to display the collected data in various ways such as graphs, gauges, and a table.

### `Challenges`

(1) WebSocket API
We have previous experience with REST APIs and Socket.IO, so initially we were not expecting to face a challenge here. However, we found that we received 2 separate responses in 1 request.
We tried to store response into 2 states or 2 variables which was not successful. After hours of trial and errors,we were able to store data successfully by changing syntax to an arrow function, and then we handled storing the data depending on the type of response data and how we needed to utilize it.

(2) Material-UI
This library allows for us to develop a smooth interface, but in terms of editing, design, and customizing the layout for the overall design and table, we faced issues. We were able to overcome these issues by collaborating with one another through paired programming. In addition, this was beneficial as it gave us the opportunity to see different perspectives in addressing an issue.

### `Built with`

- Websocket API
- React
- Plotly
- CSS
- Material-UI
- Run "npm install" to install all required dependencies

### `Library`

- Material-UI
- react-liquid-gauge
- react-csv
- moment.js

### `Authors`

<ul>
<li><a href="https://github.com/gysobu">Sobha Boddapati</a>: Data table and Websocket API call
</li>
<li><a href="https://github.com/jeanjosephgeorge">Jean George </a>: Grid system and overall design of MainGraph, Plot, LiquidGauge
</li>
<li><a href="https://github.com/acecoder93">Anuj Saheba</a>: MainGraph, Adjusters, Websocket API call
</li>
<li><a href="https://github.com/hirosoft40">Hiroko Ross</a>: LiquidGauge, Websocket API call, Export data table to CSV
</li>
</ul>
