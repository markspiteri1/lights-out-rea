# Lights Out

## Installation

Upon cloning the solution or downloading the source code from this link https://github.com/markspiteri1/lights-out-react, run the following command to install all the required dependencies
```
npm install
```

## Getting started

In order to run the game, run the following command

```
npm run start
```

## Usage

### Basic setup

In the index.tsx file, make sure to import and use the 'LightsOutGrid' component as follows

```javascript
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import LightsOutGrid from './components/LightsOutGrid/LightsOutGrid';

ReactDOM.render(
  <React.StrictMode>
    <LightsOutGrid />
  </React.StrictMode>,
  document.getElementById('root')
);
```
By default, the grid renders in a 5 rows by 5 columns configuration. In order to override these settings, these can be specified as follows

```javascript
ReactDOM.render(
  <React.StrictMode>
    <LightsOutGrid rows={2} cols={3}/>
  </React.StrictMode>,
  document.getElementById('root')
);

```
