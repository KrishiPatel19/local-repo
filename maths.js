
document.getElementById("ScUpdate").addEventListener('click', function(event){
    event.preventDefault();
    var para = document.getElementById("score");
    let sc = 0;
    var ans1 = document.getElementById("a1");
    var ans2 = document.getElementById("b2");
    var ans3 = document.getElementById("d3");
    var ans4 = document.getElementById("c4");
    var ans5 = document.getElementById("a5");

    if (ans1.checked){
        sc++;
        para.textContent = sc;
    }
    if (ans2.checked){
        sc++;
        para.textContent = sc;
    }
    if (ans3.checked){
        sc++;
        para.textContent = sc;
    }
    if (ans4.checked){
        sc++;
        para.textContent = sc;
    }
    if (ans5.checked){
        sc++;
        para.textContent = sc;
    }
    
})
 