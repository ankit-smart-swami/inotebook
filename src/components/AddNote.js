import React, { useContext, useState } from 'react';
import noteContext from '../context/Notes/noteContext';

const AddNote = () => {
    // importing from context
    const context = useContext(noteContext);
    const { addNote } = context;

    // local note state for adding new note
    const [note, setNote] = useState({ title: "", description: "", tag: "" })

    // function to collect inputs
    const onChange = (event) => {
        setNote({ ...note, [event.target.name]: event.target.value })
    }

    // Calls the addNote method
    const onSubmit = (event) => {
        event.preventDefault();
        addNote(note.title, note.description, note.tag);
        setNote({ title: "", description: " ", tag: "" });
    }

    return (
        <>
            {/* Adding a new note form */}
            <div>
                <h3 className='mt-2'>Add a new note</h3>
                <form className='mt-3 container'>
                    <div className="mb-3">
                        <label htmlFor="title" className="form-label">Title</label>
                        <input type="text" className="form-control" id="title" name="title" value={note.title} aria-describedby="emailHelp" onChange={onChange} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="description" className="form-label">Description</label>
                        <input type="text" className="form-control" id="description" name="description" value={note.description} onChange={onChange} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="tag" className="form-label">Category</label>
                        <input type="text" className="form-control" id="tag" name="tag" value={note.tag} onChange={onChange} />
                    </div>
                    <button disabled={note.title.length < 3 || note.description.length < 5 || note.tag.length < 3} type="submit" className="btn btn-primary mt-2" style={{ "width": "100%" }} onClick={onSubmit}>Add Note</button>
                </form>
                <hr /><hr />
            </div>
        </>
    )
}

export default AddNote;