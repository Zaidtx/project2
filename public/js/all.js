// handles how the page will display the characters
// server >> database >> display on page 

    $.get('/api', function (data) {
        for (let i = 0; i < data.length; i++) {
            $('#contact-table').append(
                '<tr><td>' + data[i].name + '</td>' +
                '<td>' + data[i].phoneNumber + '</td>' +
                '<td>' + data[i].email + '</td></tr>'
            );
        }
    });
