const express=require("express")
const router=express.Router();
const oneuser=require("../controllers/persons")

router.use(express.json());

router.get('/', oneuser.getUsers)

  
router.post('/', oneuser.addUser)


router.put("/:id", oneuser.updateUserById)


router.delete('/deleteUser/:id', oneuser.deleteUserById)

module.exports = router;