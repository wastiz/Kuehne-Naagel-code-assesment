import {Component} from 'react';
import './App.css';
import AppInfo from '../app-info/App-info';
import ShipmentAddForm from '../shipment-add-form/ShipmentAddForm';

class App extends Component {
  render () {
    return (
      <>
      <AppInfo/>
      <ShipmentAddForm/>
      </>
    )
  }
}

export default App;
