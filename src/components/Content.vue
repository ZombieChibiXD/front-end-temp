<template>
    <div class="p-5">
        <div class="headers">
            <h1 class="display-5">{{ article.title }}</h1>
            <img class="mx-auto w-50" :src="article.cover_image" alt="">
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
      article_id: String
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
