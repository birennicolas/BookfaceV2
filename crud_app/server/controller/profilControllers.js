const Profil = require('../model/profil');

// All profiles //
const all_profils = (req, res) => {
    Profil.find().sort({ createdAt: -1 })
        .then((result) => {
            res.render('the_floor', { title:'The Floor', profils: result})
        })
        .catch((err) => {console.log(err)})
}

// Create and view new profiles //
const create_profil_get = (req, res) => {
    res.render('the_floor', { title: 'Profils'})
}
const create_profil_post = (req, res) => {
    const newProfil = new Profil(req.body)
    newProfil.save()
        .then((result) => { res.redirect('/the_floor') })
        .catch((err) => { console.log(err) })
}

// Single profile //
// Read
const find_profil = (req, res) => {
    const id = req.params.id;

    Profil.findById(id)
        .then(result => {
            res.render('modify', { profil: result, title: 'Edit profile'})
        })
        .catch (err => {
            res.status(404).render('404', { title: 'Profile not found'})
        })
}
// Update
const update_profil = (req, res) => {
    const id = req.params.id;

    Profil.findByIdAndUpdate(id, req.body, {new: true, useFindAndModify:true})
        .then(result => {
            res.redirect('/the_floor');
        })
        .catch(err => {
            res.status(404).render('404')
            console.log(err)
        })
}
//https://mongoosejs.com/docs/queries.html
//https://coursework.vschool.io/mongoose-crud/

// Delete
const delete_profil = (req, res) => {
    const id = req.params.id;

    Profil.findByIdAndRemove(id)
        .then(result => {
            res.json({ redirect: '/the_floor' });
        })
        .catch(err => {
            res.status(404).render('404')
            console.log(err)
        })
}

// exportation vers les routes
module.exports = {
    all_profils,
    create_profil_get,
    create_profil_post,
    find_profil,
    update_profil,
    delete_profil,
}