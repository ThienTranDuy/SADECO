
function checkTab2() {
	$('.canhcam-index-tabs-2 a[data-toggle="tab"]').on('shown.bs.tab', function (e) {
		console.log(e)
	})
}

$(document).ready(function () {
	checkTab2()
});
