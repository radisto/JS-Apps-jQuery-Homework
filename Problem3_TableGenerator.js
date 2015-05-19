$(function(){
    var jsonString = '[{"manufacturer":"BMW","model":"E92 320i","year":2011,"price":50000,"class":"Family"},{"manufacturer":"Porsche","model":"Panamera","year":2012,"price":100000,"class":"Sport"},{"manufacturer":"Peugeot","model":"305","year":1978,"price":1000,"class":"Family"}]';
    var arr = $.parseJSON(jsonString);
    var table = $('<table>').attr('border', '1');
    var i, j;
    for(i in arr){
        if (i == 0){
            var tr = $('<tr>');
            for(j in arr[i]){
                $('<th>').text(j.charAt(0).toUpperCase() + j.slice(1)).appendTo(tr);
            }
            tr.appendTo(table);
        }
        var tr = $('<tr>');
        for(j in arr[i]){
            $('<td>').text(arr[i][j]).appendTo(tr);
        }
        tr.appendTo(table);
    }
    table.appendTo(document.body);
});