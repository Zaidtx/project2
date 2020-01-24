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
    $.post('/api/newContact', newContact)
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

// when user clicks on Send Transaction button 
$('#send-transaction').on('click', (e) =>{
    e.preventDefault();

    // new transaction object
    let newTransaction = {
        name: $('#send-to').val().trim(),
        date: $('#date').val().trim(),
        amount: $('#amount').val().trim()
    };

    $.post('/api/newTransaction', newTransaction)
    .then((data) => {
        console.log(data);
        alert('transaction sent successfully!');
    });


    $('#modal').hide();
    $('#send-to').val('');
    $('#date').val('');
    $('#amount').val('');
    // after sending transaction I need to close the modal? 
    // need to take out amount from total balance and live update it
});
