export const CreateList = ({date, content, onChange, onCreate}) => {
    return (
        <>
            <input type="text"
                name="date"
                placeholder="일자"
                onChange={onChange}
                value={date}
            />
            <input type="text"
                name="content"
                placeholder="할일"
                onChange={onChange}
                value={content}
            />
            <input type="button"
                onClick={onCreate}
                value='등록'
            />
        </>
    )
}