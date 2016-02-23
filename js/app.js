
$( document ).ready(

  function run() {
    $( document ).foundation();

    var post = Data.getPost( 145 );
    var user = Data.getUser( post.userId );
    var comments = Data.getPostComments();
    var relatedPosts = Data.getRelatedPosts();

    //Var elem = new Foundation.Equalizer($('.ddd'));

    //Console.log(elem);
    renderPost();

    function renderPost() {
      var source   = $( "#post-template" ).html();
      var template = Handlebars.compile( source );
      var html    = template(
        {
          post:post,
          user:user,
          comments:comments,
          relatedPosts:relatedPosts
        } );

      $( ".post-container" ).html( html );

      var blockContainer = $( "<div></div>" ).addClass( "row medium-8 large-7 columns" );
      var postContainer = $( "<div></div>" ).addClass( "blog-post" );
      postContainer.append( '<img class="posts-container__post-img img_post" src="' + post.imgUrl + '"></img>' );
      blockContainer.append( postContainer );
      $( ".post-container__item" ).html( blockContainer );
    }

    function addHelpers() {
      Handlebars.registerHelper( "tag", function( object ) {
        return new Handlebars.SafeString( "<li><a href='#'>"  + object + "'</a></li>" );
      } );

    }

    $( document ).foundation();

  } );
