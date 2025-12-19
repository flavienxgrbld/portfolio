// Gestion du formulaire de contact avec EmailJS
// Configuration EmailJS (à remplacer par vos propres clés)
const EMAILJS_CONFIG = {
    serviceId: 'service_1vwjc9r',     // À remplacer
    templateId: 'template_ao10fbf',   // À remplacer
    publicKey: '1A0XKIUdhqJPkfY5C'      // À remplacer
};

// Initialisation EmailJS
emailjs.init(EMAILJS_CONFIG.publicKey);

// Messages de traduction pour les différentes langues
const messages = {
    fr: {
        success: 'Message envoyé avec succès ! Je vous répondrai dans les plus brefs délais.',
        error: 'Une erreur est survenue. Veuillez réessayer.',
        required: 'Tous les champs sont obligatoires.',
        invalidEmail: "L'adresse email n'est pas valide.",
        sending: 'Envoi en cours...'
    },
    en: {
        success: 'Message sent successfully! I will reply as soon as possible.',
        error: 'An error occurred. Please try again.',
        required: 'All fields are required.',
        invalidEmail: 'The email address is not valid.',
        sending: 'Sending...'
    },
    it: {
        success: 'Messaggio inviato con successo! Ti risponderò al più presto.',
        error: 'Si è verificato un errore. Riprova.',
        required: 'Tutti i campi sono obbligatori.',
        invalidEmail: "L'indirizzo email non è valido.",
        sending: 'Invio in corso...'
    },
    es: {
        success: '¡Mensaje enviado con éxito! Te responderé lo antes posible.',
        error: 'Ocurrió un error. Por favor, inténtalo de nuevo.',
        required: 'Todos los campos son obligatorios.',
        invalidEmail: 'La dirección de correo electrónico no es válida.',
        sending: 'Enviando...'
    },
    de: {
        success: 'Nachricht erfolgreich gesendet! Ich werde so schnell wie möglich antworten.',
        error: 'Ein Fehler ist aufgetreten. Bitte versuchen Sie es erneut.',
        required: 'Alle Felder sind erforderlich.',
        invalidEmail: 'Die E-Mail-Adresse ist ungültig.',
        sending: 'Senden...'
    },
    nl: {
        success: 'Bericht succesvol verzonden! Ik zal zo spoedig mogelijk antwoorden.',
        error: 'Er is een fout opgetreden. Probeer het opnieuw.',
        required: 'Alle velden zijn verplicht.',
        invalidEmail: 'Het e-mailadres is niet geldig.',
        sending: 'Verzenden...'
    },
    pl: {
        success: 'Wiadomość wysłana pomyślnie! Odpowiem tak szybko, jak to możliwe.',
        error: 'Wystąpił błąd. Spróbuj ponownie.',
        required: 'Wszystkie pola są wymagane.',
        invalidEmail: 'Adres e-mail jest nieprawidłowy.',
        sending: 'Wysyłanie...'
    },
    pt: {
        success: 'Mensagem enviada com sucesso! Responderei o mais breve possível.',
        error: 'Ocorreu um erro. Por favor, tente novamente.',
        required: 'Todos os campos são obrigatórios.',
        invalidEmail: 'O endereço de email não é válido.',
        sending: 'A enviar...'
    },
    'pt-BR': {
        success: 'Mensagem enviada com sucesso! Responderei o mais breve possível.',
        error: 'Ocorreu um erro. Por favor, tente novamente.',
        required: 'Todos os campos são obrigatórios.',
        invalidEmail: 'O endereço de e-mail não é válido.',
        sending: 'Enviando...'
    },
    ja: {
        success: 'メッセージが正常に送信されました！できるだけ早く返信いたします。',
        error: 'エラーが発生しました。もう一度お試しください。',
        required: 'すべてのフィールドは必須です。',
        invalidEmail: 'メールアドレスが無効です。',
        sending: '送信中...'
    },
    zh: {
        success: '消息发送成功！我会尽快回复您。',
        error: '发生错误。请重试。',
        required: '所有字段都是必填项。',
        invalidEmail: '电子邮件地址无效。',
        sending: '发送中...'
    },
    ar: {
        success: 'تم إرسال الرسالة بنجاح! سأرد في أقرب وقت ممكن.',
        error: 'حدث خطأ. يرجى المحاولة مرة أخرى.',
        required: 'جميع الحقول مطلوبة.',
        invalidEmail: 'عنوان البريد الإلكتروني غير صالح.',
        sending: 'جارٍ الإرسال...'
    }
};

function getCurrentLangForContact() {
    const path = window.location.pathname;
    const langs = ['fr', 'en', 'it', 'es', 'de', 'nl', 'pl', 'pt', 'pt-BR', 'ja', 'zh', 'ar'];
    
    for (let lang of langs) {
        if (path.includes(`/${lang}/`)) {
            return lang;
        }
    }
    return 'fr';
}

function getMessages() {
    const lang = getCurrentLangForContact();
    return messages[lang] || messages['fr'];
}

function showMessage(message, type) {
    const successDiv = document.querySelector('.alert-success');
    const errorDiv = document.querySelector('.alert-error');
    
    if (!successDiv || !errorDiv) return;
    
    // Masquer les deux d'abord
    successDiv.style.display = 'none';
    errorDiv.style.display = 'none';
    
    // Afficher le bon message
    if (type === 'success') {
        successDiv.style.display = 'block';
        successDiv.scrollIntoView({ behavior: 'smooth', block: 'center' });
        
        // Masquer après 5 secondes
        setTimeout(() => {
            successDiv.style.display = 'none';
        }, 5000);
    } else {
        errorDiv.innerHTML = `
            <i class="fas fa-exclamation-circle"></i>
            <strong>Erreur :</strong> ${message}
        `;
        errorDiv.style.display = 'block';
        errorDiv.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
}

function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

function handleContactForm(event) {
    event.preventDefault();
    
    const msg = getMessages();
    const form = event.target;
    const submitBtn = form.querySelector('.submit-btn');
    const originalBtnText = submitBtn.innerHTML;
    
    // Récupérer les valeurs
    const nom = form.nom.value.trim();
    const email = form.email.value.trim();
    const sujet = form.sujet.value.trim();
    const message = form.message.value.trim();
    
    // Validation
    if (!nom || !email || !sujet || !message) {
        showMessage(msg.required, 'error');
        return;
    }
    
    if (!validateEmail(email)) {
        showMessage(msg.invalidEmail, 'error');
        return;
    }
    
    // Désactiver le bouton et afficher le chargement
    submitBtn.disabled = true;
    submitBtn.innerHTML = `<i class="fas fa-spinner fa-spin"></i> ${msg.sending}`;
    
    // Préparer les paramètres pour EmailJS
    const templateParams = {
        from_name: nom,
        from_email: email,
        subject: sujet,
        message: message,
        to_email: 'flavien.garibaldi@gmail.com'
    };
    
    // Envoyer via EmailJS
    emailjs.send(
        EMAILJS_CONFIG.serviceId,
        EMAILJS_CONFIG.templateId,
        templateParams
    )
    .then(function(response) {
        console.log('SUCCESS!', response.status, response.text);
        showMessage(msg.success, 'success');
        form.reset();
    })
    .catch(function(error) {
        console.error('FAILED...', error);
        showMessage(msg.error, 'error');
    })
    .finally(function() {
        // Réactiver le bouton
        submitBtn.disabled = false;
        submitBtn.innerHTML = originalBtnText;
    });
}

// Initialisation du formulaire de contact
document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', handleContactForm);
    }
});
