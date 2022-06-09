import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button, Card } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";

function Profile() {
  const navigate = useNavigate();
  const [user, setUser] = useState([]);
  const { id } = useParams();
  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((res) => setUser(res.data))
      .catch((err) => console.log(err));
  }, [id]);

  return (
    <div>
      <Card style={{ width: "18rem" }}>
        <Card.Img
          variant="top"
          src="https://www.pngitem.com/pimgs/m/30-307416_profile-icon-png-image-free-download-searchpng-employee.png"
        />
        <Card.Body>
          <Card.Title>{user.name}</Card.Title>
          <Card.Text>
            {user && user.username}
            <br />
            {user && user.phone}
            <br />
            {user && user.email}
            <br />
            {user && user.address && user.address.street}{" "}
            {user && user.address && user.address.suite}{" "}
            {user && user.address && user.address.city}
            {user && user.address && user.address.zipcode}
            <br />
            {user && user.website}
            <br />
            {user && user.company && user.company.name}{" "}
            {user && user.company && user.company.catchPhrase}{" "}
            {user && user.company && user.company.bs}
          </Card.Text>
          <Button variant="primary" onClick={() => navigate("/")}>
            Users
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
}

export default Profile;
