const router = require('express').Router();
const { User } = require('discord.js');
const { Comment } = require('../../models');
const withAuth = require('../../utils/auth');

router.post('/', withAuth, async (req, res) => {
    Comment.create({
        ...req.body,
        user_id: req.session.user_id,
    })
    .then(comments => res.json(comments))
    .catch((err) => res.status(500).json(err))
})

router.put('/:id', withAuth, async (req, res) => {
    Comment.update(req.body, {
        where: { id: req.params.id },
    })
    .then(comments => res.json(comments))
    .catch((err) => res.status(500).json(err))

    console.log('Fetch request was received!');
    console.log(req.params.id);
})

router.delete('/:id', withAuth, async (req, res) => {
    const delComment = await Comment.destroy({
        where: {
            id: req.params.id,
            user_id: req.session.user_id,
        },
    });

    if(!delComment) {
        res.status(404).json({ message: 'No comment found with this id!'});
        return;
    }

    res.status(200).json(delComment);
})

module.exports = router;