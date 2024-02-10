import React, {  useRef } from "react";
import { Container, Form, Button, Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
const UpdateProfile = () => {
  //edcation, hobbies, skills, bio,
  const educationRef = useRef();
  const skillsRef = useRef();
  const hobbiesRef = useRef();
  const bioRef = useRef();
  const experienceRef = useRef();
  const navigate = useNavigate();
  const handleUpdateProfile = () => {
    console.log("clicked");
    navigate("/profile");
  };
  return (
    <>
      <Container className="d-flex align-content-center justify-content-center">
        <div
          className="w-100 signup"
          style={{ maxWidth: "400px", marginTop: "10%" }}
        >
          <Card>
            <Card.Body>
              <h4 className="text-center mb-4">Update your Profile</h4>
              <Form
                onSubmit={handleUpdateProfile}
                id="updateProfile"
                name="updateProfile"
              >
                <Form.Group id="bio" className="mb-2">
                  <Form.Label>Write a Bio</Form.Label>
                  <Form.Control type="text" ref={bioRef} />
                </Form.Group>
                <Form.Group id="education" className="mb-2">
                  <Form.Label>Education</Form.Label>
                  <Form.Control type="text" ref={educationRef} />
                </Form.Group>
                <Form.Group id="experience" className="mb-2">
                  <Form.Label>Experience</Form.Label>
                  <Form.Control type="text" ref={experienceRef} />
                </Form.Group>
                <Form.Group id="skills" className="mb-2">
                  <Form.Label>Skills</Form.Label>
                  <Form.Control type="text" ref={skillsRef} />
                </Form.Group>
                <Form.Group id="hobbies" className="mb-2">
                  <Form.Label>Hobbies</Form.Label>
                  <Form.Control type="text" ref={hobbiesRef} />
                </Form.Group>
                <Button className="w-100 mt-3 h-100 btn-dark" type="submit">
                  Save Changes
                </Button>
              </Form>
            </Card.Body>
          </Card>
        </div>
      </Container>
    </>
  );
};

export default UpdateProfile;
