//////////////////////////////////////////////////////////////////////////////////////////////////////////////
function setFocus1() {
document.getElementById('G_r1').scrollIntoView();
var l=languag;
if(l=='en'){l='';}else{l+='.';}
$.getScript("http://"+l+"onlinemschool.com/modules/ajax/vote2.php?a="+location.href, function(){if(!magax()){document.getElementById('res').innerHTML='';}});
alert($.getScript);

}

function scriptavtor() {
document.getElementById('res').innerHTML='Writed by Mykhailo Dovzhyk. Mail to medved_mik@ukr.net';
}

//////////////////////////////////////////////////////////////////////////////////////////////////////////////
function deriv(){
	n1=document.getElementById('n1').value;
	document.getElementById('res').innerHTML=j2;setFocus1();
	if(n1==''){document.getElementById('res').innerHTML=j1;setFocus1();exit;} 
	var eq = nerdamer('diff('+n1+',x)');
	nerdamer('diff('+n1+',x)');

	var tt1 = new TfrRes;
	tt1.addfr('d','d<div class=mformula>x</div>');
	tt1.addstr('(');
	tt1.addstr(n1);
	tt1.addstr(')&nbsp;=&nbsp;');
	tt1.addstr(eq.text());
	document.getElementById('res').innerHTML=tt1.show(); 
	setFocus1();
}

function limit(){
	query='limit('+document.getElementById('n1').value+',x->'+document.getElementById('n0').value+')';
	$('input[name="query"]').val(query);
	setFocus1();
	document.getElementById('res').style.display = "block";
	document.getElementById('wolframAlphaWidget89243').style.width = "100%";
	document.getElementById('wolframAlphaWidgetForm89243').style.display = "none";
	$('td.m').click();
}

function selectv(n){
	document.getElementById('n0').value=n;
}

function derivch(n){
	document.getElementById('st1').innerHTML=n;
	document.getElementById('st2').innerHTML=n;
	switch (n){
	case '1': dk='1st';break;
	case '2': dk='2nd';break;
	case '3': dk='3rd';break;
	};
	if(k==''){dk=n+'th';}
}

function deriv1(){
	query='D('+document.getElementById('n1').value+',{x,'+document.getElementById('dif_1').value+'})';
	$('input[name="query"]').val(query);
	setFocus1();
	document.getElementById('res').style.display = "block";
	document.getElementById('wolframAlphaWidget89243').style.width = "100%";
	document.getElementById('wolframAlphaWidgetForm89243').style.display = "none";
	$('td.m').click();
}

function int1(){
	query='\\int '+document.getElementById('n1').value+' dx';
	$('input[name="query"]').val(query);
	setFocus1();
	document.getElementById('res').style.display = "block";
	document.getElementById('wolframAlphaWidget89243').style.width = "100%";
	document.getElementById('wolframAlphaWidgetForm89243').style.display = "none";
	$('td.m').click();
}

function int2(){
	query='integrate('+document.getElementById('n1').value+',x,'+document.getElementById('n3').value+','+document.getElementById('n2').value+')';
	$('input[name="query"]').val(query);
	setFocus1();
	document.getElementById('res').style.display = "block";
	document.getElementById('wolframAlphaWidget89243').style.width = "100%";
	document.getElementById('wolframAlphaWidgetForm89243').style.display = "none";
	$('td.m').click();
}