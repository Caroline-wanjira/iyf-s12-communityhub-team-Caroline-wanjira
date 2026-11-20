function UserCard({ name, username, bio }) {
  return (
    <div className="user-card">
      <h3>{name}</h3>
      <p className="username">@{username}</p>
      <p>{bio}</p>
    </div>
  );
}

export default UserCard;