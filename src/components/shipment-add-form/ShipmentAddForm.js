import './ShipmentAddForm.scss'

const ShipmentAddForm = () => {
    return (
        <div className="add-form">
            <hr/>
            <h4>Shipment details</h4>
            <form className='add-form-form'>
                <div className="add-form-item">
                    <label>orderNo</label>
                    <input type="text" placeholder="Enter order number"/>
                </div>
                <div className="add-form-item">
                    <label>Date</label>
                    <input type="text" placeholder="Enter order date"/>
                </div>
                <div className="add-form-item">
                    <label>Customer</label>
                    <input type="text" placeholder="Enter order customer"/>
                </div>
                <div className="add-form-item">
                    <label>TrackingNo</label>
                    <input type="text" placeholder="Enter order tracking number"/>
                </div>
                <div className="add-form-item">
                    <label>Consignee</label>
                    <input type="text" placeholder="Enter order consignee"/>
                </div>
                <div className="add-form-item">
                    <label>Status</label>
                    <input type="text" placeholder="Enter order status"/>
                </div>
            </form>
            <hr/>
        </div>
    )
}

export default ShipmentAddForm;