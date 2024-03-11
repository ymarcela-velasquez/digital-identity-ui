import React from 'react'
import '../App.css'
import { useState } from 'react'

export const Login = ({ setUser }) => {
  const [document, setDocument] = useState('')
  const [email, setEmail] = useState('')
  const [error, setError] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (document === '' || email === '') {
      setError(true)
      return
    }    
    setError(false)
    setUser([document])
  }
  return (
    <section>
      <h1>Inicie sesión en su cuenta</h1>
      <form 
        className='Login'
        onSubmit={handleSubmit}
      >
        <input 
          type='text'
          value={document} 
          onChange={event => setDocument(event.target.value)}
          placeholder='Documento de identidad'
        />
        <input 
          type='text'
          value={email} 
          onChange={event => setEmail(event.target.value)}
          placeholder='E-mail'
        />
        <button>Ingresar</button>
      </form>
      {error && <p style={{ color: '#FF0000', fontSize: '12px', fontWeight: 'normal' }}>Todos los campos son obligatorios</p>}
    </section>
  )
}
