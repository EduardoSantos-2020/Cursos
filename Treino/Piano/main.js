// Pegue todas keys ->> get all keys
const keys = document.querySelectorAll('.key')

// tocar as notas ->> play notes
function playNote(event){

   let audioKeycode=getKeyCode(event);

   //Qual tecla foi Precionada ->> type key code

    const key=document.querySelector(`.key[data-key="${audioKeycode}"]`);

    //if(A tecla existe ->> key exists)

    const cantFoundAndKey =!key

    if (cantFoundAndKey) {
       return;
    }
    playAudio(audioKeycode)
    addPlayingClass(key)
} 

function playAudio(audioKeycode){
    const audio = document.querySelector(`audio[data-key="${audioKeycode}"]`);

    audio.currentTime = 0

    audio.play()

        }
function addPlayingClass(key){

            key.classList.add('playing')
        }

    //Cada cod.tecla ->> key code
 function getKeyCode(event){

        let keyCode;

        const isKeyboard= event.type === "keydown";

         if(isKeyboard){
            keyCode = event.keyCode;

            }else{
                keyCode = event.target.dataset.key;
            }

    return keyCode
    }

    function removePlayingClass(event) {
        event.target.classList.remove('playing')
    }

    // Clicar com Mouse ->> click with mouse
keys.forEach(function(key) {
    key.addEventListener('click',playNote)
    key.addEventListener('transitionend',removePlayingClass)
})

    //Indentificar Notas ->> keyboard type
window.addEventListener('keydown',playNote)