const express = require('express');
const {moviesMock} = require('../utils/mocks/movies');

function moviesApi(app){
    const router = express.Router();
    app.use("/api/movies", router);

    router.get("/", async function(req, res, next){
        try{
            const movies = await Promise.resolve(moviesMock);
            res.status(200).json({
                data:movies,
                message: 'movies listed'
            });
        }catch(err){
            next(err);
        }
    });

    router.get("/:movieId", async function(req, res, next){
        try{
            const movies = await Promise.resolve(moviesMock[0]);  // Muestra la pelicula según la posición que se pida
            res.status(200).json({
                data:movies,
                message: 'movie retrieved' //Dato obtenido
            });
        }catch(err){
            next(err);
        }
    });

    router.post("/", async function(req, res, next){  //Creación de un nuevo objeto
        try{
            const createMovieId = await Promise.resolve(moviesMock[0].id);
            res.status(200).json({
                data: createMovieId,
                message: 'movie created' //Película creada
            });
        }catch(err){
            next(err);
        }
    });

    router.put("/:movieId", async function(req, res, next){
        try{
            const updatedMovieId = await Promise.resolve(moviesMock[0].id);//Va a devolver la pelicula que se modificó
            res.status(200).json({
                data: updatedMovieId,
                message: 'movies updated'//Película actualizada
            });
        }catch(err){
            next(err);
        }
    });

    router.delete("/:movieId", async function(req, res, next){
        try{
            const deleteMovie = await Promise.resolve(moviesMock[0].id);
            res.status(200).json({
                data: deleteMovie,
                message: 'movies deleted'
            });
        }catch(err){
            next(err);
        }
    });
}

module.exports = moviesApi;