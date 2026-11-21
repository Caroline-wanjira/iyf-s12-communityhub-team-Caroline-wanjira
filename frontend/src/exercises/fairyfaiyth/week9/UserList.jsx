function UserCard({ user }) {
    return (
        <li>
            {user.name} ({user.email})
        </li>
    );
}

function UserList({ users = [] }) {
    if (users.length === 0) {
        return <p>No users yet.</p>;
    }
    return (
        <ul>
            {users.map((user) => (
                <UserCard key={user.id} user={user} />
            ))}
        </ul>
    );
}

export default UserList;
