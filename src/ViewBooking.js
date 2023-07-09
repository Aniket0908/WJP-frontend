export default function ViewBooking() {
  return (
    <>
      <div
        className="row justify-content-center align-items-center "
        style={{ height: "100vh" }}
      >
        <div className="col-md-10 col-sm-12">
          <table className="table table-success table-striped">
            <thead>
              <tr>
                <th scope="col">No.</th>
                <th scope="col">Booking Date</th>
                <th scope="col">Cylinder Id</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">1</th>
                <td>Mark</td>
                <td>Otto</td>
              </tr>
              <tr>
                <th scope="row">2</th>
                <td>Jacob</td>
                <td>Thornton</td>
              </tr>
              <tr>
                <th scope="row">3</th>
                <td>Larry the Bird</td>
                <td>Larry the Bird</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
