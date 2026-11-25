import { getInitials } from "../../utils/users";

function UserCard({ name, username, bio }) {
  return (
    <div className="user-card">
      <div className="avatar" aria-hidden="true">{getInitials(name)}</div>
      <h3>{name}</h3>
      <p className="username">@{username}</p>
      <p>{bio}</p>
    </div>
  );
}

export default UserCard;