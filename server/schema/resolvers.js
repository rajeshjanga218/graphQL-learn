import { users, movies } from "./fake-data.js";

const resolvers = {
  Query: {
    // user resolvers
    users: () => users,
    user: (parent, args) => {
      const id = args.id;
      const user = users.filter((item) => item.id === id);
      console.log(user);
      return user[0];
    },

    // movie resolvers
    movies: () => movies,
    movie: (parent, args) => {
      const id = args.id;
      const movie = movies.filter((item) => item.id === id);
      return movie[0];
    },
  },

  User: {
    favouriteMovies: () => {
      const fav = movies.filter((item) => item.yearOfPublication > 2010);
      return fav;
    },
  },

  Mutation: {
    createUser: (parent, args) => {
      const newUser = args.input;
      const lastId = users[users.length - 1].id;
      newUser.id = lastId + 1;
      users.push(newUser);
      return newUser;
    },
    updateUsername: (parent, args) => {
      const { id, username } = args.input;
      let userUpdated = null;
      users.forEach((user) => {
        if (user.id === id) {
          user.username = username;
          userUpdated = user;
        }
      });
      return userUpdated;
    },
  },
};

export default resolvers;
