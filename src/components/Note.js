function Note({ id, title, content, onDelete }) {
    return (
        <div className="note">
            <h1>{title}</h1>
            <p>{content}</p>
            <button className="delete" onClick={() => { onDelete(id); }}>DELETE</button>
        </div>
    );
}

export default Note;