document.querySelectorAll('.contact-card-link').forEach(card => {
    card.addEventListener('click', function(e) {
        e.preventDefault();
        
        const selectedContact = {
            name: this.getAttribute('data-name'),
            email: this.getAttribute('data-email'),
            initials: this.getAttribute('data-initials'),
            color: this.getAttribute('data-color')
        };
        
        // 1. Save contact details to local storage
        localStorage.setItem('chosenRecipient', JSON.stringify(selectedContact));
        
        // 2. Check the URL parameters to see if we are sending or requesting
        const urlParams = new URLSearchParams(window.location.search);
        const mode = urlParams.get('mode'); // Looks for '?mode=X'
        
        // 3. Smart redirection
        if (mode === 'request') {
            window.location.href = 'request-money.html';
        } else {
            // Default fallback is send-money if no mode is specified
            window.location.href = 'send-money.html';
        }
    });
});