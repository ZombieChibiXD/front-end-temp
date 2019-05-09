<template>
    <div>
        <!-- <h1>Menampilkan Berita : {{ caps(tagname) }}</h1>
        <hr> -->
        <div class="pager justify-content-center py-2">
            <nav aria-label="Page navigation example">
                <ul class="pagination justify-content-center mx-auto">
                    <li v-bind:class="[{disabled: !pagination.prev_page_url}]" class="page-item"><button class="page-link" v-on:click="fetchArticles(pagination.prev_page_url)">Previous</button></li>

                    <li class="page-item disabled"><a class="page-link text-dark">Page {{ pagination.current_page }} of {{ pagination.last_page }}</a></li>
                
                    <li v-bind:class="[{disabled: !pagination.next_page_url}]" class="page-item"><button class="page-link" v-on:click="fetchArticles(pagination.next_page_url)">Next</button></li>
                </ul>
            </nav>
        </div>
        <div class="row py-2">
            <!-- SideBar -->
            <div class="col-sm-5 col-xs-12 py-0  sidebar">
                <div class="article-list border mb-3 p-1" v-for="(item, index) in articles.slice(0, 4)" :key="item.id" :index="index">
                    <div class="w-100 border-bottom">
                        <div class="content-image container-fluid">
                            <img :src="item.cover_image" class="content-img-lg img-responsive w-100 h-100">
                        </div>
                    </div>             
                    <h3>
                        <router-link :to="{ name: 'Content',  params: { article_id:  item.id } }">
                            {{ item.title }}
                        </router-link>
                    </h3>
                    <p class="text-left">
                        {{ item.content }}
                    </p>
                </div>
            </div>
            <!-- SideBar -->
            <!-- Content -->
            <div class="col-sm-7 col-xs-12 py-0">
                <div class="article-list border mb-3 p-1" v-for="(item, index) in articles.slice(4, 10)" :key="item.id" :index="index">
                    <div class="row border-between ">
                        <div class="col-sm-5 col-xs-12 ">
                            <div class="content-image container-fluid mx-auto">
                                <img :src="item.cover_image" class="content-img img-responsive w-100 h-100">
                            </div>
                        </div>
                        <div class="col-sm-7 col-xs-12 ">
                            <div class="w-100 border-bottom">
                                <h3>
                                    <router-link :to="{ name: 'Content',  params: { article_id:  item.id } }">
                                        {{ item.title }}
                                    </router-link>
                                </h3>
                            </div>
                            <p class="text-left">
                                {{ item.content }}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <!-- Content -->
        </div>
    </div>
    
</template>

<script>
import postService from '@/_services/post.service'
export default {
    name: 'Tag',
    props: {
        tagname: String
    },
    data(){
        return {
            articles:[],
            pagination: {},
            page_loading:true,
            page_error:false,
        }
    },
    methods:{
        caps: function(text){
            return text.charAt(0).toUpperCase() + text.slice(1)
        },
        fetchArticles(page_url,tagnames) {
            this.articles = [],
            this.page_loading = true;
            let vm = this;
            postService.getArticleAll(page_url,tagnames)
            .then(res => {
                this.articles = res.data;
                vm.makePagination(res.meta, res.links);
                this.page_loading = false;
            })
            .catch(err => {
                console.log(err);
                this.page_loading = false;
                this.page_error=true;
            });
        },
        makePagination(meta, links) {
            let pagination = {
                current_page: meta.current_page,
                last_page: meta.last_page,
                next_page_url: links.next,
                prev_page_url: links.prev
            };
            this.pagination = pagination;
        },

    },
    created:function(){
        console.log(this.tagname);
        
        this.fetchArticles(null,this.tagname); 
    },
    watch: {
        '$route' (to, from) {
            if (to.path != from.path) {
                this.fetchArticles(null,this.tagname); 
            } 
        }
    }
}
</script>
<style scoped>
.border-between > [class*='col-']:before {
   background: #e3e3e3;
   bottom: 0;
   content: " ";
   left: 0;
   position: absolute;
   width: 1px;
   top: 0;
}

.border-between > [class*='col-']:first-child:before {
   display: none;
}
.article-list:hover{
    background-color: rgba(117, 112, 112, 0.284);
}
.content-image{
    padding: 0;
}
.content-img{
    padding: 0;
    max-height: 275px;
    min-height: 175px;
    
}
.content-img-lg{
    padding: 0;
    min-height: 210px;
    max-height: 275px;
    
}
</style>
