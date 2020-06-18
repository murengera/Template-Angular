var form=document.getElementById('addform');
var itemList=document.getElementById('items');
var filter=document.getElementById('filter');
form.addEventListener('submit',addItem);
//delete item//
itemList.addEventListener('click',removeItem);
//add item//
//filter event//
filter.addEventListener('keyup',filterItems);
function addItem(e){

    e.preventDefault();
    //GET INPUT VALUE//
    var newItem=document.getElementById('item').value;
    if (newItem=="")
       alert("empty field")
    else
        //create new li element
        var li=document.createElement('li');
        //add class//
        li.className='list-group-item';
      //add textnode  with input value//
      li.appendChild(document.createTextNode(newItem));
      //create delete button element//
      var deletes=document.createElement('button')
      //add class on delete button//
      deletes.className='btn btn-danger btn-sm float-right delete';
      //append text node//
      deletes.appendChild(document.createTextNode('X'));
      li.appendChild(deletes)
      itemList.appendChild(li);

}
function removeItem(e){
   if (e.target.classList.contains('delete')){
       if(confirm('Are you Sure?')){
           var li=e.target.parentElement
           
           itemList.removeChild(li);
       }
   }
}
//filter items
 function  filterItems(e){
     //convert to lower case//
     var text=e.target.value.toLowerCase();

     //get list
     var items=itemList.getElementsByTagName('li');
     //convert to array//
     Array.from(items).forEach(function(item){
         var itemName=item.firstChild.textContent;
         if(itemName.toLowerCase().indexOf(text)!=-1)
         {
             item.style.display='block';
         }
         else
         {
             item.style.display='none';
         }

     

     });

}