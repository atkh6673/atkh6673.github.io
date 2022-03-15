var memory = [];
var pointer = 0;
var clipboard = 0;

var main = document.querySelector('#main');

document.addEventListener('keydown', (e) => {
    process(e);
});

function process(e) {
    var div = document.createElement('div');
    div.classList.add('code');
    div.innerText = `>> ${e.key}`;
    switch(e.key) {
        case 'Delete':
            memory = [];
            pointer = 0;
            clipboard = 0;
            main.innerHTML = '';
            break;
        case 'Backspace':
            main.innerHTML = '';
            break;
        case 'ArrowRight':
            pointer += 1;
            if (memory[pointer] == undefined) {
                memory[pointer] = 0;
            }
            div.innerText += `\n${pointer}: ${memory[pointer]}`;
            break;
        case 'ArrowLeft':
            if (!pointer == 0) {
                pointer -= 1;
            }
            div.innerText += `\n${pointer}: ${memory[pointer]}`;
            break;
        case 'ArrowUp':
            if (memory[pointer] == undefined) {
                memory[pointer] = 1;
            } else {
                memory[pointer] += 1;
            }
            div.innerText += `\n${pointer}: ${memory[pointer]}`;
            break;
        case 'ArrowDown':
            if (memory[pointer] == undefined) {
                memory[pointer] = -1;
            } else {
                memory[pointer] -= 1;
            }
            div.innerText += `\n${pointer}: ${memory[pointer]}`;
            break;
        case 'Enter':
            var text = String.fromCharCode(memory[pointer]);
            div.innerText += `\n${text}`;
            break;
        case '0':
            memory[pointer] = 0;
            div.innerText += `\n${pointer}: ${memory[pointer]}`;
            break;
        case 'c':
            clipboard = memory[pointer];
            div.innerText += `\nClipboard: ${clipboard}`;
            break;
        case 'v':
            memory[pointer] += clipboard;
            div.innerText += `\n${pointer}: ${memory[pointer]}`;
            break;
        default:
            div.innerText = '';
            break;
    }
    main.appendChild(div);
    window.scrollTo(0, 100000);
      
}
