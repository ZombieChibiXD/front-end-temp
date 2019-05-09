<template>
  <div class="container-fluid">
    <div>&nbsp;</div>
    <b-carousel
      id="carousel-1"
      v-model="slide"
      :interval="4000"
      controls
      indicators
      background="#ababab"
      img-width="1024"
      img-height="480"
      style="text-shadow: 1px 1px 2px #333;"
      @sliding-start="onSlideStart"
      @sliding-end="onSlideEnd"
      class="my-2"
    >
      
      <b-carousel-slide
        caption="This is news.com "
        text="Your One stop news service"
      >
        <img
          slot="img"
          class="d-block img-responsive w-100"
          width="1024"
          height="400rem"
          src="https://picsum.photos/1024/480/?image=52"
          alt="image slot"
        >
      </b-carousel-slide>
      <b-carousel-slide
        v-for="(article,index) in articles.slice(0, 5)" :key="(article.id)"
        :class="{ active: index==0 }"
        img-src="https://picsum.photos/1024/480/?image=52"
      >
        <img
          slot="img"
          class="d-block img-responsive w-100"
          width="1024"
          height="400rem"
          :src="article.cover_image"
          alt="image slot"
        >
      <h3>
        <router-link :to="{ name: 'Content',  params: { article_id:  article.id } }">
          {{article.title}}
        </router-link>
      </h3>
      <p>{{article.content}}</p>
      </b-carousel-slide>

    </b-carousel>
    <!-- Content -->
    <div class="col-sm-12 col-xs-12 p-1">
        <div class="article-list border mb-3 p-3" v-for="(item, index) in articles" :key="item.id" v-show="index>=6">
            <div class="row border-between ">
                <div class="col-sm-5 col-xs-12 ">
                    <img :src="item.cover_image" class="img-responsive w-100 h-100">
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
</template>

<script scoped>

import postService from '@/_services/post.service'

export default {
  name: 'home',
  methods:{ 
    // eslint-disable-next-line
    onSlideStart(slide) {
      this.sliding = true
    },
    // eslint-disable-next-line
    onSlideEnd(slide) {
      this.sliding = false
    },
    caps: function(text){
        return text.charAt(0).toUpperCase() + text.slice(1)
    },
    fetchArticles(page_url,tagnames) {
        let vm = this;
        postService.getArticleAll(page_url,tagnames)
        .then(res => {
            this.articles = res.data;
            console.log(this.articles);
            
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
  data(){
    return {
      slide: 0,
      sliding: null,
      articles:[],
      pagination: {},
    }
  },
  created:function(){
      this.fetchArticles(null,'popular'); 
  },
}
</script>

