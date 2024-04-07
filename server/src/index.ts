import { Prisma, PrismaClient } from '@prisma/client';
import express, { Express, Request, Response } from 'express';

const app: Express = express();
const port = 1111;
const cors = require('cors');
const prisma = new PrismaClient();

app.use(cors());

app.get('/', async (req: Request, res: Response) => {
  try {
    const getDataUsers = await prisma.users.findMany();
    res.status(200).send({
      message: 'Success',
      data: getDataUsers,
    });
  } catch (error: any) {
    res.send(error.message);
  }
});

app.post('/new', async (req: Request, res: Response) => {
  try {
    const { name, address, email, username, password, role } = req.body;
    console.log(name)
    const newUsers = await prisma.users.create({
      data: {
        name,
        address,
        email,
        username,
        password,
        role,
      },
    });
    res.send(newUsers);
  } catch (error: any) {
    res.send(error.message);
  }
});

app.listen(port, () => {
  console.log(`🦊[server]: This Server Running at http://localhost:${port}`);
});
