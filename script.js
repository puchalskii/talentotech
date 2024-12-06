document.getElementById('iniciar').addEventListener('click', function() {
    document.getElementById('tela-inicial').style.display = 'none';
    document.getElementById('jogo').style.display = 'block';
    iniciarJogo();
});

function iniciarJogo() {
    let pontos = 0;
    let tempo = 30;
    let perguntaAtual = 0;
    let perguntas = [
        {
            pergunta: 'Qual é a capital da França?',
            respostas: ['Paris', 'Londres', 'Berlim', 'Madrid'],
            correta: 'Paris'
        },
        {
            pergunta: 'Quem pintou a Mona Lisa?',
            respostas: ['Picasso', 'Van Gogh', 'Da Vinci', 'Rembrandt'],
            correta: 'Da Vinci'
        }
    ];

    // Atualiza a pontuação e o tempo
    document.getElementById('pontuacao').textContent = 'Pontos: ' + pontos;
    document.getElementById('tempo').textContent = 'Tempo restante: ' + tempo;

    // Timer do jogo
    let temporizador = setInterval(function() {
        tempo--;
        document.getElementById('tempo').textContent = 'Tempo restante: ' + tempo;
        if (tempo <= 0) {
            clearInterval(temporizador);
            alert('Fim do jogo! Sua pontuação: ' + pontos);
            location.reload(); // Recarregar a página após o fim do jogo
        }
    }, 1000);

    // Função para exibir pergunta
    function exibirPergunta() {
        let perguntaObj = perguntas[perguntaAtual];
        document.getElementById('pergunta').textContent = perguntaObj.pergunta;

        let opcoes = document.querySelectorAll('.resposta');
        opcoes.forEach(function(botao, index) {
            botao.textContent = perguntaObj.respostas[index];
            botao.onclick = function() {
                if (botao.textContent === perguntaObj.correta) {
                    pontos++;
                    document.getElementById('pontuacao').textContent = 'Pontos: ' + pontos;
                    alert('Resposta correta!');
                } else {
                    alert('Resposta incorreta!');
                }
                perguntaAtual++;
                if (perguntaAtual < perguntas.length) {
                    exibirPergunta(); // Exibir próxima pergunta
                } else {
                    clearInterval(temporizador);
                    alert('Fim do jogo! Sua pontuação final é: ' + pontos);
                }
            };
        });
    }

    exibirPergunta(); // Chama a primeira pergunta
}