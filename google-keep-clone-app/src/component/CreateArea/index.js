import { Fab, Zoom } from '@material-ui/core'
import { Add } from '@material-ui/icons'
import React, { useState } from 'react'
import './area.css'

const CreateAreaField = (props) => {
  const {
    addNote
  } = props
    const [isExpanded, setIsExpanded] = useState('')

    // Add Note or store the note js Object in the state
    const [note, setNote] = useState({
        title: "",
        content: ""
    })

    const expand = () => {
        setIsExpanded(true)
    }

    const handleChange = (event) => {
        // DestructureComponent
        const {name, value} = event.target
        setNote((prevNote) => {
            return {
              // spread operator
                ...prevNote,
                [name]: value
            }
        })
    }

    console.log('note', note);

    // Add Submit Note
    const submitNote = (event) => {
        event.preventDefault()
        addNote(note)
        setNote({
            title: "",
            content: ""
        })
    }

  return (
    <div>
      <form className="create-note">
        {/* Title Input Field */}
        {isExpanded && 
          <input 
            type = "text" 
            name = "title" 
            placeholder = "Title" 
            value = {note.title}
            onChange = {handleChange}
          />
        }

        {/* Content Input Field */}
        <textarea 
          onClick = {() => expand()}
          name = "content" 
          placeholder = "Take Your Notes..." 
          value = {note.content}
          rows = {isExpanded ? 3 : 1 }
          onChange = {handleChange}
        />
        
        {/* Add Button Icon Use */}
        <Zoom in = {isExpanded}>
            <Fab onClick = {submitNote}>
                <Add/>
            </Fab>
        </Zoom>
        
      </form>
    </div>
  )
}

export default CreateAreaField
