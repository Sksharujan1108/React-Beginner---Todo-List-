import { Delete, Update } from '@material-ui/icons'
import React from 'react'
import './show.css'

const ShowNoteList = (props) => {
    const {
        title,
        content,
        onClickDelete,
        onClickUpdate,
        id,
    } = props
  return (
    <div className="show-note-list">
        <h1 className='show-title'> Title : {title} </h1> 
        <p className='show-content'> Content : {content} </p>

        <div className="button-container">
            <button 
                className="delete-button" 
                onClick={() => onClickDelete(id)}
            > 
                <Delete/> 
            </button>

            <button 
                className="update-button"
                onClick={() => onClickUpdate(id)}
            >
                <Update/>
            </button>
        </div>

    </div>
  )
}

export default ShowNoteList
