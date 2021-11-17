import axios from 'axios'

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


function Razorpay({amount, userDetail}) {
	console.log(userDetail)
	async function displayRazorpay() {
		const res = await loadScript('https://checkout.razorpay.com/v1/checkout.js')

		if (!res) {
			alert('Razorpay SDK failed to load. Are you online?')
			return
		}

        const data = await axios.post('https://stormy-ridge-27884.herokuapp.com/pay/razorpay', {
            amount: parseInt(amount),
        })

		const options = {
			key: 'rzp_live_gPvbR0S04OUDro' ,
			currency: data.data.currency,
			amount: data.data.amount.toString(),
			order_id: data.data.id,
			name: 'Join Member',
			description: 'Fill this forum to join new Member',
			image: './favicon.svg',
			handler: (response) => {
				alert(response.razorpay_payment_id)
				alert(response.razorpay_order_id)
				alert(response.razorpay_signature)

				axios({
					method: "POST",
					data: {
						token: localStorage.getItem("token"),
						username: userDetail.uname,
						name: userDetail.name,
						phone: userDetail.phone,
						email: userDetail.email,
						aadhar: userDetail.aadhar,
						head: userDetail.head
					},
					withCredentials: true,
					url: "https://stormy-ridge-27884.herokuapp.com/register",
				}).then(res => {
					console.log(res.data)
					if (res.data.status === "success") {
						alert("Registered Successfully")
					} else {
						alert("Registration Failed")
					}
				})
				
			},
			prefill: {
				name: userDetail.name,
				email: userDetail.email,
				phone_number: userDetail.phone
			}
		}
		const paymentObject = new window.Razorpay(options)
		paymentObject.open()
	}

	return (
		<button onClick={(e) => {
			e.preventDefault()
			displayRazorpay()
		}} className="btn-primary">Pay Rs. { amount }</button>
	)
}

export default Razorpay;