function buscar(){

    //Função que carrega as informações do JSON

    fetch('https://raw.githubusercontent.com/pedroholiveira154/minhaAPI/refs/heads/main/dados.json').then(resposta => resposta.json()).then(banco =>{

        console.log(banco)
        var identificador = document.getElementById('valorDigitado').value;
        var encontrado = false;



        banco.forEach(pessoa => {

            if( identificador == pessoa.cpf){

                //JQUERY 

                var linkSite = `<a href="${pessoa.link}">Visite meu currículo!</a>`;
                document.getElementById('imagem').innerHTML = pessoa.imagem;
                document.getElementById('nome').innerHTML = pessoa.nome;
                document.getElementById('sobrenome').innerHTML = pessoa.sobrenome;
                document.getElementById('cidade').innerHTML = pessoa.cidade;
                document.getElementById('cargo').innerHTML = pessoa.cargo;
                document.getElementById('salario').innerHTML = pessoa.salario;
                document.getElementById('link').innerHTML = linkSite;
                document.getElementById('erro').innerHTML = "";
                encontrado = true;

            }


        })
        if(!encontrado) {

            document.getElementById('erro').innerHTML = "CPF não encontrado!";

        }
    })

}
