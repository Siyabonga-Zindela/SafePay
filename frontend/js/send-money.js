 document.addEventListener('DOMContentLoaded', function() {
            const savedRecipient = localStorage.getItem('chosenRecipient');
            
            if (savedRecipient) {
                const recipient = JSON.parse(savedRecipient);
                
                // Swap Text UI
                document.getElementById('recipientName').textContent = recipient.name;
                document.getElementById('recipientEmail').textContent = recipient.email;
                document.getElementById('recipientInitials').textContent = recipient.initials;
                
                // Keep UI colors completely dynamic
                const initialCircle = document.getElementById('recipientInitials');
                initialCircle.className = `profile-circle ${recipient.color}`;
            }
        });

        document.getElementById('reviewButton').addEventListener('click', function() {
            const amount = document.getElementById('amountInput').value;
            if(!amount || amount <= 0) {
                alert('Please enter a valid amount to send.');
                return;
            }
            alert(`Review processing for R ${amount}`);
        });