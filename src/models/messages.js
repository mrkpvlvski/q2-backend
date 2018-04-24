const db = require('../../db')
const st = require('knex-postgis')(db)
console.log(st);
const bcrypt = require('bcrypt-as-promised')
const userModel = require('./users')
const location = '47.614445, -122.322622'
const currentLocation = '47.614440, -122.322620'



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

function distance(distance){
  console.log('hi');
  return (
    db('messages')
    // .where({location})
    .returning('*')
  )
}

module.exports = {
  create,
  distance
}