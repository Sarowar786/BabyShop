import asyncHandler from "express-async-handler"



const getUserProfile = asyncHandler (async(req,res)=>{
res.send("hello sarowar")
})
const loginUser = asyncHandler (async(req,res)=>{
res.send("login clicked")
})


export {getUserProfile,loginUser}