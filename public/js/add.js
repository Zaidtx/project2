// when user clicks on Add Recipient button 
$('#add-contact').on('click', (e) => {
    e.preventDefault();

    // new contact object
    let newContact = {
        name: $('#contact-name').val().trim(),
        phoneNumber: $('#contact-phone').val().trim(),
        email: $('#contact-email').val().trim()
    };

    // send an AJAX POST request with jquery
    $.post('/api/contact', newContact)
        .then((data) => {
            console.log(data);
            alert('contact successfully added!');
        });

    // empty values 
    $('#contact-name').val('');
    $('#contact-phone').val('');
    $('#contact-email').val('');
});

// ---------------------------





// ----------------------------

// when user clicks on Pay button on Transaction tab
$('#pay-button').on('click', (e) => {
    e.preventDefault();
    let pay = 'paid'
    let contact = $('#transaction-contact').text().trim();
    let amountPaid = $('#transaction-amount').text().trim();
    let balance = $('#available-balance').text().trim();
    let newBalance = (parseInt(balance) - parseInt(amountPaid));

    // new transaction object
    let newTransaction = {
        username: $('#username').text().trim(),
        contactName: contact,
        amount: amountPaid,
        type: pay,
        message: $('#transaction-message').val().trim()
    };

    console.log(newTransaction);

    $.post('/api/Transaction', newTransaction)
        .then((data) => {
            console.log(data);
            alert('Paid ' + contact + ' successfully!');
        });


    $('#modal').hide();
    $('#send-to').val('');
    $('#transaction-amount').text('');
    $('#transaction-message').text('');
    $('#available-balance').empty();
    $('#available-balance').append(newBalance);
    $('#transaction-contact').empty();
    $('#transaction-message').text('');
    // after sending transaction I need to close the modal? 
    // need to take out amount from total balance and live update it
});


$('#request-button').on('click', (e) => {
    e.preventDefault();
    let charge = 'charged'
    let contact = $('#transaction-contact').text().trim();
    // new transaction object
    let newTransaction = {
        username: $('#username').text().trim(),
        contactName: contact,
        amount: $('#transaction-amount').text().trim(),
        type: charge,
        message: $('#transaction-message').val().trim()
    };

    $.post('/api/transaction', newTransaction)
        .then((data) => {
            console.log(data);
            alert('Request sent to ' + contact + ' successfully!');
        });

    $('#modal').hide();
    $('#send-to').val('');
    $('#transaction-amount').text('');
    $('#transaction-message').text('');
    // after sending transaction I need to close the modal? 
    // need to take out amount from total balance and live update it
});



// _____________________________________________
// passport things 
$('#register').on('click', (e) => {
    e.preventDefault();

    let newRegister = {
        name: $('#name').val().trim(),
        username: $('#username').val().trim(),
        password: $('#password').val().trim()
    };
    console.log(newRegister);

    $.post('/api/user/create', newRegister)
    // .then((data) => {
    //     console.log(data);
    //     alert('registered successfully!');
    // });
});


$('#login').on('click', (e) => {
    e.preventDefault();
    console.log('y')

    let user = {
        username: $('#username').val().trim(),
        password: $('#password').val().trim()
    };
    console.log(user)

    $.get('/api/user', user)
        .then((user) => {
            console.log(user)
            $.post('api/user', user);
        })

});