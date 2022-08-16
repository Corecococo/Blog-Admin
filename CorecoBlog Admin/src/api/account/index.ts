import axios from "../../axios";

export default {
    Login(userName:string,passWord:string,verifyCode:string){
      return  axios.post('/api/Account/Login',{loginName:userName,loginPassword:passWord,verifyCode:verifyCode});
    }
}