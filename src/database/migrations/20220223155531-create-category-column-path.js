'use strict'

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.addColumn('categories', 'path', {

      type: Sequelize.STRING

    })
  },

  async down (queryInterface) {
    await queryInterface.removeColumn('categories', 'path')
  }
}
