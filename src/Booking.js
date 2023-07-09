import { useEffect, useState } from "react";
import axios from "axios";

export default function Booking() {
  let [pending, setPending] = useState({
    id: "",
    name: "",
    eamil: "",
    mobileNo: "",
    dob: "",
    aadharNo: "",
    address: "",
    status: "",
  });
  let [cylinder, setCylinder] = useState({
    id: "",
    cylinderType: "",
    price: "",
    quantity: "",
  });
  let [gasBooking, setGasBooking] = useState({});
  useEffect(() => {
    onEnter();
  }, []);
  let onEnter = () => {
    let url = `http://localhost:8080/bookingDetails?id=1`;

    axios.get(url).then((response) => {
      setPending(response.data);
      console.log(response.data);
    });
    let url1 = `http://localhost:8080/fetchCylinder?id=1`;
    axios.get(url1).then((response) => {
      setCylinder(response.data);
      console.log(response.data);
    });
  };

  let bookCylinder = () => {
    let url = `http://localhost:8080/book?cylinderid=1&conid=1`;
    axios.get(url).then((response) => {
      console.log(response.data);
    });
  };
  return (
    <>
      <div
        className=" row  justify-content-center align-items-center"
        style={{ height: "100vh" }}
      >
        <div className=" border border-primary-subtle bg-secondary-subtle  col-md-6 col-sm-12">
          <h1>Book Your Cylinder</h1>
          <h3>Refill cylinder request for</h3>
          <select id="dropdown">
            <option value="N/A">LPG Refill - 14.2 Kg</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
          </select>
          <div className="row d-flex">
            <div className="col-md-6 col-sm-12">
              <h4>Distributor Name</h4>
              <p className="">INDANE</p>
              <h4>Consumer Name</h4>
              <p>{pending.name}</p>
              <h4>Registered Contact Number</h4>
              <p>{pending.mobileNo}</p>
            </div>
            <div className="col-md-6 col-sm-12">
              <h4>Consumer Number</h4>
              <p>{pending.mobile_no}</p>
              <h4>Shipping Address</h4>
              <p>{pending.address}</p>
              <h4>Consumer Email-Id</h4>
              <p>{pending.eamil}</p>
            </div>
          </div>
          <div>
            <h4>Price</h4>
            <p>{cylinder.price}</p>
          </div>
          <div className="mb-2 justify-content-center">
            <button
              className="btn  w-25 btn-primary "
              onClick={bookCylinder}
              type="button"
            >
              Book
            </button>
            <button className="btn ms-2 w-25 btn-primary " type="button">
              Cancel
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
