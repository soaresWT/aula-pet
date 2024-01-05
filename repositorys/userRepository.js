import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const createUser = async (user) => {
    try {
        console.log("prisma", user)
        const newUser = await prisma.user.create({ "data": user })
        console.log(newUser)
        return newUser
    } catch (error) {
        //console.log(error)
        return false
    }

}
const findAll = () => {
    const users = prisma.user.findMany()
    console.log(users)
    return users
}

export { createUser, findAll }
