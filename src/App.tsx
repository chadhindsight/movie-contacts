import React from 'react'
import './App.css'
import { ContactsContext } from './main'
import Actors from './components/Actors'
import Header from './components/Header'
import Footer from './components/Footer'
import { ActorInterface } from './components/Actor'

function App() {

  return (
    <>
      <Header />
      <ContactsContext.Consumer>
        {(actors: ActorInterface[]) => <Actors actors={actors} />}
      </ContactsContext.Consumer>
      <Footer />
    </>
  )
}

export default App
