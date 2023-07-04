import React from 'react';
import Notes from './Notes';

const Home = () => {
  return (
    <div className='container'>
      <h3 className='mt-2'>Add a new note</h3>
      <form className='mt-3 container'>
        <div className="mb-3">
          <label htmlFor="exampleInput" className="form-label">Title</label>
          <input type="text" className="form-control" id="exampleInput" aria-describedby="emailHelp" />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInput" className="form-label">Description</label>
          <input type="text" className="form-control" id="exampleInput" />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInput" className="form-label">Category</label>
          <input type="text" className="form-control" id="exampleInput" />
        </div>
        <button type="submit" className="btn btn-primary mt-2" style={{ "width": "100%" }}>Submit</button>
      </form>
      <hr /><hr />
      <Notes />
    </div>
  )
}

export default Home