
document.addEventListener("DOMContentLoaded", function () {
    const verifyButton = document.querySelector(".submit-button");
    const previewContainer = document.querySelector(".upload-preview-container");

    if (previewContainer) {
        previewContainer.addEventListener("click", function () {
            alert("Opening file picker to upload a new proof receipt image...");
        });
    }

    if (verifyButton) {
        verifyButton.addEventListener("click", function () {
            alert("Verification scanning process initiated! Checking payment reference authenticity...");
        });
    }
});