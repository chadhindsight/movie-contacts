import React from 'react'
import './App.css'
import { ContactsContext } from './main'
import Actors from './components/Actors'

function App() {

  return (
    <>
      <h1 className='text-3xl font-bold underline'>Movie Contacts</h1>
      <ContactsContext.Consumer>
        {(actors) => <Actors actors={actors} />}
      </ContactsContext.Consumer>
    </>
  )
}

export default App
