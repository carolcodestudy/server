/*AULA 3 - 3*/
import {getPosts, sendingPost, updatingPost} from "../models/postmodel.js";
import fs from "fs";
import { error } from "console";
import gerarDescricaoComGemini from "../services/serviceai.js";

export async function toListPost(req, res){
    const result = await getPosts();
    //Retorna as informações do array
    res.status(200).json(result);
}

/*AULA 4*/
export async function toCreatePost(req, res){
    const new_post = req.body;
    try{
        //Vai tentar criar o post e enviar o conteúdo no body da requisição para o servidor
        const post_saved = await sendingPost(new_post);
        res.status(200).json(post_saved);
    } catch(erro){
        console.error("Erro: " , erro.message);
        res.status(500).send("Algo deu errado com o servidor");
    }
}

export async function uploadingImg(req, res){
    try{
        const new_post = {
            description : "",
            url : req.file.originalname,
            alt : ""
        }
        const post_saved = await sendingPost(new_post);
        const img_saved = `uploads/${post_saved.insertedId}.png`
        fs.renameSync(req.file.path, img_saved)
        res.status(200).json(post_saved);
    } catch(erro){
        console.error("Erro: " , erro.message);
        res.status(500).send("Algo deu errado com o servidor");
    }        
}

/*AULA 5*/
export async function toUpdatePost(req, res){
    //Passa o id para identificar qual post editar
    const id = req.params.id;
    const new_url = `http://localhost:3000/${id}.png`

    try {
         const img_buffer = fs.readFileSync(`uploads/${id}.png`)
         //Chama a API da AI para gerar a descrição
         const description = await gerarDescricaoComGemini(img_buffer);
         
        //Passa os campos da coleção com os valores
        const dates = {
        description : description,
        url : new_url,
        alt : req.body.alt
        }
        const new_dates = await updatingPost(id, dates);
         res.status(200).json(new_dates);
        } catch (erro){
          console.error("Erro:  " , erro.message);
          res.status(500).send("Ocorreu algum erro com a requisição!");
        }
}