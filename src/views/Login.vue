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
                        <label for="credential">Password :</label>
                        <input type="password" v-model="password" name="password" class="form-control"
                        :class="{ 'is-invalid': submitted && !password }" placeholder="Password" aria-describedby="password">
                        <small v-show="submitted && !password" class="invalid-feedback">Password is required</small>
                    </div>
                    <input type="submit" value="Log In" class="btn btn-primary">
                </form>
                <small>Don't have an account? <a href="#"><strong>Sign Up!</strong></a></small>
            </div>
        </div>
    </div>
</template>



<script>
// import { user as userStorage } from '@/_services'
export default {
    data () {
        return {
            credential: '',
            password: '',
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
            const { credential, password } = this;
            if (credential && password) {
                // userStorage.login({ credential, password })
            }
        }
    }
};
</script>