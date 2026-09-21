const router = require("express").Router();
const { jsonResponse } = require("../lib/jsonResponse");

router.post("/", (req, res) => {
    const {username, password} = req.body;
    if(!!!username && !!!password){
        return res.status(400).json(
            jsonResponse(400, {
                error: "Missing required fields"
            })
        )
    }
    
    const accessToken = "access_token";
    const refreshToken = "refresh_token";
    const user = {
        id: 1,
        name: "name test",
        username: "username test",
    }
    res.status(200).json(
        jsonResponse(200, {
            user, accessToken, refreshToken
        })
    )
})


module.exports = router;