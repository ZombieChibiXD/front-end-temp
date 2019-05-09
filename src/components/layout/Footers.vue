<template>
    <footer >
        <div class="footer-text py-sm-5">
            <div class="row my-5 py-sm-5">
                <div class="col-xs-12 col-sm-4 text-xs-center text-sm-left">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis debitis non eaque, voluptatibus aspernatur doloribus ipsam adipisci ratione rem suscipit excepturi, maiores et placeat odit aperiam officia inventore, obcaecati ab!
                </div>
                <div class="col-xs-12 col-sm-4 text-center">
                    <h1 class="display-1">ZC</h1>
                </div>
                <div class="col-xs-12 col-sm-4 text-xs-center text-sm-right">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam tempora fugit, laboriosam nesciunt expedita dolorem voluptatem repellat perspiciatis doloremque accusamus reiciendis eligendi tenetur iusto voluptates fugiat aspernatur dolor quas unde!
                </div>
                
            </div>
            <div class="my-3 text-center">
                <font-awesome-icon class="mx-3" :icon="{ prefix: 'fab', iconName: 'facebook-f' }"/>
                <font-awesome-icon class="mx-3" :icon="{ prefix: 'fab', iconName: 'twitter' }"/>
                <font-awesome-icon class="mx-3" :icon="{ prefix: 'fab', iconName: 'google-plus-g' }"/>                
                &copy;2019 @ZombieChibiXD                
                <font-awesome-icon class="mx-3" :icon="{ prefix: 'fab', iconName: 'google-plus-g' }"/> 
                <font-awesome-icon class="mx-3" :icon="{ prefix: 'fab', iconName: 'twitter' }"/>
                <font-awesome-icon class="mx-3" :icon="{ prefix: 'fab', iconName: 'facebook-f' }"/>
            </div>
        </div>
        
    </footer>
</template>


<style scoped>
footer {
    background: black;
    color: #fff;
    padding-top: 100vh;
    vertical-align: middle;
    position: fixed;
    bottom: 0;
    left: 0;
    z-index: 0;
}
</style>
