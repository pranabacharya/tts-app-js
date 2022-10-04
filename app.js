const readTextBtn = document.getElementById('read');
const textBox = document.getElementById('text-to-read');
const wordCount = document.querySelector('.fly-top-right');
readTextBtn.addEventListener('click', ()=> {
    const text = textBox.value;
    if(text === '') return;
    else{
        const message = new SpeechSynthesisUtterance();
        message.text = text;
        speechSynthesis.speak(message);
        setTimeout(()=>{
            textBox.value = ''
            wordCount.textContent = '0'
            wordCount.style.backgroundColor = 'green';
        }, 4000)
    }
});


textBox.addEventListener('input', () => {
    let counter = textBox.value.length;
    wordCount.innerText = counter;
    if(counter < 30){
        wordCount.style.backgroundColor = 'green';
    }else if(counter < 80){
        wordCount.style.backgroundColor = 'yellow';
        wordCount.style.color = 'black';
    }else {
        wordCount.style.backgroundColor = 'red';
    }
})
