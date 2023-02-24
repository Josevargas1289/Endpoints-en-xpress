const {Router} = require("express");
const routes = Router();

routes.get("/user", (req,res)=>{

    res.send("Esto es un GET a users desde mi servidor");
})

  routes.post("/user", (req, res) => {
    const body = req.body;

      return res.status(200).json({
        status: "success",
        body, 
        Name: "jose"
    });
});


module.exports = routes;