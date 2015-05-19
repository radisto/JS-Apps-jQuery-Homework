$(function(){
    $('#button').on('click', submit);

    function submit(){
        var where = $('input:radio[name=where]:checked').val();
        var innerText = $('#innerText');
        var li = $('<li>').text(innerText.val());
        if (where == 'before'){
            li.insertBefore('#here');
        }
        else{
            li.insertAfter('#here');
        }

        innerText.val('');
    }
});