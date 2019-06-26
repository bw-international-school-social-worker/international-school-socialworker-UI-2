class TabLink {
    constructor(tabElement){
      this.tabElement = tabElement; 
      this.tabData = tabElement.dataset.tab; 

      if(this.tabData === 'all'){
        this.cards = document.querySelectorAll('.card');
      } else {
        this.cards = document.querySelectorAll(`.card[data-tab="${this.tabData}"]`); 
      }
      this.cards = Array.from(this.cards).map(function(card){
        return new TabCard(card);
      }); 
      this.tabElement.addEventListener('click', () => this.selectTab());
    }
  
    selectTab(){
      const tabs = document.querySelectorAll('.tab');
      tabs.forEach(function(activeTab){
        if(activeTab.classList.contains('active-tab')){
          activeTab.classList.remove('active-tab'); 
        }
      }); 
      const cards = document.querySelectorAll('.card'); 
      cards.forEach(function(card) {
        card.style.display = 'none'; 
      })
      this.tabElement.classList.add('.active-tab'); 
      this.cards.forEach(card => card.selectCard()); 
    }
  }
  
  
  class TabCard {
    constructor(cardElement){
      this.cardElement = cardElement; 
    }
    selectCard(){
      this.cardElement.style.display = 'flex'; 
    }
  
  }

  let tabs = document.querySelectorAll('.tab');
  
  tabs.forEach(function(tab) {
    return new TabLink(tab); 
  })