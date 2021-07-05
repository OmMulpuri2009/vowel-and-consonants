var input,heading;

function setup() {

  createCanvas(400,400);
  background("pink")

  input= createInput();
  input.position(5,80);

  heading=createElement("h3","Enter Any alphabet:");
  heading.position(5,30);

  textAlign(CENTER);
  textSize(50);
}

function draw(){
  const value=input.value()
  switch(value){
     case 'a':
    console.log("vowel");
    break;

    case 'e':
      console.log("vowel");
      break;

      case 'i':
        console.log("vowel");
        break;

        case 'o':
          console.log("vowel");
          break;

          case 'u':
            console.log("vowel");
            break;

            default:
            console.log('Consonant');
  }
}
