function check_review_edit(form){
	//alert('hihi');
	//return false;
    if(form.crv_evalues.value==""){
	    alert('�z��󦹲��~����������~~');
		form.crv_evalues.focus();
		return false;
	}
	
	var checked_product_type = false;
	var product_type_length = form.crv_product_obtain.length;
	var product_type;
	for(i=0;i<product_type_length;i++){
	    if(form.crv_product_obtain[i].checked == true){
			checked_product_type = true;
			product_type = form.crv_product_obtain[i].value;
		}
	}
	if(!checked_product_type){
	    alert('�z�ѤF�������覡��~');
		form.crv_product_obtain[0].focus();
		return false;
	}
	/*
    if(checked_product_type == true){
		var checked_product_obtain = false;
		var product_obtain_length = form.elements['product_obtain'+product_type].length;
		for(i=0;i<product_obtain_length;i++){
			if(form.elements['product_obtain'+product_type][i].checked == true){
				checked_product_obtain = true;
			}
		}
		if(checked_product_obtain == false){
			alert('�z�O�q���ӳq�����o�����~���H');
			form.elements['product_obtain'+product_type][0].focus();
			return false;
		}
	}*/
	if(form.crv_comment.value == "") {
		alert('�z�ѤF�g���~���P�Q�߱o�@~~');
		form.crv_comment.focus();
		return false;
	}
	if (form.crv_comment.value.length < 30){
		alert('�ϥΤ߱o�r�Ƥ���֩�30�Ӧr!!');
		return false;
	}
	
	/*
	if(form.crv_comment.value.trim()==''){
	    alert('���~���P�Q�߱o���ର�ťզr���@~~');
		form.crv_comment.value="";
		form.crv_comment.focus();
		return false;
	}*/
	return true;
}

function showAddBuylist(radioobj){
	var str = radioobj.split("-")[0];
	if(str == '2'){
		if(radioobj=='2-10' || radioobj=='2-11'){
			document.getElementById('addBuylist').style.display="none";
			document.getElementById('addBuylistCheckBox').checked="false";
			document.getElementById('addBuylistCheckBox').value="";
		}else{
			document.getElementById('addBuylist').style.display="block";
			document.getElementById('addBuylistCheckBox').checked="true";
			document.getElementById('addBuylistCheckBox').value="1";
		}
	}else{
		document.getElementById('addBuylist').style.display="none";
		document.getElementById('addBuylistCheckBox').checked="false";
		document.getElementById('addBuylistCheckBox').value="";
	}
	
}



function appendFuncs(ev, target) {
	var str = ev.innerHTML;
	replaceTag(target);
	var funs = new String(jQuery(target).val());
	if(funs.indexOf(str+",") == -1 && funs.indexOf(","+str) == -1 && funs != str) {
		if(funs.length != 0) {
			str = ","+str;
		}
		funs = funs + str;
		jQuery(target).attr('value', funs);
	}
}

function replaceTag(el) {
	var obj = jQuery(el);
	while(obj.val().indexOf(' ') != -1) {
		var str = obj.val().replace(' ', ',');
		obj.val(str);
	}
	while(obj.val().indexOf('~') != -1) {
		var str = obj.val().replace('~', ',');
		obj.val(str);
	}
	while(obj.val().indexOf('�A') != -1) {
		var str = obj.val().replace('�A', ',');
		obj.val(str);
	}
	while(obj.val().indexOf('�B') != -1) {
		var str = obj.val().replace('�B', ',');
		obj.val(str);
	}
	while(obj.val().indexOf('�@') != -1) {
		var str = obj.val().replace('�@', ',');
		obj.val(str);
	}
	while(obj.val().indexOf(';') != -1) {
		var str = obj.val().replace(';', ',');
		obj.val(str);
	}
	while(obj.val().indexOf('�F') != -1) {
		var str = obj.val().replace('�F', ',');
		obj.val(str);
	}
	while(obj.val().indexOf('.') != -1) {
		var str = obj.val().replace('.', ',');
		obj.val(str);
	}
	while(obj.val().indexOf('&') != -1) {
		var str = obj.val().replace('&', ',');
		obj.val(str);
	}
	while(obj.val().indexOf('��') != -1) {
		var str = obj.val().replace('��', ',');
		obj.val(str);
	}
	
	jQuery(el).val(obj.val());
}
