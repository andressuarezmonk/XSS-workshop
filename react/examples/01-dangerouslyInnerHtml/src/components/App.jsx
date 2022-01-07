import { useEffect, useState } from 'react'
import { PictureForm } from './PictureForm/PictureForm'
import { PictureCard } from './PictureCard/PictureCard'

import './App.css'

import { initiate, dummyPictures } from '../utils'

export const App = () => {
  const [pictures, setPictures] = useState(dummyPictures)

  const handleOnCreate = (newPicture) => setPictures(pictures.concat(newPicture))

  useEffect(() => initiate(), [])

  return (
    <main className="App">
      <PictureForm onCreate={handleOnCreate} />

      {pictures.length > 0 && (
        <section className="picture-list">
          {pictures.map(pic => <PictureCard picture={pic} />)}
        </section>
      )}
    </main>
  )
}

