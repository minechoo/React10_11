export const UserList = ({users, onRemove, onEdit, editingId}) => {
    return (
        <>
        {users.map(user => <User 
                                user = {user} 
                                key={user.id} 
                                onRemove={onRemove}
                                onEdit={onEdit}
                                isEditing = {user.id === editingId}
                                >
                            </User>)}
        </>
    )
}

const User = ({user, onRemove, onEdit, isEditing}) => {

    const onClick = () => {
        onRemove(user.id)
    }

    return(
        <>
        <p><b>{user.username}</b>&nbsp;{user.email}
        <input type="button" onClick={onClick} value='삭제'/>
        {!isEditing && <input type="button" onClick={()=>onEdit(user.id)} value="수정" />}
        </p>
        </>
    )

}