class Team {
    constructor(element) {
      
      this.element = element;
      
      this.expandButton = this.element.querySelector(".expandButton");
      
      this.expandButton.innerHTML = 'Expand';
      
      this.expandButton.addEventListener('click',  () => this.expandTeam());
    }
  
    expandTeam() {
      
      this.element.classList.toggle('expandButton');
      if(this.expandButton.innerHTML === 'Expand') {
        this.expandButton.innerHTML = 'Close';
      } else {
        this.expandButton.innerHTML = 'Expand';
      }
      this.element.classList.toggle('team-open');
      this.element.classList.toggle('close');
    }
  }
  
  
  let teams = document.querySelectorAll(".team");
  teams.forEach(function(team){
    return new Team (team);
  });