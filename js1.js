const key = 45
let p;

switch (key) {
    case 1:
        console.log(1);
        p = document.createElement ('p')
        p.innerHTML = 'chave' + key;
        document.body.appendChild(p);
        break;

        case 2,40,50:
            console.log(2);
            p = document.createElement ('p')
        p.innerHTML = 'chave: ' + key;
        document.body.appendChild(p);
        break;
            
            case 3:
                console.log(3);
                p = document.createElement ('p')
        p.innerHTML = 'chave: '+ key;
        document.body.appendChild(p);
        break;

                default:
                    console.log(key);
                    p = document.createElement ('p')
                     p.innerHTML = 'chave: ' + key;
                     document.body.appendChild(p);
                      break;
             }

/**
 * loops
 */

nota = prompt ('insira uma nota');
 while (key >=10) { 
 p = document.createElement ('p')
p.innerHTML = 'nota: ' + (nota);
document.body.appendChild(p);
key--;
 }
 
do {
    p = document.createElement ('p')
    p.innerHTML = '1 - soma';
    document.body.appendChild(p);
    
    p = document.createElement ('p')
    p.innerHTML = '2 - subtração';
    document.body.appendChild(p);

    p = document.createElement ('p')
    p.innerHTML = '3 - multiplição';
    document.body.appendChild(p);

    p = document.createElement ('p')
    p.innerHTML = '4 - sair';
    document.body.appendChild(p);
    
    opcao = prompt ('Escolha uma opção')
    
} while(opcao != 4 );
