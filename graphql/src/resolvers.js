const users = require('./User');

module.exports = {
    Query: {
        users: () => User.find(),
        user: (_, { id }) => User.findBy(id),
    },

    Mutation: {
        createUser: (_,{ name, email }) =>User.create({ name, email}),
    }
};