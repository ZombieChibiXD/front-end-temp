function ServerConfiguration(){
    let me = this;
    me.serverLocation   = 'http://localhost:9029/';
    me.nameStorageField = 'mywebstoragefield';

    me.postArticle  = ()    => 'api/article';
    me.idArticle    = (id)  => 'api/article/'+id;
    me.allArticle   = ()    => 'api/articles';
    me.tagArticle   = (tag) => 'api/articles/tag/'+tag;
    
    me.postComment  = (id)  => 'api/article/'+id+'/comment';
    me.getComments  = (id)  => 'api/article/'+id+'/comments';
    me.editComment  = (id)  => 'api/article/comment/edit/'+id;
    me.deleteComment= (id)  => 'api/article/comment/delete/'+id;

    me.getUserImg   = (file)=> 'img/user_images/'+file;
    me.getCoverImg  = (file)=> 'img/cover_images/'+file;

    me.oauthAuth    = ()    => 'oauth/authorize';
    me.oauthClient  = ()    => 'oauth/client';
    me.oauthClientId= (id)  => 'oauth/client/'+id;
    me.oauthPAT     = ()    => 'oauth/personal-access-tokens';
    me.oauthPATId   = (id)  => 'oauth/personal-access-tokens/'+id;
    me.oauthScopes  = ()    => 'oauth/scopes';
    me.oauthToken   = ()    => 'oauth/token';
    me.oauthTokenRef= ()    => 'oauth/token/refresh';
    me.oauthTokens  = ()    => 'oauth/tokens';
    me.oauthTokensId= (id)  => 'oauth/tokens/'+id;    

    me.authSignUp   = 'api/auth/signup';
    me.authLogIn    = 'api/auth/login';
    me.authLogOut   = 'api/auth/logout';
    me.authUser     = 'api/auth/user';
    console.log('Server Configuration Loaded');
    console.log('Server Location is: ' + me.serverLocation)
}
const serveConf = new ServerConfiguration;

export default serveConf;


