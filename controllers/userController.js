
import UserModel from '../models/UserModel.js'

const login_controller = async(req,res) =>{
     try {
      const {username,password} = req.body
      const user= await UserModel.findOne({username,password});
      console.log(user.username);
     
      
       if(!user)
        {
          res.status(404).send("User Not Found");
          return 
        } 
       
       res.status(200).json({user,
        success:true});
      

     } catch (error) {
        res.send(400).json({
            success:false,
            error,
        });
     }
}
const register_controller = async (req, res) => {
    try {
      const newUser = new UserModel(req.body);
      
      if(UserModel.findOne(newUser)===true) 
      {
       res.send("User Already Exist");
      }
      else
      {
        await newUser.save();
        res.status(201).json({
          success: true,
          newUser,
        });
      }
      
    } catch (error) {
      res.status(400).json({
        success: false,
        error,
      });
    }
  };
export  {login_controller,register_controller}