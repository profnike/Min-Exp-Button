let butn=document.querySelectorAll("button")
let choices= document.querySelector("#choices");
let choicesa= document.querySelector("#choicesa");
let choicesb= document.querySelector("#choicesb");





let names;
for (let val of butn){
    names= val.getAttribute("id")
   
   

switch (names) {
case "like":
    val.addEventListener("click", ()=>{
        let questA= choices.style.display;
          
          switch(questA){
              case "":
                choices.style.display= "block";
                choices.style.color="blue";
                break;
                case "block":
                    choices.style.display= "";
      choices.style.color="blue";
      break;
      default:
        choices.style.display= "";
          }
      
    })
    break;
      case "define":
        val.addEventListener("click", ()=>{
            
        
        let questB=choicesa.style.display

        switch(questB){
            case "":
                choicesa.style.display= "block";
            break;
            case "block":
                choicesa.style.display= "";
            break;
            default:
                choicesa.style.display= "";
            
        }
      
      })
      break;
      case "build":
        val.addEventListener("click", ()=>{
            
        
        let questC=choicesb.style.display

        switch(questC){
            case "":
                choicesb.style.display= "block";
                choicesb.style.color="brown"
            break;
            case "block":
                choicesb.style.display= "";
                default:
                    choicesb.style.display= "";

           
        }
      
      })
      break;
      default:
        val.addEventListener("click", ()=>{
            
        choicesa.style.display= "";
        
      
      })



}
}
