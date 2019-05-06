<template>
     <div class="container-fluid">
          <div class="text-left p-5">
               <form @submit.prevent="handleSubmit">
                    <div class="form-group">
                      <label for="">Title</label>
                      <input type="text" name="title" v-model="formdata.title" class="form-control w-lg-75" placeholder="Title" aria-describedby="title">
                    </div>
                    <div class="row">
                        <div class="col">
                            <div class="form-group">
                            <label for="">Tag</label>
                                <select v-model="formdata.tag" class="form-control w-lg-25" name="tag">
                                    <option value="">Choose news tag</option>
                                    <option value="politic">Politic</option>
                                    <option value="sport">Sport</option>
                                    <option value="lifestyle">Lifestyle</option>
                                    <option value="entertainment">Entertainment</option>
                                </select>
                            </div>         
                        </div>
                        <div class="col">
                            <div class="form-group">
                            <label for="">Cover Image:</label> 
                            <b-button-group class="w-100">
                                <input type="file" id="file" ref="file" class="btn btn-sm btn-default border-primary w-50" v-on:change="handleFileUpload()"/>
                                <button type="button" class="btn border-danger btn-warning w-50" v-show="formdata.cover_image" v-on:click="removeFile()" >Cancel</button>
                            </b-button-group>
                            <small v-show="!valid_file" class="invalid-feedback">Please upload .jpg, .png, .bmp files</small>
                            </div>
                        </div>                            
                    </div>
                    <div class="form-group">
                      <label for="">Content</label>
                      <ckeditor class="document-editor" v-model="formdata.content" :editor="editor" ></ckeditor>
                    </div>
                    <!-- name="content" placeholder="Insert Content Here.." -->
                    <input type="submit" :class="{ 'disabled': submitted || !valid_file }" value="Post!" class="btn btn-primary">
               </form>
         </div>
     </div>
</template>

<script>
import postService from '@/_services/post.service'
import CKEditor from '@ckeditor/ckeditor5-vue';
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
export default {

    name:'Insert',
    components:{
         ckeditor : CKEditor.component
    },
    data(){
         return{
              editor: ClassicEditor,
              formdata:{
                   title:'',
                   tag:'',
                   content:'',
                   cover_image:'',
              },
            submitted: false,
            valid_file: true,
            fileIsThere: false
         };
    },
    methods:{
        handleSubmit (e) {
            this.submitted = true;
            console.log(this.formdata);
            if (
                this.formdata
            ) {
                console.log(this.formdata);
                
                this.$swal({
                    title: 'Posting...',
                    onOpen: () => {
                        this.$swal.showLoading()
                    },
                    text:'Please wait~',
                    showConfirmButton: false,
                    allowOutsideClick: false
                });
                
                
                postService.postArticle(this.formdata)
                .then(res=>{
                    this.$swal.close();
                    console.log('Output is: '+res);
                    
                    if(res == 'success'){
                        this.$toasted.show("You have posted the article!", { 
                            action : {
                                text : 'Got it!',
                                onClick : (e, toastObject) => { toastObject.goAway(0);  }
                            },
                            theme: "outline", 
                            position: "top-right", 
                            duration : 5000
                        });
                        this.$router.push({ name: 'Tag',params: { tagname: 'new' } })
                    }
                })
                .catch(res=>{
                    console.log('Err'+res);
                    this.$swal.hideLoading();
                    if(res.status == 422){
                        this.$swal('Post Failed','Post already exist!','error');
                    }
                    else{
                        this.$swal('Oops','Post Failed','error');
                    }
                })
            }
            else{
                this.submitted = false;
                this.$swal('Oops','Post Failed','error');
            }
        },
        handleFileUpload(){
            this.valid_file = true ? true : false;
            this.fileIsThere = true;
            this.formdata.cover_image = this.$refs.file.files[0];
        },
        removeFile(){
            this.$refs.file.value = '';
            this.formdata.cover_image = '';
            this.valid_file = true;
            this.fileIsThere = false;
        }
    }
}
</script>

<style>
@media (min-width: 768px) {
     document-editor{
          width: 200px;
     }
     .ck-editor__editable_inline {
     min-height: 300px;
     }
}
</style>