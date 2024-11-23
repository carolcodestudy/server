/*AULA 5*/
import 'dotenv/config';
import { ObjectId } from "mongodb";
/*AULA 3 - 2*/
import connecttoBank from "../dbconfig.js"

const connection = await connecttoBank(process.env.DATABASECONNECTION);

//Busca os dados no banco
export async function getPosts(){
    const database = connection.db("imersaoalura")
    const coll = database.collection("posts")
    //Inicia a pesquisa pelos dados na coleção que retorna para o front-end como array
    return coll.find().toArray();
}

/*AULA 4 */
export async function sendingPost(new_post){
    const database = connection.db("imersaoalura")
    const coll = database.collection("posts")
    //Adiciona um novo registro
    return coll.insertOne(new_post)
}

/*AULA 5*/
export async function updatingPost(id, new_post){
    const database = connection.db("imersaoalura")
    const coll = database.collection("posts")
    //Cria um objeto para receber o id
    const id_object = ObjectId.createFromHexString(id)
    //Adiciona um novo registro criando um objeto e envia novos dados
    return coll.updateOne({_id : new ObjectId(id_object)}, {$set: new_post});
}
