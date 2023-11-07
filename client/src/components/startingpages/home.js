import React from "react";
import Homenav from "../navpages/homenav";
// import { MDBCarousel, MDBCarouselItem } from "mdb-react-ui-kit";
// import {
//   CDBCard,
//   CDBCardImage,
//   CDBCardBody,
//   CDBCardTitle,
//   CDBCardText,
//   CDBBtn,
//   CDBContainer,
// } from "cdbreact";
import acet from "../images/homeimgs/acet.jpg";
import acoe from "../images/homeimgs/acoe.jpg";
import aec from "../images/homeimgs/aec.jpg";
import vijay from "../images/people/passport_photo.jpg";

function home() {
  return (
    <>
      <Homenav />

      {/* <MDBCarousel showIndicators showControls fade>
        <MDBCarouselItem
          className="w-100 d-block"
          itemId={1}
          src={acet}
          alt="..."
        >
          <h5>First slide label</h5>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </MDBCarouselItem>

        <MDBCarouselItem
          className="w-100 d-block"
          itemId={2}
          src={aec}
          alt="..."
        >
          <h5>Second slide label</h5>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </MDBCarouselItem>

        <MDBCarouselItem
          className="w-100 d-block"
          itemId={3}
          src={acoe}
          alt="..."
        >
          <h5>Third slide label</h5>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </MDBCarouselItem>
      </MDBCarousel> */}

      <div className="list-style-type-square">
        <p>
          The Central Maintenance System (CMS) is a web-based application that
          allows students, employees, and workers to report maintenance issues.
          The CMS is designed to streamline the maintenance process by providing
          a centralized location for users to submit complaints and track their
          progress.
        </p>
        <p>
          The CMS can be used to report a variety of maintenance issues,
          including:
        </p>
        <ul>
          <li>Electrical problems</li>
          <li>Plumbing problems</li>
          <li>Civil problems</li>
          <li>Carpentry problems</li>
          <li>And more</li>
        </ul>
        <p>
          To use the CMS, users must first create an account. Once they have an
          account, they can submit a complaint by filling out a form. The form
          asks for the following information:
        </p>
        <ul>
          <li>The type of problem</li>
          <li>The location of the problem</li>
          <li>A description of the problem</li>
          <li>A contact phone number</li>
        </ul>
        <p>
          After submitting a complaint, users can track its progress by logging
          into the CMS. The CMS will show the status of the complaint, as well
          as any updates from the maintenance team.
        </p>
        <p>
          The CMS is a valuable tool for improving the maintenance process. By
          providing a centralized location for users to submit complaints, the
          CMS can help to ensure that problems are addressed quickly and
          efficiently.
        </p>
        <p>Here are some additional benefits of using the CMS:</p>
        <ul>
          <li>
            It can help to improve communication between users and the
            maintenance team.
          </li>
          <li>It can help to track the status of maintenance issues.</li>
          <li>It can help to prevent problems from becoming major issues.</li>
          <li>
            It can help to improve the overall satisfaction of users with the
            maintenance process.
          </li>
        </ul>
        <p>
          If you are looking for a way to improve the maintenance process in
          your organization, the CMS is a great option. It is a user-friendly
          and efficient way to report and track maintenance issues.
        </p>
      </div>

      <div></div>

      {/* <div>
        <CDBContainer>
          <CDBCard style={{ width: "25rem" }}>
            <CDBCardImage
              className="img-fluid"
              src={vijay}
              alt="Contrast React Bootstrap Card component"
            />
            <CDBCardBody>
              <CDBCardTitle>Basic</CDBCardTitle>
              <CDBCardText>
                This is just a card text Get important notifications about you
                or activity you've missed{" "}
              </CDBCardText>
              <CDBBtn>Button</CDBBtn>
            </CDBCardBody>
          </CDBCard>
        </CDBContainer> 
      </div>*/}
    </>
  );
}

export default home;
