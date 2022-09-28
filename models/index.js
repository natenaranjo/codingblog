const User = require('./User');
const Post = require('./Posts');
const Comment = require('./Comments');

Post.belongsTo(User, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
});

Comment.belongsTo(Post, {
    foreignKey: 'post_id',
    onDelete: 'CASCADE'
})

module.exports = { Post, Comment };