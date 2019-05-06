import Vue from 'vue'
import { serveConf as Configuration } from "@/_config";
function Post(){    
    let vm = this;
    vm.postArticle = function (formdata) {
        return new Promise(function (resolve,reject){
            let formData = new FormData();
            formData.append('title', formdata.title);
            formData.append('tag', formdata.tag);
            formData.append('body', formdata.content);
            formData.append('cover_image', formdata.cover_image); 
            Vue.prototype.$http.post(Configuration.postArticle(), formData, { 
                headers : { 'Content-Type': 'multipart/form-data' } 
            })
            .then(response=>{
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
    vm.postArticleId = function (formdata,id) {
        return new Promise(function (resolve,reject){
            let formData = new FormData();
            formData.append('title', formdata.title);
            formData.append('tag', formdata.tag);
            formData.append('body', formdata.content);
            formData.append('cover_image', formdata.cover_image); 
            Vue.prototype.$http.put(Configuration.idArticle(id), formData, { 
                headers : { 'Content-Type': 'multipart/form-data' } 
            })
            .then(response=>{
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
    vm.getArticleAll = function () {
        return new Promise(function (resolve,reject){
            Vue.prototype.$http.get(Configuration.allArticle())
            .then(response=>{
                data_processed = response;
                for (let index = 0; index < response.data.length; index++) {
                    data_processed.data[index].cover_image = Configuration.serverLocation + 'img/cover_images/' + response.data[index].cover_image;
                    
                }

                resolve(data_processed);
            })
            .catch(response=>{
                reject(response)
            })
        })
    }
    vm.getArticleTag = function (tag) {
        return new Promise(function (resolve,reject){
            Vue.prototype.$http.get(Configuration.tagArticle(tag))
            .then(response=>{
                // # code here..
            })
            .catch(response=>{
                reject(response)
            })
        })
    }
    vm.getArticleId = function (id) {
        return new Promise(function (resolve,reject){
            Vue.prototype.$http.get(Configuration.idArticle(id))
            .then(response=>{
                // # code here..
            })
            .catch(response=>{
                reject(response)
            })
        })
    }
}
const post = new Post;
export default post;