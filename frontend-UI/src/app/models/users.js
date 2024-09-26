import { mongoose, model, models, Types } from 'mongoose';

const userSchema = new mongoose.Schema({
  userName: {
    type: String,
    required: [false, 'UserName is Neccessary'],
  },
  email: {
    type: String,
  },
  mobile: {
    type: String,
  },
  password: {
    type: String,
    required: [false],
  },
  confirmPassword: {
    type: String,
    required: [false],
  },
  products: [
    {
      type: String,
    },
  ],
});

// userSchema.pre('save', (next) => {

// //   console.log(this);
//   console.log('ch2');
//   //   if (this.userName) {
//   //     console.log('userName');
//   //   }
//   next();
// });

const Users = models?.Users || model('Users', userSchema);

export default Users;
