import React from "react";
import { Button, Card, Container } from "react-bootstrap";
import {
  Facebook,
  Instagram,
  Linkedin,
  Twitter,
} from "react-bootstrap-icons";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import "./Profile.css";
import { Link } from "react-router-dom";
// Professional Profile Component
const Profile = () => {
 
  
  //for edit profile you are going to have a modal or popper or a page. to add sections, education, hobbies, skills,

  return (
    <div className="container-fluid profileBody">
      <Container className="container d-flex justify-content-center">
        <Card className="p-4 mt-5">
          <Card.Body>
            <div className=" image d-flex flex-column justify-content-center align-items-center">
              <Button className="btn btn-secondary">
                <img
                alt="img"
                  src="https://i.imgur.com/wvxPV9S.png"
                  style={{ height: 100, width: 100 }}
                />
              </Button>
              <span className="name mt-3">Lorem Ipsum</span>{" "}
              <span className="idd">@loremipsum</span>
            </div>
            <div className="d-flex flex-row justify-content-center align-items-center g-2">
              {" "}
              <span className="idd1">Oxc4c16a645_b21a</span>{" "}
              <span className="copyIcon">
                <ContentCopyIcon />
              </span>{" "}
            </div>
            <div className=" d-flex align-items-center justify-content-center mt-2">
             <Link to='/updateprofile'><Button className="btn1 btn-dark">Edit Profile</Button></Link>
            </div>
            <div className="text mt-3">
              <span>
                Lorem Ipsum is a enthusiasit frontend devoper.
                <br /> Creative Developer by Day | Fashion Designer by night.{" "}
              </span>{" "}
            </div>
            <div className="gap-3 mt-3 icons d-flex flex-row justify-content-center align-items-center">
              {" "}
              <span>
                <Twitter />
              </span>{" "}
              <span>
                <Facebook />
              </span>{" "}
              <span>
                <Instagram />
              </span>{" "}
              <span>
                <Linkedin />
              </span>{" "}
            </div>{" "}
          </Card.Body>
        </Card>
      </Container>
    </div>
  );
};



export default Profile;
