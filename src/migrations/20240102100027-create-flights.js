'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Flights', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      FlightNumber: {
        type: Sequelize.STRING,
        allowNull:false,
        unique:true
      },
      airplaneId: {
        type: Sequelize.INTEGER
      },
      departureAirportId: {
        type: Sequelize.INTEGER
      },
      arrivalAirportId: {
        type: Sequelize.INTEGER
      },
      arrivalTime: {
        type: Sequelize.DATE
      },
      departureTime: {
        type: Sequelize.DATE
      },
      price: {
        type: Sequelize.INTEGER
      },
      bordingGate: {
        type: Sequelize.STRING
      },
      totalSeats: {
        type: Sequelize.INTEGER
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Flights');
  }
};