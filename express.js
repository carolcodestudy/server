import express, { json } from "express";
import routes from "./src/config/routes/postroute.js";


/* AULA 1
const app = express();

Cria uma função para que o servidor escute uma mensagem através da porta 3000
app.listen(3000, ()=>{
    console.log("Porta aberta. O servidor está escutando!");
    Rode node nome_do_arquivo para que apareça a mensagem.
});

Cria uma rota com requisição e resposta que vai passar uma frase na página no navegador.
app.get('/app' , (req , res)=> {
    res.status(200).send(dates);
    Para executar, pare o terminal de rodar e depois rode o arquivo express.js novamente;
    Abre o navegador e digita: localhost:3000\
    Não pode deixar somente / na rota tem que por um nome.
});
*/

/* AULA 2 
//Criar um array para emitir na página
let dates = [
    {id : 1, descr : "primeiro xaninho" , url : "https:placecats.com/millie/300/150"} ,
    {id : 2, descr : "segundo xaninho" , url : "https:placecats.com/millie/300/150"},
    {id : 3, descr : "terceiro xaninho" , url : "https:placecats.com/millie/300/150"}
]

const app = express();
//Captura o texto e manda um json para o client-side
app.use(express.json());

app.listen(3000, ()=>{
    console.log("Porta aberrta...");
});

app.get('/posts' , (req , res)=>{
    //Retorna as informações do array
    res.status(200).json(dates);
});

//Função para acessar o id de cada objeto
function toSearchId(idItem){
    return dates.findIndex((date)=>{
        return date.id === Number(idItem)
    });
}

app.get('/posts/:id' , (req , res)=>{
    const loupe = toSearchId(req.params.id)
    res.status(200).json(dates[loupe])
});

//Criação do banco usaando MongoDB

/*EXERCICÍO
//Criar um array para emitir na página
let dates = [
    {id : 1, descr : "primeiro xaninho" , url : "https:placecats.com/millie/300/150"} ,
    {id : 2, descr : "segundo xaninho" , url : "https:placecats.com/millie/300/150"},
    {id : 3, descr : "terceiro xaninho" , url : "https:placecats.com/millie/300/150"}
]

const app = express();
//Captura o texto e manda um json para o client-side
app.use(express.json());

app.listen(3000, ()=>{
    console.log("Porta aberta...");
});

app.get('/posts' , (req , res)=>{
    //Retorna as informações do array
    res.status(200).json(dates);
});

//Função para acessar o id de cada objeto
function toSearchId(result){
   return dates.findIndex((date)=>{
        return date.descr == result
   })
}

app.get('/posts/:descr' , (req , res)=>{
    const loupe = toSearchId(req.params.descr)
    let status = 200
    if(status == 200){
        res.status(200).json(dates[loupe]);
    }
    else{
        res.status(404).send("Resposta não esperada");
        console.log("Resposta não esperada");   
    }  
});
*/ 

/*AULA 3*/
const app = express();
//console.log(process.env.DATABASECONNECTION)

/*AULA 5*/
//O script vai prestar serviço para a pasta estática de imagens
app.use(express.static("uploads"));

//Chama a rota para que /posts seja executado no navegador
routes(app);

app.listen(3000, ()=>{
    console.log("Porta aberta...");
});

/*Os códigos continuam nos arquivos localizados no diretório src*/