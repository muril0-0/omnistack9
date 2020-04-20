import React, { useState } from 'react'
import api from '../../services/api'

export default function Login({ history }){
    const [email, setEmail] = useState('') /*Utilizada para pegar o email do form: 
    o EMAIL adquire tudo o que for digitado pelo usuário, 
    a função SETEMAIL atualiza o EMAIL 
    o '' serve para mostrar o valor inicial do estado*/
  
    async function handleSubmit(event){ //função ao clicar no button
      event.preventDefault() //previne o comportamento padrão do submit (mudar de página)
      
      const response = await api.post('/sessions', {email})
  
      const { _id } = response.data
  
      localStorage.setItem('user', _id)

      history.push('/dashboard')
    }
    return (
        <>
        <p>
            Ofereça <strong>spots</strong> para programadore e encontre <strong>talentos</strong> para sua empresa.
        </p>

        <form onSubmit = {handleSubmit}> {/*Aplicando função acima ao form*/}
            <label htmlFor="email">E-MAIL *</label>
            
            <input 
            type = "text" 
            id = "email" 
            name = "email"
            placeholder = "Seu melhor e-mail"
            value = {email}
            onChange = {event => setEmail(event.target.value)}
            />

            <button className="btn" type="submit">Entrar</button>
        </form>
       </>
    )
}