export function goToPage (id, page){
   document.getElementById(id).addEventListener("click", function(){
      window.location.href = page
    });
}


export function show (num,url){
    
   let req = new XMLHttpRequest()
   req.open('GET', url)
   req.send()
   req.onreadystatechange = function() {
      if (req.readyState === 4) {
         let array = JSON.parse(req.responseText)
         showSlides();
         function showSlides() {

            if (num < array.length){
               let slide = document.getElementById("slide")
               let img = document.createElement("img")
               let div = document.createElement("div")
               
               div.className = "mySlides fade"
               slide.append(div)
               div.append(img)
            
               let slides = document.getElementsByClassName("mySlides");
               
                  for (let i = 0; i < slides.length; i++) {
                     img.src = array[i]
                     slides[i].style.display = "none";  
                     
                  }
               num++;
            
               slides[num-1].style.display = "block"; 
               setTimeout(showSlides, 4500); 
            } 
         }
      
      }
   }
}


