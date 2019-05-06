<template>
    <div>
        <!-- <h1>Menampilkan Berita : {{ caps(tagname) }}</h1>
        <hr> -->
        <nav aria-label="Page navigation example">
            <ul class="pagination">
                <li v-bind:class="[{disabled: !pagination.prev_page_url}]" class="page-item"><a class="page-link" href="#" @click="fetchArticles(pagination.prev_page_url)">Previous</a></li>

                <li class="page-item disabled"><a class="page-link text-dark" href="#">Page {{ pagination.current_page }} of {{ pagination.last_page }}</a></li>
            
                <li v-bind:class="[{disabled: !pagination.next_page_url}]" class="page-item"><a class="page-link" href="#" @click="fetchArticles(pagination.next_page_url)">Next</a></li>
            </ul>
        </nav>
        <div class="row py-5">
            <!-- Content -->
            <div class="col-sm-8 col-xs-12 p-0">
                <div class="article-list border mb-3 p-3" v-for="(item, index) in articles" :key="item.id" :index="index" v-show="!(index%4)==0">
                    <div class="row border-between ">
                        <div class="col-sm-5 col-xs-12 ">
                            <img :src="item.image" class="w-100">
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
            <!-- SideBar -->
            <div class="col-sm-4 col-xs-12 p-1 sidebar">
                <div class="article-list border mb-3 p-3" v-for="(item, index) in articles" :key="item.id" :index="index" v-show="index%4 == 0">
                    <div class="w-100 border-bottom">
                        <img :src="item.image" class="w-100">
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
    }
  },
  methods:{
    caps: function(text){
        return text.charAt(0).toUpperCase() + text.slice(1)
    },
    fetchArticles(page_url) {
      let vm = this;
      postService.getArticleAll(page_url)
        .then(res => {
          this.articles = res.data;
          vm.makePagination(res.meta, res.links);
        })
        .catch(err => console.log(err));
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
      fetchArticles(); 
  }
  
}
</script>
<style>
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
</style>
