class Home{
  constructor(){

    this.title = createElement('h2')
    this.button = createButton('START')

  }

  hide(){
this.title.hide()
this.button.hide()

  }

  display(){
      this.title.html("CAR MONTO 3")
      this.title.position(170,20,50,50)
      this.button.position(380,420,100,100)
      
      this.button.mousePressed(()=>{
        gameState=1;
      this.button.hide();
      })
  }



  

}