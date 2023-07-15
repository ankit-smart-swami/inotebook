import { useState, useContext } from "react";
import NoteContext from "./noteContext";
import userContext from "../Auth/userContext";

const NoteState = (props) => {
  const { showAlert } = useContext(userContext);
  // State to access notes everywhere
  const [notes, setNotes] = useState([]);
  const host = 'http://localhost:5000';

  //Fetch All Notes
  const fetchNotes = async () => {
    const authToken = localStorage.getItem('auth-token');
    // API Call
    try {
      const response = await fetch(`${host}/api/notes/fetchallnotes`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "auth-token": authToken
        }
      });

      // Updating notes on local variable to display.
      const responseJson = await response.json();
      if (response.status === 200) {
        setNotes(responseJson);
        showAlert("success", "Notes fetched.");
      }
      else {
        showAlert("warning", responseJson.error);
      }
    } catch (error) {
      showAlert("danger", "Internal Server Error !!!");
    }
  }

  // Add Note
  const addNote = async (title, description, tag) => {
    try {
      const authToken = localStorage.getItem('auth-token');
      // API Call
      const response = await fetch(`${host}/api/notes/addnote`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "auth-token": authToken
        },
        body: JSON.stringify({ title, description, tag })
      });

      // Updating notes on local variable to display.
      const note = await response.json();

      if (response.status === 200) {
        setNotes(notes.concat(note));
        showAlert("success", "Note Added.")
      }
      else {
        showAlert("warning", note.error)
      }
    } catch (error) {
      showAlert("danger", "Internal Server Error !!!");
    }
  }

  // Update Note
  const updateNote = async (id, title, description, tag) => {
    try {
      const authToken = localStorage.getItem('auth-token');
      // API Call
      const response = await fetch(`${host}/api/notes/updatenote/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          "auth-token": authToken
        },
        body: JSON.stringify({ title, description, tag })
      });

      const updatedNote = await response.json();
      if (response.status !== 200) {
        showAlert("warning", updatedNote.error);
        return;
      }

      // Updating notes on local variable to display.
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
      showAlert("success", "Note Updated.");
    } catch (error) {
      showAlert("danger", "Internal Server Error !!!");
    }
  }

  // Delete Note
  const deleteNote = async (id) => {
    try {
      const authToken = localStorage.getItem('auth-token');
      // API Call
      const response = await fetch(`${host}/api/notes/deletenote/${id}`, {
        method: "DELETE",
        headers: {
          "auth-token": authToken
        }
      });

      const responseJson = response.json();
      if(response.status !== 200){
        showAlert("warning", responseJson.error);
        return;
      }
      // Updating notes on local variable to display.
      const newNotes = notes.filter((note) => note._id !== id);
      setNotes(newNotes);
      showAlert("success", "Note Deleted.");
    } catch (error) {
      showAlert("danger", "Internal Server Error !!!");
    }
  }

  return (
    <NoteContext.Provider value={{ notes, fetchNotes, addNote, updateNote, deleteNote }}>
      {props.children}
    </NoteContext.Provider>
  );
}

export default NoteState;