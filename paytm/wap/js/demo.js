
//Brand（全部类型）开始
$(document).ready(function(){
    $(".Brand").click(function(){
        if ($('.Category-eject').hasClass('grade-w-roll')) {
            $('.Category-eject').removeClass('grade-w-roll');
			$(this).removeClass('current');
			$('.screening').attr('');
        } else {
            $('.Category-eject').addClass('grade-w-roll');
			$(this).addClass('current');
			$(".Sort").removeClass('current');
			//$('.screening').attr('style','position: fixed;top:0;');
			//点击其他部位消失
			$('.grade-w-roll').click(function(){		
				$('.Category-eject').removeClass('grade-w-roll');
				$('.Brand').removeClass('current');				
			});
        }
    });
});

//Sort（选择月份）开始
$(document).ready(function(){
    $(".Sort").click(function(){
        if ($('.Sort-eject').hasClass('grade-w-roll')) {
            $('.Sort-eject').removeClass('grade-w-roll');
			$(this).removeClass('current');
			$('.screening').attr('style','');
        } else {
            $('.Sort-eject').addClass('grade-w-roll');
			$(this).addClass('current');
			$(".Brand").removeClass('current');
			//$('.screening').attr('style','position: fixed;top:0;');
			//点击其他部位消失
			$('.grade-w-roll').click(function(){		
				$('.Sort-eject').removeClass('grade-w-roll');
				$('.Sort').removeClass('current');								
			});
        }
    });
});

//Brand（全部类型））选择显示值
$(document).ready(function(){
	$('.Category-w li').click(function(){
		var row = $(this).text();
		//alert(item);
		$('.Brand span').html(row);
		$('.Category-eject').removeClass('grade-w-roll');
		$(".Brand").removeClass('current');
	});
})

//Sort（选择月份）选择显示值
$(document).ready(function(){
	$('.Sort-Sort li').click(function(){
		var item = $(this).text();
		//alert(item);
		$('.Sort span').html(item);
		$('.Sort-eject').removeClass('grade-w-roll');
		$(".Sort").removeClass('current');
	});
})



//判断页面是否有弹出
$(document).ready(function(){
    $(".Brand").click(function(){
        if ($('.Sort-eject').hasClass('grade-w-roll')){
            $('.Sort-eject').removeClass('grade-w-roll');
        };
    });
});

$(document).ready(function(){
    $(".Sort").click(function(){
        if ($('.Category-eject').hasClass('grade-w-roll')){
            $('.Category-eject').removeClass('grade-w-roll');
        };
    });
});

//js点击事件监听开始
function Categorytw(wbj){
    var arr = document.getElementById("Categorytw").getElementsByTagName("li");
    for (var i = 0; i < arr.length; i++){
        var a = arr[i];
        a.style.background = "";
        a.style.color = ""
    };
	wbj.style.background = "#f5f5f5";
	wbj.style.color = "#fe9900";
}


function Sorts(sbj){
    var arr = document.getElementById("Sort-Sort").getElementsByTagName("li");
    for (var i = 0; i < arr.length; i++){
        var a = arr[i];
        a.style.background = "";
        a.style.color = "";
    };
    sbj.style.background = "#f5f5f5";
    sbj.style.color = "#fe9900";
}
