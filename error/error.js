function execute(){
    executeToo();
};

function executeToo(){
    throw new Error('Ops, deu erro! :S Na minha máquina funciona');
};

function init(){
    try {
        execute();
    } catch (error) {
        console.log(`Houston, temos um problema! ${error}`);
        //console.log(error.message);
    }
}

init();
console.log('*depois do erro*');