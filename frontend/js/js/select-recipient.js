  document.querySelectorAll('.contact-card-link').forEach(card => {
            card.addEventListener('click', function(e) {
                e.preventDefault();
                
                const selectedContact = {
                    name: this.getAttribute('data-name'),
                    email: this.getAttribute('data-email'),
                    initials: this.getAttribute('data-initials'),
                    color: this.getAttribute('data-color')
                };
                
                localStorage.setItem('chosenRecipient', JSON.stringify(selectedContact));
                window.location.href = this.href;
            });
        });