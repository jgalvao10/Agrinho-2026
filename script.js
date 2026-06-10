// Função para alternar e exibir os impactos das práticas sustentáveis
function mostrarImpacto(tipo) {
    const box = document.getElementById('impacto-resultado');
    
    // Remove a classe active de todos os botões da aba
    const botoes = document.querySelectorAll('.btn-tab');
    botoes.forEach(btn => btn.classList.remove('active'));
    
    // Adiciona a classe active ao botão que foi clicado (via evento do navegador)
    event.target.classList.add('active');

    // Altera o texto baseado no botão selecionado
    switch(tipo) {
        case 'tecnologia':
            box.innerHTML = `<p><strong>Impacto:</strong> Redução de até 30% no uso de defensivos químicos e fertilizantes através do mapeamento de precisão via satélite e drones.</p>`;
            break;
        case 'agua':
            box.innerHTML = `<p><strong>Impacto:</strong> Economia de até 40% de recursos hídricos utilizando sensores de umidade no solo acoplados a sistemas de gotejamento inteligente.</p>`;
            break;
        case 'solo':
            box.innerHTML = `<p><strong>Impacto:</strong> Recuperação natural dos nutrientes do solo, quebra do ciclo de pragas e fixação biológica de nitrogênio sem a necessidade de aditivos sintéticos.</p>`;
            break;
        default:
            box.innerHTML = `<p>Selecione uma opção acima para ver os dados gerados.</p>`;
    }
}

// Manipulação do Formulário de Contato
document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault(); // Impede o recarregamento da página

    const nome = document.getElementById('nome').value;
    const msgBox = document.getElementById('formMsg');

    // Exibe mensagem de sucesso
    msgBox.style.color = "#1b382b";
    msgBox.textContent = `Obrigado por se conectar, ${nome}! Juntos cultivamos um futuro mais verde. Entraremos em contato!`;

    // Limpa os campos preenchidos
    this.reset();
});