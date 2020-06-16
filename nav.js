document.getElementById('smallMenu').addEventListener('click',function(){
	document.getElementById('nav').classList.toggle('spreadMenu');
	toggleDisplay('navWrapper');
});

document.getElementById('dropdown1').addEventListener("mouseover",function(){
	document.getElementById('dropdownList').classList.add('displayBlock');
	document.getElementById('dropdownList').classList.remove('displayNone');
});

document.getElementById('dropdown1').addEventListener("mouseleave",function(){
	document.getElementById('dropdownList').classList.add('displayNone');
	document.getElementById('dropdownList').classList.remove('displayBlock');
});


function toggleDisplay(id){
	this.id = id;
	document.getElementById(id).classList.toggle('displayNone');
	document.getElementById(id).classList.toggle('displayBlock');
}
