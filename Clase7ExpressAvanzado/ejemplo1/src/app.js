import express from "express";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const users = [];

app.get('/users', (req, res) => {
    res.send({ users })
});

app.post('/users', (req, res) => {
    try {
        const newUser = req.body;
        users.push(newUser);
        res.status(201).send('New user added!');
    } catch (error) {
        console.error('hubo un error, pero estoy bien!')
    }
});

app.put('/users/:id', (req, res) => {
    const id = req.params.id;
    const dataToUpdate = req.body;
    console.log({ users, id })
    let user = users.find(u => u.id === parseInt(id));
    if(!user) res.status(404).send('user not found');
    user = { ...user, ...dataToUpdate };
    users.splice(users.indexOf(user), 1, user);
    res.send({ user });
});

app.delete('/users/:id', (req, res) => {
    const id = req.params.id;
    const user = users.find(u => u.id === parseInt(id));
    if(!user) res.status(404).send('user not found');
    users.splice(users.indexOf(user), 1);
    res.send({ status: 'success', user });
});

app.listen(8080, () => console.log('servidor arriba!'))