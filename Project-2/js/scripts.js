$(function() {
    var data = [
        {
            id: 1,
            title: 'Venue',
            body: 'Decide if you need a venue for ceremony, reception or both. Some places will charge you more if it is just ceremony. Some venues also have indoor and outdoor options.',
        },
        {
            id: 2,
            title: 'Food',
            body: 'If you decided on a venue, most places offer their in house caterer or a list to choose from. Besides the wedding cake, some common choices for style is plate, family or buffet. The plate style has more waste if guest do not show as the food will not be served. There is also late night options if the reception is still rocking in to the night for appetizers for your guest.' ,
        },
        {
            id: 3,
            title: 'Entertainment',
            body: 'Entertainment is a must if you decide on having a reception, whether it is just background music or mingling hour to reserved music or upbeat to keep the energy of the day alive. Choosing between a live band or DJ can be hard, Bands bring more energy and in your face entertainment, while djs are more versatile and read the room more.',
        },
        {
            id: 4,
            title: 'Decorations',
            body: 'Decorating for the occasion brings a sense of style to the day. Getting a florists or your own flowers for centerpieces, a arch for ceremony, stylish chair covers, bouquets, balloons, banners, etc. A photobooth can be a functional piece of decoration or entertainment.',
        },
        {
            id: 5,
            title: 'Beverage',
            body: 'Here is the main ingredient and the reason why your friends show up and show out. A lot of places will have different beverage tiers from soda to alcohol to wine and beer and premium versions etc. Some places do by the hour or have whole night packages',
        }
    ];

    var $nav = $('#nav-container');
    var $intro = $('#intro');
    var $posts = $('#posts-container');

    var getTodaysDate = function () {
    var today = new Date();
    return today.toDateString();
    };

    //Return DOM element by id
    var getEl = function (id) {
        return document.getElementById(id);   
    };

    //write date
    var dateEl = getEl('date');
    dateEl.textContent = getTodaysDate();

    function initPosts() {
        for (let i = 0; i<data.length; i++) {
            //Creating Elements
            var postId = 'post-' + data[i].id,
                $post = $('<section class="post"></section>'),
                $title = $('<h2 class="title"></h2>'),
                $body = $('<blockquote></blockquote>'),
                $navItem = $('<li></li>');

            //add post data
            $title.text(data[i].title);
            $body.text(data[i].body);

            //add nav item data
            $navItem.attr('id', data[i].id);
            $navItem.text(data[i].title);

            //combine post elements
            $post.attr('id', postId);
            $post.append($title);
            $post.append($body);

            //add post and nav elements to page
            $posts.append($post);
            $nav.append($navItem);

            //wire up nav item click event handler
            $navItem.on('click', function() {
                var id = $(this).attr('id');
                $posts.children().hide();
                $posts.find('#post-' + id).fadeIn();
            });

            //hide all posts and show the intro
            $posts.children('.post').hide();
            $intro.fadeIn(1000);
        }
    }

    initPosts();
});
