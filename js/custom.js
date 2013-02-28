$(document).ready(function () {
	showView('load', window.location);
	$("nav a").click(function (e) {
		e.preventDefault();
		showView('click', this);
		$("nav a").removeClass("active");
		$(this).addClass("active");
	});
});

function showView(trigger, element) {
	var viewType;
	if (trigger === 'click') {
		viewType = $(element).attr("href").substring(1);
		window.location.hash = viewType;
	} else if (trigger === 'load') {
		if (element.hash.length < 2) {
			viewType = 'order';
		} else {
			viewType = element.hash.substring(1);
		}
	}
	$("#main").removeClass().addClass(viewType);
}