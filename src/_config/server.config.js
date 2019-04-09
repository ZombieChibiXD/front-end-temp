function ServerConfiguration(){
    let me = this;
    me.serverLocation   = () =>'localhost:8001/';
    me.nameStorageField = () =>'mywebstoragefield';

    me.postArticle  = ()    => 'api/article';
    me.idArticle    = (id)  => 'api/article/'+id;
    me.allArticle   = ()    => 'api/articles';
    me.tagArticle   = (tag) => 'api/articles/tag/'+tag;

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

    me.authSignUp   = ()    => 'api/auth/signup';
    me.authLogIn    = ()    => 'api/auth/login';
    me.authLogOut   = ()    => 'api/auth/logout';
    me.authUser     = ()    => 'api/auth/user';
}
const serveConf = new ServerConfiguration;

export default serveConf;


