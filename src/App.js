import React, { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Note from "./components/Note";
import Form from "./components/Form";

import "./style.css";

function storeLocally(notes) {
    localStorage.setItem("notes", JSON.stringify(notes));
    console.log(localStorage);
}

function getLocally() {
    return JSON.parse(localStorage.getItem("notes")) ?? [];
}


function App() {
    const [notes, setNotes] = useState(getLocally());

    function addNote(newNote) {
        setNotes(prevNotes => [...prevNotes, newNote]);
        storeLocally([...getLocally(), newNote]);
    }

    function removeNote(id) {
        setNotes(prevNotes => {
            return prevNotes.filter((noteItem, index) => index !== id);
        });
        storeLocally(getLocally().filter((noteItem, index) => index !== id));
    }

    return (
        <React.StrictMode>
            <Header />

            <Form onAdd={addNote} />

            {notes.map((entry, index) =>
                <Note
                    id={index}
                    title={entry.title}
                    content={entry.content}
                    onDelete={removeNote}
                />
            )}

            <Footer />
        </React.StrictMode>
    );
}

export default App;