function in_url(e){return location.href.indexOf(e)>=0}function review_read_more(e,t,r,i,a){var n=$("#"+i),c=e.html(),o=location.href.replace(/#.+/,"");n.attr("name",i),e.attr("onclick",""),e.bind("click",function(){return"true"!=e.attr("loged")&&($.get("/search/ajax/insertReviewPageView.php?review_id="+t),e.attr("loged","true"),n.find("img_fake").each(function(){$(this).replaceWith($(this)[0].outerHTML.replace("img_fake","img"))})),e.html()==c?(e.html(a),n.css("height","")):(e.html(c),n.css("height",r),location.href=o+"#"+i),!1})}var bts=$(".read_statistics a:first-child");if(bts.length>0&&bts.each(function(){var e=$(this);if(in_url("review/picked"))var t=e.attr("onclick").match(/review_id=([0-9]+)/)[1],r="130px",i="reviewContent"+t,a=e.attr("onclick").match(/\$\(this\)\.html\('(.+?)'\)\}/)[1];else if(in_url("/search/"))var t=e.attr("onclick").match(/review_id=([0-9]+)/)[1],r="212px",i="reviewContent"+t,a=e.next().html();else var t=e.attr("onclick").match(/review_id=([0-9]+)/)[1],r="212px",i="reviewContent"+t,a="Close";review_read_more(e,t,r,i,a)}),in_url("beauty_diary/index")){var a=$("#contentBeautydiaryMytopProfilecontent2 #close a").first();a.attr("onclick",a.attr("onclick").replace("'height', null","'height', ''"))}$(document).ready(function(){var e=$("h5.old_badge").find("a");$("h6.old_badge").append(e);var t=$("h6.old_badge").find("br");$(t).remove()}),$(document).ready(function(){window.location.href.match("beauty_diary/search")&&($("#sidebarpage").hide(),$(".beautyDiaryInforBlock").hide(),$("#pathpage_top").hide(),$("#contentpage").css("width","100%"))}),$("[uc-member]").bind("uc:member-got",function(){var e=$(this);e.find(".top100-2013").wrap("<a href='http://ranking2013.events.urcosme.com/members'></a>"),e.find(".patrol-2013").wrap("<a href='http://ranking2013.events.urcosme.com/members'></a>"),e.find(".newer-2013").wrap("<a href='http://ranking2013.events.urcosme.com/members'></a>")}),$(document).ready(function(){var e=$("#form_headerpage_search_index").find("h4:last-child");e.find("span").siblings().remove(),e.contents().filter(function(){return 3===this.nodeType}).remove()}),$(document).ready(function(){if("http://www.urcosme.com/activity/act4/act.htm"==window.location){var e=document.referrer;uc_api.log_ga("http://www.urcosme.com/activity/act4/act.htm","referrer",e),location.href="http://www.urcosme.com/"}});