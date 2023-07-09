import { useState } from "react";
import NoteContext from "./noteContext";

const NoteState = (props) => {

  // State to access notes everywhere
  const [notes, setNotes] = useState([]);
  const host = 'http://localhost:5000';

  //Fetch All Notes
  const fetchNotes = async () => {
    // API Call
    const response = await fetch(`${host}/api/notes/fetchallnotes`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjQ5NzI2NTNkOWE4YmVlODAxNTY3MzMwIn0sImlhdCI6MTY4Nzc0NjkxOH0.3SWi48k4m2BCNdTW6g2Bl7Q3shRvuuZhrpk98ab6XBY"
      }
    });

    // Updating notes on local variable to display.
    const responseJson = await response.json();
    setNotes(responseJson);
  }

  // Add Note
  const addNote = async (title, description, tag) => {
    // API Call
    const response = await fetch(`${host}/api/notes/addnote`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjQ5NzI2NTNkOWE4YmVlODAxNTY3MzMwIn0sImlhdCI6MTY4Nzc0NjkxOH0.3SWi48k4m2BCNdTW6g2Bl7Q3shRvuuZhrpk98ab6XBY"
      },
      body: JSON.stringify({ title, description, tag })
    });

    // Updating notes on local variable to display.
    const note = await response.json();
    setNotes(notes.concat(note));
  }

  // Update Note
  const updateNote = async (id, title, description, tag) => {
    // API Call
    const response = await fetch(`${host}/api/notes/updatenote/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjQ5NzI2NTNkOWE4YmVlODAxNTY3MzMwIn0sImlhdCI6MTY4Nzc0NjkxOH0.3SWi48k4m2BCNdTW6g2Bl7Q3shRvuuZhrpk98ab6XBY"
      },
      body: JSON.stringify({ title, description, tag })
    });

    // Updating notes on local variable to display.
    const updatedNote = await response.json();
    let newNotes = JSON.parse(JSON.stringify(notes));
    for (let index = 0; index < newNotes.length; index++) {
      const element = newNotes[index];
      if (element._id === id) {
        newNotes[index].title = updatedNote.note.title;
        newNotes[index].description = updatedNote.note.description;
        newNotes[index].tag = updatedNote.note.tag;
        break;
      }
    }
    setNotes(newNotes);
  }

  // Delete Note
  const deleteNote = async (id) => {
    // API Call
    await fetch(`${host}/api/notes/deletenote/${id}`, {
      method: "DELETE",
      headers: {
        "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjQ5NzI2NTNkOWE4YmVlODAxNTY3MzMwIn0sImlhdCI6MTY4Nzc0NjkxOH0.3SWi48k4m2BCNdTW6g2Bl7Q3shRvuuZhrpk98ab6XBY"
      }
    });

    // Updating notes on local variable to display.
    const newNotes = notes.filter((note) => note._id !== id);
    setNotes(newNotes);
  }

  return (
    <NoteContext.Provider value={{ notes, fetchNotes, addNote, updateNote, deleteNote }}>
      {props.children}
    </NoteContext.Provider>
  );
}

export default NoteState;