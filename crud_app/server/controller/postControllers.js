const Post = require('../model/post');

// Read all (The Hall) //
const all_posts = (req, res) => {
    Post.find().sort({ createdAt: -1 })
        .then((result) => { res.render('the_hall', { title: 'The Hall', posts: result }) })
        .catch((err) => { console.log(err) })
}

// Get individual post //
const post_details = (req, res) => {
    const id = req.params.id;
    Post.findById(id)
        .then(result => {
            res.render('edit', { post: result, title: 'Edit post'});
        })
        .catch(err => {
            res.status(404).render('404',{ title: 'Post not found'})
        })
}

// Create //
const add_post_get = (req, res) => {
    res.render('the_hall', { title: 'Posts' });
}
const add_post_post = (req, res) => {
    const newPost = new Post(req.body)
    newPost.save()
        .then((result) => { res.redirect('/the_hall') })
        .catch((err) => { console.log(err) })
}

// Delete //
const post_delete = (req, res) => {
    const id = req.params.id;
    Post.findByIdAndRemove(id)
        .then(result => {
            res.json({ redirect: '/the_hall' });
        })
        .catch(err => {
            res.status(404).render('404',{ title: 'Post not found'})
        })
}

// Update //
// const post_update = async (req, res) => {
//     try {
//         const id = req.params.id;
//         await Post.findByIdAndUpdate(id, req.body, {
//             // body: req.body.content,
//             new: true
//         }, callback)
//         res.redirect('/the_hall')
//     }
//     catch (err) {
//         res.status(404).render('404',{ title: 'Post not found'})
//         console.log(err)
//     }
// }
const post_update = (req, res) => {
    // const { PostId } = req.params;
    // console.log(req.params)
    // console.log(PostId)
    // const options = {new: true}
    // return new Promise ((resolve, reject) => {
    //     Post.findByIdAndUpdate(
    //         PostId, options
    //         // the callback function
    //         // (err, post) => {
    //         // // Handle any possible database errors
    //         //     if (err) return res.status(500).send(err);
    //         //     return res.send(post);
    //         // }
    //     )
    //     .then(response => {
    //         console.log(response)
    //         resolve(response)
    //     })
    //     .catch(error => {
    //         console.log(error)
    //         reject(error)
    //     })
    // })



    Post.findByIdAndUpdate(
        // the id of the item to find
        req.params.PostId,
        
        // the change to be made. Mongoose will smartly combine your existing 
        // document with this change, which allows for partial updates too
        req.body,
        
        // an option that asks mongoose to return the updated version 
        // of the document instead of the pre-updated one.
        {new: true},
        // {useFindAndModify:false},
        
        // the callback function
        (err, post) => {
        // Handle any possible database errors
            if (err) return res.status(500).send(err);
            return res.send(post);
        }
    )

    // const id = req.params.id;

    // Post.findByIdAndUpdate(id, req.body)
    //     .setOptions({ overwrite: true, new: true})
    //     .then(result => {
    //         res.redirect('/the_hall');
    //     })
    //     .catch(err => {
    //         res.status(404).render('404',{ title: 'Post not found'})
    //         console.log(err)
    //     })
}

// exportation vers les routes
module.exports = {
    all_posts,
    add_post_get,
    add_post_post,
    post_details,
    post_delete,
    post_update
}