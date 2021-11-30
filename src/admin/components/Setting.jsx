import { useState } from "react";
import axios from "axios";

export default function Setting() {
  const [price, setPrice] = useState(0);
  const [promo, setPromo] = useState(0);
  const [loading1, setLoading1] = useState(false);
  const [loading2, setLoading2] = useState(false);

  const savePromotionMessage = (msg) => {
    if (msg.length > 0) {
      setLoading2(true);
      axios
        .post("https://stormy-ridge-27884.herokuapp.com/update_promotion", {
          token: localStorage.getItem("token"),
          promotion: msg,
        })
        .then((res) => {
          setLoading2(false);
          console.log(res);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  const setPricePerID = (price) => {
    if (price.length > 0) {
      setLoading1(true);
      axios
        .post("https://stormy-ridge-27884.herokuapp.com/update_id_price", {
          token: localStorage.getItem("token"),
          id_price: price,
        })
        .then((res) => {
          setLoading1(false);
          console.log(res);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  return (
    <div className="section">
      <h1>Setting</h1>
      <form>
        <div className="form-group">
          <label htmlFor="PricePerID">Price Per ID</label>
          <div className="d-flex">
            <input
              type="number"
              className="form-control w-100 text-left"
              id="PricePerID"
              aria-describedby="priceHelp"
              placeholder="Enter price"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
            <button
              className="btn btn-primary ml-2"
              onClick={(e) => {
                e.preventDefault();
                setLoading1(true);
                setTimeout(() => {
                  setLoading1(false);
                }, 2000);
                setPricePerID(price);
              }}
            >
              {loading1 ? "Loading..." : "Save"}
            </button>
          </div>
          <small id="priceHelp" className="form-text text-muted">
            Will effect at next user login
          </small>
        </div>
        <div className="form-group">
          <label htmlFor="Promotion">Promotion Message</label>
          <div className="d-flex">
            <input
              type="text"
              className="form-control w-100 text-left"
              id="Promotion"
              aria-describedby="promotionHelp"
              placeholder="Enter promotion message"
              value={promo}
              onChange={(e) => setPromo(e.target.value)}
            />
            <button
              className="btn btn-primary ml-2"
              onClick={(e) => {
                e.preventDefault();
                setLoading2(true);
                setTimeout(() => {
                  setLoading2(false);
                }, 2000);
                savePromotionMessage(promo);
              }}
            >
              {loading2 ? "Loading..." : "Save"}
            </button>
          </div>
          <small id="promotionHelp" className="form-text text-muted">
            Set 'off' to turn off Promotion
          </small>
        </div>
      </form>
    </div>
  );
}
