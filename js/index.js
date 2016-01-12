$(document).ready(function() {

  function getCamperNews() {

    //get the json info from the file 
    $.getJSON("http://www.freecodecamp.com/news/hot", function(camperNews) {

      camperNews.forEach(function(news) {

        var storyImage = news.image;

        if (!news.image) {

          storyImage = news.author.picture;
        }

        $("#camperPost").append(

          '<div class="posts">' +

          //adding posts Images
          '<img src="' + storyImage +
          '" onerror="this.onerror=null;this.src=\'https://s3.amazonaws.com/freecodecamp/camper-image-placeholder.png\'">' +

          // ends -----------

          '<div class="storyHeadLine">' +

          '<a href=" ' + news.link + ' " ' + 'target = _blank' + '>' + news.headline + '</a>'

          + ' </div>' //end of storyHeadLine posts

          
          + '<div class="user"> Posted by: ' + 
        '<a href="http://freecodecamp.com/' + 
          news.author.username + '" target="_blank">' + 
          news.author.username + 
        '</a>' +
      '</div>' + //end of the author div
          
       '<div class="postVotes">' + //post Votes starts 
        '<div class="votes-text">' + 'Votes: ' +
         news.rank + 
        
          '</div>' + //post votes ends
          
          
       '</div>' //end of the posts div

        );

      });

    });

  }

  getCamperNews();

});