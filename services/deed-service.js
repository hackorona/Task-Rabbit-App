const mongoService = require("./mongo-service");
const ObjectId = require("mongodb").ObjectId;

// //every like to post is {userid,username,userimg}
// function updateLikes(data){
//   const {postId,postLikes}=data;
//   const id= new ObjectId(postId);

//   return mongoService
//   .connect()
//   .then(db => db.collection("posts").updateOne({_id:id},{$set:{
//     likes:postLikes
//   }}));

// }
// function updateAuthorImg(data){
//   const {userId,userImg}=data;
//   console.log('userId is',userId);
//   return mongoService
//   .connect()
//   .then(db => db.collection("posts").updateMany({"userId":userId},{$set:{
//     "userImg":userImg
//   }}))
// } 
// function getUserPosts(userId) {
//   console.log('userId',userId)
//   return mongoService
//     .connect()
//     .then(db => db.collection("posts").find({userId:userId}).sort({timeStamp:-1}).toArray());
// }
// function addComment(data){
//   const {postId,commentText,userId,userImg,username}=data;
//   const _id=new ObjectId(postId);
  
//   return mongoService
//   .connect()
//   .then(db => db.collection("posts").updateOne({_id:_id},{$push:{
//     comments:{commentText,userId,userImg,username}
//   }}))
// }
//offer
//type 1(1 offer 2 help)
//status 1(1active 2 done)
//userId:id
//helpType: (pets  medical etc)
//acceptedOfferId
//createdAt:timestamp
//titl,description adress,radius - text
function addOffer(offer) {
  offer.type=1;
  offer.status=1;
  offer.acceptedOfferId='';
  offer.createdAt = Date.now();
  return mongoService
    .connect()
    .then(db => db.collection("deeds").insertOne(offer));
}
//request
//type 3(1 offer 2 request)
//status 1(1active 2 done)
//userId:id
//helpType: text(pets  medical etc)
//acceptedRequestId
//createdAt:timestamp
//title,description adress,radius,urgency - text
function addRequest(request) {
  request.type=2;
  request.status=1;
  request.acceptedRequestId='';
  request.createdAt = Date.now();
  return mongoService
    .connect()
    .then(db => db.collection("deeds").insertOne(request));
}
function getDeeds() {
  return mongoService
    .connect()
    .then(db => db.collection("deeds").find({}).sort({'createdAt':-1}).toArray())
}
module.exports = {
  addOffer,
  getDeeds,
  addRequest
};
