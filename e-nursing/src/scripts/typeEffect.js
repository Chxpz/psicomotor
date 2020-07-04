const TypeWriter = function(txtElement, words, wait = 600){
    this.txtElement = txtElement;
    this.words = words;
    this.txt = '';
    this.wordIndex = 0;
    this.wait = parseInt(wait, 10);
    this.type();
    this.isDeleting = false;
}

//type Method
TypeWriter.prototype.type = function(){
    //Current index of word
    const current = this.wordIndex % this.words.length;
    // Get full text of current word
    const fullTxt = this.words[current];

    //check if deleting
    if(this.isDeleting) {
        //remove char
        this.txt = fullTxt.substring(0, this.txt.length - 1);
    }else{
        //add char
        this.txt = fullTxt.substring(0, this.txt.length + 1);
    }

    //insert txt into element
    this.txtElement.innerHTML = `<span class="txt">${this.txt}</span>`;
    
    //initial type speed
    let typeSpeed = 150;

    if(this.isDeleting){
        typeSpeed /= 5000;
    }

    //if word is complete
    if(!this.isDeleting && this.txt === fullTxt) {
        //make a pause at end
        typeSpeed = this.wait;
        //set delete to true
        this.isDeleting = false;
    } else if(this.isDeleting && this.txt === '') {
        this.isDeleting = true;
        //Move to the next word
        this.wordIndex++;
        // Pause before start typing
        typeSpeed = 100;
    }


    setTimeout(() => this.type(), typeSpeed)
}
// Init On DOM Load
document.addEventListener('DOMContentLoaded', init);

//init 
function init(){
    const txtElement = document.querySelector('.txt-type');
    const words = JSON.parse(txtElement.getAttribute('data-words'));
    const wait = txtElement.getAttribute('data-wait');
    //Init TypeWriter
    new TypeWriter(txtElement, words, wait);
}