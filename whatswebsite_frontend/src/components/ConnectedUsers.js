import { Button } from "react-bootstrap";

const ConnectedUsers = ({ users, closeConnection }) => (
  <div className="user-list">
    <h4 style={{ marginLeft: 100 }}>Connected Users</h4>
    <ul style={{ marginTop: 20 }}>
      {users.map((u, idx) => (
        <div key={idx}>
          <li className="user-item">
            <img src="/pngegg.png" alt={`Avatar for ${u}`} />
            <h4>{u}</h4>
          </li>
          {idx < users.length - 1 && <hr className="user-divider" />}
        </div>
      ))}
    </ul>
    <Button variant="danger" onClick={() => closeConnection()}>
      Leave Room
    </Button>
  </div>
);

export default ConnectedUsers;
