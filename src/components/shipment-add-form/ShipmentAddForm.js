import {Component} from 'react';
import './ShipmentAddForm.scss'


class ShipmentAddForm extends Component {
    constructor (props) {
        super(props);
        this.state = {
            orderNo: '',
            date: '',
            customer: '',
            trackingNo: '',
            consignee: '',
            status: '',
        }
    }

    onValueChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    onSubmit = (e) => {
        e.preventDefault();
        this.props.onAdd(this.state.orderNo, this.state.date, this.state.customer, this.state.trackingNo, this.state.consignee, this.state.status);
        this.setState({
            orderNo: '',
            date: '',
            customer: '',
            trackingNo: '',
            consignee: '',
            status: '',
        })
    }
    render () {
        const {orderNo, date, customer, trackingNo, consignee, status} = this.state
        return (
            <div className="add-form">
                <hr/>
                <h4>SHIPMENT DETAILS</h4>
                <form className='add-form-form'>
                    <div className="add-form-item">
                        <label>orderNo</label>
                        <input type="text" placeholder="Enter order number" name='orderNo' value={orderNo} onChange={this.onValueChange}/>
                    </div>
                    <div className="add-form-item">
                        <label>Date</label>
                        <input type="text" placeholder="Enter order date" name='date' value={date} onChange={this.onValueChange}/>
                    </div>
                    <div className="add-form-item">
                        <label>Customer</label>
                        <input type="text" placeholder="Enter order customer" name='customer' value={customer} onChange={this.onValueChange}/>
                    </div>
                    <div className="add-form-item">
                        <label>TrackingNo</label>
                        <input type="text" placeholder="Enter order tracking number" name='trackingNo' value={trackingNo} onChange={this.onValueChange}/>
                    </div>
                    <div className="add-form-item">
                        <label>Consignee</label>
                        <input type="text" placeholder="Enter order consignee" name='consignee' value={consignee} onChange={this.onValueChange}/>
                    </div>
                    <div className="add-form-item">
                        <label>Status</label>
                        <input type="text" placeholder="Enter order status" name='status' value={status} onChange={this.onValueChange}/>
                    </div>
                    <input type="submit" className='add-form-submit'/>
                </form>
                <hr/>
            </div>
        )
    }
}

export default ShipmentAddForm;