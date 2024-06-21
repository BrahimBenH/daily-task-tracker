const task=document.getElementById("task")
const time=document.getElementById("time")
const list= document.getElementById("list")
const supp= document.getElementById("supp")
const now=document.getElementById("while")
const dur=document.getElementById("oh")
const start=document.getElementById("start")
const done=document.getElementById("done")
const nicely=document.getElementById("nicely")
const submit=document.getElementById("submit")
let a=0
let c=0
let ta=""
let ti=0
let alldid=[]
let alltasks=[]
let alltimes=[]
let storagedid=JSON.parse(localStorage.getItem("alldid"))
let storagetasks=JSON.parse(localStorage.getItem("alltasks"))
let storagetimes=JSON.parse(localStorage.getItem("alltimes"))
nicely.style.display='none'
nah.style.display='none'
start.style.display='none'
if ((storagetasks!=[]) && (storagetimes!=[])){
    alltasks=storagetasks
    alltimes=storagetimes
    console.log(8)
    render()
}

if (storagedid!=[]){
    alldid=storagedid
    alldone()
}

function nomore(){
    localStorage.clear()
    alldid=[]
    alltasks=[]
    alltimes=[]
    storagetasks=[]
    storagetimes=[]
    storagedid=[]
    localStorage.setItem("alldid","")
    localStorage.setItem("alltasks","")
    localStorage.setItem("alltimes","")
    render()
    alldone()
}


function alldone(){
    let all=""
    for (i=0;i<alldid.length;i++){
        all+="<option>"+alldid[i]+"</option>"
    }
    done.innerHTML=all
    dur.textContent=""
    now.textContent="Congratulations! Your next task is waiting!"
    start.style.display="none"
    nah.style.display="none"
    nicely.style.display="none"
}

function save(){
    console.log(7)
    ta=task.value
    ti=time.value
    
    console.log(5)
    if ((ta!="") && (ti!=0)){
        task.value=""
        time.value=""
        alltasks.push(ta)
        alltimes.push(ti)
        localStorage.setItem("alltasks",JSON.stringify(alltasks))
        localStorage.setItem("alltimes",JSON.stringify(alltimes))
        render()
    }
}

function render(){
    let all="<option></option>"
    for (i=0;i<alltasks.length;i++){
        all+="<option>"+alltasks[i]+" (" +alltimes[i]+"s)</loption>"
    }
    list.innerHTML=all
    
}
function doing(b){
    a=b.selectedIndex-1
    now.textContent="Your current task is: "+alltasks[a]
    dur.textContent=alltimes[a]
    start.style.display='inline-table'
}
function finish(){
    now.textContent="You're doing great! Did you finish your task!"
    dur.textContent=0
    nicely.style.display='inline-table'
    nah.style.display='inline-table'
    
}
function nice(){
    alldid.push(alltasks[a])
    localStorage.setItem("alldid",JSON.stringify(alldid))
    alldone()
    alltasks.splice(a,1)
    alltimes.splice(a,1)
    localStorage.setItem("alldid",JSON.stringify(alldid))
    localStorage.setItem("alltasks",JSON.stringify(alltasks))
    localStorage.setItem("alltimes",JSON.stringify(alltimes))
    render()
}
function begin2(){
    c=math.floor(alltimes[a]/10)
    dur.textContent = c
    setTimeout(() => { finish(); }, c*1000);
    let interval = setInterval(() => {
        if (c > 0) {
            c = c - 1;
            dur.textContent = c;
        } else {
            clearInterval(interval); // Stop the interval when the countdown reaches 0
        }
    }, 1000); // Execute every 1000ms (1 second)
}

function begin(){
    let red=213
    let green =  235
    let blue=173
    c=alltimes[a]
    setTimeout(() => { finish(); }, alltimes[a]*1000);
    let interval = setInterval(() => {
        if (c > 0) {
            c = c - 1;
            dur.textContent = c;
           // red-=20
           // green-=20
          //  blue-=20
          //  document.body.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`
        } else {
            clearInterval(interval); // Stop the interval when the countdown reaches 0
        }
    }, 1000); // Execute every 1000ms (1 second)
}
