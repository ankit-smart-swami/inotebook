import React, { useContext, useEffect, useState } from 'react';
import noteContext from '../context/Notes/noteContext';
import NoteItem from './NoteItem';
import AddNote from './AddNote';

const Notes = () => {
    const context = useContext(noteContext);
    const { notes, fetchNotes, updateNote } = context;
    const [noteToUpdate, setNoteToUpdate] = useState({});

    // Method to get modal inputs and call the update method
    const onUpdate = (event) => {
        const title = event.target.eTitle.value;
        const description = event.target.eDescription.value;
        const tag = event.target.eTag.value;
        const id = noteToUpdate._id;

        updateNote(id, title, description, tag);
        event.preventDefault();
    }

    // Fetch note will be called on every reload.
    useEffect(() => {
        fetchNotes();
        // eslint-disable-next-line
    }, []);

    return (
        <>
            <AddNote />
            <div className='my-3'>
                <h3 >Your notes </h3>
                <div className='row my-3'>
                    {notes.map((note) => {
                        return <NoteItem key={note._id} noteToUpdate={noteToUpdate} setNoteToUpdate={setNoteToUpdate} note={note} />
                    })}
                </div>
            </div>

            {/* Modal to edit note */}
            <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="exampleModalLabel">Edit Note</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <form className='mt-3 container' onSubmit={onUpdate}>
                                <div className="mb-3">
                                    <label htmlFor="title" className="form-label">Title</label>
                                    <input type="text" className="form-control" id="eTitle" name="eTitle" value={noteToUpdate.title} onChange={(event) => { setNoteToUpdate({ ...noteToUpdate, title: event.target.value }) }} aria-describedby="emailHelp" />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="description" className="form-label">Description</label>
                                    <input type="text" className="form-control" id="eDescription" name="eDescription" value={noteToUpdate.description} onChange={(event) => { setNoteToUpdate({ ...noteToUpdate, description: event.target.value }) }} />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="tag" className="form-label">Category</label>
                                    <input type="text" className="form-control" id="eTag" name="eTag" value={noteToUpdate.tag} onChange={(event) => { setNoteToUpdate({ ...noteToUpdate, tag: event.target.value }) }} />
                                </div>
                                <button type="button" className="btn btn-secondary mx-2" data-bs-dismiss="modal">Close</button>
                                <button type="submit" className="btn btn-primary mx-2" data-bs-dismiss="modal">Update Note</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Notes;