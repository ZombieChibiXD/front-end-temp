<template>
     <div class="container">
         <div>&nbsp;</div>
         <table class="table table-bordered table-striped table-inverse my-5 w-100">
             <thead class="thead-inverse">
                 <tr>
                     <th width="5%">No</th>
                     <th width="30%">Title</th>
                     <th width="15%">Tag</th>
                     <th width="30%">Content</th>
                     <th width="10%">Tools</th>
                 </tr>
                 </thead>
                 <tbody class="text-left" v-for="(article,index) in articles" :key="article.id">
                     <tr>
                         <td scope="row">{{ (index+1) }}</td>
                         <td>{{ article.title }}</td>
                         <td>{{ article.tag  }}</td>
                         <td><textarea v-model="article.content" class="form-control" readonly></textarea></td>
                         <td>sdf</td>
                     </tr>
                 </tbody>
                 <tfoot>
                    <tr>
                        <td colspan="5">
                        <nav aria-label="Page navigation example">
                            <ul class="pagination">
                                <li v-bind:class="[{disabled: !pagination.prev_page_url}]" class="page-item"><a class="page-link" href="#" @click="fetchArticles(pagination.prev_page_url)">Previous</a></li>

                                <li class="page-item disabled"><a class="page-link text-dark" href="#">Page {{ pagination.current_page }} of {{ pagination.last_page }}</a></li>
                            
                                <li v-bind:class="[{disabled: !pagination.next_page_url}]" class="page-item"><a class="page-link" href="#" @click="fetchArticles(pagination.next_page_url)">Next</a></li>
                            </ul>
                        </nav>
                        </td>
                    </tr>
                 </tfoot>
         </table>
     </div>
</template>

<script>
import postService from '@/_services/post.service'
export default {

    name:'Insert',
    components:{
    },
    data(){
        return {
            articles:[],
            pagination: {},
        }
    },
    methods:{
        caps: function(text){
            return text.charAt(0).toUpperCase() + text.slice(1)
        },
        fetchArticles(page_url,tagnames) {
            let vm = this;
            postService.getArticleAll(page_url,tagnames)
            .then(res => {
                this.articles = res.data;
                console.log(this.articles);
                
                vm.makePagination(res.meta, res.links);
            })
            .catch(err => console.log(err));
        },
        makePagination(meta, links) {
            let pagination = {
                current_page: meta.current_page,
                last_page: meta.last_page,
                next_page_url: links.next,
                prev_page_url: links.prev
            };
            this.pagination = pagination;
        },

    },
    created:function(){        
        this.fetchArticles(null,'new'); 
    },
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