import React, { useContext, useState } from 'react';
import noteContext from '../context/NoteContext';
import "../style/Addnote.css";

const Addnote = () => {
    const context = useContext(noteContext);
    const { addNote } = context;

    const [note, setNote] = useState({ title: "", description: "", tag: "" });
    const [alert, setAlert] = useState(null); // State to manage alerts

    const onClick = (e) => {
        e.preventDefault();

        // Validate inputs
        if (note.title.trim() === "" || note.description.trim() === "" || note.tag.trim() === "") {
            setAlert("All fields are required.");
            return;
        }

        if (note.description.length < 10) {
            setAlert("Description must be at least 10 characters long.");
            return;
        }

        // If validation passes, add note
        addNote(note.title, note.description, note.tag);
        setNote({ title: "", description: "", tag: "" });
        setAlert(null); // Clear any previous alerts

        // Reload the page after successful submission
        window.location.reload();
    }

    const onChange = (e) => {
        setNote({ ...note, [e.target.name]: e.target.value });
        setAlert(null); // Clear alerts when user makes changes
    }

    return (
        <>
            <div className="Addcontainer">
                <div className="heading">
                    <h2>Add your note</h2>
                </div>

                <div className='form'>
                    <form className="">
                        <div className="title">
                            <label htmlFor="title">Title</label>
                            <input type="text" className="input" id="title" name="title" value={note.title} onChange={onChange} />
                        </div>
                        <div className="desc">
                            <div className='description'>Description</div>
                            <textarea rows="5" className="input" id="description" name="description" value={note.description} onChange={onChange} minLength={10} required />
                        </div>
                        <div className="tag">
                            <label htmlFor="tag">Tag</label>
                            <input type="text" className="input" id="tag" name="tag" value={note.tag} onChange={onChange} minLength={5} required />
                        </div>

                        <button type="button" className="submit" onClick={onClick}>Add note</button>
                    </form>
                </div>
            </div>

            {alert && <div className="alert alert-danger">{alert}</div>}
        </>
    )
}

export default Addnote;
