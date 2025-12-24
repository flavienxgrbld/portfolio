$(document).ready(function() {
   


    $(document).click(function(e){
       var a = $('.header .right .sousuo .subsearch'); // 
       if(!a.is(e.target) && a.has(e.target).length === 0){
           $(".header .right .sousuo .subsearch").each(function(){
             if($(this).css("display") == 'block'){
               $(this).fadeOut();
             }
           })
       }
    })
  $(".header .right .sousuo .icon").click(function(){
       $(this).next().fadeIn();
       return false;
   });

   // $("a").click(function(){
   //     if($(this).attr("href")==''){
   //         layer.alert(" ！");
   //         return false;
   //     }
   // })

   $(".nybanner").addClass("cur");
   //  
   $(".header_xl .box a").hover(function(){
       var dq = $(this);
       var tt = $(dq).position().top;
       $(".header_xl .box .box_a i.i").css('top',tt);
   },function(){

   });

   $(".nav_box ul li .sbmd").click(function() {    
       var $sub = $(this).next(".suv");    
       var $li = $(this).closest('li'); //  .sbmd li   
     
       $sub.stop().slideToggle();  
     
       $(".nav_box ul li .suv").not($sub).stop().slideUp().prev(".sbmd").removeClass("cur");  
     
       $(this).toggleClass("cur");  
     
       //  .sbmd cur ， li cur   
       if ($(this).hasClass("cur")) {  
           $(".nav_box ul li").removeClass("cur");
           $li.addClass("cur");  
       } else {  
           $li.removeClass("cur");  
       } 
   });

   $(".erjilanmu.sbdm").click(function() {  
       var $this = $(this);  
       var $sum = $this.find(".sum");
       $sum.stop().slideToggle();
       $(".sbdm").not($this).each(function() {
           $(this).find(".sum").stop().slideUp();  
           $(this).removeClass("cur"); 
       });  
       $this.toggleClass("cur"); 
   });

   $(".navBtnA").click(function() {  
       $(".nav_box ul li .suv").stop().slideUp();
       $(".nav_box ul li .sbmd").removeClass("cur"); 
       $(".nav_box ul li .sbdm .sum").stop().slideUp();
       $(".nav_box ul li .sbdm").removeClass("cur"); 
   });  


   $(".sbmd").click(function() {  
       $(".nav_box ul li .sbdm .sum").stop().slideUp();
       $(".nav_box ul li .sbdm").removeClass("cur"); 
   });  



   // end
   $(document).on("click",".navBtn",function(){
       $(".nav_box_6").toggleClass("cur");
       $(".topHeader").toggleClass("fixed-headA");
       // $(".topHeader").addClass("bgGreen");
   })
   $(".backFirst").click(function(){
       $(".nav_box .navlist ul>li .navlist2").css('left','-102%');
   })

   $(document).on('click',".nav_box .navlist ul>li .navlist2 a",function(){
       $(".navBtn").removeClass("mobile-menu-on");
   })
   $(document).on('click',".nav_box .navlist ul>li a.sub",function(){
       $(this).next().css('left','0');
   })
   //  Phone Nav = 
   $(".navBtn").click(function (e) {
       $(".nav_box").toggleClass("cur");
       $("body").bind("touchmove", function (event) {
           event.preventDefault(), event.stopPropagation();
       });
       $(this).toggleClass("mobile-menu-on");
       $(this).toggleClass("navBtnA");
        $(".nav_box .navlist ul>li .navlist2").css('left','-102%');
       $(".nav_box .navlist ul>li").removeClass("cur");
       e.stopPropagation();
   });
   $(".nav_box .navclose").click(function () {
       $(".nav_box").animate({ left: "-100%" });
       $("body").unbind("touchmove");
   });

   



   // 
   $(".Language span").click(function() {
       $(this).parent().find("dl").stop().slideToggle();
   });

   // 
   $(function() {
       $(".backTop").click(function() {
           if($(document).scrollTop() != 0){
               $("html,body").animate({
                   scrollTop: 0
               }, 500);
           }
       });
   });



   // 
   //** 
   $('.tabSwitch').each(function(index, element) {
       var obj = $(this);
       obj.find('.tabTit').children().on('click tab', function() {
           $(this).addClass('cur').siblings().removeClass('cur');
           if ($(this).data('to')){
               $($(this).data('to')).val($(this).data('id'));
           }
           if (obj.find('.tabBox').children().eq($(this).index()).length > 0)
               obj.find('.tabBox').children().hide().eq($(this).index()).show();
           if (obj.find('.tabBox2').children().eq($(this).index()).length > 0)
               obj.find('.tabBox2').children().hide().eq($(this).index()).show();

           return false;
       });
       obj.find('.tabTit .cur').trigger('tab');
   });
   // 
   $('.tabSwitchHover').each(function(index, element) {
       var obj = $(this);
       obj.find('.tabTit').children().on('mouseover tab', function() {
           $(this).addClass('cur').siblings().removeClass('cur');
           if ($(this).data('to')){
               $($(this).data('to')).val($(this).data('id'));
           }
           if (obj.find('.tabBox').children().eq($(this).index()).length > 0)
               obj.find('.tabBox').children().hide().eq($(this).index()).show();
           if (obj.find('.tabBox2').children().eq($(this).index()).length > 0)
               obj.find('.tabBox2').children().hide().eq($(this).index()).show();

           //return false;
       });
       obj.find('.tabTit .cur').trigger('tab');
   });
});


function act() {
   var wid = $(window).width();
   var hei = $(window).height();
   $(".banner .swiper-wrapper .bg").css("height", hei);
   $(".banner .swiper-wrapper .bg").css("width", wid);
}
$(document).ready(function() {
   act();
});
$(window).resize(function() {
   act();
});


fh = $('.topNav').height();
$(window).scroll(function(e) {
   s = $(document).scrollTop();



   if (s > fh) {
       $('.topNav').addClass('fixed-head');
   } else {
       $('.topNav').removeClass('fixed-head');
   }
});

$(window).scroll(function(e) {
   s = $(document).scrollTop();

   if (s > $(".banner").height()) {
       $(".guide").fadeIn();
   } else {
       $(".guide").fadeOut();
   }
});


$(".menu").click(function(){

   $(".nav_box ").toggleClass("cur");

});


$(document).ready(function () {
   // jquery ajax 
   var _ajax=$.ajax;

   // jquery ajax 
   $.ajax=function(opt){
       // opt error success 
       var fn = {
           error:function(XMLHttpRequest, textStatus, errorThrown){},
           success:function(data, textStatus){}
       }
       if(opt.error){
           fn.error=opt.error;
       }
       if(opt.success){
           fn.success=opt.success;
       }

       // 
       var _opt = $.extend(opt,{
           error:function(XMLHttpRequest, textStatus, errorThrown){
               // 
               fn.error(XMLHttpRequest, textStatus, errorThrown);
           },
           success:function(data, textStatus){
               // 
               fn.success(data, textStatus);
           },
           beforeSend:function(XHR){
               // 
               //$('body').append("<div id='ajaxInfo' style=''> , ...</div>");
               layer.load();
           },
           complete:function(XHR, TS){
               //  ( )。
               //$("#ajaxInfo").remove();;
               layer.closeAll('loading');
           }
       });
       return _ajax(_opt);
   };
});


function Search(o){
   var obj = $(o);
   obj.find('.subD').attr('disabled',true);
   var msg = ''; 
   layer.closeAll('tips');
   var searKey    = obj.find('[name="searKey"]').val();

   if (searKey.length < 1 || searKey.length > 100){
       msg = obj.find('[name="searKey"]').attr('placeholder')?obj.find('[name="searKey"]').attr('placeholder'):'';
       obj.find('[name="searKey"]').inputError({'err': ' ！', 'tips': 3, tipsMore: true});
   }

   if (msg.length){
       obj.find('.subD').attr('disabled',false);
       return false;
   }else{
       window.location.href = '/search?searKey='+searKey+'';
   }
   return false;
}

function chanpinxqContact(o){
   var obj = $(o);
   obj.find('.subD').attr('disabled',true);
   var msg = ''; 
   layer.closeAll('tips');
  
   var name   = obj.find('[name="name"]').val();
   var area   = obj.find('[name="area"]').val();
   var phone   = obj.find('[name="phone"]').val();
   var city    = obj.find('[name="city"]').val();
   var content    = obj.find('[name="content"]').val();

   
   $.ajax({
       type: 'POST',
       url: '/ajaxContact.php',
       data:{name:name, area:area, phone:phone, city:city, content:content,act:'chanpinxqContact'}
   }).done(function(data){
       $(".tiptip").empty();
       $(".tiptip").append(data);
   });
       
   return false;
}


function dingyue(o){
   var obj = $(o);
   obj.find('.subD').attr('disabled',true);
   var msg = ''; 
   layer.closeAll('tips');

   var email    = obj.find('[name="email"]').val();

   $.ajax({
       type: 'POST',
       url: '/ajaxContact.php',
       data:{email:email, act:'dingyue'}
   }).done(function(data){
       $(".tiptip").empty();
       $(".tiptip").append(data);
   });
       
   return false;
}


function Contact(o){
   var obj = $(o);
   obj.find('.subD').attr('disabled',true);
   var msg = ''; 
   layer.closeAll('tips');
  
   var name   = obj.find('[name="name"]').val();
   var company   = obj.find('[name="company"]').val();
   var phone   = obj.find('[name="phone"]').val();
   var email    = obj.find('[name="email"]').val();
   var content    = obj.find('[name="content"]').val();

   
   $.ajax({
       type: 'POST',
       url: '/ajaxContact.php',
       data:{name:name, company:company, phone:phone, email:email, content:content,act:'contact'}
   }).done(function(data){
       $(".tiptip").empty();
       $(".tiptip").append(data);
   });
       
   return false;
}


function CheckMobile(m){
   var reg = /^(((13[0-9]{1})|(14[0-9]{1})|(17[0-9]{1})|(15[0-3]{1})|(15[5-9]{1})|(18[0-9]{1}))+\d{8})$/;
   if (reg.test(m)) {
       return true;
   }
   
   return false;
}

function CheckEmail(m){
   var reg = /^([a-z0-9+_]|\-|\.)+@(([a-z0-9_]|\-)+\.)+[a-z]{2,6}$/;
   if (reg.test(m)) {
       return true;
   }
   
   return false;
}


jQuery.fn.extend({
   inputError: function(options) {
       return this.each(function() {
           new jQuery.inputError(this, options);
       });
   }
});
jQuery.inputError = function(inputobj, options) {
   var opt = options || {};
   opt.class = opt.class || 'inputerror';
   opt.err = opt.err || '';
   opt.tips = opt.tips || 2;
   opt.tipsMore = opt.tipsMore || false;

   var obj = $(inputobj);
   if (!obj.data('placeholder')){
       obj.data('data-placeholder', obj.attr('placeholder'));
       obj.attr('placeholder', opt.err?opt.err:obj.data('placeholder'));
   }
   obj.removeClass(opt.class).addClass(opt.class);
   // tips
   if (opt.err)
       layer.tips(opt.err, obj, {tips: [opt.tips, '#dd1721'], tipsMore: opt.tipsMore});

   obj.unbind('focus').focus(function(event) {
       $(this).removeClass(opt.class);
       //obj.attr('placeholder', obj.data('placeholder'));
   });
   obj.unbind('blur').blur(function(event) {
       $(this).removeClass(opt.class);
       obj.attr('placeholder', obj.data('placeholder'));
   });

   if (obj.get(0).tagName!='INPUT' && obj.get(0).tagName!='TEXTAREA' && !obj.data('bindClick')){
       obj.click(function(event) {
           $(this).removeClass(opt.class);
           obj.attr('placeholder', obj.data('placeholder'));
       });
       obj.children().click(function(){obj.click()});
       obj.data('bindClick',true);
   }
};

(function(window){
   var defaults = {
       floorClass : '.scroll-floor',
       navClass : '.scroll-nav',
       activeClass : 'active',
       activeTop : 100,
       scrollTop : 100,
       delayTime : 200
   };
   
   var $body = $('body'),floorList = null,navList = null;
   function getItem(_list,newOptions){
       var data = [];
       _list.each(function() {
           var item = {};
           item.$obj = $body.find(this);
           item.$activeTop = $body.find(this).offset().top - newOptions.activeTop;
           item.$scrollTop = $body.find(this).offset().top + newOptions.scrollTop;
           
           data.push(item);
       });
       return data;
   }
   
   function scrollActive(_list,newOptions){
       var nowScrollTop = $(window).scrollTop();
       var data = getItem(floorList,newOptions);
       
       $.each(data,function(i,item){
           if(nowScrollTop > item.$activeTop){
               _list.removeClass(newOptions.activeClass).eq(i).addClass(newOptions.activeClass);
           }
       });
   }
   
   function clickActive(_index,newOptions){
       var data = getItem(floorList,newOptions);
       $('html,body').animate({'scrollTop' : data[_index].$scrollTop},newOptions.delayTime);
   }
   
   var scroll_floor = window.scrollFloor = function(options){
       var newOptions = $.extend({}, defaults, options);
       floorList = $body.find(newOptions.floorClass);
       navList = $body.find(newOptions.navClass);
       
       
       scrollActive(navList,newOptions);
       
       $(window).bind('scroll',function(){scrollActive(navList,newOptions);});
       navList.bind('click',function(){
           var _index = $body.find(this).index();
           clickActive(_index,newOptions);
       });
   }
})(window);



// 
mh = $('body').height();
fh = $('.header').height();
mfh = $('.mo_header').height();
$(window).scroll(function (e) {
    s = $(document).scrollTop();
    if (s > fh) {
        $('.header').addClass('fixed-head');
    } else {
        $('.header').removeClass('fixed-head');
    }
});


$('.tabSwitchman').each(function(index, element) {
   var obj = $(this);
   obj.find('.tabTite').children().on('click tab', function() {
       $(this).addClass('cur').siblings().removeClass('cur');
       if ($(this).data('to')){
           $($(this).data('to')).val($(this).data('id'));
       }
       if (obj.find('.tabBoxe').children().eq($(this).index()).length > 0)
           obj.find('.tabBoxe').children().hide().eq($(this).index()).show();
           obj.find('.tabBoxe').children().removeClass('new-class').eq($(this).index()).addClass('new-class');
       if (obj.find('.tabBox2').children().eq($(this).index()).length > 0)
           obj.find('.tabBox2').children().hide().eq($(this).index()).show();
           obj.find('.tabBox2').children().removeClass('new-class').eq($(this).index()).addClass('new-class');

       //return false;
   });
   obj.find('.tabTite .cur').trigger('tab');
});

$('.tabSwitchmanhover').each(function(index, element) {
   var obj = $(this);
   obj.find('.tabTite').children().on('mouseover tab', function() {
       $(this).addClass('cur').siblings().removeClass('cur');
       if ($(this).data('to')){
           $($(this).data('to')).val($(this).data('id'));
       }
       if (obj.find('.tabBoxe').children().eq($(this).index()).length > 0)
           obj.find('.tabBoxe').children().hide().eq($(this).index()).show();
           obj.find('.tabBoxe').children().removeClass('new-class').eq($(this).index()).addClass('new-class');
       if (obj.find('.tabBox2').children().eq($(this).index()).length > 0)
           obj.find('.tabBox2').children().hide().eq($(this).index()).show();
           obj.find('.tabBox2').children().removeClass('new-class').eq($(this).index()).addClass('new-class');

       //return false;
   });
   obj.find('.tabTite .cur').trigger('tab');
});

$(".nybanner").addClass("cur");
//  
$(".header_xl .box a").hover(function(){
    var dq = $(this);
    var tt = $(dq).position().top;
    $(".header_xl .box .box_a i.i").css('top',tt);
},function(){

});


$(window).scroll(function (e) {
    s = $(document).scrollTop();
    if (s > $(".nybanner").height()) {
        $(".mbdaoh").addClass("owoe");
    } else {
        $(".mbdaoh").removeClass("owoe");
    }
});

$('.tabSwitchmanzidong').each(function(index, element) {  
    var obj = $(this);  
  

    obj.find('.tabTit').children().on('click', function() {  
        $(this).addClass('cur').siblings().removeClass('cur');  
        if ($(this).data('to')) {  
            $($(this).data('to')).val($(this).data('id'));  
        }  
        if (obj.find('.tabBox').children().eq($(this).index()).length > 0) {  
            obj.find('.tabBox').children().hide().eq($(this).index()).show();  
            obj.find('.tabBox').children().removeClass('new-class').eq($(this).index()).addClass('new-class');  
        }  
        if (obj.find('.tabBox2').children().eq($(this).index()).length > 0) {  
            obj.find('.tabBox2').children().hide().eq($(this).index()).show();  
            obj.find('.tabBox2').children().removeClass('new-class').eq($(this).index()).addClass('new-class');  
        }  
    });  
  

    obj.find('.tabTit .cur:first').trigger('click');  
  

    function autoSwitchTabs() {  
        var current = obj.find('.tabTit .cur');  
        var next = current.next();  
        //  ，   
        if (next.length === 0) {  
            next = obj.find('.tabTit').children().first();  
        }  

        next.trigger('click');  
    }  
  
    //  ， 5   
    setInterval(autoSwitchTabs, 5000);  
});

$(".commonbanner").addClass("cur");


const navElement = document.querySelector('.nav_box_6.nav_box');
const preventScroll = (e) => e.preventDefault();

if (navElement) {
    const config = { attributes: true, attributeFilter: ['class'] };

    const callback = function (mutationsList) {
        for (const mutation of mutationsList) {
            if (mutation.type === 'attributes' && mutation.attributeName === 'class') {
                const hasCur = navElement.classList.contains('cur');

                if (hasCur) {
                    document.body.style.overflow = 'hidden';
                    document.addEventListener('touchmove', preventScroll, { passive: false });
    
                    document.addEventListener('wheel', preventScroll, { passive: false });
                } else {
                    document.body.style.overflow = 'auto';
                    document.removeEventListener('touchmove', preventScroll);
                    document.removeEventListener('wheel', preventScroll);
                }
            }
        }
    };

    const observer = new MutationObserver(callback);
    observer.observe(navElement, config);
}


$(".navBtn").click(function(){
    $(".header").toggleClass("cur");
});

   $(document).ready(function() {
        $(".nav_box .navlist ul>li .sub").click(function () {

            $(this).toggleClass("cur");

            $(this).next('.navlist4').find('.nomsjkxks').slideToggle(400);
        });
    });