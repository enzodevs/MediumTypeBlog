const Post = require('../models/post');

const createPost = async (req, res) => {
  const { title, content, author } = req.body;

  try {
    const post = new Post({
      title,
      content,
      author,
    });

    await post.save();

    res.status(201).json(post);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

const getPosts = async (req, res) => {
  try {
    const posts = await Post.find().populate('author', 'username');
    res.json(posts);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

module.exports = { createPost, getPosts };