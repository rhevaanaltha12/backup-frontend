import * as React from "react";
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
import { Link } from "react-router-dom";
import "./Cart.css";
import Navbar from "../../components/Home/Navbar/Navbar";
import Footer from "../../components/Home/Footer/Footer";
function createData(image, name, price, menu) {
  return { image, name, price, menu };
}
const rows = [
  createData(Images1, "Sofa Ternyaman", "$29,112", "Remove"),
  createData(Images2, "Sneaker", "$80,309", "Remove"),
  createData(Images3, "Coffee Holder", "$13,492", "Remove"),
];

export default function Cart() {
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
                  {rows.map((row) => (
                    <TableRow
                      key={row.name}
                      sx={{
                        "&:last-child td, &:last-child th": { border: 0 },
                      }}
                    >
                      <TableCell
                        className="table-body"
                        component="th"
                        scope="row"
                      >
                        <img src={row.image} alt="" />
                      </TableCell>
                      <TableCell className="table-body" align="right">
                        {row.name}
                      </TableCell>
                      <TableCell className="table-body" align="right">
                        {row.price}
                      </TableCell>
                      <TableCell className="table-body" align="right">
                        <button className="btn btn-primary" type="button">
                          {row.menu}
                        </button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
            <form className="row g-3">
              <div className="shipping-details">Shipping Details</div>
              <div className="col-md-6">
                <label for="inputAddress" className="form-label">
                  Address
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="inputAddress"
                  placeholder="Contoh: JL.Burung"
                />
              </div>
              <div className="col-md-6">
                <label for="inputAddress2" className="form-label">
                  Address 2
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="inputAddress2"
                  placeholder="Contoh: Blok B2 No. 34"
                />
              </div>
              {/* <div className="col-md-6">
                <label for="inputEmail4" className="form-label">
                  Email
                </label>
                <input type="email" className="form-control" id="inputEmail4" />
              </div>
              <div className="col-md-6">
                <label for="inputPassword4" className="form-label">
                  Password
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="inputPassword4"
                />
              </div> */}

              <div className="col-md-4">
                <label for="inputCity" className="form-label">
                  Province
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="inputCity"
                  placeholder="Contoh: DKI Jakarta"
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
                />
              </div>
              <div className="col-md-6">
                <label for="inputCity" className="form-label">
                  Country
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="inputCity"
                  placeholder="Contoh: Indonesia"
                />
              </div>
              <div className="col-md-6">
                <label for="inputCity" className="form-label">
                  Phone Number
                </label>
                <input
                  type="number"
                  className="form-control"
                  id="inputCity"
                  placeholder="Contoh: 0812345678"
                />
              </div>
              <div className="shipping-details">Payment Informations</div>
              <div className="col-md-2">
                <div className="payment-price">$10</div>
                <div className="payment-title">Country Tax</div>
              </div>
              <div className="col-md-2">
                <div className="payment-price">$280</div>
                <div className="payment-title">Product Insurance</div>
              </div>
              <div className="col-md-2">
                <div className="payment-price">$580</div>
                <div className="payment-title">Ship to Jakarta</div>
              </div>
              <div className="col-md-2">
                <div className="payment-total">$392,409</div>
                <div className="payment-title">Total</div>
              </div>
              <div className="col-md-4">
                <Link to="/success-transaction">
                  <button
                    className="btn btn-primary btn-checkout"
                    type="submit"
                  >
                    Checkout Now
                  </button>
                </Link>
              </div>
            </form>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
