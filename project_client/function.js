function addJavascript(jsname) {
	var th = document.getElementsByTagName('head')[0];
	var s = document.createElement('script');
	s.setAttribute('type','text/javascript');
	s.setAttribute('src',jsname);
	th.appendChild(s);
}
addJavascript('jquery-3.1.1.js');

function selectGroup(obj){
  // console.log(event.target.id);
  // console.log('selected');
  $(obj).css('border','1px solid red');
}

function selectGroupTest(event){
  // console.log(event.target.id);
  // console.log('selected');
  // $(obj).css('border','1px solid red');
  $(this).css('border','1px solid red');
}
