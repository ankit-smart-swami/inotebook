import { useState } from "react";
import NoteContext from "./noteContext";

const NoteState = (props) =>{
    const notesInitial = [
        {
          "_id": "64a2b86414bc162789af30315",
          "user": "64972653d9a8bee801567330",
          "title": "Movie",
          "description": "Complete movie OMG 2",
          "tag": "entertainment",
          "date": "2023-07-03T12:00:36.350Z",
          "__v": 0
        },
        {
          "_id": "64a2b899014bc162789af3317",
          "user": "64972653d9a8bee801567330",
          "title": "React",
          "description": "Complete React Course",
          "tag": "study",
          "date": "2023-07-03T12:01:20.922Z",
          "__v": 0
        },
        {
          "_id": "64a2b86414bc1627889af3315",
          "user": "64972653d9a8bee801567330",
          "title": "Movie",
          "description": "Complete movie OMG 2",
          "tag": "entertainment",
          "date": "2023-07-03T12:00:36.350Z",
          "__v": 0
        },
        {
          "_id": "64a2b89014bc1627789af3317",
          "user": "64972653d9a8bee801567330",
          "title": "React",
          "description": "Complete React Course",
          "tag": "study",
          "date": "2023-07-03T12:01:20.922Z",
          "__v": 0
        },
        {
          "_id": "64a2b866414bc162789af3315",
          "user": "64972653d9a8bee801567330",
          "title": "Movie",
          "description": "Complete movie OMG 2",
          "tag": "entertainment",
          "date": "2023-07-03T12:00:36.350Z",
          "__v": 0
        },
        {
          "_id": "64a2b859014bc162789af3317",
          "user": "64972653d9a8bee801567330",
          "title": "React",
          "description": "Complete React Course",
          "tag": "study",
          "date": "2023-07-03T12:01:20.922Z",
          "__v": 0
        },
        {
          "_id": "64a2b864414bc162789af3315",
          "user": "64972653d9a8bee801567330",
          "title": "Movie",
          "description": "Complete movie OMG 2",
          "tag": "entertainment",
          "date": "2023-07-03T12:00:36.350Z",
          "__v": 0
        },
        {
          "_id": "64a2b890134bc162789af3317",
          "user": "64972653d9a8bee801567330",
          "title": "React",
          "description": "Complete React Course",
          "tag": "study",
          "date": "2023-07-03T12:01:20.922Z",
          "__v": 0
        },
        {
          "_id": "64a2b826414bc162789af3315",
          "user": "64972653d9a8bee801567330",
          "title": "Movie",
          "description": "Complete movie OMG 2",
          "tag": "entertainment",
          "date": "2023-07-03T12:00:36.350Z",
          "__v": 0
        },
        {
          "_id": "64a22b89014bc162789af3317",
          "user": "64972653d9a8bee801567330",
          "title": "React",
          "description": "Complete React Course",
          "tag": "study",
          "date": "2023-07-03T12:01:20.922Z",
          "__v": 0
        }
      ];

    const [notes, setNotes] = useState(notesInitial)

    return(
        <NoteContext.Provider value={{notes,setNotes}}>
            {props.children}
        </NoteContext.Provider>
        );
}

export default NoteState;