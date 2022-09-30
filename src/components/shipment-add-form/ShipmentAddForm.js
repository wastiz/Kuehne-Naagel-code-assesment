import './ShipmentAddForm.scss'

const ShipmentAddForm = () => {
    return (
        <div className="add-form">
            <hr/>
            <h4>Shipment details</h4>
            <form>
                <label>orderNo</label>
                <input type="text" placeholder=""/>
            </form>
            <hr/>
        </div>
    )
}

export default ShipmentAddForm;