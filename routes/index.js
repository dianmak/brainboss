const path = require("path");
const router = require("express").Router();
const controller = require("../controllers/controller");

router.get("/api/survey", (req, res) => {
  res.json({ test: "testin" });
});

router.post("/api/makeuser", controller.makeUser);

// If no API routes are hit, send the React app
router.use(function (req, res) {
  res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

module.exports = router;
