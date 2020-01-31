// handles how the page will display the characters
// server >> database >> display on page 

$.get('/api/contact', function (data) {
    console.log(data)
    for (let i = 0; i < data.length; i++) {
        $('#contact-list').append(
            '<a class="dropdown-item contact-addon">' + data[i].contactName + '</a>'
        );
    }
});

$.get('/api/transaction', function (data) {
    console.log(data)
    for (let i = 0; i < data.length; i++) {
        $('#content').prepend(
            '<div class="all-holder">' +
            '<div class="image-holder"><img src="./images/Sarah%20Green.jpg" alt="profile" class="contact-image"></div><div class="transaction-holder"><span class="highlight">' + data[i].username +
            '</span> ' + data[i].type + '<span class="highlight"> ' + data[i].contactName + '</span>' + '<p>' + data[i].message +
            '</p><p class="clickable" id="like-unlike"<span id="unliked">&#9825</span></p></div></div>'
        );
    }
});


$.get('/api/user/balance', function (data){
    console.log(data)
    for (let i = 0; i < data.length; i ++) {
        $('#available-balance').append(data[i].accountBalance);
    }
});