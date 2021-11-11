const Posts = require("./models/Posts");

const resolvers = {
  Query: {
    hello: () => {
      return "Hello World";
    },
    getAllPosts: async () => {
      return await Posts.find();
    },
    getPost: async (_parent, { id }, _context, _info) => {
      return await Posts.findById(id);
    }
  },

  Mutation: {
    createPost: async (_parent, args, _context, _info) => {
      const { title, description } = args.post;
      const post = new Posts({ title, description })
      await post.save();
      return post;
    },
    deletePost: async (_parent, args, _context, _info) => {
      const { id } = args;
      await Posts.findByIdAndDelete(id);
      return "Deleted!"
    },
    updatePost: async (_parent, args, _context, _info) => {
      const { id } = args;
      const { title, description } = args.post;
      const post = await Posts.findByIdAndUpdate(id,
        { title, description },
        { new: true }
      );
      return post;
    },
  }
};

module.exports = resolvers;