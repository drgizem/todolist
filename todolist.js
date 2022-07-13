let myList=document.getElementsByTagName("li")
let i;
for(i=0;i<myList.length;i++){
  let checkbox=document.createElement("input")
  checkbox.type="checkbox"
  checkbox.className="checkbox"
  myList.appendChild(checkbox)
  let span=document.createElement("span")
  span.innerHTML="X"
  span.className="close"
  myList.appendChild(span)

}
let close=document.getElementsByClassName("close")
for(i=0;i<close.length;i++){
  close[i].onclick=function(){
    let div=this.parentElement
    div.style.display="none"
  }
}
let check=document.getElementsByClassName("checkbox")
for(i=0;i<check.length;i++){
  check[i].onclick=function(){
    let div=this.parentElement
    div.style.textDecoration="line-through"
  }
}
function CreateNewTask(){
  let li=document.createElement("li")
  let inputvalue=document.getElementById("input").value
  let text=document.createTextNode(inputvalue)
  li.appendChild(text)
  if (inputvalue===""){ alert("Please write any task")}
  else {
    document.getElementById("mytasks").appendChild(li)
  }
  let checkbox=document.createElement("input")
  checkbox.type="checkbox"
  checkbox.className="checkbox"
  li.appendChild(checkbox)
  let span=document.createElement("span")
  span.innerHTML="X"
  span.className="close"
  li.appendChild(span)
  
  for(i=0;i<close.length;i++){
    close[i].onclick=function(){
      let div=this.parentElement
      div.style.display="none"
    }
  }
  for(i=0;i<check.length;i++){
    check[i].onclick=function(){
      let div=this.parentElement
      div.style.textDecoration="line-through"
    }
  }
}
