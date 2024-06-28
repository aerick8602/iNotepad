import React, { useContext } from "react";
import noteContext from "../context/NoteContext";
import "../style/Noteitem.css";

const Noteitem = ({ note, updateNote }) => {
  const { deleteNote } = useContext(noteContext);

  const handleDelete = () => {
    if (note._id) {
      deleteNote(note._id);
    } else {
      console.error("Note ID is undefined");
    }
  };

  const handleEdit = () => {
    if (note._id) {
      updateNote(note);
    } else {
      console.error("Note ID is undefined");
    }
  };

  return (
    <div className="notes col-md-3">
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">{note.title}</h5>
          <p className="card-text">{note.description}</p>
          <i className="fa fa-trash-alt mx-2" onClick={handleDelete}></i>
          <i className="fa fa-edit mx-2" onClick={handleEdit}></i>
        </div>
      </div>
    </div>
  );
};

export default Noteitem;
