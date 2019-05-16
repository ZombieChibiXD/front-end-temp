<template>
    <div>
        <div class="card text-left">
          <div class="card-body">
            <h4 class="card-title">Comments (Number of comments)</h4>
            <hr>
            <div class="form-group">
                <form @submit.prevent="handleSubmit">
                    <textarea name="comment_body" v-model="formdata.comment_body" class="form-control w-100"></textarea>
                    <button type="submit" class="btn btn-primary my-2">Comment!</button>
                </form>
            </div>
            <hr>
            <div class="card"   v-for="(comment,idx) in comments" :key="comment.id"
                                v-bind:class="{ 'grays':idx%2 }">
                <div class="row">
                    <div class="col-2">
                        <img :src="comment.cover_image" class="img-responsive w-100 h-100">
                    </div>
                    <div class="col-10">
                        <div class="row border-bottom">
                            <h4>{{comment.user_data.name}}</h4>
                        </div>
                        <div class="row card-text my-2">
                            {{comment.body}}
                        </div>
                    </div>
                </div>
            </div>
          </div>
        </div>
    </div>
</template>


<script>
import commentService from '@/_services/comment.service'
import userService from '@/_services/user.service'
export default {
    name:"Comment",    
    props: {
      article_id: Number
    },
    data(){
        return { 
            comments:[],
            formdata:{
                article_id:'',
                comment_body:''
            }
        };
    },
    methods:{
        fetchComments(article_id) {
            let vm = this;
            commentService.getComments(article_id)
            .then(res => {
                vm.comments = res.data;
                console.log(vm.comments);
                
            })
            .catch(err => console.log(err));
        },
        handleSubmit (e) {
            let vm = this;
            vm.formdata.article_id = vm.article_id;            
            commentService.postComment(vm.formdata)
            .then(res => {
                vm.fetchComments(this.article_id);
                vm.formdata.comment_body = '';
            })
            .catch(err => console.log(err));
        },
        deleteComments(comment_id){
            let vm = this;
            commentService.deleteComment(comment_id)
            .then(res => {
                //Some swal
            })
            .catch(err => console.log(err));
        },
    },
    created:function () {
        this.fetchComments(this.article_id);
    }
}
</script>
<style scoped>
.grays{
    background-color: gainsboro;
}
</style>
