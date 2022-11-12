$(document).ready(function(){
    $( "#draggable" ).draggable();

    $( "#accordion" ).accordion({
    	collapsible: true
    });
    var availableTags = ["HTML", "CSS", "bootstrap"];
    $( "#tags" ).autocomplete({
      source: availableTags
    });
});