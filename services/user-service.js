const mongoService = require("./mongo-service");
const uuid =require('uuid/v4');
const ObjectId = require("mongodb").ObjectId;

// async function isUsernameExists(username){
//   const res = await  mongoService.connect().then(db =>
//     db.collection("users").find({"username":username}).count());

// return res>0;
// }
function addDeedToUser({userId,deedId}) {
  const id = new ObjectId(userId);
  return mongoService.connect().then(db =>
    db.collection("users").updateOne(
      { _id: id },
      {
        $push: {
          "deeds": deedId
        }
      }
    )
  );
}

// function toggleLiketoPost(data) {
//   const { userId, userLikes } = data;
//   const id = new ObjectId(userId);
//   return mongoService.connect().then(db =>
//     db.collection("users").updateOne(
//       { _id: id },
//       {
//         $set: {
//           likes: userLikes
//         }
//       }
//     )
//   );
// }
function checkLogin(userCredentials) {
  const {username,password}=userCredentials;
  return mongoService.connect().then(db => {
    const collection = db.collection("users");
    return collection
      .findOne({
        $and: [
          { username: username },
          { password: password }
        ]
      })
      .then(user => {
        if (user) {
          console.log('user',user)
          delete user.password;
        }
        return user;
      });
  });
}
//register user and add required fields
//fields: name,password,email,adress,userImg,score
function register(user) {
  user.userImg='';
  user.deeds=[];
  user.score=120;
  return mongoService
    .connect()
    .then(db => db.collection("users").insertOne(user))
    .then(res => {
      delete user.password;
      return user;
    });;
}
// function addPost(data)
// {
//   const {userId,postId}=data;
//   const id=new ObjectId(userId);
//   const obj={type:'post',postId:postId}
//   return mongoService.connect().then(db=>db.collection("users").updateOne({"_id":id},
//   {
//     $push: {
//       posts:obj
//     }
//   }))
// }
// function update(user) {
//   user._id = new ObjectId(user._id);
//   return mongoService
//     .connect()
//     .then(db =>
//       db.collection("users").updateOne({ _id: user._id }, { $set: { ...user } })
//     );
// }
// function getUserById(userId) {
//   const id = new ObjectId(userId);
//   return mongoService
//     .connect()
//     .then(db => db.collection("users").findOne({ _id: id }));
// }

module.exports = {
  checkLogin,
  register,
  addDeedToUser
  // toggleLiketoPost,
  // updateUserImg,
  // getUserById,addPost,isUsernameExists

};
