
$('.blue-button').click(function() {
     
 $('.badges').hide().removeClass('active');
 $('#blue-badge').show().addClass('active');
         
});

$('.green-button').click(function() {
     
 $('.badges').hide().removeClass('active');
 $('#green-badge').show().addClass('active');;
         
});

$('.red-button').click(function() {
     
 $('.badges').hide().removeClass('active');
 $('#red-badge').show().addClass('active');;
         
});

$('.orange-button').click(function() {
     
 $('.badges').hide().removeClass('active');
 $('#orange-badge').show().addClass('active');       
});


$('.stickers').click(function() {
	var new_image = $(this).clone();
	new_image.css('width','120','height','300'); 

	$('#sticker-holder img').replaceWith(new_image);

});


$('#achievement').keyup(function() {

	var achievement = $(this).val();
	var achievement_length = achievement.length;
	$('#achievement-output').html(achievement);
	if(achievement_length == 18) {
		$('#achievement-error').html("Max characters: 18");
	}
	else {
		$('#achievement-error').html("");
	}

});

$('#name').keyup(function() {

	var name = $(this).val();
	var name_length = name.length;
	$('#name-output').html(name);

	if(name_length == 30) {
		$('#name-error').html("Max characters: 30");
	}
	else {
		$('#name-error').html("");
	}

});

$('#skill').keyup(function() {

	var skill = $(this).val();
	$('#skill-output').html(skill);

});


/*$(function() {

    $( "#datepicker" ).datepicker();
    var date = $(this).val();
    $('#date-output').html(date);


  });*/

$(function() {

    $( "#datepicker" ).datepicker({
        onSelect: function()
    { 
        var dateObject = $(this).datepicker({ dateFormat: 'dd-mm-yy' }).val();; 
        $('#date-output').html(dateObject);

    }
    });
  });



$('#print-btn').click(function() {
	
    var canvas_clone = $('#canvas').clone();

    var canvas = canvas_clone.prop('outerHTML'); 
    var new_tab_contents  = '<html>';

    new_tab_contents += '<head>';
    new_tab_contents += '<link rel="stylesheet" href="css/style.css" type="text/css">'; 
    new_tab_contents += '<link rel="stylesheet" href="css/print.css" type="text/css">';
    new_tab_contents += '</head>';
    new_tab_contents += '<body>'; 
    new_tab_contents += canvas; // Here's where we add the card to our HTML for the new tab
    new_tab_contents += '</body></html>';
    

    var new_tab =  window.open();

    new_tab.document.open();
    
   
    new_tab.document.write(new_tab_contents);
    
   
    new_tab.document.close();
    		
});

$('#refresh-btn').click (function(){
        location.reload(true);

})





