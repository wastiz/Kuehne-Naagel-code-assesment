import {Component} from 'react';
import './App.css';
import ShipmentService from '../../services/ShipmentService';
import AppInfo from '../app-info/App-info';
import ShipmentAddForm from '../shipment-add-form/ShipmentAddForm';
import ShipmentList from '../shipment-list/ShipmentList';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
    const shipmentService = new ShipmentService();
    this.maxId = shipmentService.length
  }

  addItem = (orderNo, date, customer, trackingNo, consignee, status) => {
    if (orderNo || date || customer || trackingNo || consignee || status === ''){
      return false;
    }
    const newItem = {
        orderNo,
        date,
        customer,
        trackingNo,
        consignee,
        status,
        id: this.maxId++
    }
    this.setState(({data}) => {
        const newArr = [...data, newItem];
        return {
            data: newArr
        }
    });
  }
  render () {
    return (
      <>
      <AppInfo/>
      <ShipmentAddForm onAdd={this.addItem}/>
      <ShipmentList />
      </>
    )
  }
}

export default App;
