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
    
    <div>
        <div>&nbsp;</div>
        <div class="row mt-3 mr-auto ml-auto" style="width:45rem; height:20rem;">
            <div class="col-6 mt-5">
                <b-button block variant="primary">
                    <font-awesome-icon icon="coffee" />
                    Sign in with Facebook
                </b-button>
                <b-button block variant="danger">Sign in with Google</b-button>
                <b-button block variant="warning">Sign in with Something lese</b-button>
            </div>
            <div class="col-6 text-left">
                <form @submit.prevent="handleSubmit">
                    <div class="form-group mt-3">
                        <label for="credential">Username / Email :</label>
                        <input type="text" name="credential" id="credential" class="form-control" placeholder="Username / Email" aria-describedby="credential">
                        <small id="credential" class="text-danger" hidden>Please insert Username / Email</small>
                    </div>
                    <div class="form-group">
                        <label for="credential">Password :</label>
                        <input type="passport" name="password" id="password" class="form-control" placeholder="Password" aria-describedby="password">
                        <small id="credential" class="text-danger" hidden>Please insert password</small>
                    </div>
                    <button class="btn btn-primary">Submit</button>
                </form>
            </div>
        </div>
    </div>
</template>

<style scoped>
</style>

