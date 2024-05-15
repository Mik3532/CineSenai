$(document).ready(function() {
    // Função para preencher dinamicamente as poltronas com base no filme selecionado
    function preencherPoltronasDisponiveis(filmeSelecionado) {
        // Limpa as poltronas existentes
        $('.cinema-seats').empty();
        
        // Aqui você pode implementar a lógica para buscar as poltronas disponíveis para o filme selecionado
        // Por enquanto, vamos apenas adicionar algumas poltronas como exemplo
        var cinemaSeats = $('.cinema-seats');
        for (var i = 0; i < 50; i++) {
            cinemaSeats.append('<div class="seat"></div>');
        }
    }

    // Evento de mudança do filme selecionado
    $('#filme-select').change(function() {
        var selectedMovie = $(this).val();
        preencherPoltronasDisponiveis(selectedMovie);
    });

    // Evento de clique para cada poltrona
    $(document).on('click', '.seat', function() {
        $(this).toggleClass('reserved');
    });

    // Evento de clique para o botão de confirmar
    $('#btn1').on('click', function() {
        var selectedSeats = $('.seat.reserved').length;
        if (selectedSeats > 0) {
            // Exibir modal para pagamento
            $('#modal').show();
            $('#modal-content').text('Você reservou ' + selectedSeats + ' poltrona(s). Efetue o pagamento.');
        } else {
            alert('Você não selecionou nenhuma poltrona.');
        }
    });

    // Evento de clique para fechar o modal
    $('.close, #modal').on('click', function() {
        $('#modal').hide();
    });

    // Impedir que o clique dentro do modal o feche
    $('.modal-content').on('click', function(event) {
        event.stopPropagation();
    });

    // Inicialmente, preencher as poltronas para o primeiro filme selecionado
    var initialMovie = $('#filme-select').val();
    preencherPoltronasDisponiveis(initialMovie);
});

$(document).ready(function() {
    // Evento de clique para o botão de pagamento no modal
    $('#pagamento-btn').on('click', function() {
        window.location.href = '../pages/pagamento.html'; // Redirecionar para a página de pagamento
    });

    // Restante do seu código...
});




