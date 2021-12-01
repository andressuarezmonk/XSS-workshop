import { useState } from 'react'
import './PictureForm.css'

export const PictureForm = ({ onCreate }) => {
  const initialState = {
    title: '',
    description: '',
    imageSrc: ''
  }

  const [picture, setPicture] = useState(initialState)
  const setPictureProperty = (property, value) => setPicture({ ...picture, [property]: value })

  return (
    <form onSubmit={e => { e.preventDefault() }}   >
      <label>Title</label>
      <input type="text" onChange={(e) => setPictureProperty('title', e.target.value)} />

      <label>Description</label>
      <textarea rows="4" cols="50" onChange={(e) => setPictureProperty('description', e.target.value)} />

      <label>Image</label>
      <input type="text" onChange={(e) => setPictureProperty('imageSrc', e.target.value)} />

      <button onClick={() => onCreate(picture)}>Add</button>
    </form>
  )
}
