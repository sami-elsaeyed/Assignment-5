colcount=0;
function cell(){
        let single =document.createElement("td")
        single.addEventListener("mousedown",function(event){single.style.backgroundColor=document.getElementById("colors").value})
        return single
}
document.getElementsByTagName("button")[0].addEventListener("click",function(event){
    if(colcount===0){
        let row=document.createElement("tr");
        row.classList.add("row");
        row.appendChild(cell());
        document.getElementById("space").appendChild(row); 
        colcount++;   
    }
    else {
        let row=document.createElement("tr");
        row.classList.add("row");
        for(let i=0;i<colcount;i++){
            row.appendChild(cell());
        }
        document.getElementById("space").appendChild(row);
    }
})
document.getElementsByTagName("button")[1].addEventListener("click",function(event){
    let rows= document.getElementsByClassName("row")
    for(let i=0;i<rows.length;i++){
        rows[i].appendChild(cell());
    }
    colcount++
})
document.getElementsByTagName("button")[2].addEventListener("click",function(event){
    let lastr = document.getElementsByTagName("tr");
    lastr[lastr.length-1].parentNode.removeChild(lastr[lastr.length-1]);

})
document.getElementsByTagName("button")[3].addEventListener("click",function(event){
    let rows= document.getElementsByClassName("row")
    for(let i=0;i<rows.length;i++){
        rows[i].removeChild(rows[i].lastChild);
    }
    colcount--;
})
document.getElementsByTagName("button")[4].addEventListener("click",function(event){
    let cells =document.getElementsByTagName("tr");
    for (let i of cells){
        i.style.backgroundColor=document.getElementById("colors").value;
    }
})