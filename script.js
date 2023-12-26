let ul = document.querySelector('ul');
let input = document.querySelector('#task');
let addBtn = document.querySelector('#add');
let lists = [];
let para = [];
let tick = [];
let del = [];
let taskDone = [];
let i = 0;
let list = document.querySelectorAll('ul li');
addBtn.addEventListener('click', () => {

    if (input.value == "") {
        alert("Please Enter a task first");
    }
    else {
        let li = document.createElement('li');
        let p = document.createElement('p');
        let span = document.createElement('span');
        span.setAttribute('class', "material-symbols-outlined");
        span.innerText = "close";
        del[i] = span;
        p.innerText = input.value;
        para[i] = p;
        let img = document.createElement('img');
        tick[i] = img;
        img.setAttribute('src', "images/unchecked.png");
        li.insertAdjacentElement("afterbegin", img);
        li.appendChild(p);
        li.insertAdjacentElement("beforeend", span);

        ul.appendChild(li);
        list = document.querySelectorAll('ul li');
        lists[i] = li;
        taskDone[i] = false;
        i++;
        input.value = "";
        for (lis of lists) {
            
            if(lis.onclick==null){
            lis.onclick = function (event) {
                let n = lists.indexOf(this);
            if(taskDone[n]==true){
                if(event.target!=span){
                
                    para[n].innerHTML = para[n].innerText ;
                    tick[n].setAttribute('src', "images/unchecked.png");
                    taskDone[n] = false;
                    }
            }    
            else{
                if(event.target!=span){
                
                    para[n].innerHTML = "<s>" + para[n].innerText + "</s";
                    tick[n].setAttribute('src', "images/checked.png");
                    taskDone[n] = true;
                    }
            }
            };
        }
        }
        for (d of del) {
            if(d.onclick == null){
            d.onclick=function () {
                
                let n = del.indexOf(this);
                ul.removeChild(lists[n]);
                i = i-1;
                lists.splice(n,1);
                del.splice(n,1);
                tick.splice(n,1);
                para.splice(n,1);
            };
        }
        }
    }
    
})
