'use strict';

var $window = $(window);

function run()
{
	var fName = arguments[0],
		aArgs = Array.prototype.slice.call(arguments, 1);
	try {
		fName.apply(window, aArgs);
	} catch(err) {
		 
	}
};
 
/* chart
================================================== */
function _chart ()
{
	$('#skills').appear(function() {
		setTimeout(function() {
			$('.chart').easyPieChart({
				easing: 'easeOutElastic',
				delay: 3000,
				barColor: '#369670',
				trackColor: '#e7e7e7',
				scaleColor: false,
				lineWidth: 21,
				trackWidth: 21,
				size: 200,
				lineCap: 'round', 
				animate:4500,
				onStart:function(from, to){
					return;
				},
				onStep: function(from, to, percent) {
					this.el.children[0].innerHTML = Math.round(percent);
				}
			});
		}, 300);
	});
};
 


$(document).ready(function() {
  
	run(_chart);

    
});