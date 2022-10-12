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
    
        const posts = postData.map((posts) => posts.get({ plain: true }));
        const user = userData.get({ plain: true });
    
        res.render('dash', {
          posts,
          user,
          logged_in: req.session.logged_in
        });
})

router.get('/new', withAuth, async (req, res) => {
  
  res.render('new', {
    logged_in: req.session.logged_in
  });

})

router.get('/:id', withAuth, async (req, res) => {
  const singleData = await Post.findByPk(req.params.id,{
    include: [
      {
        model: User,
        attributes: ['name']
      }
    ]
  });

  const post = singleData.get({ plain: true });

  res.render('edit', {
    post,
    logged_in: req.session.logged_in
  });
})


module.exports = router;