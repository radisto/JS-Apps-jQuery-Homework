$(function(){
    $('#submit').on('click', submit);

    function submit(){
        var classSelector = $('#text');
        if (!classSelector.val()){
            return;
        }
        var color = $('#color').val();
        $('li.' + classSelector.val()).css('background', color);
        classSelector.val('');
    }
});