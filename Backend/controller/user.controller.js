import User from "../models/user.model.js";
import bcrypt from "bcryptjs"
import createTokenAndSaveCookie from "../jwt/generateToken.js"
  export const signup = async (req,res)=>{
try {
        const{name,email,password,confirmpassword}=req.body;
        if(password !== confirmpassword){
            return res.status(400).json({message:"Passwords do not match"});
        }
    
        const user = await User.findOne({email});
        if(user){
            return res.status(400).json({message:"Email already exists"});
        }

        //Hashing The Password 
        const hashedpassword = await bcrypt.hash(password,10);
         const newUser=  await new User({
            name,
            email,
            password: hashedpassword,
            confirmpassword,
         });

         await newUser.save()
         if(newUser){
            createTokenAndSaveCookie(newUser._id,res);


            res.status(201).json({message:"user registered successfully",
                user :{
                    _id :newUser._id,
                    name:newUser.name,
                    email:newUser.email,
                }
            })
         }
    
         
} catch (error) {
    console.log(error)
    res.status(500).json({message:"server error"});
}

 }

 

 export const login  = async(req,res)=>{
    const {email,password}=req.body;
    try {
        // const {email,password}=req.body;
        const user = await User.findOne({email});
        const isMatch = await bcrypt.compare(password,user.password);
        if(!user || !isMatch){
            return res.status(400).json({message:"invalid username and password"});

        }
        createTokenAndSaveCookie(user._id,res);
        res.status(201).json({message:"user logged in successfully",
            user :{
            _id :user._id,
            name:user.name,
            email:user.email,
        }
    })


    } catch (error) {
        console.log(error)
    res.status(500).json({message:"server login error"});
        
    }

 }


export const logout = async(req,res)=>{
    try {
        res.clearCookie("jwt");
        res.status(200).json({message:"logged out successfully"});
        
    } catch (error) {
        console.log(error)
    res.status(500).json({message:" logout error"});
        
    }
}