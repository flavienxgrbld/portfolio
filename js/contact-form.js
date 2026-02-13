// Contact form handling via EmailJS
(function() {
    'use strict';

    emailjs.init('1A0XKIUdhqJPkfY5C');

    var SERVICE_ID = 'service_1vwjc9r';
    var TEMPLATE_ID = 'template_ao10fbf';

    document.getElementById('contact-form').addEventListener('submit', function(event) {
        event.preventDefault();

        var submitBtn = document.getElementById('submit-btn');
        var messageDiv = document.getElementById('message');

        submitBtn.disabled = true;
        submitBtn.textContent = 'Envoi en cours...';

        // Honeypot check
        var honeypot = document.getElementById('website');
        if (honeypot && honeypot.value) {
            submitBtn.disabled = false;
            submitBtn.textContent = 'Envoyer le message';
            return;
        }

        // Email validation
        var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        var userEmail = document.getElementById('user_email').value;
        if (!emailRegex.test(userEmail)) {
            messageDiv.textContent = 'Veuillez entrer une adresse email valide.';
            messageDiv.classList.add('error');
            messageDiv.style.display = 'block';
            submitBtn.disabled = false;
            submitBtn.textContent = 'Envoyer le message';
            return;
        }

        // Hide previous messages
        messageDiv.style.display = 'none';
        messageDiv.className = 'message';

        // Send via EmailJS
        emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, this)
            .then(function(response) {
                messageDiv.textContent = '\u2713 Message envoy\u00e9 avec succ\u00e8s ! Je vous r\u00e9pondrai dans les plus brefs d\u00e9lais.';
                messageDiv.classList.add('success');
                messageDiv.style.display = 'block';
                document.getElementById('contact-form').reset();
                submitBtn.disabled = false;
                submitBtn.textContent = 'Envoyer le message';
                setTimeout(function() { messageDiv.style.display = 'none'; }, 5000);
            }, function(error) {
                messageDiv.textContent = '\u2717 Erreur lors de l\'envoi du message. Veuillez r\u00e9essayer ou me contacter directement par email.';
                messageDiv.classList.add('error');
                messageDiv.style.display = 'block';
                submitBtn.disabled = false;
                submitBtn.textContent = 'Envoyer le message';
                setTimeout(function() { messageDiv.style.display = 'none'; }, 5000);
            });
    });
})();
