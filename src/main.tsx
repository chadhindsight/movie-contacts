import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import contacts from './contacts.json';

export const ContactsContext = React.createContext(contacts)

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ContactsContext.Provider value={contacts}>
      <App />
    </ContactsContext.Provider>

  </React.StrictMode>,
)
