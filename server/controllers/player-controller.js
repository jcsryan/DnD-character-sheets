const { db } = require('../config/connection');
const {Player} = require('../models')

const playerController = {
    getAllPlayer(req, res){
        Player.find({})
        .then(dbPlayerData => res.json(dbPlayerData))
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
          });
    },

    getPlayerById({params}, res){
        Player.findOne({_id: params.id})
        .then(dbPlayerData => {
            if(!dbPlayerData){
                res.status(404).json({message: 'No player found with this id'});
                return;
            }
            res.json(dbPlayerData)
        })
        .catch(err => {
            console.log(err);
            res.status(400).json(err);
        })
    },

    createPlayer({body}, res) {
        Player.create(body)
        .then(dbPlayerData => res.json(dbPlayerData))
        .catch(err => res.status(400).json(err));
    },

    updatePlayer({params, body}, res) {
        Player.findByIdAndUpdate({ _id: params.id}, body, {new: true})
        .then(dbPlayerData => {
            if(!dbPlayerData){
                res.status(404).json({message: 'No player found with this id'});
                return;
            }
            res.json(dbPlayerData);
        })
        .catch(err => res.status(400).json(err));
    },

    deletePlayer({params}, res) {
        Player.findByIdAndDelete({ _id: params.id})
        .then(dbPlayerData => {
            if(!dbPlayerData){
                res.status(404).json({message: 'no player found with this id'});
                return;
            }
            res.json(dbPlayerData);
        })
        .catch(err => res.status(400).json(err));
    }

};

module.exports = playerController