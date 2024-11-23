/*AULA 3 - 1*/
import { MongoClient } from "mongodb";

/*Template*/
export default async function connecttoBank(connection){
   
 let mongo_object;

 try{
    mongo_object = new MongoClient(connection);
    console.log("Conectando ao cluster do banco de dados...")
    await mongo_object.connect();
    console.log("Conectado ao MongoDB Atlas com sucesso!")
    return mongo_object;
    
 }catch (erro) {
    console.error("Falha na conexão com o banco!" , erro);
    process.exit();
 }
}