import { useState } from "react";
import UserCard from "./UserCard";

function UserProfile({ user }) {
  const [following, setFollowing] = useState(false);

  return (
    <section className="user-profile">
      <UserCard name={user.name} username={user.username} bio={user.bio} />
      <p>Joined: {user.joined}</p>
      <p>Posts: {user.postCount}</p>
      <button onClick={() => setFollowing(!following)}>
        {following ? "Following" : "Follow"}
      </button>
    </section>
  );
}

export default UserProfile;