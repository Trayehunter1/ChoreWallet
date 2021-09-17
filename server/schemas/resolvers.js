// const { AuthenticationError } = require('apollo-server-express');
const { User, Chore, ChoreLocation } = require('../models');
// const { signToken } = require('../utils/auth');
// const stripe = require('stripe')('sk_test_4eC39HqLyjWDarjtT1zdp7dc');

const resolvers = {
  Query: {
    chores: async (parent, { email }) => {
      const params = email ? { email } : {};
      return Chore.find(params);
    },
    chore: async (parent, { _id }) => {
      return Chore.findOne({ _id });
    },
    choreLocations: async () => {
      return ChoreLocation.find();
    },
    choreLocation: async (parent, { _id }) => {
      return ChoreLocation.findOne({ _id });
    },
    // get all users
    users: async () => {
      return User.find()
        .select('-__v -password')
        .populate('chores');
    },
    user: async (parent, { email }) => {
      return User.findOne({ email })
        .select('-__v -password')
        .populate('chores')
    }

  }
};

module.exports = resolvers;