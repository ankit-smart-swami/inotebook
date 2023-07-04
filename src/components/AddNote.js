import React, { useContext, useState } from 'react';
import noteContext from '../context/Notes/noteContext';

const AddNote = () => {
    const context = useContext(noteContext);
    const { addNote } = context;

    const[note, setNote] = useState({title : "", description : " ", tag : ""})
    
    const onChange = (event) =>{
        setNote({...note, [event.target.name] : event.target.value})
    }

    const onSubmit = (event) =>{
        event.preventDefault();
        addNote(note.title, note.description, note.tag);
    }

    return (
        <div>
            <h3 className='mt-2'>Add a new note</h3>
            <form className='mt-3 container'>
                <div className="mb-3">
                    <label htmlFor="title" className="form-label">Title</label>
                    <input type="text" className="form-control" id="title" name="title" aria-describedby="emailHelp" onChange={onChange}/>
                </div>
                <div className="mb-3">
                    <label htmlFor="description" className="form-label">Description</label>
                    <input type="text" className="form-control" id="description" name="description" onChange={onChange}/>
                </div>
                <div className="mb-3">
                    <label htmlFor="tag" className="form-label">Category</label>
                    <input type="text" className="form-control" id="tag" name="tag" onChange={onChange}/>
                </div>
                <button type="submit" className="btn btn-primary mt-2" style={{ "width": "100%" }} onClick={onSubmit}>Add Note</button>
            </form>
            <hr /><hr />
        </div>
    )
}

export default AddNote;