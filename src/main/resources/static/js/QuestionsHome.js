
    var amaid = $('#amaid').text();
    var list = $('.questionlist');
    var listAnswer =$('.answerlist');
    listAnswer.empty();
    list.empty();


    $.ajax({
     url: "/ama/"  + amaid + "/questions"
    }).then(function(data){
            $.each(data, function(key, value) {
                if(value.content !== "") {
                 var par = '<div class="well">';
                    par += '<p> '+ value.content +'</p>';
                    // par += '<form action="#" th:action="@{@{/ama/} + ${ama.id} + @{/addquestion}}" th:object="${question}"  method="post">';
                    par += '<form action="#" >';
                    par += ' <input class="form-control" placeholder="Enter Answer" id="answerInput"></input>';
                    par += '<button class="btn btn-primary"> answer </button> ';
                    par += '</form>';
                    /*if(value.content)*/

                    // if(value.answer =="")
                    // {
                    //     alert("passed value.answer !==" + value.answer);
                    //    $.ajax({
                    //     url: "/ama/"  + amaid + "/questions/" + amaid +"/question"
                    //    }).then(function(data2){
                    //            $.each(data2, function(key2, value2) {
                    //                if(value2.content !=="")
                    //                {
                    //                    par += '<p> '+ value2.content +'</p>';
                    //                }
                    //            });// end  each loop
                    //    });// end data function
                    // }
                    par += '</div>';
                    list.append(par);
                }// end if
            });// end  each loop
    });// end data function
function myFunction()
{
    alert("hai");
}