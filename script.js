const links = document.querySelectorAll('a');
const  h1 =  document.querySelectorAll('h1');
const paragraph = document.querySelectorAll('p');
const navbar =  document.querySelector('nav');
const h2 = document.querySelectorAll('h2');
var image = document.querySelector('img');
const footer = document.querySelector('.footer');
const themeButton = document.getElementById('themeMode');
const Body = document.querySelector('body')
const fLinks = document.querySelectorAll('.footer a')
const fp = document.querySelectorAll('.footer p')
const fh3 = document.querySelectorAll('.footer h3')
const icons = document.querySelectorAll('#contact i')
const message = document.querySelector('#message')
const user = document.querySelector('#user');


let myElements = [];
myElements.push(links,h1, paragraph, navbar, h2, image , footer,message,user);
console.log(myElements);


function mode(){
  for(let link of links){
   if(themeButton.innerText==='Dark Mode'){
    link.style.color = 'black';
   }else{
    link.style.color = 'white';
   }
  }
  for(let p of paragraph){
    if(themeButton.innerText==='Dark Mode'){
        p.style.color = 'white';
       }else{
        p.style.color = 'black';
       }
  }
  for(let ho of h1){
    if(themeButton.innerText==='Dark Mode'){
        ho.style.color = 'white';
       }else{
        ho.style.color = 'black';
       }
  }
for(let he of h2){
    if(themeButton.innerText==='Dark Mode'){
        he.style.color = 'white';
       }else{
        he.style.color = 'black';
       }
}  //----------------------------footer
for(let link of fLinks){
    if(themeButton.innerText==='Dark Mode'){
     link.style.color = 'black';
    }else{
     link.style.color = 'white';
    }
   }
   for(let link of fp){
    if(themeButton.innerText==='Dark Mode'){
     link.style.color = 'black';
    }else{
     link.style.color = 'white';
    }
   }
   for(let link of fh3){
    if(themeButton.innerText==='Dark Mode'){
     link.style.color = 'black';
    }else{
     link.style.color = 'white';
    }
   }
   for(let link of icons){
    if(themeButton.innerText==='Dark Mode'){
     link.style.color = 'black';
    }else{
     link.style.color = 'white';
    }
   }
    image.classList.toggle('white-shadow');      

  if(  themeButton.innerText === 'Dark Mode'){
    themeButton.innerText = 'Light Mode';
    themeButton.classList.add('btn-dark')
    themeButton.classList.remove('btn-light');
    navbar.style.backgroundColor = "white";
    footer.style.backgroundColor = "white";
    Body.style.backgroundColor = '#333';
  }else{
    themeButton.innerText = 'Dark Mode';
    themeButton.classList.add('btn-light')
    themeButton.classList.remove('btn-dark');
    navbar.style.backgroundColor = "#333";
    navbar.style.backgroundColor = "#333";
    navbar.style.backgroundColor = "#333";
    footer.style.backgroundColor = "#191919";
    Body.style.backgroundColor = 'white';

  }
    
}
function sumbit(){
  const user = document.querySelector('#user');
  const message = document.querySelector('#message');
  message.innerHTML = "Made by "+ user.value;
}
themeButton.addEventListener('click',mode);


// for(let h4 of fh3){
//   if(nuttonsum.innerText==='Dark Mode'){
//       h4.style.color = 'black';
//      }else{
//       h4.style.color = 'white';
//      }
//     }
