var cymsrc = 2;

var cymtr=Math.floor(Math.random()*9999999999);

if(document.referrer.length <= 0)
{
	var cyrefth='';
}
else
{
	var cyrefth = document.referrer.split('/')[2]+document.referrer.substr(document.referrer.indexOf(document.referrer.split('/')[2])+document.referrer.split('/')[2].length);
}

	<!-- Cycookie Mapping Base  -->
function google_cookie_mapping_url()
{
	var addScript = function(){
		var cy_src = 'cm.g.doubleclick.net/pixel?google_nid=cymmetrics_dmp&google_cm&cymsrc='+cymsrc+'&newt=1';
		var cym_ct = document.createElement('script'); cym_ct.type= 'text/javascript';
		var src = 'https://'; cym_ct.src = src+cy_src;
		var cym_cts = document.getElementsByTagName('script')[0];
		cym_cts.parentNode.insertBefore(cym_ct, cym_cts); 
	};
	if (window.addEventListener) 
	{
		document.readyState == 'loading' ? document.addEventListener('DOMContentLoaded', addScript, false) : addScript();
	} 
	else 
	{
		document.readyState == 'loading' ? document.attachEvent('onDOMContentLoaded', addScript, false) : addScript();
	}
}
google_cookie_mapping_url(); 

function cym_apply_log(pr_id,reff,cookie,rand_cy)
{
/********************* custom_parameter定義 **************************/
	//member_id
	var ur_uid = uid;
	//cookie_id
	if( document.cookie.split("_ucc=")[1] != null )
		var ur_ucc = document.cookie.split("_ucc=")[1].split(";")[0];
	else
		var ur_ucc = 0;
/********************************************************************/

	var cy_src = 'pt.cymmetrics.com.tw/aclient/ctl_urcosme.php?cymsrc='+pr_id+'&gcookie_id='+cookie+'&cymtr='+rand_cy+'&cyrefth='+reff+'&ur_uid='+ur_uid+'&ur_ucc='+ur_ucc+'&newt=1';
	var cym_ct = document.createElement('script'); 
	var src = 'https://'; cym_ct.src = src+cy_src;
	var cym_cts = document.getElementsByTagName('script')[0];
	cym_cts.parentNode.insertBefore(cym_ct, cym_cts);
}

function get_ck(ig_cookie) {this.g_cookie = ig_cookie;}

alget_ck=new get_ck("");

function gdatainfo(result) 
{ 
	alget_ck.g_cookie = result.cg_cookie;
	cym_apply_log(cymsrc,cyrefth,alget_ck.g_cookie,cymtr);
};
