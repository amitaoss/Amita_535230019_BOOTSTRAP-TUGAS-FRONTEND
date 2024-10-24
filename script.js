$(document).ready(function() {
    $('form button[type="submit"]').click(function(event) {
        event.preventDefault(); 

        
        if ($(this).hasClass('btn-primary')) {
            if ($(this).text().toLowerCase().includes('send message')) {
                alert('Pesan Anda sudah terkirim!');
            } else if ($(this).text().toLowerCase().includes('subscribe')) {
                alert('Terima kasih sudah berlangganan!');
            }
        }
    });
});
