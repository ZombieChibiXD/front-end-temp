<template>
  <div class="container-fluid">
    <b-carousel
      id="carousel-1"
      v-model="slide"
      :interval="4000"
      controls
      indicators
      background="#ababab"
      img-height="480"
      style="text-shadow: 1px 1px 2px #333;"
      @sliding-start="onSlideStart"
      @sliding-end="onSlideEnd"
    >
      
      <b-carousel-slide
        caption="Title Berita"
        text="Sekilas Info."
        img-src="https://picsum.photos/1024/480/?image=52"
      ></b-carousel-slide>
      <b-carousel-slide
        v-for="(article,idx) in articles" :key="(article.id)"
        :class="{ active: idx==0 }"
        :caption="article.title"
        :text="article.content"
        :img-src="article.image"
      ></b-carousel-slide>

    </b-carousel>
    <!-- Content -->
            <div class="col-sm-12 col-xs-12 p-1">
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
  </div>
</template>

<script>

import post from '@/_services/post.service'

export default {
  name: 'home',
  methods:{
    checkAxios(){
      post.test();
    },
    onSlideStart(slide) {
      this.sliding = true
    },
    onSlideEnd(slide) {
      this.sliding = false
    }
  },
  data(){
    return {
      slide: 0,
      sliding: null,
      articles:[
             {
                id:1,
                title: 'Wawancara Khusus Menhub: Bandara Baru Yogyakarta Gerbang Menuju Bali Baru',
                content: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nemo omnis dolor eligendi accusantium magnam voluptas perspiciatis consequatur nulla consectetur. Iste, in. Atque quos eaque maxime officia laborum assumenda quibusdam eum.',
                image: 'https://cdn0-production-images-kly.akamaized.net/BYW_XMBgFmOGd-MqAWgrDDDUIEk=/640x360/smart/filters:quality(75):strip_icc():format(webp)/kly-media-production/medias/2794474/original/095534200_1556793981-FOTO_0001.jpg',
                link: 'ini link'
            },
            {
                id:2,
                title: 'Presiden membunuh istrinya sendiri! Sungguh tragis',
                content: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nemo omnis dolor eligendi accusantium magnam voluptas perspiciatis consequatur nulla consectetur. Iste, in. Atque quos eaque maxime officia laborum assumenda quibusdam eum.',
                image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/1024px-No_image_available.svg.png',
                link: 'ini link'
            },
            {
                id:3,
                title: 'Presiden membunuh istrinya sendiri! Sungguh tragis',
                content: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nemo omnis dolor eligendi accusantium magnam voluptas perspiciatis consequatur nulla consectetur. Iste, in. Atque quos eaque maxime officia laborum assumenda quibusdam eum.',
                image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/1024px-No_image_available.svg.png',
                link: 'ini link'
            },
        ],
    }
  }
}
</script>

