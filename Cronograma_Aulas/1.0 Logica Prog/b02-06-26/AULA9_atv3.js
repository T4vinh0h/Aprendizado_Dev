// verificar se valor é par
function verPar(num){
    if(num % 2 === 0) {
        return `O ${num} é par`
    }else{
        return `O ${num} é impar`
    }
}console.log(verPar(7));

// ou pode usar a seguinte forma
// const par = verPar(8)
//    if (par === true){
//     console.log(` Valor é par`);
//   }else{
//       console.log(`Valor é impar`);
//   }
