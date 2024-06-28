import React, { useContext, useEffect, useRef, useState } from "react";
import noteContext from "../context/NoteContext";
import Noteitem from "./Noteitem";
import Addnote from "./Addnote";
import { useNavigate } from "react-router-dom";
import "../style/Notes.css"

const Notes = () => {
  const navigate = useNavigate()
  const context = useContext(noteContext);
  const { notes, getNotes, editNote } = context;
  const [note, setNote] = useState({ id: "", etitle: "", edescription: "", etag: "default" })

  useEffect(() => {
    if (localStorage.getItem('token')) {
      getNotes();
    } else {
      navigate('/login')
    }
  }, []);

  const updateNote = (currentNote) => {
    ref.current.click()
    setNote({ id: currentNote._id, etitle: currentNote.title, edescription: currentNote.description, etag: currentNote.tag })
  };

  const ref = useRef(null)
  const refClose = useRef(null)

  const onClick = (e) => {
    editNote(note.id, note.etitle, note.edescription, note.etag)
    refClose.current.click()
  }

  const onChange = (e) => {
    setNote({ ...note, [e.target.name]: e.target.value })
  }

  return (
    <div>
      <Addnote />
      <button type="button" ref={ref} className="btn btn-primary d-none" data-bs-toggle="modal" data-bs-target="#exampleModal">
        Launch demo modal
      </button>
      <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">Edit Note</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <form>
                <div className="form-group mx-10">
                  <label htmlFor="etitle">Title</label>
                  <input type="text" className="form-control" id="etitle" name="etitle" value={note.etitle} aria-describedby="emailHelp" onChange={onChange} minLength={5} required />
                </div>
                <div className="form-group">
                  <label htmlFor="edescription">Description</label>
                  <input type="text" className="form-control" id="edescription" name="edescription" value={note.edescription} onChange={onChange} minLength={5} required />
                </div>
                <div className="form-group">
                  <label htmlFor="etag">Tag</label>
                  <input type="text" className="form-control" id="etag" name="etag" value={note.etag} onChange={onChange} />
                </div>
              </form>
            </div>
            <div className="modal-footer">
              <button ref={refClose} type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              <button disabled={note.etitle.length < 5 || note.edescription.length < 5} type="button" className="btn btn-primary" style={{ margin: '2px', padding: '7px' }} onClick={onClick}>Save changes</button>
            </div>
          </div>
        </div>
      </div>

      <div className="row my-3">
        <h2 className="notesHeader">Notes</h2>

        <div className="mx-3">
          {notes.length === 0 && "No notes to display"}
        </div>

        {notes.map((note) => (
          <Noteitem key={note._id} updateNote={updateNote} note={note} />
        ))}
      </div>
    </div>
  );
};

export default Notes;
