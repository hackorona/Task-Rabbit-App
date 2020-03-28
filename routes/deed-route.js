const deedService = require("../services/deed-service");
function addRoutes(App) {


  App.post(`/deeds/addDeed`, (req, res) => {
    const deed = req.body;
    console.log('deed are',deed);
    deedService
      .addDeed(deed)
      .then(deed => res.json(deed))
      .catch(err => {
        res.status(500).send("couldnt add, sorry");
      });
  });
  App.get("/getDeeds", (req, res) => {
    deedService
      .getDeeds()
      .then(deeds => res.json(deeds))
      .catch(err => res.status(500).send("couldnt get deeds, sorry"));
  });
}
module.exports = addRoutes;
