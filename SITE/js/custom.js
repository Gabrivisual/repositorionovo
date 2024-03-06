document.querySelector('#menu-btn').addEventListener('click',function(){
       
    document.querySelector("#menu-site").classList.toggle("active");
    document.querySelector('#menu-icon').classList.toggle("active");
    
});
var projetoscontent = document.querySelectorAll('.bloco');
projetoscontent.forEach(function(div) {
    div.addEventListener('click', function() {
    var link = div.getAttribute('data-link');
      window.location.href = link;
    });
  });
  function leveparasite(){
    var link = "https://warmdescontos.com"
    window.open(link,'_blank')
  }
  function leveparasite2(){
    var link = "https://www.amazon.com.br/Seja-Homem-Verdade-Definitivos-Disputado-ebook/dp/B0CSKV6Y2W"
    window.open(link,'_blank')
  }
 

window.sr = ScrollReveal({reset: true});
sr.reveal('.Services',{duration:1000});
sr.reveal('.visual',{duration:1000});
sr.reveal('.imagem',{duration:1000});
sr.reveal('.projetos',{duration:1000});

