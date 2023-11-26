$('.part').click(function() {
	$('.description').html($(this).attr('description-data'));
	$('.description').fadeIn();
});

$(document).click(function(event) {
	if (!$(event.target).closest('.part').length) {
		$('.description').fadeOut(50);
	}
});

$('a').click(function(event) {
	event.preventDefault(); // Предотвращаем обновление страницы при нажатии на тег <a>
	// Дополнительный код, который необходимо выполнить при нажатии на ссылку
});



