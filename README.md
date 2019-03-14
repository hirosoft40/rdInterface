## Real Time Data Dashboard (Client - Oil Company)

### `Summary`
- Internet of things (IoT) has a large impact across many industries. For this particular case, an oil client utilized physical hardware at a well to measure certain metrics, and our team of 4 was assigned to develop a real-time dashboard to display the collected data in various ways such as graphs, gauges, and a table.

### `Challenges`

(1) WebSocket API<br/>
We have previous experience with REST APIs and Socket.IO, so initially we were not expecting to face a challenge here. However, we found that we received 2 separate responses in 1 request.
We tried to store response into 2 state or 2 variables which was not successful. After hours of trial and errors,we were able to store data successfully by changing syntax to an arrow function, and then we handled storing the data depending on the type of response data and how we needed to utilize it.

(2) Material-UI <br/>
Material-UI is a useful and great library to use to develop an aesthetic interface; however, when we implemented it and attempted to modify it, we faced issues. We were able to overcome these issues by collaborating with one another and by doing paired programming to resolve the issues. This allowed us to understand and learn from one another.

### `Product Video Demo`
<div>https://youtu.be/J1uXoKcbfvE</div>

<video>

### `Screens`
Main Dashboard
<img src="screenshots/main.png">
<br/>
Table Data
<img src="screenshots/table.png">
Initial Planning
<img src="screenshots/initial.jpg">

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
