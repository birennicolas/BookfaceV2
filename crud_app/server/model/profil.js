const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const profilSchema = new Schema ({
    nom: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    pseudo: {
        type: String,
        required: true
    }
}, {timestamps: true});

const Profil = mongoose.model('Profil', profilSchema);
module.exports = Profil;