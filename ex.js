var img=document.querySelector('.dc');
let bt1=document.querySelector("#bt1");
let bt2=document.querySelector("#bt2");
let bt3=document.querySelector("#bt3");

bt2.addEventListener('click', ()=> {
	img.src='https://static.scientificamerican.com/sciam/cache/file/92E141F8-36E4-4331-BB2EE42AC8674DD3_source.jpg';

})

bt3.addEventListener('click', ()=> {
	img.src='https://i.ytimg.com/vi/jHWKtQHXVJg/maxresdefault.jpg';
})
bt1.addEventListener('click', ()=>{
	img.src='https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Cat03.jpg/1200px-Cat03.jpg';
})