colcount=0;
document.getElementsByTagName("button")[0].addEventListener("click",function(event){
    let cols=document.getElementsByClassName("column");
    if(colcount===0){
        let cell=document.createElement("tr");
        cell.classList.add("row");
        cell.appendChild(document.createElement("td"));
        document.getElementById("space").appendChild(cell); 
        colcount++;   
    }
    else {
        let cell=document.createElement("tr");
        cell.classList.add("row");
        for(let i=0;i<colcount;i++){
            cell.appendChild(document.createElement("td"));
        }
        document.getElementById("space").appendChild(cell);
    }
})
document.getElementsByTagName("button")[1].addEventListener("click",function(event){
    let rows= document.getElementsByClassName("row")
    for(let i=0;i<rows.length;i++){
        let col=document.createElement("td");
        rows[i].appendChild(col);
    }
    colcount++
})