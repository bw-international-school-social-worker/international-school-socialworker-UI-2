class Team {
    constructor(domElement) {
      
      this.domElement = domElement;
      
      this.expandButton = this.domElement.querySelector(".expandButton");
      
      this.expandButton.innerHTML = 'Expand';
      
      this.expandButton.addEventListener('click',  () => this.expandTeam());
    }
  
    expandTeam() {
      
      this.domElement.classList.toggle('expandButton');
      if(this.expandButton.innerHTML === 'Expand') {
        this.expandButton.innerHTML = 'Close';
      } else {
        this.expandButton.innerHTML = 'Expand';
      }
      this.domElement.classList.toggle('team-open');
      this.domElement.classList.toggle('close');
    }
  }
  
  
  let teams = document.querySelectorAll(".team");
  teams.forEach(function(team){
    return new Team (team);
  });