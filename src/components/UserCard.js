import React from "react";
import { Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";

function UserCard({ user }) {
  return (
    <div style={{ marginBottom: "20px" }}>
      <Card style={{ width: "18rem" }}>
        <Card.Body>
          <Card.Title>{user.name}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">
            {user.username}
          </Card.Subtitle>
          <Card.Text>
            {user.phone}
            <br />
            {user.website}
          </Card.Text>
          <Link to={`/profile/${user.id}`}>
            <Button>Details</Button>
          </Link>
        </Card.Body>
      </Card>
    </div>
  );
}

export default UserCard;
