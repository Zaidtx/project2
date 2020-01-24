$('#search-contact').on('click', function () {
    let searchedContact = $('#scontact-query').val().trim();
    searchedContact = searchedContact.replace(/\s+/g, '').toLowerCase();

    $.get('/api/' + searchedContact, function(data) {
        $('#contact-table').empty();

        if (!data) {
            $('#contact-table').append('<tr><td>No Contact Found</td></tr>');
        } else {
            $('#contact-table').append(
                '<tr><td>' + data.name + '</td>' +
                '<td>' + data.phoneNumber + '</td>' +
                '<td>' + data.email + '</td></tr>'
            );
        }
    });
});

$('#search-transaction').on('click', function(){
    let searchedTransaction = $('#transaction-query').val().trim();
    searchedTransaction = searchedTransaction.replace(/\s+/g, '').toLowerCase();

    $.get('/api/' + searchedTransaction, function(data){
        $('#transactions-table').empty();
        if(!data){
            $('#transactions-table').append(
                '<tr><td>' + data.sendTo + '</td>' +
                '<td>' + data.amount + '</td>' +
                '<td>' + data.date + '</td></tr>'
            );
        }
    });
});