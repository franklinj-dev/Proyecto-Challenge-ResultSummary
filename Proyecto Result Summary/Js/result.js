let resultadoForm = document.getElementById('resultform');
let valorMedia = document.getElementById('finalresult');
let resultTittle = document.getElementById('final-result-tittle');
let paragraphResult = document.getElementById('paragraph-result');
let mediaContainer = document.querySelector('.general-result-container');
let mediaCircle = document.querySelector('.result');


function calculo(event){
    let reactionValue = +document.getElementById('reactionvalue').value;
    let memoryValue = +document.getElementById('memoryvalue').value;
    let visualValue = +document.getElementById('visualvalue').value;
    let verbalValue = +document.getElementById('verbalvalue').value;    
   
    let media = Math.round((reactionValue + memoryValue + visualValue + verbalValue)/4);
    if(media < 45){
       
        valorMedia.innerHTML = media;
        resultTittle.innerHTML = 'Danger!';
        paragraphResult.innerHTML = 'You scored less than 45% of the people who have take these tests, Please be aware';
        mediaContainer.classList.remove('general-result-container');
        mediaContainer.classList.remove('general-result-container-caution');
        mediaContainer.classList.add('general-result-container-danger');
        mediaCircle.classList.remove('result');
        mediaCircle.classList.remove('result-caution');
        mediaCircle.classList.add('result-danger');
  
    }else if(media >= 45 && media <= 65){

        valorMedia.innerHTML = media;
        resultTittle.innerHTML = 'Good!';
        paragraphResult.innerHTML = 'You scored more than 45% of the people who have take these tests!';
        mediaContainer.classList.remove('general-result-container');
        mediaContainer.classList.remove('general-result-container-danger');
        mediaContainer.classList.add('general-result-container-caution');
        mediaCircle.classList.remove('result');
        mediaCircle.classList.remove('result-danger');
        mediaCircle.classList.add('result-caution');
        
    
    }else if(media >= 65){
      
        valorMedia.innerHTML = media;
        resultTittle.innerHTML = 'Great!';
        paragraphResult.innerHTML = 'You scored higher than 65% of the people who have taken these tests.';
        mediaContainer.classList.remove('general-result-container-caution');
        mediaContainer.classList.remove('general-result-container-danger');
        mediaContainer.classList.add('general-result-container');
        mediaCircle.classList.remove('result-caution');
        mediaCircle.classList.remove('result-danger');
        mediaCircle.classList.add('result');

    }

    console.log(media);
    event.preventDefault();
}

window.addEventListener("load",resultadoForm.addEventListener("submit",calculo));
