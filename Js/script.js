document.addEventListener('DOMContentLoaded', function () {
    const msgEl = document.getElementById('love-message');
    const msgText = msgEl ? msgEl.textContent : '';

    function setupSwitch(btnId) {
        const btn = document.getElementById(btnId);
        if (!btn) return;

        btn.addEventListener('click', function () {
            console.log('click'); // DEBUG
            const isNowOn = btn.classList.toggle('on');
            const span = btn.querySelector('span');
            const lampGlow = document.getElementById('lamp-glow');
            const lampBulb = document.getElementById('lamp-bulb');
            const lampContainer = document.getElementById('lamp-container');

            span.textContent = isNowOn ? 'OFF' : 'ON';

            if (isNowOn) {
                document.body.classList.add('lamp-on');
                lampContainer.classList.add('lamp-on');
                lampGlow.style.opacity = '1';
                lampBulb.style.opacity = '1';
                typeLoveMessage();
            } else {
                document.body.classList.remove('lamp-on');
                lampContainer.classList.remove('lamp-on');
                lampGlow.style.opacity = '0';
                lampBulb.style.opacity = '0';
                resetLoveMessage();
            }
        });
    }

    function typeLoveMessage() {
        if (!msgEl) return;
        msgEl.textContent = '';
        let i = 0;
        function type() {
            if (i <= msgText.length) {
                msgEl.textContent = msgText.slice(0, i);
                i++;
                setTimeout(type, 60);
            }
        }
        type();
    }

    function resetLoveMessage() {
        if (!msgEl) return;
        msgEl.textContent = '';
    }

    setupSwitch('desktop-btn');
    setupSwitch('mobile-btn');
});
