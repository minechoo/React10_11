export const UserList = ({users, onRemove}) => {
    return (
        <>
        {users.map(user => <User user = {user} key={user.id} onRemove={onRemove}></User>)}
        </>
    )
}

const User = ({user, onRemove}) => {

    const onClick = () => {
        onRemove(user.id)
    }

    return(
        <>
        <p><b>{user.username}</b>&nbsp;{user.email}
        <input type="button" onClick={onClick} value='삭제'/>
        </p>
        </>
    )

}