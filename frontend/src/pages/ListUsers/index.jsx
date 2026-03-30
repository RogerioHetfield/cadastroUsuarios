import { useEffect, useState } from "react";
import api from "../../services/api";
import { useNavigate } from "react-router-dom";

import Button from "../../components/Button";
import TopBackground from "../../components/TopBackground";
import { AvatarUser, CardUsers, Container, ContainerUsers, Title, TrashIcon } from "./styles";
import Trash from '../../assets/trash.svg'

function ListUsers() {
    const [users, setUsers] = useState([])
    const navigate = useNavigate()

    useEffect(() => {
        async function getUsers() {
            const { data } = await api.get('/usuarios')

            setUsers(data) // data           
        }
        getUsers()
    }, [])

    async function deleteUsers(id) {
        await api.delete(`/usuarios/${id}`)

        const uptadedUsers = users.filter(user => user.id !== id)
        setUsers(uptadedUsers)
    }

    return (
        <Container>
            <TopBackground />
            <Title>List of Users</Title>

            <ContainerUsers>
                {users.map(user => (
                    <CardUsers key={user.id}>
                        <AvatarUser src={`https://robohash.org/${user.id}`} />
                        <div >
                            <h3>{user.name}</h3>
                            <p>{user.age}</p>
                            <p>{user.email}</p>

                        </div>
                        <TrashIcon src={Trash} onClick={() => deleteUsers(user.id)} />
                    </CardUsers>
                ))}
            </ContainerUsers>

            <Button type="button" theme="primary" onClick={() => navigate('/')}>Voltar</Button>
        </Container>
    )
}

export default ListUsers;