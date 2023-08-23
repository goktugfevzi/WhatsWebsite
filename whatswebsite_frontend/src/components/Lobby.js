import { useState } from "react";
import { Form, Button } from "react-bootstrap";
import '../App.css'; // Import your CSS file here
const Lobby = ({ joinRoom }) => {
  const [user, setUser] = useState("");
  const [room, setRoom] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Store the active user in sessionStorage
    sessionStorage.setItem("activeUser", user);
    joinRoom(user, room);
  };

  return (
    <Form className="lobby" onSubmit={handleSubmit}>
      <h2 style={{ textAlign:"center" ,marginTop:5}}>WhatsWebsite</h2>
      <hr className="line" />
      <Form.Group>
        <Form.Control
          placeholder="name"
          onChange={(e) => setUser(e.target.value)}
        />
        <br></br>
        <Form.Control
          placeholder="room"
          onChange={(e) => setRoom(e.target.value)}
        />
      </Form.Group>
      <Button variant="success" type="submit" disabled={!user || !room}>
        Join
      </Button>
    </Form>
  );
};

export default Lobby;
