function getFormSerializeVerUniversal(formId,act_path){
	form = document.getElementById(formId);
	var inputs = form.getElementsByTagName("input");
	var selects = form.getElementsByTagName("select");
	var ret = '';
	var strAnchor = '';
	if(strpos (act_path,'#',0)){
		var actPathHandleAnchor = act_path.split('#');
		act_path = actPathHandleAnchor[0];
		strAnchor = '#'+actPathHandleAnchor[1];
	}
	var isMatchInInput = false;
	var isMatchInSelect = false;
	for(var j=0; j<inputs.length; j++) {
		//alert(inputs[j].name);
		isMatchInInput = true;
		if(inputs[j].type == 'text' || inputs[j].type == 'hidden'){
			if(inputs[j].value == "" || inputs[j].value == null){
				continue;
			}else{
				if(inputs[j].name == 'search_str'){
					ret = ret + '&'+inputs[j].name+'='+inputs[j].value;
				}else{
					ret = ret + '&'+inputs[j].name+'='+inputs[j].value;
				}
			}
		}else{
			if(inputs[j].checked == false){
				if(inputs[j].type == 'radio'){
					continue;
				}else{
					ret = ret + '&'+inputs[j].name+'='+inputs[j].value;
				}
			}else{
				if(typeof(inputs[j].value) != 'undefined' && inputs[j].value != "0"){
					ret = ret + '&'+inputs[j].name+'='+inputs[j].value;
				}
			}
		}
	}
	for(var j=0; j<selects.length; j++) {
		isMatchInSelect = true;
		if(selects[j].value == "" || selects[j].value == null) {
			continue;
		}else{
			if(typeof(selects[j].value) != 'undefined' && selects[j].value != "0"){
				ret = ret + '&'+selects[j].name+'='+selects[j].value;
			}
		}
	}
	if(ret){
		ret = ret.substring(1);
	}
	
    $.ajax({
		type: "GET",
		url: "/url/getURLPage",
		async:   false,
		data: {url_serialize:ret,act_path: act_path},
		error: function(xhr){
			return false;
		},
		success: function(response){
			//response = $.urldecode(response);
			var form = document.getElementById(formId);
			var url_redirect = response+strAnchor;
			//alert(response);
			if(form.target == '_blank'){
				window.open(url_redirect,'_blank','');
			}else{
				window.location.href=url_redirect;
			}
		}
	});
}


function Animator_Class(){
	this.TID = null ;
	this.funvar = null;
	this.interval = null;
	this.start_time = null;
}
Animator_Class.prototype.start_timer = function(){
	this.TID = window.setTimeout(this.funvar , this.interval);
	this.start_time = (new Date()).getTime();
}
Animator_Class.prototype.pause_timer = function(){
	var curr_time = (new Date()).getTime();
	var elapsed_time = curr_time - this.start_time ;
	this.interval = this.interval - elapsed_time;
	window.clearTimeout(this.TID);
}
Animator_Class.prototype.setTimeout = function(funvar, interval){
	this.funvar = funvar;
	this.interval = interval;
	this.TID = window.setTimeout(funvar,interval);
	this.start_time = (new Date()).getTime();
}
Animator_Class.prototype.clearTimeout = function(){
	window.clearTimeout(this.TID);
}

function MM_preloadImages() { //v3.0
  var d=document; if(d.images){ if(!d.MM_p) d.MM_p=new Array();
    var i,j=d.MM_p.length,a=MM_preloadImages.arguments; for(i=0; i<a.length; i++)
    if (a[i].indexOf("#")!=0){ d.MM_p[j]=new Image; d.MM_p[j++].src=a[i];}}
}

function MM_swapImgRestore() { //v3.0
  var i,x,a=document.MM_sr; for(i=0;a&&i<a.length&&(x=a[i])&&x.oSrc;i++) x.src=x.oSrc;
}

function MM_findObj(n, d) { //v4.01
  var p,i,x;  if(!d) d=document; if((p=n.indexOf("?"))>0&&parent.frames.length) {
    d=parent.frames[n.substring(p+1)].document; n=n.substring(0,p);}
  if(!(x=d[n])&&d.all) x=d.all[n]; for (i=0;!x&&i<d.forms.length;i++) x=d.forms[i][n];
  for(i=0;!x&&d.layers&&i<d.layers.length;i++) x=MM_findObj(n,d.layers[i].document);
  if(!x && d.getElementById) x=d.getElementById(n); return x;
}

function MM_swapImage() { //v3.0
  var i,j=0,x,a=MM_swapImage.arguments; document.MM_sr=new Array; for(i=0;i<(a.length-2);i+=3)
   if ((x=MM_findObj(a[i]))!=null){document.MM_sr[j++]=x; if(!x.oSrc) x.oSrc=x.src; x.src=a[i+2];}
}

function MM_openBrWindow(theURL,winName,features) { //v2.0
  window.open(theURL,winName,features);
}

var myfar;
var mytitle;
myfar="http://www.urcosme.com";
mytitle="::.UrCosme.::化妝品使用心得入口網站";
function favority() {
	if (navigator.appName!="Netscape"){
		window.external.AddFavorite(myfar, mytitle);
	}else{
		window.location = myfar;
	}
}

function stopEvent(e) {
    if (!e) e = window.event;
    if (e.stopPropagation) {
        e.stopPropagation();
    } else {
        e.cancelBubble = true;
    }
}

function cancelEvent(e) {
    if (!e) e = window.event;
    if (e.preventDefault) {
        e.preventDefault();
    } else {
        e.returnValue = false;
    }
}

function pause(millisecondi){    
    var now = new Date();
	var exitTime = now.getTime() + millisecondi;
	while(true)    {
	    now = new Date();
		if(now.getTime() > exitTime) return;
	}
}

// Auto maximize window script - By Nick Lowe (nicklowe@ukonline.co.uk)
// Courtesy of SimplytheBest.net - http://simplythebest.net/scripts/
function window_resizeToMax(){
	window.moveTo(0,0);
	if (document.all) {
		top.window.resizeTo(screen.availWidth,screen.availHeight);
	}else if (document.layers||document.getElementById) {
		if (top.window.outerHeight<screen.availHeight||top.window.outerWidth<screen.availWidth){
			top.window.outerHeight = screen.availHeight;
			top.window.outerWidth = screen.availWidth;
		}
	}
}

function checkSearchIndex(form){
    if(form.str.value == ""){
	    alert("請輸入欲搜尋的「關鍵字」!");	
		return false;
	}
	var redirect_url = form.section.value+form.str.value;
	window.location.href=redirect_url;
	return false;
}

function checkFormHeaderpageSearch(form,section_key,opt_searchUrl,opt_searchUrl_end){
    if(form.str.value == ""){
	    alert("請輸入欲搜尋的「關鍵字」!");	
		return false;
	}
	var redirect_url = opt_searchUrl[section_key]+form.str.value+opt_searchUrl_end[section_key];
	window.location.href=redirect_url;
	return false;
}

function check_form_question_new_theme200808_comment(form){
    if(form.comment.value == ""){
	    alert('您忘了輸入意見回饋的內容！');
		form.comment.focus();
		return false;
	}
	return true;
}

function check_form_question_new_beauty_diary200808_comment(form){
    if(form.comment.value == ""){
	    alert('您忘了輸入意見回饋的內容！');
		form.comment.focus();
		return false;
	}
	return true;
}
function check_registerEpaper(form){
    if(form.register_email.value == "" || form.register_email.value == "請輸入E-MAIL"){
        alert("請輸入您的E-MAIL!");
        form.register_email.focus();
        return false;
    }
    return true;
}

function strpos (haystack, needle, offset) {
    var i = (haystack+'').indexOf(needle, (offset ? offset : 0));
    return i === -1 ? false : i;
}

function getFormSerialize(formId, fileName, json_vars_custom, json_default_value) {
	form = document.getElementById(formId);
	var inputs = form.getElementsByTagName("input");
	var selects = form.getElementsByTagName("select");
	var json_vars_custom_lenght = json_vars_custom.length;
	var strAnchor = '';
	if(strpos (fileName,'#',0)){
		var fileNameHandleAnchor = fileName.split('#');
		fileName = fileNameHandleAnchor[0];
		strAnchor = '#'+fileNameHandleAnchor[1];
	}
	var ret = fileName;
	for(i=0;i<json_vars_custom_lenght;i++){
	    var vars_custom = json_vars_custom[i];
		//alert(vars_custom);
		var isMatchInInput = false;
		var isMatchInSelect = false;
		var varsCustomValue = '';
		for(var j=0; j<inputs.length; j++) {
			if(inputs[j].name == vars_custom){
			    //alert(inputs[j].name);
				isMatchInInput = true;
				if(inputs[j].type == 'text' || inputs[j].type == 'hidden'){
					if(inputs[j].value == "" || inputs[j].value == null){
						if(json_default_value[i]){
							varsCustomValue = json_default_value[i];
						}else{
							varsCustomValue = '0';
						}
					}else{
						if(typeof(inputs[j].value) != 'undefined'){
						    varsCustomValue = inputs[j].value;
						}else{
							if(json_default_value[i]){
								varsCustomValue = json_default_value[i];
							}else{
								varsCustomValue = '0';
							}
							
						}
					}
				}else{
					if(inputs[j].checked == false){
						if(inputs[j].type == 'radio'){
							continue;
						}else{
							if(json_default_value[i]){
								varsCustomValue = json_default_value[i];
							}else{
								varsCustomValue = '0';
							}
						}
					}else{
						if(typeof(inputs[j].value) != 'undefined'){
						    varsCustomValue = inputs[j].value;
						}else{
							if(json_default_value[i]){
								varsCustomValue = json_default_value[i];
							}else{
								varsCustomValue = '0';
							}
						}
					}
				}
				ret = ret + '-' + varsCustomValue;
			}
		}
		var str = new String(fileName);
		if (str.charAt(str.length - 1) == '/') {
			ret = ret.replace('/-','/');
		}
		for(var j=0; j<selects.length; j++) {
			if(selects[j].name == vars_custom){
			    //alert(selects[j].name);
				isMatchInSelect = true;
				if(selects[j].value == "" || selects[j].value == null) {
					if(json_default_value[i]){
						varsCustomValue = json_default_value[i];
					}else{
						varsCustomValue = '0';
					}
				}else{
					if(typeof(selects[j].value) != 'undefined'){
					    varsCustomValue = selects[j].value;
					}else{
						if(json_default_value[i]){
							varsCustomValue = json_default_value[i];
						}else{
							varsCustomValue = '0';
						}
					}
				}
			    ret = ret + '-' + varsCustomValue;
			}
		}
		if (isMatchInInput == false && isMatchInSelect == false) {
			if (json_default_value[i]) {
				varsCustomValue = json_default_value[i];
			}
			else {
				varsCustomValue = '0';
			}
			ret = ret + '-' + varsCustomValue;
		}
	}
	ret = ret + '.htm'+strAnchor;
	//alert(ret);
	if(form.target == '_blank'){
	    window.open(ret,'_blank','');
	}else{
		window.location.href=ret;
	}
	return false;
}

function getAlphaByInt(int){
	var jsonAlpha = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
	return jsonAlpha[int];
}

function getFormSerializeVerTinyUrl(formId, fileName, json_vars_custom, json_default_value) {
	form = document.getElementById(formId);
	var inputs = form.getElementsByTagName("input");
	var selects = form.getElementsByTagName("select");
	var json_vars_custom_lenght = json_vars_custom.length;
	var strAnchor = '';
	if(strpos (fileName,'#',0)){
		var fileNameHandleAnchor = fileName.split('#');
		fileName = fileNameHandleAnchor[0];
		strAnchor = '#'+fileNameHandleAnchor[1];
	}
	var ret = fileName;
	var alpha;
	for(i=0;i<json_vars_custom_lenght;i++){
		alpha = getAlphaByInt(i);
	    var vars_custom = json_vars_custom[i];
		//alert(vars_custom);
		var isMatchInInput = false;
		var isMatchInSelect = false;
		var varsCustomValue = '';
		for(var j=0; j<inputs.length; j++) {
			if(inputs[j].name == vars_custom){
			    //alert(inputs[j].name);
				isMatchInInput = true;
				if(inputs[j].type == 'text' || inputs[j].type == 'hidden'){
					if(inputs[j].value == "" || inputs[j].value == null){
						if(json_default_value[i] != "0"){
							varsCustomValue = alpha+json_default_value[i];
						}
					}else{
						if(typeof(inputs[j].value) != 'undefined' && inputs[j].value != "0"){
						    varsCustomValue = alpha+inputs[j].value;
						}else{
							if(json_default_value[i] != "0"){
								varsCustomValue = alpha+json_default_value[i];
							}
						}
					}
				}else{
					if(inputs[j].checked == false){
						if(inputs[j].type == 'radio'){
							continue;
						}else{
							if(json_default_value[i] != "0"){
								varsCustomValue = alpha+json_default_value[i];
							}
						}
					}else{
						if(typeof(inputs[j].value) != 'undefined' && inputs[j].value != "0"){
						    varsCustomValue = alpha+inputs[j].value;
						}else{
							if(json_default_value[i] != "0"){
								varsCustomValue = alpha+json_default_value[i];
							}
						}
					}
				}
				if(varsCustomValue){
			        ret = ret + '-' + varsCustomValue;
				}
			}
		}
		var str = new String(fileName);
		if (str.charAt(str.length - 1) == '/') {
			ret = ret.replace('/-','/');
		}
		for(var j=0; j<selects.length; j++) {
			if(selects[j].name == vars_custom){
			    //alert(selects[j].name);
				isMatchInSelect = true;
				if(selects[j].value == "" || selects[j].value == null) {
					if(json_default_value[i] != "0"){
						varsCustomValue = alpha+json_default_value[i];
					}
				}else{
					if(typeof(selects[j].value) != 'undefined' && selects[j].value != "0"){
					    varsCustomValue = alpha+selects[j].value;
					}else{
						if(json_default_value[i] != "0"){
							varsCustomValue = alpha+json_default_value[i];
						}
					}
				}
				if(varsCustomValue){
			        ret = ret + '-' + varsCustomValue;
				}
			}
		}
		if (isMatchInInput == false && isMatchInSelect == false) {
			if (json_default_value[i] != "0") {
				varsCustomValue = alpha+json_default_value[i];
			}
			if(varsCustomValue){
				ret = ret + '-' + varsCustomValue;
			}
		}
	}
	ret = ret + '.htm'+strAnchor;
	if(form.target == '_blank'){
	    window.open(ret,'_blank','');
	}else{
		window.location.href=ret;
	}
	return false;
}


function contentpage_login_form(form){
    if(form.loginemail.value==""){
	    alert("請填入E-mail帳號~~");
		form.loginemail.focus();
		return false;
	}
    if(form.loginpasswd.value==""){
	    alert("請填入密碼~~");
		form.loginpasswd.focus();
		return false;
	}
	return true;
}

/**
 * URLPageRewrite Javascript版
 *
 * @param string $front_url EX: /rank/review_express
 * @param json $json_vars_global EX: $_GET
 * @param json $json_vars_custom EX: /rank/review_express內建的變數
 * @param json $json_vars_change 想要改變的變數,常用在select onchange時
 * @param string $URL_REPLACE_AND rewrite &符號,目前為/
 * @param string $URL_REPLACE_EQUAL rewrite =符號,目前為__
 * @return string rewrite url
 */
function getURLPageRewrite(front_url,json_vars_global,json_vars_custom,json_vars_change,URL_REPLACE_AND,URL_REPLACE_EQUAL) {
    //EX : /rank/review_express___
	var ret = front_url+'___';
	var json_vars_custom_lenght = json_vars_custom.length;
	var request_uri = '';
	for(i=0;i<json_vars_custom_lenght;i++){ // /rank/review_express內建的變數跑迴圈
	    var vars_custom = json_vars_custom[i]; //取得'statistic_type','factory_type','age','catattr'
	    if(json_vars_global[vars_custom]){ //如果有$_GET['statistic_type']
	       var final_value;
	       if(typeof(json_vars_change[vars_custom]) != "undefined"){  //如果有$_GET['statistic_type'],'statistic_type'為想改變的變數
	           final_value = json_vars_change[vars_custom]; //'statistic_type' = 想改變的變數
	       }else{
	           final_value = json_vars_global[vars_custom];  //'statistic_type' = $_GET['statistic_type']
	       }
	       request_uri = request_uri + URL_REPLACE_AND + vars_custom + URL_REPLACE_EQUAL + final_value;
	    }else{ //如果沒有$_GET['statistic_type'],'statistic_type'為想改變的變數
	       if(typeof(json_vars_change[vars_custom]) != "undefined" && json_vars_change[vars_custom] != ""){
	           request_uri = request_uri + URL_REPLACE_AND + vars_custom + URL_REPLACE_EQUAL + json_vars_change[vars_custom];  //'statistic_type' = 想改變的變數
	       }
	    }
	}
	ret = ret + request_uri.substring(1) + '.htm';
	return ret;
}


function setCopy(text){ 
    var userAgent = navigator.userAgent.toLowerCase();   
    var is_webtv = userAgent.indexOf('webtv') != -1;   
    var is_kon = userAgent.indexOf('konqueror') != -1;   
    var is_mac = userAgent.indexOf('mac') != -1;   
    var is_saf = userAgent.indexOf('applewebkit') != -1 || navigator.vendor == 'Apple Computer, Inc.';   
    var is_opera = userAgent.indexOf('opera') != -1 && opera.version();   
    var is_moz = (navigator.product == 'Gecko' && !is_saf) && userAgent.substr(userAgent.indexOf('firefox') + 8, 3);   
    var is_ns = userAgent.indexOf('compatible') == -1 && userAgent.indexOf('mozilla') != -1 && !is_opera && !is_webtv && !is_saf;   
    var is_ie = (userAgent.indexOf('msie') != -1 && !is_opera && !is_saf && !is_webtv) && userAgent.substr(userAgent.indexOf('msie') + 5, 3);   
    if(is_ie) {   
        clipboardData.setData('Text', text);   
        alert('已經把內容複製到系統剪貼簿，您可以使用（Ctrl+V或滑鼠右鍵）將引用網址貼上。');
    } else {
        prompt('請按 "Ctrl+C" 將內容複製到剪貼簿!', text);
    }   
}

var InternetExplorer = navigator.appName.indexOf("Microsoft") != -1;
function AdsSWFTwin(strAdsName,intHeightBig,intHeightSmall,strActPath,intStartTimeout){
    this.ads_name = strAdsName;
	this.height_big = intHeightBig;
	this.height_small = intHeightSmall;
	this.act_path = strActPath;
	this.start_timeout = intStartTimeout;
	this.var_timeout = '';
}

AdsSWFTwin.prototype.expandAdsSWFTwinClass=function(){
	var strIdName = 'blockAdsSWFTwin'+this.ads_name;
    $("#"+strIdName).css({'height':this.height_big+'px'});
	$("#"+strIdName+"2").hide();
	$("#"+strIdName+"1").show();
}
AdsSWFTwin.prototype.shrinkAdsSWFTwinClass=function(){
    if(this.var_timeout){
        clearTimeout(this.var_timeout);
    }
    var strIdName = 'blockAdsSWFTwin'+this.ads_name;
    $("#"+strIdName).css({'height':this.height_small+'px'});
	$("#"+strIdName+"1").hide();
	$("#"+strIdName+"2").show();
}
AdsSWFTwin.prototype.startAnimateAdsSWFTwinUniversalClass=function(){
    var strCookieVar = this.ads_name+'CookieFlag';
    if($.cookie(strCookieVar) == '1'){
		this.shrinkAdsSWFTwinClass();
	}else{
	    var strIdName = 'blockAdsSWFTwin'+this.ads_name;
	    $("#"+strIdName+"1").show();
		if( document.all ){ // IE
			var me = this;
			this.var_timeout = setTimeout(function() { me.startAnimateAdsSWFTwinClass() }, this.start_timeout);  
		}else{
			this.var_timeout = setTimeout(function(o){o.startAnimateAdsSWFTwinClass()},this.start_timeout,this);
		}
	}
}
AdsSWFTwin.prototype.startAnimateAdsSWFTwinClass=function(){
//alert('startAnimateAdsSWFTwinClass');
    var strCookieVar = this.ads_name+'CookieFlag';
	if($.cookie(strCookieVar) == '1'){
	    this.shrinkAdsSWFTwinClass();
	}else{
        $.cookie(strCookieVar,'1',{expires: 7});
		var strIdName = 'blockAdsSWFTwin'+this.ads_name;
		this.animateAdsSWFTwinClass();
	}
}
AdsSWFTwin.prototype.animateAdsSWFTwinClass=function(){
    var strIdName = 'blockAdsSWFTwin'+this.ads_name;
	var intAdsSWFTwinHeight = $("#"+strIdName).height();
	if(intAdsSWFTwinHeight > this.height_small){
	    $("#"+strIdName).height(intAdsSWFTwinHeight-2);
	    if( document.all ){ // IE
			var me = this;
			this.var_timeout = setTimeout(function() { me.animateAdsSWFTwinClass() }, 50);  
		}else{
			this.var_timeout = setTimeout(function(o){o.animateAdsSWFTwinClass()},50,this);
		}
	}else{
	    pause(2000);
		this.shrinkAdsSWFTwinClass();
	}
}

function getVcastr(vcastr_id) {
	 if (navigator.appName.indexOf("Microsoft") != -1) {
		 return window[vcastr_id];
	 } else {
		 return document[vcastr_id];
	 }
 }

function submitLoginHeader(form){
	if(form.loginemail.value==""){
	    alert("請輸入E-mail帳號!");
		form.loginemail.focus();
		return false;
	}
    if(form.loginpasswd.value==""){
	    alert("請輸入密碼!");
		form.loginpasswd.focus();
		return false;
	}
	return true;
}

function nl2br( str ) {
   return str.replace(/([^>])\n/g, '$1<br />\n');
}

if(jQuery) {
	jQuery(document).ready(
		function() {
			jQuery('.ClickTrack').click(function(){
				if(this.name) {
					var url = '';
					var class_name = new String(jQuery(this).attr('class'));
					var target = new String(jQuery(this).attr('target'));
					if (this.href) {
						url = this.href;
					}
					if(target == ''){
					    target = '_self';
					}
					$.ajax({
						type: "GET",
						url: '/include/clicktrack/?ClickTrack='+this.name,
						async:   false,
						error: function(xhr){
							return false;
						},
						success: function(response){
							if(target == '_blank'){
							    //@TODO window.open prevent blocked by browser
								//window.open(ret,'_blank','');
								window.location.href=url;
							}else{
								window.location.href=url;
							}
						}
					});
					if (url != '' && url[0] != '#') {
						return false;
					}
				}
			});
		}
	);
}



function resetFormSerialize(formId) {
	var form = document.getElementById(formId);
	var inputs = form.getElementsByTagName("input");
	for(var i=0; i<inputs.length; i++) {
		if(inputs[i].type == 'text'){
			if(inputs[i].value != "" || inputs[i].value != null){
				inputs[i].value = "";
			}
		}else{
			if(inputs[i].checked == true){
				inputs[i].checked = false;
			}
		}
	}
	//return false;
	var selects = form.getElementsByTagName("select");
	for(var i=0; i<selects.length; i++) {
		if(selects[i].value != "" || selects[i].value != null) {
			selects[i].selectedIndex = 0;
		}
	}
}

$.extend({urlencode:function(c){var o='';var x=0;c=c.toString();var r=/(^[a-zA-Z0-9_.]*)/;
  while(x<c.length){var m=r.exec(c.substr(x));
    if(m!=null && m.length>1 && m[1]!=''){o+=m[1];x+=m[1].length;
    }else{if(c[x]==' ')o+='+';else{var d=c.charCodeAt(x);var h=d.toString(16);
    o+='%'+(h.length<2?'0':'')+h.toUpperCase();}x++;}}return o;},
urldecode:function(s){var o=s;var binVal,t;var r=/(%[^%]{2})/;
  while((m=r.exec(o))!=null && m.length>1 && m[1]!=''){b=parseInt(m[1].substr(1),16);
  t=String.fromCharCode(b);o=o.replace(m[1],t);}return o;}
});

function urlencode (clearString) {
  var output = '';
  var x = 0;
  clearString = clearString.toString();
  var regex = /(^[a-zA-Z0-9_.]*)/;
  while (x < clearString.length) {
    var match = regex.exec(clearString.substr(x));
    if (match != null && match.length > 1 && match[1] != '') {
    	output += match[1];
      x += match[1].length;
    } else {
      if (clearString[x] == ' ')
        output += '+';
      else {
        var charCode = clearString.charCodeAt(x);
        var hexVal = charCode.toString(16);
        output += '%' + ( hexVal.length < 2 ? '0' : '' ) + hexVal.toUpperCase();
      }
      x++;
    }
  }
  return output;
}