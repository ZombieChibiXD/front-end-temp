<template>
    <div class="container">
        <div>&nbsp;</div>
        <div class="row mx-auto my-1" style="width:65vw;">
            <!-- <div class="mt-lg-auto mt-md-5 mt-sm-5"></div> -->
            <div class="col-12 col-xl-6 col-lg-6 col-md-12 col-sm-12 text-left mt-lg-3">
                <form @submit.prevent="handleSubmit" class="mb-2">
                    <div class="form-group">
                        <label for="firstname">First Name : </label>
                        <input type="text"  v-model="firstName" name="firstname" class="form-control"
                        :class="{ 'is-invalid': submitted && !firstName }" placeholder="First Name" aria-describedby="firstname">
                        <small v-show="submitted && !firstName" class="invalid-feedback">First Name is required</small>
                    </div>
                    <div class="form-group">
                        <label for="lastname">Last Name : </label>
                        <input type="text"  v-model="lastName" name="lastname" class="form-control"
                        :class="{ 'is-invalid': submitted && !lastName }" placeholder="Last Name" aria-describedby="lastname">
                        <small v-show="submitted && !lastName" class="invalid-feedback">Last Name is required</small>
                    </div>

                    <div class="form-group">
                        <label for="username">Username :</label>
                        <input type="text" v-model="formdata.username" name="email" class="form-control"
                        :class="{ 'is-invalid': submitted && !formdata.username }" placeholder="Username" aria-describedby="username">
                        <small v-show="submitted && !formdata.username" class="invalid-feedback">Username is required</small>
                    </div>
                    <div> {{formdata.name }} </div>
                    <div class="form-group">
                        <label for="email">Email :</label>
                        <input type="text" v-model="formdata.name" name="email" class="form-control"
                        :class="{ 'is-invalid': submitted && !formdata.email }" placeholder="Email" aria-describedby="email">
                        <small v-show="submitted && !formdata.email" class="invalid-feedback">Email is required</small>
                    </div>

                    <div class="form-group">
                        <label for="password">Password :</label>
                        <input type="password" v-model="formdata.password" name="password" class="form-control"
                        :class="{ 'is-invalid': submitted && !formdata.password }" placeholder="Password" aria-describedby="password">
                        <small v-show="submitted && !formdata.password" class="invalid-feedback">Password is required</small>
                    </div>
                    <div class="form-group">
                        <label for="password_confirmation">Repeat Password :</label>
                        <input type="password" v-model="formdata.password_confirmation" name="password_confirmation" class="form-control"
                        :class="{ 'is-invalid': submitted && !formdata.password_confirmation }" placeholder="Password" aria-describedby="password_confirmation">
                        <small v-show="submitted && !formdata.password_confirmation" class="invalid-feedback">Confirmation is required</small>
                    </div>
                    
                    <!-- <div class="form-group">
                        <input type="checkbox" v-model="remember_me" name="remember_me"
                            aria-describedby="remember_me">
                        
                        <label for="remember_me">Remember me</label>
                    </div> -->
                    <input type="submit" :class="{ 'disabled': submitted }" value="Login" class="btn btn-primary">
                </form>
            </div>
            <div class="col-12 col-xl-6 col-lg-6 col-md-12 col-sm-12 mt-lg-5">
                <p>Or Sign Up with one of these...</p>
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
        </div>
    </div>
</template>



<script>
import userStorage from '@/_services/user.service'

export default {
    data () {
        return {
            firstName:'',
            lastName:'',
            formdata:{
                username:'',
                name:'',
                computed:{
                    fullname:{
                        get:function () {  
                            var a = this.firstName + ' ' + this.lastName;
                            console.log('Full Name : '+a);
                            return a;
                        },
                        set: function (newValue) {
                            var name = newValue.split(' ')
                            this.firstName = name[0]
                            this.lastName = name[names.length - 1]
                        }
                    }
                },
                email:'',
                password:'',
                password_confirmation:''
            },
            submitted: false
        }
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
                    title: 'Registering...',
                    onOpen: () => {
                        this.$swal.showLoading()
                    },
                    text:'Please wait~',
                    showConfirmButton: false,
                    allowOutsideClick: false
                });
                userStorage.register(formdata)
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