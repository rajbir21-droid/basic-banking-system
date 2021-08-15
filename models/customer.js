const mongoose = require('mongoose')

const UserSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    require: true,
  },
  balance: {
    type: Number,
    required: true,
  },
})

module.exports = mongoose.model('User', UserSchema)
