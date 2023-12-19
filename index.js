const now = new Date(); 

const year = now.getFullYear(); 
const month = String(now.getMonth() + 1).padStart(2, '0'); 
const day = String(now.getDate()).padStart(2, '0');

const formattedDate = `${day}-${month}-${year}`;
document.getElementById("demo").innerHTML = formattedDate;


       function add(){
        
        let c=document.getElementById("work");
        c.removeChild(c.firstElementChild);
       }
       function sub(){
        let box=document.createElement("div");
        let x=document.createElement("input");
        x.setAttribute("type","checkbox");
        box.appendChild(x);
        let y=document.createElement("input");
        y.setAttribute("type","text");
        y.placeholder="what to do";
          y.style.height="34px";
          y.style.width="80%";
           y.style.textAlign="center";
          y.style.fontFamily="'Dancing Script',cursive";
          y.style.borderRadius="11px";
          y.style.border="2px ridge brown";
          y.style.fontSize="1.5rem";
         box.appendChild(y);
        box.classList.add("work");
        let c=document.getElementById("work");
        c.appendChild(box);
       }
