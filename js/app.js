// Introdução da API ViaCEP via JavaScript (feat/consumo-api/gabrmascarenhas)
document.getElementById('btnCEP').addEventListener('click', (e) => {
    e.preventDefault()
    const cep = document.getElementById('cep').value;
    buscarCEP(cep)
    
});

function buscarCEP(cep){
    // envia o cep informado para a API do ViaCEP;
    const link = 'https://viacep.com.br/ws/' + cep + '/json';
    // Interpolação utilizando crases e ${var} uso apenas para teste.
    const url = `https://viacep.com/ws/${cep}/json/`; 
    // requisição pra API externa (fetch) -> envia o CEP informado para a API do ViaCEP 
    fetch(link)
        .then(
            //response = resposta do banco de dados
            // se funcionar: converte a resposta da API para response json (formato de leitura) 
            response => response.json()
            //quando os dados que vem do banco de dados (sql) tem que ser lidos em json ''     '''     ''  
            
        ).then(
            //reposta = dados
            dados => {
                console.log(dados);
                //pegando o input elemento x e igualando ao dados.x - > pegando só a tag necessária para o input específico
                document.getElementById('logradouro').value = dados.logradouro;
                document.getElementById('bairro').value = dados.bairro;
                document.getElementById('localidade').value = dados.localidade;
                document.getElementById('estado').value = dados.estado;
                document.getElementById('uf').value = dados.uf;
                document.getElementById('regiao').value = dados.regiao;
                
            }
        )
        
}


