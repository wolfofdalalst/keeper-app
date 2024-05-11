import { useState } from "react";

function Form({ onAdd }) {
    const [note, setNote] = useState({
        title: "",
        content: ""
    });

    function handleChange(event) {
        const { name, value } = event.target;

        setNote(prevNote => {
            return { ...prevNote, [name]: value };
        });
    }

    function submitNote(event) {
        onAdd(note);
        setNote({
            title: "",
            content: ""
        })
        event.preventDefault();
    }

    return <form className="note form-container">
        <input name="title" placeholder="Title" onChange={handleChange} value={note.title} />
        <textarea name="content" placeholder="Take a note..." onChange={handleChange} value={note.content} rows="3" />
        <button onClick={submitNote}>Add</button>
    </form>
}

export default Form;