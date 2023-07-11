import express from "express";
import { deleteUser, getUser, getUsers, updateUser } from "../controllers/user.js";
import { verifyAdmin, verifyToken, verifyUser } from "../utils/verifyToken.js";
const router = express.Router();

router.get("/checkauthentication", verifyToken, (req, res, next)=>{
    res.send("hello you are logged in");
})

router.get("/checkUser/:id", verifyUser, (req, res, next)=>{
    res.send("hello you are logged in");
})

// UPATE

router.put("/:id", verifyUser, updateUser)

// DELETE

router.delete("/:id", verifyUser, deleteUser)

// GET

router.get("/:id",verifyUser, getUser)

// GETALL

router.get("/", verifyAdmin, getUsers)

export default router;