// function addItem(){
//     event.preventDefault();

//     const item=document.getElementById('input_user').value;
//     if(item != ""){
//         alert(`Item Added`);

//         const li=document.createElement('li');
//         li.textContent=item;

//         const rmv_btn=document.createElement('button');
//         rmv_btn.classList.add('remove-item');
//         rmv_btn.innerHTML='<i class="fa-solid fa-xmark"></i>';

//         rmv_btn.addEventListener('click',()=>{
//             li.remove();
//         })

//         li.appendChild(rmv_btn);

//         document.getElementById('items').appendChild(li);

//         document.getElementById('input_user').value="";
//     }
// }

// function clearall(){
//     event.preventDefault();
//     document.getElementById('items').innerHTML='';
// }


const items=[]

function addItem(){
    event.preventDefault();
    items.push(document.getElementById('input_user').value);

    render();

    document.getElementById('input_user').value="";
}

function render(){
    console.log(items)
}

function clearall(){
    items.splice(0)
    render()
}