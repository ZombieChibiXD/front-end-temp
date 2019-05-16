import Vue from 'vue'
import { serveConf as Configuration } from "@/_config";

function Comments(){    
    let vm = this;
    vm.postComment = function (formdata){
        return new Promise(function (resolve,reject){
            let formData = new FormData();
            formData.append('comment_body', formdata.comment_body);
            Vue.prototype.$http.post(Configuration.postComment(formdata.article_id), formData, { 
                headers : { 'Content-Type': 'multipart/form-data' } 
            })
            .then(response=>{
                console.log(response);
                
                if(response.status == 201){
                    resolve('success');
                }
                reject(response)
            })
            .catch(response=>{
                reject(response)
            })
        })
    }
    vm.editComment = function (formdata) {
        return new Promise(function (resolve,reject){
            let formData = new FormData();
            formData.append('comment_body', formdata.comment_body);
            Vue.prototype.$http.post(Configuration.editComment(formdata.comment_id), formData, { 
                headers : { 'Content-Type': 'multipart/form-data' } 
            })
            .then(response=>{
                resolve(response)
            })
            .catch(response=>{
                reject(response)
            })
        })
    }
    vm.deleteComment = function (id) {
        return new Promise(function (resolve,reject){
            Vue.prototype.$http.delete(Configuration.deleteComment(id))
            .then(response=>{
                resolve(response)
            })
            .catch(response=>{
                reject(response)
            })
        })
    }
    vm.getComments  = function (id) {
        return new Promise(function (resolve,reject){
            Vue.prototype.$http.get(Configuration.getComments(id))
            .then(response=>{
                var data_processed = {
                };
                data_processed= response;
                
                for (let index = 0; index < response.data.data.length; index++) {
                    data_processed.data.data[index].cover_image =    Configuration.serverLocation + 
                                                                Configuration.getUserImg(response.data.data[index].user_data.user_image);
                    
                }
                resolve(data_processed.data)
            })
            .catch(response=>{
                reject(response)
            })
        })
    }
}
const comments = new Comments;
export default comments;