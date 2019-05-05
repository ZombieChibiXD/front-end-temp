<template>
    <div>
        <!-- <h1>Menampilkan Berita : {{ caps(tagname) }}</h1>
        <hr> -->    
    <Slider
      animation="fade"
      v-model="sliderValue"
      :duration="5000"
      :speed="1000" >
      <SliderItem
        v-for="(i, index) in variable"
        :key="index"
        @click="changeIndex(1);"
      >
          <img :src="i.image" class="h-100">
      </SliderItem>
    </Slider>

        <div class="row py-5">
            <!-- SideBar -->
            <div class="col-sm-4 col-xs-12 p-1 sidebar">
                <div class="article-list border mb-3 p-3" v-for="(item, index) in variable" :key="item.id" :index="index" v-show="index%4 == 0">
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
            <!-- Content -->
            <div class="col-sm-7 col-xs-12 p-0">
                <div class="article-list border mb-3 p-3" v-for="(item, index) in variable" :key="item.id" :index="index" v-show="!(index%4)==0">
                    <div class="row border-between ">
                        <div class="col-7">
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
                        <div class="col-5">
                            <img :src="item.image" class="w-100">
                        </div>
                    </div>
                </div>
            </div>
            <!-- Content -->
        </div>
    </div>
    
</template>

<script>
import { Slider, SliderItem } from "vue-easy-slider";

export default {
  name: 'Home',
  components: {
    Slider,
    SliderItem
  },
  props: {
    tagname: String
  },
  data(){
    return {
            variable:[
            {
                id:1,
                title: 'Presiden membunuh istrinya sendiri! Sungguh tragis',
                content: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nemo omnis dolor eligendi accusantium magnam voluptas perspiciatis consequatur nulla consectetur. Iste, in. Atque quos eaque maxime officia laborum assumenda quibusdam eum.',
                image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/1024px-No_image_available.svg.png',
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
            {
                id:4,
                title: 'Presiden membunuh istrinya sendiri! Sungguh tragis',
                content: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nemo omnis dolor eligendi accusantium magnam voluptas perspiciatis consequatur nulla consectetur. Iste, in. Atque quos eaque maxime officia laborum assumenda quibusdam eum.',
                image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/1024px-No_image_available.svg.png',
                link: 'ini link'
            },
            {
                id:5,
                title: 'Presiden membunuh istrinya sendiri! Sungguh tragis',
                content: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nemo omnis dolor eligendi accusantium magnam voluptas perspiciatis consequatur nulla consectetur. Iste, in. Atque quos eaque maxime officia laborum assumenda quibusdam eum.',
                image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/1024px-No_image_available.svg.png',
                link: 'ini link'
            },
            {
                id:6,
                title: 'Presiden membunuh istrinya sendiri! Sungguh tragis',
                content: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nemo omnis dolor eligendi accusantium magnam voluptas perspiciatis consequatur nulla consectetur. Iste, in. Atque quos eaque maxime officia laborum assumenda quibusdam eum.',
                image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/1024px-No_image_available.svg.png',
                link: 'ini link'
            },
            {
                id:7,
                title: 'Presiden membunuh istrinya sendiri! Sungguh tragis',
                content: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nemo omnis dolor eligendi accusantium magnam voluptas perspiciatis consequatur nulla consectetur. Iste, in. Atque quos eaque maxime officia laborum assumenda quibusdam eum.',
                image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/1024px-No_image_available.svg.png',
                link: 'ini link'
            },
            {
                id:8,
                title: 'Presiden membunuh istrinya sendiri! Sungguh tragis',
                content: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nemo omnis dolor eligendi accusantium magnam voluptas perspiciatis consequatur nulla consectetur. Iste, in. Atque quos eaque maxime officia laborum assumenda quibusdam eum.',
                image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/1024px-No_image_available.svg.png',
                link: 'ini link'
            },
            {
                id:9,
                title: 'Presiden membunuh istrinya sendiri! Sungguh tragis',
                content: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nemo omnis dolor eligendi accusantium magnam voluptas perspiciatis consequatur nulla consectetur. Iste, in. Atque quos eaque maxime officia laborum assumenda quibusdam eum.',
                image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/1024px-No_image_available.svg.png',
                link: 'ini link'
            },
            {
                id:10,
                title: 'Presiden membunuh istrinya sendiri! Sungguh tragis',
                content: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nemo omnis dolor eligendi accusantium magnam voluptas perspiciatis consequatur nulla consectetur. Iste, in. Atque quos eaque maxime officia laborum assumenda quibusdam eum.',
                image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/1024px-No_image_available.svg.png',
                link: 'ini link'
            },
        ],
        list: [],
        sliderValue: 2
    }
  },
  methods:{
      caps: function(text){
          return text.charAt(0).toUpperCase() + text.slice(1)
      },
      
        changeIndex(index) {
        this.sliderValue = index;
        }
  },
  mounted() {
    setTimeout(
      () =>
        (this.list = [
          {
            backgroundImage:'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/1024px-No_image_available.svg.png',
            width: "100%",
            height: "100%"
          },
          {
            backgroundColor: "#eee",
            width: "100%",
            height: "100%"
          },
          {
            backgroundColor: "#f44336",
            width: "100%",
            height: "100%"
          },
          {
            backgroundColor: "#eee",
            width: "100%",
            height: "100%"
          }
        ]),
      1000
    );
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
    background-color:lightcoral;
}
</style>
