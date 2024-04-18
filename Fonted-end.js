const path = require("path");
const express = require("express");
const app = express();

const router = express.Router();
app.use(router);

router.use(express.json());
router.use(express.urlencoded({extended: true}));

//read floder as a static file
router.use(express.static(path.join(__dirname, '/..', 'WEB-PRO')))

router.get("/", function(req,res){
    res.sendFile(path.join(__dirname,"html_user","Home_page.html"))
});

router.get("/team", function(req,res){
    res.sendFile(path.join(__dirname,"html_user","team.html"))
});

router.get("/adserach", function(req,res){
    res.sendFile(path.join(__dirname,"html_user","search.html"))
});

router.get("/login", function(req,res){
    res.sendFile(path.join(__dirname,"html_user","login_add.html"))
});

router.post("/login-submit", function(req,res){
    console.log(req.body);
    res.redirect("/choose");
});

router.get("/choose", function(req,res){
    res.sendFile(path.join(__dirname,"html_user","choose_Ad.html"))
})

router.get("/product", function(req,res){
    res.sendFile(path.join(__dirname,"html_user","CRUD.html"))
})

router.get("/user", function(req,res){
    res.sendFile(path.join(__dirname,"html_user","Management.html"))
})

router.get("/addproduct", function(req,res){
    res.sendFile(path.join(__dirname,"html_user","add_product.html"))
})

router.post("/addpro-submit", function(req,res){
    console.log(req.body);
    res.redirect("/product");
});

router.get("/adduser", function(req,res){
    res.sendFile(path.join(__dirname,"html_user","add_user_acc.html"))
})

router.post("/adduser-submit", function(req,res){
    console.log(req.body);
    res.redirect("/user");
});

app.listen(8034)