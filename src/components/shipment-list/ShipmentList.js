import {Component} from 'react';
import './ShipmentList.scss'
import ShipmentService from '../../services/ShipmentService';
import Spinner from '../spinner/spinner';
import ErrorMessage from '../errorMessage/errorMessage';

class ShipmentList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            shipmentList: [],
            loading: true,
            error: false,
            newItemLoading: false,
            offset: 0,
            shipmentEnded: false
        }
    }

    shipmentService = new ShipmentService();

    componentDidMount() {
        this.onRequest();
        this.deleteItem = (id) => {
            this.setState(({shipmentList}) => {
                  const index = shipmentList.findIndex(item => item.id === id);
                  const old = shipmentList[index];
                  const newItem = {...old, increase: !old.increase};
                  const newArr = [...shipmentList.slice(0, index), newItem, shipmentList.slice(index + 1)];
                  return {
                    data: newArr
                  }
                })
        }
    }

    onRequest = () => {
        this.onShipmentListLoading();
        this.shipmentService.getAllShipment()
            .then(this.onShipmentListLoaded)
            .catch(this.onError)
    }

    onShipmentListLoading = () => {
        this.setState({
            newItemLoading: true
        })
    }

    onShipmentListLoaded = (newShipmentList) => {
        let ended = false;
        if (newShipmentList.length < 9) {
            ended = true;
        }

        this.setState(({offset, shipmentList}) => ({
            shipmentList: [...shipmentList, ...newShipmentList],
            loading: false,
            newItemLoading: false,
            offset: offset + 9,
            charEnded: ended
        }))
    }

    onError = () => {
        this.setState({
            error: true,
            loading: false
        })
    }

    renderItems = (arr) => {
        const items =  arr.map((item) => {
            return (
                <li className='shipment-list-item' key={item.id} onClick={() => this.props.onShipmentSelected(item.id)}>
                    <p>{item.orderNo}</p>
                    <p>{item.date}</p>
                    <p>{item.customer}</p>
                    <p>{item.trackingNo}</p>
                    <p>{item.consignee}</p>
                    <p>{item.status}</p>
                    <button className='update' onClick={this.deleteItem()}>
                        <img src='https://cdn-icons-png.flaticon.com/512/61/61444.png' alt='no update icon'/>
                    </button>
                    <button className='cross'>
                        <img src='https://cdn-icons-png.flaticon.com/512/32/32178.png' alt='no cross icon'/>
                    </button>
                </li>
            )
        });
        // А эта конструкция вынесена для центровки спиннера/ошибки
        return (
            <ul>
                {items}
            </ul>
        )
    }

    render () {
        //const {orderNo, date, customer, trackingNo, consignee, status} = this.props
        const {shipmentList, loading, error, offset, newItemLoading, charEnded} = this.state;
        
        const items = this.renderItems(shipmentList);

        const errorMessage = error ? <ErrorMessage/> : null;
        const spinner = loading ? <Spinner/> : null;
        const content = !(loading || error) ? items : null;

        return (
            <main className='shipment-list'>
                {errorMessage}
                {spinner}
                {content}
                <button disabled={newItemLoading} style={{'display': charEnded ? 'none' : 'block'}} onClick={() => this.onRequest(offset)}>Load More</button>
            </main>
        )
    }
}

export default ShipmentList;