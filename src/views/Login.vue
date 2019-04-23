<template>
    <!-- <div class="container mt-5 mr-auto ml-auto" style="width:40rem; height:20rem;">
        <div class="row">
            <div class="col-8">
                <div class="card text-left">
                    <div class="card-body">
                        <h5 class="card-title">Login</h5>
                        <div>
                            <form>
                                <div class="form-group">
                                    <label for="credential">Username / Email :</label>
                                    <input type="text" name="credential" id="credential" class="form-control" placeholder="Username / Email" aria-describedby="credential">
                                    <small id="credential" class="text-danger" hidden>Please insert Username / Email</small>
                                </div>
                                <div class="form-group">
                                    <label for="credential">Password :</label>
                                    <input type="passport" name="password" id="password" class="form-control" placeholder="Password" aria-describedby="password">
                                    <small id="credential" class="text-danger" hidden>Please insert password</small>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>                
            </div>
            <div class="col-4">
                <div class="card text-left">
                    <div>
                        <h5 class="card-title">Login w/ Social Media</h5>
                        <div class="card-body">
                            <h5 class="display-5">Still Building</h5>
                        </div>
                    </div>
                </div>                 
            </div>            
        </div>
    </div> -->    
    <div class="container">
        <div>&nbsp;</div>
        <div class="row mx-auto mt-lg-3 mt-md-4 mt-sm-5" style="width:65vw;">
            <div class="col-12 col-xl-6 col-lg-6 col-md-12 col-sm-12 mt-lg-5">
                <b-button block variant="primary">
                    <font-awesome-icon :icon="{ prefix: 'fab', iconName: 'facebook-f' }"/>
                    Sign in with Facebook
                </b-button>
                <b-button block variant="danger">
                    <font-awesome-icon :icon="{ prefix: 'fab', iconName: 'google-plus-g' }"/>
                    Sign in with Google+
                </b-button>
                <b-button block variant="warning">Sign in with Alternative</b-button>
            </div>
            <div class="mt-lg-auto mt-md-5 mt-sm-5"></div>
            <div class="col-12 col-xl-6 col-lg-6 col-md-12 col-sm-12 text-left mt-lg-3">
                <form @submit.prevent="handleSubmit" class="mb-2">
                    <div class="form-group">
                        <label for="credential">Username / Email :</label>
                        <input type="text"  v-model="credential" name="credential" class="form-control"
                        :class="{ 'is-invalid': submitted && !credential }" placeholder="Username / Email" aria-describedby="credential">
                        <small v-show="submitted && !credential" class="invalid-feedback">Username is required</small>
                    </div>
                    <div class="form-group">
                        <label for="password">Password :</label>
                        <input type="password" v-model="password" name="password" class="form-control"
                        :class="{ 'is-invalid': submitted && !password }" placeholder="Password" aria-describedby="password">
                        <small v-show="submitted && !password" class="invalid-feedback">Password is required</small>
                    </div>
                    <!-- <div class="form-group">
                        <input type="checkbox" v-model="remember_me" name="remember_me"
                         aria-describedby="remember_me">
                        
                        <label for="remember_me">Remember me</label>
                    </div> -->
                    <input type="submit" :class="{ 'disabled': submitted }" value="Login" class="btn btn-primary">
                </form>
                <small>Don't have an account? <a href="#"><strong>Sign Up!</strong></a></small>
                 <b-button @click='check'>Launch demo modal</b-button>
            </div>
        </div>
    </div>
</template>



<script>
import userStorage from '@/_services/user.service'

export default {
    data () {
        return {
            credential: '',
            password: '',
            remember_me:false,
            submitted: false
        }
    },
    computed: {
        
    },
    created () {
        // reset login status
        // this.logout();
    },
    methods: {
        handleSubmit (e) {
            this.submitted = true;
            const { credential, password, remember_me } = this;
            if (credential && password) {
                // this.$swal({
                // text: 'Logging in',
                // button: {
                //     text: "Search!",
                //     closeModal: false,
                // },
                // })
                // .then(json => {
                // this.$swal({
                //     title: "Top result:",
                //     text: name,
                //     icon: imageURL,
                // });
                // })
                // .catch(err => {
                // if (err) {
                //     this.$swal("Oh noes!", "The AJAX request failed!", "error");
                // } else {
                //     this.$swal.stopLoading();
                //     this.$swal.close();
                // }
                // });
                this.$swal({
                    title: 'Logging in...',
                    onOpen: () => {
                        this.$swal.showLoading()
                    },
                    text:'Please wait~',
                    showConfirmButton: false,
                    allowOutsideClick: false
                });
                userStorage.login({credential, password, remember_me})
                .then(res=>{
                    this.$bus.$emit('logged', 'User logged')
                    // this.$bus.$emit('fromlogin', 'User logged')
                    //Make something to wait untill user is confirmed logged in
                    this.$swal.close();
                    this.$toasted.show("You have logged in", { 
                        action : {
                            text : 'Got it!',
                            onClick : (e, toastObject) => { toastObject.goAway(0);  }
                        },
                        theme: "outline", 
                        position: "top-right", 
                        duration : 5000
                    });
                    this.$router.push('/')
                })
                .catch(res=>{
                    console.log(res);
                    
                    this.$swal.hideLoading();
                    this.$swal('Oops','Login Failed','error');
                })
            }
        },
        check(){
            console.log('Button Clikced');
            this.$swal({
                title: 'Logging in...',
                text:'Please wait~'
            });
            this.$swal.showLoading();
            
            // this.$swal("Write something here:", {
            //     content: "input",
            // }).then((value) => {
            //     swal(`You typed: ${value}`);
            // });
        }
    },
    mounted(){
        // console.log('Login Mounted');
    // var mainLoopId = setInterval(function(){
    //     console.log('Checking Auth');
        
    //     console.log(this.$http.defaults.headers.Authorization);
    // }, 100);
    
        
    }
};
</script>