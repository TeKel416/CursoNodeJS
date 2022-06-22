function soma(x, callback){
    // Simulando requisição no banco de dados
    return setTimeout(()=>{
        // Erro, Dados de resposta
        return callback(null, x + 5000);
    }, 3000);
}

// Callback function
function resolveSoma(err, resultado){
    if (err) throw err;
    console.log(resultado);
}

soma(200, resolveSoma);