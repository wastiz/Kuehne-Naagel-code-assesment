import {Component} from 'react';
import './App-info.scss';
import ShipmentService from '../../services/ShipmentService';

class AppInfo extends Component {

    shipmentService = new ShipmentService();

    render() {
        return (
            <div className='app-info'>
                <h1>Kuehne-Naagel shipment info</h1>
                <h2>Number of shipments: n</h2>
                <h2>Shipped: n</h2>
                <h2>Delivered: n</h2>
            </div>
        )
    }
}

export default AppInfo;