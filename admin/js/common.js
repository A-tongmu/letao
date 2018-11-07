
	NProgress.start();

	NProgress.done();

	$('.navs ul').prev('a').on('click', function () {
		$(this).next().slideToggle();
	});


	// 验证登录
	$.ajax({
		url:'/api/employee/checkRootLogin',
		type:'get',
		success:function(info){
			if(info.error){
				alert(info.message);
				location.href='/letao/admin/login.html?url='+location.href;
			}
		}
	})


	// 退出登录
	$('.fa-sign-out').parent().on('click',function(){
		$.ajax({
			url:'/api/employee/employeeLogout',
			type:'get',
			success:function(info){
				if(info.success){
					location.href='/letao/admin/login.html';
				}
			}
		})
	})