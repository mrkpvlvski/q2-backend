const db = require('../../db')
const bcrypt = require('bcrypt-as-promised')
const userModel = require('./users')
const location = '47.614445, -122.322622'


function create(message,id){

  return userModel.getOneById(id)
  .then(function(user){
    return (
      db('messages')
      .insert({ users_id: user.id, message, location })
      .returning('*')
    )
  })
}

module.exports = {
  create
}
