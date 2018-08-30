import Axios from "axios"
export default{
    loginAction(data){
        return Axios.post('user/login',data).then((res) =>{
            return res
        }).catch((err) =>{
            return err;
            console.log(err);
        })
    }
}