$(document).ready(function(){
    $('.slider').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
    });

    $.ajax({ url:'https://www.theepochtimes.com/epoch/eet/v1/get_term_posts_list?id=149529&paged=1',
         success: function(data){
             let i = 0;
            for (const article of Object.values(data.articles)) {
                i++;
                console.log(article.title);
                console.log(i > 6);
                if( i > 6 ){
                    $("#articles").append(`<div class="article-title" style="border: none;"><a class="article-link" href="${article.link}" target="_blank">${article.title}</a></div>`);
                    if(i == 9){
                        return;
                    };
                }else{
                    $("#articles").append(`<div class="article-title"><a class="article-link" href="${article.link}" target="_blank">${article.title}</a></div>`);
                }
                
            }

        }});
})