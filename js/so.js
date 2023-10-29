$(document).ready(function () {



	//	判断图片是否存在
	$(".link img").each(function (i, e) {
		var imgsrc = $(e).attr("src");

		if ($(e).attr("src") == "") {
			$(e).attr("src", "favicon/url.png");
		}

		$(e).load(function () {
			//			$("<p> ok " + $(e).width() + ":" + $(e).height() + "</p>").appendTo("#msgTool");
		}).error(function () {
			//			$("<p> error " + imgsrc + "</p>").appendTo("#msgTool");
			$(e).attr("src", "favicon/url.png");
		});
	});
	//	$(".link > div > div").css("display", "none");


	//	$("img").each(function () {
	//
	//		if (this.fileSize <= 0) {
	//			this.src = "favicon/url.png"
	//		};
	//
	//	});



	//设置bootmarks链接
	$(".link a").mouseover(function () {
		var ico = $(this).find("img").attr("src"); //当前图标
		var url = $(this).attr("data-href"); //当前地址
		var name = $(this).find("p").text(); //当前标题
		var search_url = $(this).attr("data-search"); //搜索地址

		var keyword = $(".search input").val(); //搜索框关键词

		//设置 search
		$(this).attr("target", "_blank");
		$(".search > a > img").attr("src", ico);
		$(".search > a > p").text(name);
		$(".search > a ").attr("data-href", url);
		$(".search > a ").attr("data-search", search_url);

		//关键词
		if (keyword == "") {
			$(this).attr("href", url);
		} else {
			//搜索地址
			if (search_url == "") {
				$(this).attr("href", url);
			} else {
				//如果包含%s
				if (search_url.indexOf("%s") >= 0) {
					search_url = search_url.replace(/%s/g, keyword);
				} else {
					search_url = search_url + keyword
				}
				$(this).attr("href", search_url);

			}
		}
	});



	//	设置搜索框
	$(".search > a ").mouseover(function () {
		var search_url = $(this).attr("data-search");
		var keyword = $(".search input").val(); //关键词
		var url = $(this).attr("data-href"); //当前网址

		$(this).attr("target", "_blank");

		//关键词
		if (keyword == "") {
			$(this).attr("href", url);
		} else {
			//搜索地址
			if (search_url == null) {
				$(this).attr("href", url);
			} else {
				$(this).attr("href", search_url + keyword);
			}
		}
	});


	//更换主题
	$('.Theme li').click(function (event) {
		var Theme = $(this).attr("data-theme");
		$('#theme').attr('href', 'css/' + Theme + '.css');
	});
	//		$(".link > li > li:it(3)")



	//单击双击冲突
	var TimeFn = null;
	$('body').click(function () {
		// 取消上次延时未执行的方法
		clearTimeout(TimeFn);
		//执行延时
		TimeFn = setTimeout(function () {
			$(".search input").focus();
		}, 300);
	});
	$('#wrapper').dblclick(function () {
		// 取消上次延时未执行的方法
		clearTimeout(TimeFn);
		$(".search input").val("");
		//		$(".search input").focus();
	});



	//展开 所有项目
	$('.love > a:nth-child(3)').mouseover(function () {
		$(this).parents("div").addClass("on");
	});
	$('.link > div').mouseleave(function () {
		$(this).removeClass("on");
	});



});