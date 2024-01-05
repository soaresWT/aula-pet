import { createUser, findAll } from "../repositorys/userRepository.js";

const createNewUser = async (req, res) => {
    try {
        const dataUser = req.body;
        const result = await createUser(dataUser)
        if (!result) {
            res.status(400).send({ "error": "nao foi possivel criar um novo usuario" })
        }
        res.status(200).send({ "message": `usuario ${result.id} criado com sucesso` })
    } catch (error) {
        res.status(400)
    }
}

const findAllUsers = async (req, res) => {
    try {
        const users = await findAll();
        res.status(200).send(users)
    } catch (err) {
        res.status(400)
    }
}

export { createNewUser, findAllUsers }