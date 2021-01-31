
$('#filter li').hover(function() {
    $( this ).addClass('active-filter-hover');
  }, function() {
    $( this ).removeClass('active-filter-hover');
    $
  }
);

$('#filter li').click(function() {
	$('.active-filter .diamond-timeline').hide();
	$('#filter li').removeClass('active-filter');
	$(this).addClass('active-filter');
	$('.active-filter .diamond-timeline').show();
})

$('.all-group').click(function() {
	$('.project').show('slow');
})

$('.econometrics-group').click(function() {
	$('.project').hide();
	$('.econometrics').show('slow');
})

$('.geospatial-group').click(function() {
	$('.project').hide();
	$('.geospatial').show('slow');
})

$('.kmeans-group').click(function() {
	$('.project').hide();
	$('.kmeans').show('slow');
})

$('.pca-group').click(function() {
	$('.project').hide();
	$('.pca').show('slow');
})

$('.regularization-group').click(function() {
	$('.project').hide();
	$('.regularization').show('slow');
})

$('.timeseries-group').click(function() {
	$('.project').hide();
	$('.timeseries').show('slow');
})
