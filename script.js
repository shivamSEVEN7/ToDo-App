let ul = document.querySelector('ul');
let input = document.querySelector('#task');
let addBtn = document.querySelector('#add');

let i = 0;
let list = document.querySelectorAll('ul li');
get();
addBtn.addEventListener('click', () => {
    if (input.value == "") {
        alert("Please Enter a Task First");
    }
    else {
        let li = document.createElement('li');
        let p = document.createElement('p');
        p.innerText = input.value;
        li.appendChild(p);
        let span = document.createElement('span');
        span.setAttribute('class', 'material-symbols-outlined');
        span.innerText = "close";
        li.appendChild(span);
        li.setAttribute('class', 'uncheck');
        ul.appendChild(li);
        list = document.querySelectorAll('ul li');
        input.value = '';
       
        li.onclick= function (event) {

            if (event.target == span) {
                ul.removeChild(this);
                save();
            }
            else {
                if (this.getAttribute('class') == 'uncheck') {
                    this.setAttribute('class', 'check');
        
                    save();
                }
                else {
                    this.setAttribute('class', 'uncheck');
         
                    save();
                }
            }

        }
        save();
    }
    

})
function save(){
    localStorage.setItem('uli', ul.innerHTML);
 
}
function get(){
    console.log("Callign get");
    ul.innerHTML = localStorage.getItem('uli');
    let listItem = document.querySelectorAll('ul li');
    console.log(listItem);
    for(list of listItem){
        list.onclick= function (event) {
            console.dir(event);
            if (event.target.nodeName == "SPAN") {
      
                ul.removeChild(this);
                save();
                
            }
            else {
                if (this.getAttribute('class') == 'uncheck') {
                    this.setAttribute('class', 'check');
              
                    save();
                    
                }
                else {
                    this.setAttribute('class', 'uncheck');
                    
                    save();
                    
                }
            }

        }
    }

}