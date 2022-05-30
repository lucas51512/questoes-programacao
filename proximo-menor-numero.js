a = [3, 4, 6, 9 , 10, 12, 14, 15, 17, 19, 21];

let resultado = proximoMenorNumero(a, 5);
console.log(resultado);

function proximoMenorNumero(array, numeroBuscado){
 try {
    for(i = 0; i < array.length; i++){
        j = 0;
    
        while(j < array.length){
            if(array[j] == numeroBuscado){
                console.log("O numero foi encontrado" + "\n");
                return array[j];
            }
         j++;
        }
    
        numeroBuscado--;

    }
 } catch (e) {
    console.log("O numero não foi encontrado" + "\n");

     return numeroBuscado = -1;
 }

}