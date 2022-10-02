class ShipmentService {

    getResource = async (url) => {
        let res = await fetch(url);
        if (!res.ok) {
            throw new Error(`Could not fetch ${url}, status ${res.status}`);
        } else {
            return await res.json();
        }
    }
    getAllShipment = async () => {
        const res = await this.getResource('https://my.api.mockaroo.com/shipments.json?key=5e0b62d0');
        return res
    }

}

export default ShipmentService;
