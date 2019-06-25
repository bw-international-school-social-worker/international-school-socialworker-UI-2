class Carousel {
    constructor(element){
        this.element = element;
        this.leftBtn = document.querySelector('.left-button');
        this.rightBtn = document.querySelector('.right-button');
        this.index = 0;
        this.image = element.querySelectorAll('img')[this.index];
        this.image.style.display = "block";
        this.images = element.querySelectorAll("img");
        this.rightBtn.addEventListener('click', () => {
            this.clickRight();
        });
        this.leftBtn.addEventListener('click', () => {
            this.clickLeft();
        });
    }
    summonImages(){
        this.images.forEach(item => {
            item.style.display = "none";
        });
    }
    displayImages(){
        this.images[this.index].style.display = "block";
    }
    clickRight(){
        if (this.index < Array.from(this.images).length - 1){
            this.index++;
            this.summonImages();
            this.displayImages();
        }
    }
  
    clickLeft(){
        if (this.index > 0){
            this.index--;
            this.summonImages();
            this.displayImages();
        }
    }
}

let carousel = document.querySelectorAll(".carousel");
carousel.forEach(element => new Carousel(element));