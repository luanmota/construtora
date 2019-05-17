var nav = document.querySelector("#nav");
var btn = document.querySelectorAll(".faleC");
var link = document.querySelectorAll(".nav-item");
var modal = document.querySelector("#modal");
var closeModal = document.querySelector("#closeBtn");
var sendBtn = document.querySelector("#send");

window.addEventListener('scroll', function(){
    var nav = document.getElementById('nav');
    if(document.documentElement.scrollTop || document.body.scrollTop > window.innerHeight) {
            nav.classList.add('navColor');
        }else{
            nav.classList.remove('navColor');
            nav.style.transition="background 500ms"
        }
});

for(var i=0;i<btn.length;i++){
    btn[i].addEventListener("mouseover",function(){
        this.style.background = "rgb(94, 50, 50)";
        this.style.color="white";
    });
    btn[i].addEventListener("mouseout",function(){
        this.style.background = "none";
        this.style.color="black";
    });
    btn[i].addEventListener("click",function(){
        modal.style.display = "block";
        nav.style.display = "none";
    });

}

for(var i=0;i<link.length;i++){
    link[i].addEventListener("click",function(){
        var content = this.innerText;
        if(content=="Serviços"){
            document.querySelector("#servicos").scrollIntoView({behavior: "smooth", block: "center"});
        }
        if(content=="Time"){
            document.querySelector("#time").scrollIntoView({behavior: "smooth", block: "center"});
        }
        if(content=="Contato"){
            document.querySelector("#contato").scrollIntoView({behavior: "smooth", block: "center"});
        }
    });
}

closeModal.addEventListener("click",function(){
    modal.style.display = "none";
    nav.style.display = "block";
});

sendBtn.addEventListener("mouseover",function(){
    this.style.background = "rgb(94, 50, 50)";
    this.style.color="white";
});
sendBtn.addEventListener("mouseout",function(){
    this.style.background = "white";
    this.style.color="rgb(94, 50, 50)";
});