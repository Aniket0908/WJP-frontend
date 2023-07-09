import Carousel from "react-bootstrap/Carousel";
import booking from "./booking.jpg";
import history from "./history-icon.jpg";
import { Card } from "react-bootstrap";
import { Button } from "react-bootstrap";
function Home() {
  return (
    <>
      <div
        className=" img-fluid "
        style={{
          backgroundImage: `url("https://hpcladmin.hindustanpetroleum.com/img/UploadedFiles/HomeBanner/EnglishBanners/1bd5f92de3eb45f895681389504c6356.jpg")`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundAttachment: "fixed",
          height: "50vh",

          display: "flex",
          width: "100vw",
        }}
      ></div>
      <hr />
      <div className="container mt-5 px-4 text-center">
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 justify-content-center">
          <div className="col mb-4">
            <Card style={{ width: "16rem" }}>
              <img
                src={booking}
                className="card-img-top imgCard"
                width={200} // Adjust the value to change the width
              />
              <Card.Body>
                <Card.Title>Booking</Card.Title>
                <Button variant="primary" onClick="">
                  Book
                </Button>
              </Card.Body>
            </Card>
          </div>
          <div className="col mb-4">
            <Card style={{ width: "16rem" }}>
              <img
                src={history}
                className="card-img-top imgCard"
                width={200} // Adjust the value to change the width
              />
              <Card.Body>
                <Card.Title>Booking History</Card.Title>
                <Button variant="primary" onClick="">
                  View
                </Button>
              </Card.Body>
            </Card>
          </div>
          <div className="col mb-4">
            <Card style={{ width: "16rem" }}>
              <img
                src={history}
                className="card-img-top imgCard"
                width={200} // Adjust the value to change the width
              />
              <Card.Body>
                <Card.Title>Booking History</Card.Title>
                <Button variant="primary" onClick="">
                  View
                </Button>
              </Card.Body>
            </Card>
          </div>
        </div>
      </div>
      <hr />
      <div className="container">
        <Carousel style={{ height: "10%" }}>
          <Carousel.Item interval={1000}>
            <img
              className="d-block w-100"
              src="https://picsum.photos/id/237/600/100"
              alt="First slide"
            />
            <Carousel.Caption>
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={500}>
            <img
              className="d-block w-100"
              src="https://picsum.photos/id/238/600/100"
              alt="Second slide"
            />
            <Carousel.Caption>
              <h3>Second slide label</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://picsum.photos/id/239/600/100"
              alt="Third slide"
            />
            <Carousel.Caption>
              <h3>Third slide label</h3>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>

      <footer
        className="text-center text-lg-start text-white"
        style={{ backgroundColor: "#4a3635" }}
      >
        <div className="container p-4 pb-0">
          <section className="">
            <div className="row">
              <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
                <h6 className="text-uppercase mb-4 font-weight-bold">
                  Information
                </h6>
                <p>
                  Online dating, also known as Internet dating, Virtual dating,
                  or Mobile app dating, is a method used by people with a goal
                  of searching for and interacting with potential romantic or
                  sexual partners, via the internet.
                </p>
              </div>

              <hr className="w-100 clearfix d-md-none" />

              <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mt-3">
                <h6 className="text-uppercase mb-4 font-weight-bold">
                  Products
                </h6>
                <p>
                  <a className="text-white">Video chat</a>
                </p>
                <p>
                  <a className="text-white">Play Music</a>
                </p>
              </div>

              <hr className="w-100 clearfix d-md-none" />

              <hr className="w-100 clearfix d-md-none" />

              <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mt-3">
                <h6 className="text-uppercase mb-4 font-weight-bold">
                  Contact
                </h6>
                <p>
                  <i className="fas fa-home mr-3"></i> Kharghar,Mumbai
                </p>
                <p>
                  <i className="fas fa-envelope mr-3"></i> aniketraut@gmail.com
                </p>
                <p>
                  <i className="fas fa-phone mr-3"></i> 9970853276
                </p>
                <p>
                  <i className="fas fa-print mr-3"></i> 7625452545
                </p>
              </div>

              <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mt-3">
                <h6 className="text-uppercase mb-4 font-weight-bold">
                  Follow us
                </h6>

                <a
                  className="btn btn-primary btn-floating m-1"
                  style={{ backgroundColor: "#3b5998" }}
                  href="https://www.facebook.com/"
                  role="button"
                >
                  <i className="fab fa-facebook-f"></i>
                </a>

                <a
                  className="btn btn-primary btn-floating m-1"
                  style={{ backgroundColor: "#55acee" }}
                  href="https://twitter.com/"
                  role="button"
                >
                  <i className="fab fa-twitter"></i>
                </a>

                <a
                  className="btn btn-primary btn-floating m-1"
                  style={{ backgroundColor: "#dd4b39" }}
                  href="https://discord.com/"
                  role="button"
                >
                  <i className="fa-brands fa-discord"></i>
                </a>

                <a
                  className="btn btn-primary btn-floating m-1"
                  style={{ backgroundColor: "#ac2bac" }}
                  href="https://www.instagram.com/"
                  role="button"
                >
                  <i className="fab fa-instagram"></i>
                </a>

                <a
                  className="btn btn-primary btn-floating m-1"
                  style={{ backgroundColor: "#0082ca" }}
                  href="https://www.linkedin.com"
                  role="button"
                >
                  <i className="fab fa-linkedin-in"></i>
                </a>

                <a
                  className="btn btn-primary btn-floating m-1"
                  style={{ backgroundColor: "#eef660" }}
                  href="https://www.snapchat.com/"
                  role="button"
                >
                  <i
                    className="fa-brands fa-snapchat"
                    style={{ color: "#000000" }}
                  ></i>
                </a>
              </div>
            </div>
          </section>
        </div>

        <div
          className="text-center p-3"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
        >
          © 2023 TeAmo.com: All rights reserved.
        </div>
      </footer>
    </>
  );
}
export default Home;
