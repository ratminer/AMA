function loadQuestions()
{

// display from Questions repo
 $(function () {
     $('input').on('click', function () {
 $.ajax({
            url: "/question/list"
        }).then(function(data){
            var list = $('.questionlist');
            $.each(data, function(key, value) {
            var par = '<div class="well">'
            par +="Question"
            par += '<p> '+ value.content +'</a></p>'
            par += '</div>';
            list.append(par);
          });
     });
     });
 });
// display from AMA object
// $(function () {
//     $('input').on('click', function () {
// $.ajax({
//            url: "/question/list"
//        }).then(function(data){
//            var list = $('.questionlist');
//            $.each(data, function(key, value) {
//            var par = '<div class="well">'
//            par +="Question"
//            par += '<p> '+ value.content +'</a></p>'
//            par += '</div>';
//            list.append(par);
//          });
//     });
//     });
// });
//

var list = $('.questionlist');
            var par = '<div class="well">'
            par +="Question"
            par += '</div>';
            list.append(par);
}