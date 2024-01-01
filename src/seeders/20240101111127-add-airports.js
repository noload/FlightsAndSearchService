'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */

    await queryInterface.bulkInsert('Airports',[
      {
        name:'Chhatrapati Shivaji Maharaj International Airport',
        cityId:5,
        createdAt:new Date(),
        updatedAt:new Date()

      },{
        name:'Juhu Aerodrome',
        cityId:5,
        createdAt:new Date(),
        updatedAt:new Date()
      },{
        name:'Navi Mumbai International Airport',
        cityId:5,
        createdAt:new Date(),
        updatedAt:new Date()
      },{
        name:'Hadapsar Airport',
        cityId:12,
        createdAt:new Date(),
        updatedAt:new Date()
      },{
        name:'Pune International Airport',
        cityId:12,
        createdAt:new Date(),
        updatedAt:new Date()
      },{
        name:'Sardar Vallabhbhai Patel International Airport',
        cityId:9,
        createdAt:new Date(),
        updatedAt:new Date()
      },
      {
        name:'Bhavnagar Airport',
        cityId:9,
        createdAt:new Date(),
        updatedAt:new Date()
      },{
        name:'Rajkot International Airport',
        cityId:9,
        createdAt:new Date(),
        updatedAt:new Date()
      },
      {
        name:'Surat International Airport',
        cityId:9,
        createdAt:new Date(),
        updatedAt:new Date()
      }
    ],{})
  },




  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
