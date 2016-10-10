$(document).ready(function() {
	$(".x-header-nav-bar div a").mouseenter(function() {
		$(this).css("background", "rgb(178,78,0)");
		$(this).css("color", "white")
	})
	$(".x-header-nav-bar div a").mouseleave(function() {
		$(this).css("background", "none");
		$(this).css("color", "rgb(83,0,0)")
	})
	$("#x-2").mouseenter(function() {
		$(".x-header-nav-bar ul").eq(0).show();

		$("#x-2").css("color", "white")
	})
	$("#x-2").mouseleave(function() {
		$(".x-header-nav-bar ul").eq(0).hide()
	})
	$(".x-header-nav-bar ul").eq(0).mouseenter(function() {
		$(this).show();
		$("#x-2").css("background", "rgb(178,78,0)")
		$("#x-2").css("color", "white")
	})
	$(".x-header-nav-bar ul").eq(0).mouseleave(function() {
		$(this).hide();
		$("#x-2").css("background", "none")
		$("#x-2").css("color", "rgb(83,0,0)")
	})
	$("#x-3").mouseenter(function() {
		$(".x-header-nav-bar ul").eq(1).show();
		$("#x-3").css("color", "white")
	})
	$("#x-3").mouseleave(function() {
		$(".x-header-nav-bar ul").eq(1).hide()
	})
	$(".x-header-nav-bar ul").eq(1).mouseenter(function() {
		$(this).show();
		$("#x-3").css("background", "rgb(178,78,0)")
		$("#x-3").css("color", "white")
	})
	$(".x-header-nav-bar ul").eq(1).mouseleave(function() {
		$(this).hide();
		$("#x-3").css("background", "none")
		$("#x-3").css("color", "rgb(83,0,0)")
	})
	$("#x-5").mouseenter(function() {
		$(".x-header-nav-bar ul").eq(2).show();
		$("#x-5").css("color", "white")
	})
	$("#x-5").mouseleave(function() {
		$(".x-header-nav-bar ul").eq(2).hide()
	})
	$(".x-header-nav-bar ul").eq(2).mouseenter(function() {
		$(this).show();
		$("#x-5").css("background", "rgb(178,78,0)")
		$("#x-5").css("color", "white")
	})
	$(".x-header-nav-bar ul").eq(2).mouseleave(function() {
		$(this).hide();
		$("#x-5").css("background", "none")
		$("#x-5").css("color", "rgb(83,0,0)")
	})
	$("#x-6").mouseenter(function() {
		$(".x-header-nav-bar ul").eq(3).show();
		$("#x-6").css("color", "white")
	})
	$("#x-6").mouseleave(function() {
		$(".x-header-nav-bar ul").eq(3).hide()
	})
	$(".x-header-nav-bar ul").eq(3).mouseenter(function() {
		$(this).show();
		$("#x-6").css("background", "rgb(178,78,0)")
		$("#x-6").css("color", "white")
	})
	$(".x-header-nav-bar ul").eq(3).mouseleave(function() {
		$(this).hide();
		$("#x-6").css("background", "none")
		$("#x-6").css("color", "rgb(83,0,0)")
	})
	var ULindex1=$(".x-header-nav-bar ul:eq(0) li").length;
	
	$(".x-header-nav-bar ul:eq(0) li").eq(ULindex1-1).css("border-bottom","none");
	$(".x-header-nav-bar ul:eq(1) li").eq(ULindex1-3).css("border-bottom","none");
	$(".x-header-nav-bar ul:eq(2) li").eq(ULindex1-2).css("border-bottom","none");
	$(".x-header-nav-bar ul:eq(3) li").eq(ULindex1-3).css("border-bottom","none")
})