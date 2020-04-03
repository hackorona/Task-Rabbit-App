const deedService = require("../services/deed-service");
const userService = require("../services/user-service");
function addRoutes(App) {


  App.post(`/deeds/addRequest`, async(req, res) => {
    const request = req.body;
    const {userId}=request;
    console.log('userId',userId);
    try{
      const requestRes=await deedService.addRequest(request);
      const deedId=requestRes.insertedId;
      const userRes=await userService.addDeedToUser({userId,deedId});
      return res.json();
    }
    catch(e){
      res.status(500).send({ error: "failed add request" });
    }
  });
  App.post(`/deeds/addOffer`,async (req, res) => {
    const offer = req.body;
    const {userId}=offer;
 try{
   const offerRes= await  deedService.addOffer(offer);
   const deedId=offerRes.insertedId;
   const userRes=await userService.addDeedToUser({userId,deedId})
   return res.json(); 
 }
 catch(e){
  res.status(500).send({ error: "failed add offer" });
 } 
   
      
   
  });
  App.get("/getDeeds", (req, res) => {
    deedService
      .getDeeds()
      .then(deeds => res.json(deeds))
      .catch(err => res.status(500).send("couldnt get deeds, sorry"));
  });
}
module.exports = addRoutes;
