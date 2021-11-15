'use strict';

const _ = require('lodash');

function generateUser (key) {

  return {
    first_name: `UserName${key}`,
    last_name: `LastName${key}`,
    email: `mail${key}@mail.com`,
    password_hash: 'osghsaofadugtrpgash845489gsdil',
    birthday: new Date(_.random(1970, 2000), _.random(0,11), _.random(0, 31)),
    is_male: Math.random() > 0.5,
    created_at: new Date(),
    updated_at: new Date(),
  }
}

function generateUsers (amount) {

  return new Array(amount).fill(null).map((user, index)=> generateUser(index) )
}

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
     await queryInterface.bulkInsert('users', generateUsers(50), {});
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
