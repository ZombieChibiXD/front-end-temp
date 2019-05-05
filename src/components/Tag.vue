<template>
    <div>
        <!-- <h1>Menampilkan Berita : {{ caps(tagname) }}</h1>
        <hr> -->

        <div class="row py-5">
            <!-- Content -->
            <div class="col-sm-8 col-xs-12 p-0">
                <div class="article-list border mb-3 p-3" v-for="(item, index) in variable" :key="item.id" :index="index" v-show="!(index%4)==0">
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
        </div>
    </div>
    
</template>

<script>
export default {
  name: 'Tag',
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
                image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f7/Mount_Fuji_Japan_with_Snow%2C_Lakes_and_Surrounding_Mountains.jpg/300px-Mount_Fuji_Japan_with_Snow%2C_Lakes_and_Surrounding_Mountains.jpg',
                link: 'ini link'
            },
            {
                id:2,
                title: 'Presiden membunuh istrinya sendiri! Sungguh tragis',
                content: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nemo omnis dolor eligendi accusantium magnam voluptas perspiciatis consequatur nulla consectetur. Iste, in. Atque quos eaque maxime officia laborum assumenda quibusdam eum.',
                image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f7/Mount_Fuji_Japan_with_Snow%2C_Lakes_and_Surrounding_Mountains.jpg/300px-Mount_Fuji_Japan_with_Snow%2C_Lakes_and_Surrounding_Mountains.jpg',
                link: 'ini link'
            },
            {
                id:3,
                title: 'Presiden membunuh istrinya sendiri! Sungguh tragis',
                content: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nemo omnis dolor eligendi accusantium magnam voluptas perspiciatis consequatur nulla consectetur. Iste, in. Atque quos eaque maxime officia laborum assumenda quibusdam eum.',
                image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f7/Mount_Fuji_Japan_with_Snow%2C_Lakes_and_Surrounding_Mountains.jpg/300px-Mount_Fuji_Japan_with_Snow%2C_Lakes_and_Surrounding_Mountains.jpg',
                link: 'ini link'
            },
            {
                id:4,
                title: 'Presiden membunuh istrinya sendiri! Sungguh tragis',
                content: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nemo omnis dolor eligendi accusantium magnam voluptas perspiciatis consequatur nulla consectetur. Iste, in. Atque quos eaque maxime officia laborum assumenda quibusdam eum.',
                image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f7/Mount_Fuji_Japan_with_Snow%2C_Lakes_and_Surrounding_Mountains.jpg/300px-Mount_Fuji_Japan_with_Snow%2C_Lakes_and_Surrounding_Mountains.jpg',
                link: 'ini link'
            },
            {
                id:5,
                title: 'Presiden membunuh istrinya sendiri! Sungguh tragis',
                content: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nemo omnis dolor eligendi accusantium magnam voluptas perspiciatis consequatur nulla consectetur. Iste, in. Atque quos eaque maxime officia laborum assumenda quibusdam eum.',
                image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f7/Mount_Fuji_Japan_with_Snow%2C_Lakes_and_Surrounding_Mountains.jpg/300px-Mount_Fuji_Japan_with_Snow%2C_Lakes_and_Surrounding_Mountains.jpg',
                link: 'ini link'
            },
            {
                id:6,
                title: 'Presiden membunuh istrinya sendiri! Sungguh tragis',
                content: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nemo omnis dolor eligendi accusantium magnam voluptas perspiciatis consequatur nulla consectetur. Iste, in. Atque quos eaque maxime officia laborum assumenda quibusdam eum.',
                image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f7/Mount_Fuji_Japan_with_Snow%2C_Lakes_and_Surrounding_Mountains.jpg/300px-Mount_Fuji_Japan_with_Snow%2C_Lakes_and_Surrounding_Mountains.jpg',
                link: 'ini link'
            },
            {
                id:7,
                title: 'Presiden membunuh istrinya sendiri! Sungguh tragis',
                content: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nemo omnis dolor eligendi accusantium magnam voluptas perspiciatis consequatur nulla consectetur. Iste, in. Atque quos eaque maxime officia laborum assumenda quibusdam eum.',
                image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f7/Mount_Fuji_Japan_with_Snow%2C_Lakes_and_Surrounding_Mountains.jpg/300px-Mount_Fuji_Japan_with_Snow%2C_Lakes_and_Surrounding_Mountains.jpg',
                link: 'ini link'
            },
            {
                id:8,
                title: 'Presiden membunuh istrinya sendiri! Sungguh tragis',
                content: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nemo omnis dolor eligendi accusantium magnam voluptas perspiciatis consequatur nulla consectetur. Iste, in. Atque quos eaque maxime officia laborum assumenda quibusdam eum.',
                image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f7/Mount_Fuji_Japan_with_Snow%2C_Lakes_and_Surrounding_Mountains.jpg/300px-Mount_Fuji_Japan_with_Snow%2C_Lakes_and_Surrounding_Mountains.jpg',
                link: 'ini link'
            },
            {
                id:9,
                title: 'Presiden membunuh istrinya sendiri! Sungguh tragis',
                content: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nemo omnis dolor eligendi accusantium magnam voluptas perspiciatis consequatur nulla consectetur. Iste, in. Atque quos eaque maxime officia laborum assumenda quibusdam eum.',
                image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f7/Mount_Fuji_Japan_with_Snow%2C_Lakes_and_Surrounding_Mountains.jpg/300px-Mount_Fuji_Japan_with_Snow%2C_Lakes_and_Surrounding_Mountains.jpg',
                link: 'ini link'
            },
            {
                id:10,
                title: 'Presiden membunuh istrinya sendiri! Sungguh tragis',
                content: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nemo omnis dolor eligendi accusantium magnam voluptas perspiciatis consequatur nulla consectetur. Iste, in. Atque quos eaque maxime officia laborum assumenda quibusdam eum.',
                image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f7/Mount_Fuji_Japan_with_Snow%2C_Lakes_and_Surrounding_Mountains.jpg/300px-Mount_Fuji_Japan_with_Snow%2C_Lakes_and_Surrounding_Mountains.jpg',
                link: 'ini link'
            },
        ],
    }
  },
  methods:{
      caps: function(text){
          return text.charAt(0).toUpperCase() + text.slice(1)
      }
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
