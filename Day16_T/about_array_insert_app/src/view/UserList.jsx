export const UserList = (props) => {
    const users = props.users
    return (
        <>
        {users.map(user => <div key={user.id}><b>{user.username}</b>{user.email}</div>)}
        </>
    )
}