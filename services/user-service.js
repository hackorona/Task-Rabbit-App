const mongoService = require("./mongo-service");
const uuid =require('uuid/v4');
const ObjectId = require("mongodb").ObjectId;

async function isUsernameExists(username){
  const res = await  mongoService.connect().then(db =>
    db.collection("users").find({"username":username}).count());

return res>0;
}
function updateUserImg(data) {
  const { userId, userImg } = data;
  const id = new ObjectId(userId);
  return mongoService.connect().then(db =>
    db.collection("users").updateOne(
      { _id: id },
      {
        $set: {
          userImg: userImg
        }
      }
    )
  );
}

function toggleLiketoPost(data) {
  const { userId, userLikes } = data;
  const id = new ObjectId(userId);
  return mongoService.connect().then(db =>
    db.collection("users").updateOne(
      { _id: id },
      {
        $set: {
          likes: userLikes
        }
      }
    )
  );
}
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
          delete user.password;
        }
        return user;
      });
  });
}
//register user and add required fields
//fields: name,password,email,adress,userImg
function register(user) {
  user.userUmg='';
  user.id=uuid();
  return mongoService
    .connect()
    .then(db => db.collection("users").insertOne(user))
    .then(res => {
      delete user.password;
      return user;
    });;
}
function addPost(data)
{
  const {userId,postId}=data;
  const id=new ObjectId(userId);
  const obj={type:'post',postId:postId}
  return mongoService.connect().then(db=>db.collection("users").updateOne({"_id":id},
  {
    $push: {
      posts:obj
    }
  }))
}
function update(user) {
  user._id = new ObjectId(user._id);
  return mongoService
    .connect()
    .then(db =>
      db.collection("users").updateOne({ _id: user._id }, { $set: { ...user } })
    );
}
function getUserById(userId) {
  const id = new ObjectId(userId);
  return mongoService
    .connect()
    .then(db => db.collection("users").findOne({ _id: id }));
}

module.exports = {
  checkLogin,
  register,
  update,
  toggleLiketoPost,
  updateUserImg,
  getUserById,addPost,isUsernameExists

};
