const router = require("express").Router();

router.get("/", (res) => {
    res.send("Send Refesh Token")
})

module.exports = router;