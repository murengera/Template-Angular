
//examine document object
//console.dir(document)
//console.log(document.domain)
//console.log(document.url);
//console.log(document)
//console.log(document.title)
//console.log(document.body)
//console.log(document.all[10])
//console.log(document.forms[0])
//console.log(document.links)
//console.log(document.images)
//getelementbyid
//console.log(document.getElementById("header-title"))
//var header_title=document.getElementById("header-title")
//var header=document.getElementById("main-header");
//console.log(header_title)
//header_title.textContent="hello love"
//header_title.innerHTML="Rwanda nziza  "
//header_title.innerHTML="<h1>rwanda</h1>"
//header.style.borderBottom="solid 3px #000"

//getelementbyclassname
//console.log(items)
//var items=document.getElementsByTagName("list-group");
//console.log(items[1])


//for(var i=0;i<items.length;i++){
//    items[i].style.backgroundColor="#f4f4f4";
//}

//QuerySelector//
///var header=document.querySelector('#main-header');
//header.style.borderBottom='solid 4px #ccc';
///var input=document.querySelector("input");
///input.value="what is your name"
///var submit=document.querySelector('input[type="submit"]');
///submit.value="SEND"
///submit.style.backgroundColor="red";
///var item=document.querySelector(".list-group-item");
///item.style.color="red";
///var lastitem=document.querySelector(".list-group-item:last-child");
///lastitem.style.color="blue";
///var seconditem=document.querySelector(".list-group-item:nth-child(2)");
///seconditem.style.color="coral";

//queryselectorall//
//var titles=document.querySelectorAll(".title");

//console.log(titles)
//titles[0].textContent="love";
//var odd=document.querySelectorAll('li:nth-child(odd)');
//var even=document.querySelectorAll('li:nth-child(even)');
//for(var i=0;i<odd.length;i++){
   // odd[i].style.backgroundColor="#f4f4f4";
   // even[i].style.backgroundColor="#ccc";
//}


//traversing dom//
var itemList=document.querySelector("#items");
//parent Node
//console.log(itemList.parentNode);
//itemList.parentNode.style.backgroundColor="#f4f4f4";
//console.log(itemList.parentNode.parentNode);
//itemList.parentNode.parentNode.style.backgroundColor="#000";

//parentELement//
//console.log(itemList.parentElement)
//childNode//
//console.log(itemList.childNodes);
//childrenNode//
//console.log(itemList.children[0].style.background="red")
//firstChild//
//console.log(itemList.firstChild)
//firstElemetChild//
//itemList.lastElementChild.textContent="boy"
//nextSiblings//


//console.log(itemList.previousSibling)
//console.log(itemList.previousElementSibling.style.backgroundColor="red");
//createELement//
//create a div//
//var newdiv=document.createElement("div");
//console.log(newdiv)
//add class
//newdiv.className="item"
//add id
//newdiv.id="jon"
//console.log(newdiv)
//attr

//n//ewdiv.setAttribute("title","");
//textnode
//var newtext=document.createTextNode("hello world");
//newdiv.appendChild(newtext)
//var container=document.querySelector('header .container');
//var h1=document.querySelector("header h1");
//newdiv.style.fontSize='50px'
//container.insertBefore(newdiv,h1)
//console.log(newdiv) 



//EVENTS//

//var button=document.getElementById("button").addEventListener('click',buttonClick);
  

 //function buttonClick(e)
 //{
   

   //document.getElementById("header-title").textContent="changed";
   //document.querySelector("#main").style.display="none";
   //console.log(e.clientX)
   //console.log(e.target)
   //console.log(e.target.id)
   //console.log(e.target.className)
   //var ouput=document.getElementById("ouput");
   //ouput.innerHTML='<h3>'+e.target.id+'</h3>'
   //console.log(e.type)
   //console.log(e.offsetX)
   //console.log(e.offsetY)
   //var change=e.shiftKey;
   //if (change==true)
   //document.querySelector("#main").style.display="none"
   //else

     // document.querySelector("#main").style.display="block"
 //}
 //var button=document.getElementById("button").addEventListener('click',runEvent);
 //var button=document.getElementById("button").addEventListener('dblclick',runEvent);
 //var button=document.getElementById("button").addEventListener('mousedown',runEvent);
 //var button=document.getElementById("button").addEventListener('mouseup',runEvent);
 //var button=document.getElementById("button");
 //var box=document.getElementById("box");
 //box.addEventListener('mouseenter',runEvent);
 //box.addEventListener("mouseleave",runEvent);
 //box.addEventListener('mouseover',runEvent);
 //box.addEventListener("mouseout",runEvent);
 //box.addEventListener("mosemove",runEvent);
 var itemInput=document.querySelector('input[type="text"]');
 var form=document.querySelector("form");
 var select=document.querySelector("select");
 //itemInput.addEventListener('keydown',runEvent);
 //itemInput.addEventListener('keyup',runEvent);
 //itemInput.addEventListener('keypress',runEvent);
// itemInput.addEventListener('focus',runEvent);
//itemInput.addEventListener('blur',runEvent);
// itemInput.addEventListener('cut',runEvent);
 //itemInput.addEventListener('paste',runEvent);
 //itemInput.addEventListener('input',runEvent);
 //select.addEventListener('change',runEvent);
 //select.addEventListener('input',runEvent);
 form.addEventListener('submit',runEvent);
 function runEvent(e){
   e.preventDefault();
   //document.body.style.backgroundColor="rgb("+e.offsetX+","+e.offsetY+","+e.offsetX+",40)"
   console.log("EVENT TYPE:"+e.type)
  //e.target.value
   //document.getElementById('ouput').innerHTML='<h3>'+e.target.value+'</h3>';
   //console.log('EVENT TYPE:'+e.type)
   //document.body.style.display='none'
   


 }

