const { response } = require('express');
const { pool } = require('../database/config');
const csv = require('csv-parse');
const fs = require('fs');

const getPoints = async (req, res = response) => {
    pool.query('SELECT * FROM puntos;', (error, results) => {
        if(error){
            throw error;
        }
        res.status(200).json( results.rows );
    });
}

const insertPoints = async (req, res = response) => {

    fs.createReadStream('../puntos_examen_fullstack.csv')
    .pipe(csv())
    .on('data', (row) => {
       pool.query('INSERT INTO puntos (the_geom, cartodb_id, tipo, latitude, longitude, color) VALUES ($1, $2, $3, $4, $5, $6)', 
            [row[0], row[1], row[2], row[3], row[4], row[5]], 
            (error, results) => {
                if (error) {
                 throw error
                }
      })
    })
    .on('end', () => {
        console.log('CSV file successfully processed');
      response.status(201).json({
         msg: 'CSV file successfully processed' 
        });
    });
}


module.exports = {
    getPoints,
    insertPoints
}