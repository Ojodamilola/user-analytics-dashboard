import React, { useState,  } from "react";
//import "./Signup.css";
import { Form, Button, Card, Container, Alert, } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";
const Signup = () => {
  /*
   const emailRef = useRef();
   const passwordRef = useRef();
   const confirmPasswordRef = useRef();*/
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

 const { signup, currentUser } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
 

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      return setError("Passwords do not match");
    }
    try {
      setError("");
      setLoading(true);
      await signup(email, password);
      navigate('/');
    } catch (error) {
      console.log(error);
      setError("Failed to create an account");
    }
    setLoading(false);
    setEmail('');
    setPassword('');
    setConfirmPassword('');
  };
  
  return (
    <>
      <Container className="d-flex align-content-center justify-content-center">
        <div className="w-100 signup" style={{ maxWidth: "400px", marginTop:'10%', }}>
          <Card>
            <Card.Body>
              {<p>{currentUser && currentUser.email}</p>}
              <h2 className="text-center mb-2"> Sign Up</h2>{" "}
              
              {/*<p>{currentUser.email}</p>*/}
              {error && <Alert variant="danger">{error}</Alert>}
              <Form onSubmit={handleSubmit}>
                <Form.Group id="email">
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    type="email"
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                    required
                  />
                </Form.Group>
                <Form.Group id="password">
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    type="password"
                    onChange={(e) => setPassword(e.target.value)}
                    value={password}
                    required
                  />
                </Form.Group>
                <Form.Group id="confirmPassword">
                  <Form.Label>Confirm Password</Form.Label>
                  <Form.Control
                    type="password"
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    value={confirmPassword}
                    required
                  />
                </Form.Group>
                <Button
                  disabled={loading}
                  className="w-100 mt-3 h-100 btn-dark"
                  type="submit"
                >
                 {loading ? <div className="spinner-border text-secondary" role="status"><span className="sr-only"></span></div> : "Sign Up"} 
                </Button>
              </Form>
            </Card.Body>
          </Card>
          <div className="w-100 text-center mt-2">
            Already have an account? <Link to="/login">Log In</Link>
            
          </div>
        </div>
      </Container>
    </>
  );
};

export default Signup;
