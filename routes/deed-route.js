const deedService = require("../services/deed-service");
const userService = require("../services/user-service");
function addRoutes(App) {
  App.post(`/deeds/assignToRequest`, async (req, res) => {
    const { requestHelpId, userId } = req.body;
    const deedId=requestHelpId;
    try{
      const [resDeed,resUser ] = await Promise.all([
        deedService.assignToRequest({userId, deedId}),
        userService.addDeedToUser({ userId, deedId })
      ]);
      res.json();
    }
    catch(e){
      console.log('faild to asign task');
      res.status(500).send({ error: "failed add request" });
    }
    return res.json();
  });
  App.post(`/deeds/assignToOffer`, async (req, res) => {
    const { offerHelpId,userId } = req.body;
    const deedId=offerHelpId;
    try{
      const [resDeed,resUser ] = await Promise.all([
        deedService.assignToOffer({userId, deedId}),
        userService.addDeedToUser({ userId, deedId })
      ]);
      res.json();
    }
    catch(e){
      console.log('faild to asign task');
      res.status(500).send({ error: "failed add request" });
    }
    return res.json();
  });
  App.post(`/deeds/addRequest`, async (req, res) => {
    const request = req.body;
    const { userId } = request;
    console.log("userId", userId);
    try {
      const requestRes = await deedService.addRequest(request);
      const deedId = requestRes.insertedId;
      const userRes = await userService.addDeedToUser({ userId, deedId });
      return res.json();
    } catch (e) {
      res.status(500).send({ error: "failed add request" });
    }
  });
  App.post(`/deeds/addOffer`, async (req, res) => {
    const offer = req.body;
    const { userId } = offer;
    try {
      const offerRes = await deedService.addOffer(offer);
      const deedId = offerRes.insertedId;
      const userRes = await userService.addDeedToUser({ userId, deedId });
      return res.json();
    } catch (e) {
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
