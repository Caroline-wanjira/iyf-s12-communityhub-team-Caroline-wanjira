function UserProfile({ name = "Faith Mutisya", email = "faith@example.com", role = "Student" }) {
  return (
    <div className="user-profile">
      <img
        src="https://i.pravatar.cc/150?img=47"
        alt={`${name}'s profile`}
        width="100"
        height="100"
        style={{ borderRadius: "50%" }}
      />

      <h2>{name}</h2>
      <p>{email}</p>
      <p>{role}</p>
    </div>
  );
}

export default UserProfile;
