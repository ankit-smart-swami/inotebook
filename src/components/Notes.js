import React, { useContext } from 'react';
import noteContext from '../context/Notes/noteContext';
import NoteItem from './NoteItem';
import AddNote from './AddNote';

const Notes = () => {
    const context = useContext(noteContext);
    const { notes } = context;
    return (
        <>
            <AddNote />
            <div className='my-3'>
                <h3 >Your notes </h3>
                <div className='row my-3'>
                    {notes.map((note) => {
                        return <NoteItem key={note._id} note={note} />
                    })}
                </div>
            </div>
        </>
    )
}

export default Notes;