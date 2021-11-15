import {useState} from 'react'

export default function Setting() {
    const [price, setPrice] = useState(0)
    const [promo, setPromo] = useState(0)
    const [loading1, setLoading1] = useState(false)
    const [loading2, setLoading2] = useState(false)
    return (
        <div className="section">
            <h1>Setting</h1>
            <form>
                <div className="form-group">
                    <label htmlFor="PricePerID">Price Per ID</label>
                    <div className="d-flex">
                        <input
                            type="number"
                            className="form-control w-100"
                            id="PricePerID"
                            aria-describedby="priceHelp"
                            placeholder="Enter price"
                            value={price}
                            onChange={(e) => setPrice(e.target.value)}
                        />
                        <button
                            className="btn btn-primary ml-2"
                            onClick={(e) => {
                                e.preventDefault()
                                setLoading1(true)
                                setTimeout(() => {
                                    setLoading1(false)
                                }, 2000)
                            }}
                        >
                            {loading1 ? 'Loading...' : 'Save'}
                        </button>
                    </div>
                    <small id="priceHelp" className="form-text text-muted">Will effect at next user login</small>
                </div>
                <div className="form-group">
                    <label htmlFor="Promotion">Promotion Message</label>
                    <div className="d-flex">
                        <input
                            type="text"
                            className="form-control w-100"
                            id="Promotion"
                            aria-describedby="promotionHelp"
                            placeholder="Enter promotion message"
                            value={promo}
                            onChange={(e) => setPromo(e.target.value)}
                        />
                        <button
                            className="btn btn-primary ml-2"
                            onClick={(e) => {
                                e.preventDefault()
                                setLoading2(true)
                                setTimeout(() => {
                                    setLoading2(false)
                                }, 2000)
                            }}
                        >
                            {loading2 ? 'Loading...' : 'Save'}
                        </button>
                    </div>
                    <small id="promotionHelp" className="form-text text-muted">Set blank to turn off Promotion</small>
                </div>
            </form>
        </div>
    )
}
