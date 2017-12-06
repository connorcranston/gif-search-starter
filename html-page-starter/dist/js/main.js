(function() {

    $(document).ready(function() {
        var $formElement = $('#contact-form');
        $('#form-submit').click(function(event) {
            event.preventDefault();
            sendForm($formElement);
        });
    });

    function sendForm($form) {
        $.ajax({
            method: "post",
            url: $form.attr('action'),
            data: $form.serialize()
        })
        .done(function() {
            $form[0].reset();
            $form.children('textarea').attr('placeholder', 'Your message has been sent!');
        })
        .fail(function(error) {
            console.log(error);
            alert('placeholder', 'There was an error sending your message.');
        })
        .always(function() {
            // code that will always run whether or not the $.ajax method succeeds or fails
        });
    }

})();
