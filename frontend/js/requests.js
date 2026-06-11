

const receivedRequests = [
    { name: "From Ayesha K.", purpose: "Transport • Today", amount: "R 500.00", status: "pending" },
    { name: "From Sipho D.", purpose: "Data bundle • Yesterday", amount: "R 250.00", status: "pending" },
    { name: "From Lerato M.", purpose: "Group project • 2d ago", amount: "R 1,000.00", status: "approved" }
];

const sentRequests = [
    { name: "To Tresina M.", purpose: "Lunch split • Today", amount: "R 120.00", status: "approved" },
    { name: "To Siyabonga Z.", purpose: "Shared hosting • 3d ago", amount: "R 450.00", status: "pending" }
];

document.addEventListener("DOMContentLoaded", function () {
    const toggleButtons = document.querySelectorAll(".toggle-btn");
    
    toggleButtons.forEach(button => {
        button.addEventListener("click", function () {

            toggleButtons.forEach(btn => btn.classList.remove("active"));
            this.classList.add("active");

            if (this.textContent.trim() === "Sent") {
                renderFeed(sentRequests, "call_made");      
            } else {
                renderFeed(receivedRequests, "call_received"); 
            }
        });
    });
});

/**
 * @param {Array} dataset - Data layout maps to draw cards from
 * @param {string} iconName - Material UI string token descriptor
 */
function renderFeed(dataset, iconName) {
    const feedContainer = document.getElementById("requestsFeed");
    if (!feedContainer) return;
    
    // Clear out active layout nodes safely
    feedContainer.innerHTML = "";

    // Iterate through tracking objects to append component template variations
    dataset.forEach(item => {
        const cardHTML = `
            <div class="request-item-card">
                <div class="item-avatar"><i class="material-icons">${iconName}</i></div>
                <div class="item-details">
                    <h4>${item.name}</h4>
                    <p>${item.purpose}</p>
                </div>
                <div class="item-financials">
                    <span class="amount-text">${item.amount}</span>
                    <span class="status-badge ${item.status}">
                        ${item.status.charAt(0).toUpperCase() + item.status.slice(1)}
                    </span>
                </div>
            </div>
        `;
        feedContainer.innerHTML += cardHTML;
    });
}