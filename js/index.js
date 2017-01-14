$(document).ready(function(){
	$(".expert").find('.list').hide();
	$(".expert").find('.list').eq(0).show();
	$(".expert-title li a").on("click",function(){
		var index = $(this).parent().index();
		$(this).parent("li").addClass('active').siblings("li").removeClass('active');
		$(".expert").find(".list").eq(index).show().siblings('.list').hide();
		return false;
	})
})