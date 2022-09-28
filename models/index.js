const User = require('./User');
const Posts = require('./Post');
const Comments = require('./Comments');

Posts.belongsTo(User, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
});

Comments.belongsTo(Posts, {
    foreignKey: 'post_id',
    onDelete: 'CASCADE'
})

module.exports = { Posts, Comments };