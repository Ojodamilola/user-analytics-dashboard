import React from "react";
import "./Dashboard.css";
import { Row, Col, Card } from "react-bootstrap";
import { BarChart } from "@mui/x-charts/BarChart";
import { PieChart } from "@mui/x-charts/PieChart";

const Dashboard = () => {
  

  return (
    <>
      <div className="dashboard">
        <header>
          <h1 className="mb-4">Dashboard</h1>
        </header>
        <div className="numbersCard">
          <Row className="d-flex align-content-center justify-content-center g-2 w-100 mb-4">
            <Col className="col-12 col-lg-3 col-md-6">
              <Card className="w-100">
                <Card.Body className="">
                  <h4>10</h4>
                  <p>Number of Users</p>
                </Card.Body>
              </Card>
            </Col>

            <Col className="col-12 col-lg-3 col-md-6 ">
              <Card className="w-100">
                <Card.Body className="">
                  <h4>3</h4>
                  <p>Number of Roles</p>
                </Card.Body>
              </Card>
            </Col>
            <Col className="col-12 col-lg-3 col-md-6 ">
              <Card className="w-100">
                <Card.Body className="">
                  <h4>30</h4>
                  <p>Number of Users / Day</p>
                </Card.Body>
              </Card>
            </Col>
            <Col className="col-12 col-lg-3 col-md-6">
              <Card className="w-100">
                <Card.Body className="">
                  <h4>25</h4>
                  <p>Number of Guests / Day</p>
                </Card.Body>
              </Card>
            </Col>
          </Row>
          <Row className="d-flex align-content-center justify-content-center g-3">
            <div>
              <h4>User Traffic Analysis</h4>
            </div> 
            <Col className="col-12 col-lg-6 col-md-12">
              <div className="w-100 card d-flex align-items-center justify-content-center">
                <PieChart
                  series={[
                    {
                      data: [
                        { id: 0, value: 30, label: "Users" },
                        { id: 1, value: 30, label: "Guest" },
                        { id: 2, value: 15, label: "Admin" },
                      ],
                    },
                  ]}
                  width={300}
                  height={400}
                />
              </div>
            </Col>
            <Col className="col-12 col-lg-6 col-md-12">
              <div className="w-100 card d-flex align-items-center justify-content-center">
                <BarChart
                  series={[
                    { data: [3, 4, 1, 6, 5], stack: "A", label: "Users" },
                    { data: [4, 3, 1, 5, 8], stack: "B", label: "Guests" },
                    { data: [4, 2, 5, 4, 1], stack: "C", label: "Admin" },
                  ]}
                  height={400}
                />
              </div>
            </Col>
          </Row>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
