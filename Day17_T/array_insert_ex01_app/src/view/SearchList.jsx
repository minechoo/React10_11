export const SearchList = ({lists}) => {
    return (
        <>
        {
            lists.map(list => (
                <List list = {list} key = {list.id}></List>
            ))
        }
        </>
    )
}

const List = ({list}) => {
    return(
        <>
        <p><b>{list.date}</b><span>({list.content})</span></p>
        </>
    )
}