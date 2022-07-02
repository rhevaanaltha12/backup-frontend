import axios from "axios";
import React, { useEffect, useState } from "react";
import Navbar from "../../components/Home/Navbar/Navbar";
import useFetch from "../../utils/useFetch";
import "./History.css";

export default function History() {
  const [data, setDataList] = useState([]);
  const storage = JSON.parse(localStorage.getItem("user"));
  const { jwt } = storage;
  const headers = {
    headers: {
      Authorization: `Bearer ${jwt}`,
    },
  };

  //   const { loading, error, data } = useFetch(
  //     "http://localhost:1337/api/categories?populate=image"
  //   );
  //   if (loading) return <p>loading...</p>;
  //   if (error) return <p>error...</p>;
  //   console.log(data.data);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(
          "http://localhost:1337/api/transactions?populate[0]=transaction_detail&populate[cart][populate][1]=cart_items&populate[cart][populate][cart_items][populate][2]=product",
          headers
        );

        setDataList(res.data);
      } catch (error) {
        console.error(error.message);
      }
      //   const res = await fetch(
      //     "http://localhost:1337/api/transactions?populate[0]=transaction_detail&populate[cart][populate][1]=cart_items",
      //     headers
      //   );
      //   setDataList(res.data);
    };

    fetchData();
  }, []);

  //   console.log(data.data);
  //   const item = data.data;
  let item;
  if (data.data) {
    item = data.data;
    console.log(item);
  }

  //   useEffect(() => {
  //     const fetchData = async () => {
  //       try {
  //         const res = await axios.get(
  //           "http://localhost:1337/api/transactions?populate[0]=transaction_detail&populate[cart][populate][1]=cart_items",
  //           {
  //             headers: {
  //               Authorization: `Bearer ${jwt}`,
  //             },
  //           }
  //         );

  //         setDataList(res.data);
  //       } catch (error) {
  //         console.error(error.message);
  //       }
  //     };

  //     fetchData();
  //   }, []);

  return (
    <div>
      <Navbar />
      <section id="history">
        <div className="container">
          <div className="row">
            <div className="col-md-10 mx-auto">
              <div className="card">
                <div className="card-body">
                  <div class="table-responsive">
                    <table class="table">
                      <thead>
                        <tr>
                          <th scope="col">#id</th>
                          <th scope="col">Nama Barang</th>
                          <th scope="col">Banyak</th>
                          <th scope="col">Total Pembelian</th>
                          <th scope="col">Tanggal</th>
                          <th scope="col">Status</th>
                        </tr>
                      </thead>
                      <tbody>
                        {item &&
                          item.map((value) => (
                            <tr>
                              <th scope="row">
                                {value.attributes.cart.data.id}
                              </th>
                              <td>
                                {value.attributes.cart.data.attributes.cart_items.data.map(
                                  (value) => {
                                    return (
                                      <div>
                                        {
                                          value.attributes.product.data
                                            .attributes.name
                                        }
                                        <br />
                                        <br />
                                      </div>
                                    );
                                  }
                                )}
                              </td>
                              <td>
                                {value.attributes.cart.data.attributes.count}
                              </td>
                              <td>
                                {value.attributes.cart.data.attributes.total}
                              </td>
                              <td>
                                {
                                  value.attributes.cart.data.attributes
                                    .updatedAt
                                }
                              </td>
                              <td>{value.attributes.payment_status}</td>
                            </tr>
                          ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
