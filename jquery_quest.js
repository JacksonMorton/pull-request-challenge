//##############################################################################
// jQuery
//##############################################################################

// #1
$('#color-target').css('color','orange');

// #2
$('#move-target').offset({ top: 200, left: 400});

// #3
$('#prepend-target').prepend('<');

// #4
$conditionTarget = $('#condition-target');
conditionVal = parseInt($conditionTarget.text());
if(conditionVal % 2 ==0) {
	$condition-target.css('color', 'purple')
}


//var inum = parseInt("$('#condition-target')",10);
//if ((inum)%2 == 0) {$('#condition-target').css('color','blue');}
//else {$('#condition-target').css('color','purple');}


//##############################################################################
// jQuery and Events
//##############################################################################

$('#click-target').on('click', function(e) {
  // This is the DOM element that was clicked
  var $target = $(e.target);

  // Your code goes here!
});

$('.letter-b').hover(
  function(e) { 'your code goes here!' },
  function(e) { 'your code goes here!' }
);

//##############################################################################
// jQueryUI
//##############################################################################


$('accordion').accordion();
// Your code goes here!
