import axios from "axios";
import { useState } from "react";
import { Button, Form } from "react-bootstrap";

function loadScript(src) {
    return new Promise((resolve) => {
        const script = document.createElement('script')
        script.src = src
        script.onload = () => {
            resolve(true)
        }
        script.onerror = () => {
            resolve(false)
        }
        document.body.appendChild(script)
    })
}
    
function Activation() {
    const user = JSON.parse(localStorage.getItem("user"));
    const [noofid, setNumberOfId] = useState(0);
    const [perid] = useState(localStorage.getItem("id_price"));
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);    
    
    const buyActivationWalletRecharge = (e) => {
        e.preventDefault();
        axios.post("http://stormy-ridge-27884.herokuapp.com/buy_ids", {
            token: localStorage.getItem("token"),
            no_of_ids: parseInt(noofid),
            amount: parseInt(perid * noofid)
        }).then(res => {
            console.log(res.data);
            user.wallet = res.data.balance;
            user.id_count += parseInt(noofid)
            localStorage.setItem("user", JSON.stringify(user));
            setLoading(false);
        }).catch(err => {
            console.log(err);
            setLoading(false);
            setError(true);
        });
    }

    const displayRazorpay = async () => {
		const res = await loadScript('https://checkout.razorpay.com/v1/checkout.js')

		if (!res) {
			alert('Razorpay SDK failed to load. Are you online?')
			return
		}

        const data = await axios.post('https://stormy-ridge-27884.herokuapp.com/pay/razorpay', {
            amount: parseInt(perid * noofid),
        })

		const options = {
			key: 'rzp_test_E1a23udbRfmhNA' ,
			// key: 'rzp_live_gPvbR0S04OUDro' ,
			currency: data.data.currency,
			amount: data.data.amount.toString(),
			order_id: data.data.id,
			name: 'Join Member',
			description: 'Fill this forum to join new Member',
			image: './favicon.svg',
			handler: (response) => {
				/* alert(response.razorpay_payment_id)
				alert(response.razorpay_order_id)
				alert(response.razorpay_signature) */

                axios.post("https://stormy-ridge-27884.herokuapp.com/buy_ids", {
                    token: localStorage.getItem("token"),
                    no_of_ids: parseInt(noofid),
                    amount: parseInt(perid * noofid)
                }).then(res => {
                    console.log(res.data);
                    user.wallet = res.data.balance;
                    user.id_count += parseInt(noofid)
                    localStorage.setItem("user", JSON.stringify(user));
                    setLoading(false);
                }).catch(err => {
                    console.log(err);
                    setLoading(false);
                    setError(true);
                });
				
			},
			prefill: {
				name: user.name,
				email: user.email,
				contact: user.phone
			}
		}
		const paymentObject = new window.Razorpay(options)
		paymentObject.open()
    }
    
    return (
        <div className="active-container">
            <h2
                className={`text-center ${error ? "text-danger" : "text-primary"}`}
                
            >
            {user.wallet.activation_wallet > 0 ? "Your activation wallet balance is " + user.wallet.activation_wallet: "You don't have any wallet balance"}
            </h2>
            {/* <h1 className="active-head">Buy ID's From Activation Wallet</h1> */}
            <Form onSubmit={displayRazorpay}>
                <Form.Group className="mb-3" controlId="formNoOfID">
                    <Form.Label>Number Of ID: </Form.Label>
                    <Form.Control
                        type="number"
                        name="id"
                        placeholder="Enter number of id "
                        className="text-left pl-2 w-100"
                        value={noofid || 0}
                        onChange={(e) => setNumberOfId(e.target.value)}
                    />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formPerIDValue">
                    <Form.Label>Per ID: </Form.Label>
                    <Form.Control
                        type="number"
                        defaultValue={perid || 0}
                        className="text-left pl-2 w-100"
                        disabled
                    />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formFinalAmount">
                    <Form.Label>Final Amount: </Form.Label>
                    <Form.Control
                        type="number"
                        name="famount"
                        className="text-left pl-2 w-100"
                        value={noofid && perid ? noofid * perid : 0}
                        disabled
                        readOnly
                    />
                </Form.Group>
                <Button
                    variant={noofid && perid ? "primary" : "secondary"}
                    type="submit"
                    className={loading ? "btn-secondary" : "btn-primary"}
                    onClick={() => {
                        setLoading(true)
                    }}
                >
                    {loading ? "Loading..." : "Buy"}
                </Button>

            </Form>
        </div>
    );
}

export default Activation;
