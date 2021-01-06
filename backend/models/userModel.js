const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const userSchema = mongoose.Schema(
  {
    first_name: {
      type: String,
      required: true,
    },
    last_name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    phone: {
      type: Number,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
)


userSchema.methods.matchPassword = async function (enteredPassword) {
  console.log(await bcrypt.compare(enteredPassword, this.password));
  return await bcrypt.compare(enteredPassword, this.password)
}

userSchema.pre('save', async function (next) {
  if (!this.isModified('password')) {
    next()
  }

  // const salt = await bcrypt.genSalt(10)
  this.password = await bcrypt.hash(this.password, 10)
  console.log(this.password);
})


const User = mongoose.model('User', userSchema);

module.exports = User;
