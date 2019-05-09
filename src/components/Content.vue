<template>
    <div class="p-5">
        <div class="headers">
            <h1 class="display-5">{{ article.title }}</h1>
            <div class="container-fluid">
                <img class="mx-auto cover_image img-responsive" :src="article.cover_image" alt="">

            </div>
            <hr>
            <!-- <small class="mx-auto">Image description</small> -->
        </div>
        <div class="contents text-left my-5">
            <span v-html="article.body"></span>
        </div>
    </div>
</template>

<script>
import postService from '@/_services/post.service'
export default {
    name: 'Content',
    props: {
      article_id: Number
    },
    data(){
        return { 
            article:{},
        };
    },
    methods:{
        fetchArticle(id) {
            let vm = this;
            postService.getArticleId(id)
            .then(res => {
                this.article = res;
            })
            .catch(err => console.log(err));
        },
    },
    created:function () {
        this.fetchArticle(this.article_id);
    }
}
</script>

<style scoped>
.cover_image{
    max-height: 50vh;
}
</style>
