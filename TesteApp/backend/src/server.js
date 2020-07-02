const express = require('express'); //Facilitador (.get,.listen)
const routes = require('./routes'); //caminho relativo (. = pasta atual)
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
//YARN RUN

mongoose.connect('mongodb+srv://Brenteganiluis:Brenteganiluis@omnistack-cyznk.mongodb.net/semana09?retryWrites=true&w=majority',{
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

//GET, POST, PUT, DELETE
//Buscar info, criar, alterar e deletar

//red.query = Acessar query params (para filtros)
//req.params = Acessar route params (Para edição e delete)
//req.body = Acessar corpo da requisição (para criação, edição)

//Qual rota eu quero executar
//Req = todas as infos que o usuário está passando
//Res = devolver algo pro cliente

/*app.put('/users/:id', (req, res) => {
    return res.json({ id: req.params.id }); 
});
app.get('/users', (req, res) => { //Se eu enviar com o insomnia em get users vai retornar
    return res.json({ idade: req.query.idade }); 
});
app.get('/users', (req, res) => {
    return res.json({ message: "Sai fora caralho todo dia isso" }); //res.send('Ae garai!') => envia um texto
});*/

app.use(cors()); //{ origin: 'http://localhost:3333'}
app.use(express.json());
app.use(routes);




app.listen(3333); //Define a página da net (localhost:3333)

