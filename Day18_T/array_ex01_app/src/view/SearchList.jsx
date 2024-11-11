export const SearchList = ({ lists, onRemove }) => {
    return (
        <>
            {
                lists.map(list => (
                    <List list={list} key={list.id} onRemove={onRemove}></List>
                ))
            }
        </>
    )
}

const List = ({ list, onRemove }) => {
    const onClick = () => {
        onRemove(list.id)
    }
    return (
        <>
            <p><b>{list.date}</b><span>({list.content})</span>
                <input type="button" onClick={onClick} value="삭제" />
            </p>
        </>
    )
}