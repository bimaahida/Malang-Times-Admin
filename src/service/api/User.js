import Axios from "axios"
export default{
    loginAction(data){
        return Axios.post('user/login',data).then((res) =>{
            return res
        }).catch((err) =>{
            return err;
            console.log(err);
        })
    },
    getAll(page = 1){
        var params = 'user?page=1';
        if (page != 1) {
            params = 'user?page='+page
        }
        return Axios.get(params).then((res) => {
            return res;
        }).catch((err) => {
            console.log(err);
        });
    },
    getByid(id){
        return Axios.get('user/'+id).then((res) => {
            return res;
        }).catch((err) => {
            return err;
            console.log(err);
        });
    },
    post(data){
        return Axios.post('user',data).then((res) =>{
            return res
        }).catch((err) =>{
            return err;
            console.log(err);
        })
    },
    update(data,id){
        return Axios.put('user/'+id,data).then((res) =>{
            return res
        }).catch((err) =>{
            return err;
            console.log(err);
        })
    },
    destroy(id){
        return Axios.delete('user/'+id).then((res) =>{
            return res
        }).catch((err) =>{
            return err;
            console.log(err);
        })
    }
}