import React from 'react';

const NoteItem = (props) => {
    const { note } = props;
    return (
        <div className="col-md-3 my-2">
            <div className="card">
                <div className="card-body">

                    <div className='flex-center'>
                        <h5 className="card-title">{note.title}</h5>
                        <div className="buttons">
                            <button href="#" className="btn btn-sm btn-warning m-1">
                                <i className="fa-solid fa-pen-to-square"></i>
                            </button>
                            <button href="#" className="btn btn-sm btn-danger m-1">
                                <i className="fa-regular fa-trash-can"></i>
                            </button>
                        </div>

                    </div>
                    <h6 className="card-subtitle mb-2 text-body-secondary">{note.tag}</h6>
                    <p className="card-text">{note.description}</p>

                </div>
            </div>
        </div>
    )
}

export default NoteItem;