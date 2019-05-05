<template>
    <div class="p-5">
        <div class="headers">
            <h1 class="display-5">Nama artikel yang sangat panjang sekali sangat panjang pokoknya intinya</h1>
            <img class="mx-auto w-50" src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/1024px-No_image_available.svg.png" alt="">
            <hr>
            <small class="mx-auto">Image description</small>
        </div>
        <div class="contents text-left my-5">
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequuntur aliquam architecto assumenda expedita libero est obcaecati quo inventore, totam rerum, ipsum porro enim nostrum! Illo saepe aperiam at ea placeat.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit, sint id perspiciatis debitis repellendus nemo aperiam commodi? Hic, consequatur optio. Sed iste ducimus non sapiente perferendis veniam reiciendis possimus consectetur.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium quod ipsam quae commodi repellendus incidunt quis non explicabo officia! Aspernatur repudiandae cumque quo suscipit doloribus ab porro quam odio sapiente!</p>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Content',
    props: {
      article_id: Number
    },
    data(){
        return { 
        };
    }
}
</script>
