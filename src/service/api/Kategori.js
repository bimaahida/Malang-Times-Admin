import Axios from "axios"
export default{
    getAll(page = 1){
        var params = 'categori?page=1';
        if (page != 1) {
            params = 'categori?page='+page
        }
        return Axios.get(params).then((res) => {
            return res;
        }).catch((err) => {
            console.log(err);
        });
    },
    getByid(id){
        return Axios.get('categori/'+id).then((res) => {
            return res;
        }).catch((err) => {
            return err;
            console.log(err);
        });
    },
    post(data){
        return Axios.post('categori',data).then((res) =>{
            return res
        }).catch((err) =>{
            return err;
            console.log(err);
        })
    },
    update(data,id){
        return Axios.put('categori/'+id,data).then((res) =>{
            return res
        }).catch((err) =>{
            return err;
            console.log(err);
        })
    },
    destroy(id){
        return Axios.delete('categori/'+id).then((res) =>{
            return res
        }).catch((err) =>{
            return err;
            console.log(err);
        })
    }
}