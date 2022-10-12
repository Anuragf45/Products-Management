const express =require("express")
const router=express.Router()
const userController=require("../controller/userController")
const productController=require("../controller/productController")
const cartController=require("../controller/cartController")
 
//********User API*****
router.post('/register',userController.createUser)
router.post('/login',userController.loginUser)
router.get("/user/:userId/profile",userController.getuser)
router.put('/user/:userId/profile', userController.updateProfile)

//*********Product API*******
router.post('/products',productController.createProduct)

//*******CART API********
// router.post('/users/:userId/cart', cartController.createCart)
 router.get('/users/:userId/cart', cartController.getCart)


router.all("/*", async function(req,res){
    return res.status(400).send({status:false,message:"plz check url"})
})

module.exports=router;
