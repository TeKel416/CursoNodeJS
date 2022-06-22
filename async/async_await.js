function sum(x){
    // Simulando requisição no banco de dados
    return new Promise((resolve, reject)=>{
        if(Number(x) == NaN || Number(x) == undefined || typeof x != 'number'){
            reject('Parâmetro passado não é um número');
        }

        setTimeout(()=>{
            resolve(x + 5000);
        }, 3000);

    });
}

async function main(){
    try {
        // Toda vez que uma função retorna uma Promise, é usado o await
        const resultado = await sum(543);
        console.log(`Resultado: ${resultado}`);

    } catch (error) {
        console.log(`Erro: ${error}`);
    }
}

main();