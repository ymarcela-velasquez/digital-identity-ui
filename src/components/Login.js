import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import '../App.css'

export const Login = ({ setUser }) => {
  const [identification, setIdentification] = useState('')
  const [email, setEmail] = useState('')
  const [error, setError] = useState(false)
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    try {
      if (identification === '' || email === '') {
        setError(true)
        return
      }    
      setUser([identification])
      navigate.push('/home')

      
    } catch (error) {
      console.log('error en login');
      setError(false)
      
    }
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
          value={identification} 
          onChange={event => setIdentification(event.target.value)}
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
