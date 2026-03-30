// JEITO ANTIGO ---  const express = require("express")
import express from 'express'
import cors from 'cors'
import { PrismaClient } from './generated/prisma/index.js'



const prisma = new PrismaClient();


const app = express()
app.use(express.json())
app.use(cors())

app.get('/usuarios', async (req, res) => {
    const users = await prisma.user.findMany()

    res.status(200).json(users)
})

app.post('/usuarios', async (req, res) => {
    try {
        const user = await prisma.user.create({
            data: {
                email: req.body.email,
                age: req.body.age,
                name: req.body.name
            }
        })

        res.status(201).json(user)
    } catch (error) {
        if (error.code === 'P2002') {
            return res.status(400).json({ message: 'Este email já está cadastrado.' })
        }

        console.error(error)
        res.status(500).json({ message: 'Erro interno do servidor.' })
    }
})

app.put('/usuarios/:id', async (req, res) => {
    const user = await prisma.user.update({
        where: {
            id: req.params.id
        },
        data: {
            email: req.body.email,
            age: req.body.age,
            name: req.body.name
        }
    })
    res.status(200).json(user)
})

app.delete('/usuarios/:id', async (req, res) => {
    const user = await prisma.user.delete({
        where: {
            id: req.params.id
        }
    })
    res.status(200).json({
        message: 'Usuário deletado com sucesso',
        user
    })
})

app.listen(3000, () => {
    console.log('Servidor rodando na porta 3000')
})

/* 
rogerio
WzgyMWriuHtHrSG7
*/