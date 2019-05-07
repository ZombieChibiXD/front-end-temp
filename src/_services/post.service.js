import Vue from 'vue'
import { serveConf as Configuration } from "@/_config";
function Post(){    
    let vm = this;
    vm.postArticle = function (formdata) {
        return new Promise(function (resolve,reject){
            let formData = new FormData();
            formData.append('title', formdata.title);
            formData.append('tag', formdata.tag);
            formData.append('body', formdata.body);
            formData.append('cover_image', formdata.cover_image); 
            console.log(formData)
            Vue.prototype.$http.post(Configuration.postArticle(), formData, { 
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
    vm.postArticleId = function (formdata) {
        return new Promise(function (resolve,reject){
            let formData = new FormData();
            formData.append('article_id', formdata.article_id);
            formData.append('title', formdata.title);
            formData.append('tag', formdata.tag);
            formData.append('body', formdata.body);
            formData.append('cover_image', formdata.cover_image); 
            Vue.prototype.$http.post(Configuration.postArticle(), formData, { 
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
    vm.getArticleAll = function (page_url,tag) {
        return new Promise(function (resolve,reject){
            var pagelink =  page_url ? page_url : 
                            tag == 'new' ?  Configuration.allArticle() : 
                                            Configuration.tagArticle(tag);
            Vue.prototype.$http.get(pagelink)
            .then(response=>{
                var data_processed = {
                    data:[],
                    meta:{},
                    links:{}
                };
                data_processed.data = response.data.data;
                data_processed.meta = response.data.meta;
                data_processed.links = response.data.links;
                console.log(data_processed);
                
                for (let index = 0; index < response.data.data.length; index++) {
                    data_processed.data[index].cover_image =    Configuration.serverLocation + 'img/cover_images/' + 
                                                                response.data.data[index].cover_image;
                    
                }

                resolve(data_processed);
            })
            .catch(response=>{
                reject(response)
            })
        })
    }
    vm.getArticleId = function (id) {
        return new Promise(function (resolve,reject){
            Vue.prototype.$http.get(Configuration.serverLocation+Configuration.idArticle(id))
            .then(response=>{
                var outs = response.data.data;
                outs.cover_image = Configuration.serverLocation + 'img/cover_images/'+outs.cover_image;
                console.log(outs);
                
                resolve(outs);
            })
            .catch(response=>{
                reject(response)
            })
        })
    }
    vm.deleteArticleId = function (id) {
        return new Promise(function (resolve,reject){
            Vue.prototype.$http.delete(Configuration.serverLocation+Configuration.idArticle(id))
            .then(response=>{
                resolve(response);
            })
            .catch(response=>{
                reject(response)
            })
        })
    }
}
const post = new Post;
export default post;