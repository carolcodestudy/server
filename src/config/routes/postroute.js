/*AULA 3 - 4*/
import express from "express";
/*AULA 4*/
import multer from "multer";
 /*AULA 4 e 5*/
import { toListPost, toCreatePost, uploadingImg, toUpdatePost } from "../controllers/postcontroll.js";
import cors from "cors";

const date_cors ={
    origin : "http://localhost:8000",
    optionsSuccessStatus : 200
}

//Configura o armazenamento do Multer para uploads de imagens
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      //Especifica o diretório para armazenar as imagens enviadas
      cb(null, 'uploads/'); //Substitua por seu caminho de upload desejado
    },
    filename: function (req, file, cb) {
      //Mantém o nome original do arquivo por simplicidade
      cb(null, file.originalname); //Considere usar uma estratégia de geração de nomes únicos para produção
    }
  });

const folder_img  = multer({dest : "./uploads", storage});

const routes = (app)=>{ 
    app.use(express.json());
    app.use(cors(date_cors));
    app.get('/posts' , toListPost);
    app.post('/posts' , toCreatePost);
    app.post('/upload' , folder_img.single("image"), uploadingImg);
    app.put('/upload/:id', toUpdatePost);
}
export default routes;