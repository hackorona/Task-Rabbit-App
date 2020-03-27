const userService = require("../services/user-service");
const postService = require("../services/post-service");

function addRoutes(App) {
  App.post("/user/userpagedata", async (req, res) => {
    const { userId } = req.body;
    try {
      const [user, posts] = await Promise.all([
        userService.getUserById(userId),
        postService.getUserPosts(userId)
      ]);
      const { username, userImg, follow, followers, email, _id } = user;
      res.json({ username, userImg, follow, followers, posts, email, _id });
    } catch (err) {
      err => res.status(500).send("error on fetching userpage data");
    }
  });

  App.post(`/user/register`, async (req, res) => {
    const newUser = req.body;
    console.log('new user is',newUser);
   userService.register(newUser).then(user => res.json(user)).catch(e=>console.log('error on register',e));
  }),
    App.post("/user/login", (req, res) => {
      const { username, password } = req.body;
      userService
        .checkLogin({ username, password })
        .then(user => {
          req.session.user = user;
          res.json(user);
        })
        .catch(res => res.catch);
    }),
    App.post("/user/update", (req, res) => {
      const user = req.body;
      userService
        .update(user)
        .then(res => res.json())
        .catch(() => res.catch);
    });
  App.post("/user/addpost", (req, res) => {
    const { userId, postId } = req.body;
    userService
      .addPost({ userId, postId })
      .then(() => res.json())
      .catch(() => res.catch);
  });
}
module.exports = addRoutes;
