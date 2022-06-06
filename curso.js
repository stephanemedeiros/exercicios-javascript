var nome = prompt ('digite o seu nome')

console.log(nome)

document.write('<p>Olá ' + nome + ', tudo bem? </p>')
 
var media, n1, n2, n3 ;

n1= prompt ("Informe sua n1: ") ;
n1= eval (n1) ;

n2= prompt ("Informe sua n2: ") ;
n2= eval (n2) ; 

n3= prompt ("Informe sua n3: ") ; 
n3= eval (n3) ;

media = (n1 + n2 + n3)/3 ; 

if ( media >= 6 ) {
    document.write ("Você está Aprovado");
    
    } else {
    
    document.write ("Recuperação");
    }
    
    