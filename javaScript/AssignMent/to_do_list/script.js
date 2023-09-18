let btn = document.querySelector('#btn');
let list = document.getElementById('list');
let spaceHolder = document.querySelector('#spaceHolder');

btn.addEventListener('click' , ()=>{
  let inputBx = document.querySelector('#inputBx').value;
  console.log(inputBx);
    let listItem = document.createElement('li');
    listItem.innerHTML = `${inputBx}<i></i>`

    
    listItem.addEventListener('click' , function(){
      this.classList.toggle('done');
    })
    listItem.querySelector('i').addEventListener('click' , function(){
      listItem.remove()
    })



    list.appendChild(listItem);

   


    // let createBtn = document.createElement('button');
    // createBtn.innerHTML = `<span id="deleteBtn" class="material-symbols-outlined">
    // delete
    // </span>`
    
    // spaceHolder.appendChild(createBtn)
})




