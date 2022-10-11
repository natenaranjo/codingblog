const router = require('express').Router();
const sequelize = require('../config/connection');
const { Post, User } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', withAuth, async (req, res) => {
        const postData = await Post.findAll({
            where: { user_id: req.session.user_id },
            include: [
              {
                model: User,
                attributes: ['name']
              }
            ]
        });

        const userData = await User.findByPk(req.session.user_id, {

        });
    
        const posts = postData.map((post) => post.get({ plain: true }));
        const user = userData.get({ plain: true });
    
        console.log(posts);

        res.render('dash', {
          posts,
          user,
          logged_in: req.session.logged_in
        });
})

router.get('/:id', withAuth, async (req, res) => {
  const postData = await Post.findByPk(req.params.id,{
    include: [
      {
        model: User,
        attributes: ['name']
      }
    ]
  });

  const post = postData.get({ plain: true });

  console.log(post);

  res.render('edit', {
    post,
    logged_in: req.session.logged_in
  });
})

module.exports = router;