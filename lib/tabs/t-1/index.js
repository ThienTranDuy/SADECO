
function checkTab1() {
	$('.canhcam-index-tabs-1 a[data-toggle="tab"]').on('shown.bs.tab', function (e) {
		console.log(e)
	})
}

$(document).ready(function () {
	checkTab2()
});
