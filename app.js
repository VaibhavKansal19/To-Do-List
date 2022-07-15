function addItem(){
    let event = document.getElementById('event');
    let list = document.getElementById("list");

    if(event.value!=""){
        let task=document.createElement('div');
        let p=document.createElement('p');
        let edit=document.createElement('button');
        let del=document.createElement('button');

        p.innerText=event.value;
        event.value="";
        edit.innerHTML="Edit";
        del.innerText="Delete";
        task.id="task";
        del.id="del";
        task.appendChild(p);
        task.appendChild(edit);
        task.appendChild(del);
        list.appendChild(task);

        del.addEventListener('click',function(){
            list.removeChild(this.parentElement);
        });

        edit.addEventListener('click',function(){
            let x=prompt('Edit the event');
            p.innerHTML=x;
        });
    }
    else {
        alert("Enter some text....");
    }
}