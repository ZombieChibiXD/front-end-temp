<template>
    <div class="container-fluid">
        <div>&nbsp;</div>
        <h1 class="mt-1 text-center">Register</h1>
        <hr>
        <div class="row py-1 mx-auto w-100">
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
                        <label for="lastname">Last Name :</label>
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
                    <div class="form-group">
                        <label for="email">Email :</label>
                        <input type="text" v-model="formdata.email" name="email" class="form-control"
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
                    <div class="form-group">
                      <label for="">Upload Image:</label> 
                      <b-button-group class="w-100">
                        <input type="file" id="file" ref="file" class="btn btn-sm btn-default border-primary w-50" v-on:change="handleFileUpload()"/>
                        <button type="button" class="btn border-danger btn-warning w-50" v-show="formdata.user_image" v-on:click="removeFile()" >Cancel File</button>
                      </b-button-group>
                      <small v-show="!valid_file" class="invalid-feedback">Please upload .jpg, .png, .bmp files</small>
                    </div>
                    
                    <!-- <div class="form-group">
                        <input type="checkbox" v-model="remember_me" name="remember_me"
                            aria-describedby="remember_me">
                        
                        <label for="remember_me">Remember me</label>
                    </div> -->
                    <input type="submit" :class="{ 'disabled': submitted || !valid_file }" value="Register!" class="btn btn-primary">
                </form>
            </div>
            <div class="col-12 col-xl-6 col-lg-6 col-md-12 col-sm-12 py-5">
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
        <div>&nbsp;</div>
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
                name:'',
                username:'',
                email:'',
                password:'',
                password_confirmation:'',
                user_image:'',
                },
            submitted: false,
            valid_file: true,
            fileIsThere: false
            };
    },
    created () {
        // reset login status
        // this.logout();
    },
    methods: {
        handleSubmit (e) {
            this.submitted = true;
            this.formdata.name = this.firstName + ' ' + this.lastName;
            console.log('FormData RegisterVUe');
            console.log(this.formdata);
            if (
                this.formdata.name &&
                this.formdata.username &&
                this.formdata.email &&
                this.formdata.password &&
                this.formdata.password_confirmation 
            ) {
                console.log(this.formdata);
                
                this.$swal({
                    title: 'Registering...',
                    onOpen: () => {
                        this.$swal.showLoading()
                    },
                    text:'Please wait~',
                    showConfirmButton: false,
                    allowOutsideClick: false
                });
                
                
                userStorage.register(this.formdata)
                .then(res=>{
                    this.$swal.close();
                    if(res == 'success'){
                        this.$toasted.show("You have registered", { 
                            action : {
                                text : 'Got it!',
                                onClick : (e, toastObject) => { toastObject.goAway(0);  }
                            },
                            theme: "outline", 
                            position: "top-right", 
                            duration : 5000
                        });
                        this.$router.push({ name:'Login' })
                    }
                })
                .catch(res=>{
                    this.$swal.hideLoading();
                    if(res.status == 422){
                        this.$swal('Register Failed','User already exist!','error');
                    }
                    else{
                        this.$swal('Oops','Register Failed','error');
                    }
                })
            }
            else{
                this.submitted = false;
                this.$swal('Oops','Register Failed','error');
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
        },
        handleFileUpload(){
            this.valid_file = true ? true : false;
            this.fileIsThere = true;
            this.formdata.user_image = this.$refs.file.files[0];
        },
        removeFile(){
            this.$refs.file.value = '';
            this.formdata.user_image = '';
            this.valid_file = true;
            this.fileIsThere = false;
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