const mongoose = require('mongoose');
mongoose.set('strictQuery', false);
mongoose.connect('mongodb://localhost:27017/Project-FPL',).then(() => {
  console.log(`server is running`)
}).catch(error => {
  console.log(error)
});
