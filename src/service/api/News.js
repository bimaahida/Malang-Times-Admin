import Axios from "axios"
export default{
    getAll(page = 1){
        var params = 'news?page=1';
        if (page != 1) {
            params = 'news?page='+page
        }
        return Axios.get(params).then((res) => {
            return res;
        }).catch((err) => {
            console.log(err);
        });
    },
    getByid(id){
        return Axios.get('news/'+id).then((res) => {
            return res;
        }).catch((err) => {
            return err;
            console.log(err);
        });
    },
    post(data){
        return Axios.post('news',data).then((res) =>{
            return res
        }).catch((err) =>{
            return err;
            console.log(err);
        })
    },
    update(data,id){
        return Axios.put('news/'+id,data).then((res) =>{
            return res
        }).catch((err) =>{
            return err;
            console.log(err);
        })
    },
    destroy(id){
        return Axios.delete('news/'+id).then((res) =>{
            return res
        }).catch((err) =>{
            return err;
            console.log(err);
        })
    }
}