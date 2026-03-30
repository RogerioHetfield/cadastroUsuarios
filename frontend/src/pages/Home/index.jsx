import { useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import api from '../../services/api'

import { Title, Container, ContainerInputs, Input, Form, InputLabel } from './styles'


import Button from '../../components/Button'
import TopBackground from '../../components/TopBackground'

function Home() {
  const inputName = useRef()
  const inputAge = useRef()
  const inputEmail = useRef()

  const navigate = useNavigate()

  async function registerNewUser() {
    const age = parseInt(inputAge.current.value, 10)

    if (!inputName.current.value || !inputEmail.current.value || isNaN(age)) {
      alert('Preencha os campos corretamente')
      return
    }

    await api.post('/usuarios', {
      name: inputName.current.value,
      age,
      email: inputEmail.current.value,
    })

    navigate('/list-users')
  }

  return (
    <Container>
      <TopBackground />

      <Form>
        <Title>Cadastrar Usuários</Title>
        <ContainerInputs>
          <div>
            <InputLabel>
              Nome<span> * </span>
            </InputLabel>
            <Input type='text' placeholder='Nome do Usuário' ref={inputName} />
          </div>

          <div>
            <InputLabel>
              Idade<span> * </span>
            </InputLabel>
            <Input type='number' placeholder='Idade do Usuário' ref={inputAge} />
          </div>
        </ContainerInputs>

        <div style={{ width: '100%' }}>
          <InputLabel>
            Email<span> * </span>
          </InputLabel>
          <Input type='email' placeholder='Email do Usuário' ref={inputEmail} />
        </div>

        <Button type='button' onClick={registerNewUser} theme='primary'>Cadastrar Usuário</Button>
      </Form>
      <Button type='button' onClick={() => navigate('/list-users')}>Ver Lista De Usuários</Button>
    </Container>


  )
}

export default Home