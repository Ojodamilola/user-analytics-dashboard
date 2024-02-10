import React, { useRef, useState } from "react"
import { Container, Form, Button, Card, Alert } from "react-bootstrap"
import { useAuth } from '../../contexts/AuthContext'
import { Link,  useNavigate } from "react-router-dom"

export default function Login() {
  const emailRef = useRef()
  const passwordRef = useRef()
  const {login, currentUser} = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault()

    try {
      setError("")
      setLoading(true)
      await login(emailRef.current.value, passwordRef.current.value)
      navigate("/");
    } catch(error) {
      setError("Failed to log in")
      console.log(error)
    }

    setLoading(false)
  }

  return (
    <>
    <Container className="d-flex align-content-center justify-content-center">
        <div className="w-100 signup" style={{ maxWidth: "400px", marginTop:'10%', }}>
        <Card>
        <Card.Body>
        {<p>{currentUser && currentUser.email}</p>}
        
          <h2 className="text-center mb-4">Log In</h2>
          {error && <Alert variant="danger">{error}</Alert>}
          <Form onSubmit={handleSubmit}>
            <Form.Group id="email">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" ref={emailRef} required />
            </Form.Group>
            <Form.Group id="password">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" ref={passwordRef} required />
            </Form.Group>
            <Button disabled={loading} className="w-100 h-100 mt-3 btn btn-dark" type="submit">
              {loading ? <div className="spinner-border text-secondary" role="status"><span className="sr-only"></span></div> : "Log In"}
            </Button>
          </Form>
          <div className="w-100 text-center mt-3">
            <Link to="/forgot-password">Forgot Password?</Link>
          </div>
        </Card.Body>
      </Card>
          </div>
          </Container>
      
      <div className="w-100 text-center mt-2">
        Need an account? <Link to="/signup">Sign Up</Link>
      </div>
    </>
  )
}