import React, { useState } from "react";
import { Container, Form, Button, Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
const UpdateProfile = () => {
  //edcation, hobbies, skills, bio,
  const [education, setEducation] = useState("");
  const [skills, setSkills] = useState("");
  const [hobbies, setHobbies] = useState("");
  const [bio, setBio] = useState("");
  const [experience, setExperience] = useState("");
  const navigate = useNavigate();
  const handleUpdateProfile = () => {
    console.log("clicked");
    navigate.push("/profile");
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
              <Form onSubmit={handleUpdateProfile} id="updateProfile" name="updateProfile">
            <Form.Group id="bio" className="mb-2">
              <Form.Label>Edit Bio</Form.Label>
              <Form.Control type="text" value={bio} onChange={setBio} />
            </Form.Group>
            <Form.Group id="education" className="mb-2">
              <Form.Label>Education</Form.Label>
              <Form.Control
                type="text"
                value={education}
                onChange={setEducation}
              />
            </Form.Group>
            <Form.Group id="experience" className="mb-2">
              <Form.Label>Experience</Form.Label>
              <Form.Control
                type="text"
                value={experience}
                onChange={setExperience}
              />
            </Form.Group>
            <Form.Group id="skills" className="mb-2">
              <Form.Label>Skills</Form.Label>
              <Form.Control type="text" value={skills} onChange={setSkills} />
            </Form.Group>
            <Form.Group id="hobbies" className="mb-2">
              <Form.Label>Hobbies</Form.Label>
              <Form.Control type="text" value={hobbies} onChange={setHobbies} />
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
