import React, { useEffect, useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Images1 from "../../assets/image1.jpg";
import Images2 from "../../assets/image2.jpg";
import Images3 from "../../assets/image3.jpg";
import Button from "@mui/material/Button";
import { Link, useNavigate } from "react-router-dom";
import "./Cart.css";
import Navbar from "../../components/Home/Navbar/Navbar";
import Footer from "../../components/Home/Footer/Footer";
import axios from "axios";

function createData(image, name, price, menu) {
  return { image, name, price, menu };
}
const rows = [
  createData(Images1, "Sofa Ternyaman", "$29,112", "Remove"),
  createData(Images2, "Sneaker", "$80,309", "Remove"),
  createData(Images3, "Coffee Holder", "$13,492", "Remove"),
];

export default function Cart() {
  const storage = JSON.parse(localStorage.getItem("user"));
  const { jwt } = storage;
  const headers = {
    headers: {
      Authorization: `Bearer ${jwt}`,
    }
  }

  const navigate = useNavigate();

  const [response, setResponse] = useState([]);

  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [province, setProvince] = useState("");
  const [city, setCity] = useState("");
  const [postalCode, setPostalCode] = useState("");
  const [country, setCountry] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  const nameOnChange = (e) => {
    setName(e.target.value);
  };
  const addressOnChange = (e) => {
    setAddress(e.target.value);
  };
  const provinceOnChange = (e) => {
    setProvince(e.target.value);
  };
  const cityOnChange = (e) => {
    setCity(e.target.value);
  };
  const postalCodeOnChange = (e) => {
    setPostalCode(e.target.value);
  };
  const countryOnChange = (e) => {
    setCountry(e.target.value);
  };
  const phoneNumberOnChange = (e) => {
    setPhoneNumber(e.target.value);
  };

  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get(
        "http://localhost:1337/api/carts?populate[cart_items][populate][0]=product&populate[cart_items][populate][product][fields][0]=price&populate[cart_items][populate][product][fields][1]=name&populate[cart_items][populate][product][fields][2]=image",
        headers
      );
      // .then((response) => {
      //   // localStorage.setItem("data", response.data);
      //   // console.log(response.data)
      //   setResponse(response);

      // })
      // .catch((err) => {
      //   console.log(err);
      // });
      const cartItems = res.data.data[0].attributes.cart_items.data;
      console.log(cartItems);
      setResponse(res.data);
    };

    fetchData();
  }, []);

  console.log(response);

  const submitHandler = (e) => {
    e.preventDefault();
    const shippingData = {
      // cart: response.data[0].id,
      data: {
        name,
        address,
        province: province,
        city,
        regency: '',
        zip_code: postalCode,
        country,
        phone_number: phoneNumber
    }
    };

    axios
      .post(
        "http://localhost:1337/api/carts/order",
        shippingData,
headers
      )
      .then((respon) => {
        console.log(respon);
        const transactionId = respon.data.data.id;

        alert("Success");
        navigate(`/success-transaction/${transactionId}`);
      })
      .catch(function (error) {
        console.log(error);

        alert("Failure");
      });
  };

  // const { loading, error, data } = useFetch(
  // 'http://localhost:1337/api/carts');
  return (
    <div>
      <Navbar />
      <section id="cart">
        <div className="container">
          <div className="row">
            <TableContainer className="test-container" component={Paper}>
              <Table
                className="test-table"
                sx={{ minWidth: 650 }}
                aria-label="simple table"
              >
                <TableHead>
                  <TableRow>
                    <TableCell className="table-row">Image</TableCell>
                    <TableCell className="table-row" align="right">
                      Name
                    </TableCell>
                    <TableCell className="table-row" align="right">
                      Price
                    </TableCell>
                    <TableCell className="table-row" align="right">
                      Menu
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {response.data &&
                    response.data[0].attributes.cart_items.data.map((row) => {
                      const product = row.attributes.product.data;
                      return (
                        <TableRow
                          key={product.attributes.name}
                          sx={{
                            "&:last-child td, &:last-child th": { border: 0 },
                          }}
                        >
                          <TableCell
                            className="table-body"
                            component="th"
                            scope="row"
                          >
                            <img
                              src={product.attributes.image}
                              style={{ width: "25%" }}
                              alt=""
                            />
                          </TableCell>
                          <TableCell className="table-body" align="right">
                            {product.attributes.name}
                          </TableCell>
                          <TableCell className="table-body" align="right">
                            Rp{product.attributes.price}
                          </TableCell>
                          <TableCell className="table-body" align="right">
                            <button className="btn btn-primary" type="button">
                              Remove
                            </button>
                          </TableCell>
                        </TableRow>
                      );
                    })}
                </TableBody>
              </Table>
            </TableContainer>
            <form onSubmit={submitHandler} className="row g-3">
              <div className="shipping-details">Shipping Details</div>
              <div className="col-md-4">
                <label for="inputName" className="form-label">
                  Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="inputName"
                  placeholder="Contoh: Rheva"
                  onChange={nameOnChange}
                />
              </div>
              <div className="col-md-4">
                <label for="inputAddress" className="form-label">
                  Address
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="inputAddress"
                  placeholder="Contoh: JL.Burung"
                  onChange={addressOnChange}
                />
              </div>

              <div className="col-md-4">
                <label for="inputCity" className="form-label">
                  Province
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="inputCity"
                  placeholder="Contoh: DKI Jakarta"
                  onChange={provinceOnChange}
                />
              </div>
              <div className="col-md-4">
                <label for="inputCity" className="form-label">
                  City
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="inputCity"
                  placeholder="Contoh: Jakarta Timur"
                  onChange={cityOnChange}
                />
              </div>
              <div className="col-md-4">
                <label for="inputZip" className="form-label">
                  Postal Code
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="inputZip"
                  placeholder="Contoh: 12345"
                  onChange={postalCodeOnChange}
                />
              </div>
              <div className="col-md-4">
                <label for="inputCity" className="form-label">
                  Country
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="inputCity"
                  placeholder="Contoh: Indonesia"
                  onChange={countryOnChange}
                />
              </div>
              <div className="col-md-4">
                <label for="inputCity" className="form-label">
                  Phone Number
                </label>
                <input
                  type="number"
                  className="form-control"
                  id="inputCity"
                  placeholder="Contoh: 0812345678"
                  onChange={phoneNumberOnChange}
                />
              </div>
              <div className="shipping-details">Payment Informations</div>
              <div className="col-md-2">
                <div className="payment-price">
                  Rp
                  {response.data && response.data[0].attributes.products_price}
                </div>
                <div className="payment-title">Harga Produk</div>
              </div>
              <div className="col-md-2">
                <div className="payment-price">
                  Rp{response.data && response.data[0].attributes.shipping_fee}
                </div>
                <div className="payment-title">Ship to Jakarta</div>
              </div>
              <div className="col-md-2">
                <div className="payment-total">
                  Rp{response.data && response.data[0].attributes.total}
                </div>
                <div className="payment-title">Total</div>
              </div>
              <div className="col-md-4">
                {/* <Link to="/success-transaction"> */}
                  <button
                    className="btn btn-primary btn-checkout"
                    type="submit"
                  >
                    Checkout Now
                  </button>
                {/* </Link> */}
              </div>
            </form>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
