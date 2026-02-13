/**
 * Konami Code Easter Egg
 * Séquence: ↑ ↑ ↓ ↓ ← → ← → B A
 */

(function() {
    'use strict';
    
    // La séquence du Konami Code (compatible AZERTY et QWERTY)
    const konamiCode = [
        'ArrowUp', 'ArrowUp',
        'ArrowDown', 'ArrowDown',
        'ArrowLeft', 'ArrowRight',
        'ArrowLeft', 'ArrowRight',
        'b', 'a'  // Utiliser les caractères en minuscule pour compatibilité clavier
    ];
    
    let konamiPosition = 0;
    let activated = false;

    // Créer l'overlay du message secretw
    function createSecretMessage() {
        const overlay = document.createElement('div');
        overlay.className = 'konami-overlay';
        overlay.innerHTML = `
            <div class="konami-message">
                <h1 class="konami-title">CODE VALIDE !</h1>
                <p class="konami-text">Bravo ! Vous avez trouvé l'easter egg !</p>
                <p class="konami-subtitle">Le Konami Code est un classique du gaming</p>
                <button class="konami-close">Fermer</button>
            </div>
        `;
        document.body.appendChild(overlay);
        
        // Ajouter l'event listener au bouton Fermer
        const closeButton = overlay.querySelector('.konami-close');
        closeButton.addEventListener('click', function() {
            overlay.remove();
        });
        
        // Fermer aussi en cliquant sur l'overlay (background)
        overlay.addEventListener('click', function(e) {
            if (e.target === overlay) {
                overlay.remove();
            }
        });
        
        // Retirer automatiquement après 10 secondes
        setTimeout(() => {
            if (overlay.parentNode) {
                overlay.remove();
            }
        }, 10000);
    }

    // Créer des confettis
    function createConfetti() {
        const colors = ['#ff0000', '#00ff00', '#0000ff', '#ffff00', '#ff00ff', '#00ffff', '#ff6b6b', '#4ecdc4', '#45b7d1', '#f38181', '#aa96da', '#fcbad3'];
        const confettiCount = 100;
        
        for (let i = 0; i < confettiCount; i++) {
            const confetti = document.createElement('div');
            confetti.className = 'konami-confetti';
            confetti.style.left = Math.random() * 100 + '%';
            confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
            confetti.style.animationDelay = Math.random() * 3 + 's';
            confetti.style.animationDuration = (Math.random() * 3 + 2) + 's';
            document.body.appendChild(confetti);
            
            // Retirer le confetti après l'animation
            setTimeout(() => {
                confetti.remove();
            }, 6000);
        }
    }

    // Faire trembler la page
    function shakeScreen() {
        document.body.classList.add('konami-shake');
        setTimeout(() => {
            document.body.classList.remove('konami-shake');
        }, 500);
    }

    // Activer l'easter egg
    function activateKonami() {
        if (activated) return;
        activated = true;
        
        //console.log('🎮 KONAMI CODE ACTIVÉ ! 🎮');
        
        // Effets visuels
        shakeScreen();
        createConfetti();
        createSecretMessage();
        
        // Son de victoire (optionnel, nécessite un fichier audio)
        // const audio = new Audio('../sounds/success.mp3');
        // audio.play().catch(e => console.log('Audio play failed:', e));
        
        // Réinitialiser après 10 secondes
        setTimeout(() => {
            activated = false;
            konamiPosition = 0;
        }, 10000);
    }

    // Écouter les touches du clavier
    document.addEventListener('keydown', function(e) {
        // Utiliser e.key pour les lettres (compatible AZERTY/QWERTY), e.code pour les flèches
        const key = e.key.startsWith('Arrow') ? e.key : e.key.toLowerCase();
        
        // Debug: afficher la touche pressée
        //console.log('Touche pressée:', key, '| Position actuelle:', konamiPosition, '| Attendu:', konamiCode[konamiPosition]);
        
        // Vérifier si la touche correspond à la position actuelle dans le code
        if (key === konamiCode[konamiPosition]) {
            konamiPosition++;
            //console.log('✓ Bonne touche ! Progression:', konamiPosition + '/' + konamiCode.length);
            
            // Si toute la séquence est complète
            if (konamiPosition === konamiCode.length) {
                activateKonami();
                konamiPosition = 0;
            }
        } else {
            // Réinitialiser si mauvaise touche (sauf si c'est le début de la séquence)
            if (key === konamiCode[0]) {
                //console.log('↻ Redémarrage de la séquence');
                konamiPosition = 1;
            } else {
                if (konamiPosition > 0) {
                    //  console.log('✗ Mauvaise touche, réinitialisation');
                }
                konamiPosition = 0;
            }
        }
    });

    //console.log('🕹️ Easter egg chargé ! Essayez le Konami Code : ↑↑↓↓←→←→BA');
    //console.log('📋 Séquence attendue:', konamiCode);
})();
