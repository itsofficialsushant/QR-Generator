// Using goqr.me for QR code generation API
function generateQRCode() {
    const inputText = document.getElementById("inputtext").value;
    const qrImage = document.getElementById("imgqr");
    const downloadBtn = document.getElementById("downloadBtn");

    if (inputText.trim() === "") {
        alert("Please enter url to generate a QR Code.");
        return;
    }

    // API URL
    const apiUrl = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${encodeURIComponent(inputText)}`;

    // Set the QR code image source to the API URL
    qrImage.src = apiUrl;
    qrImage.alt = "Generated QR Code";

    // Show download button
    downloadBtn.style.display = "inline-block";
}

// Download QR code function
function downloadQR() {
    const img = document.getElementById("imgqr");
    if (!img) return;

    // Create a temporary anchor element
    const a = document.createElement("a");
    a.href = img.src;
    a.download = "qr-code.png";
    document.body.appendChild(a);
    
    // Trigger download
    a.click();
    
    // Clean up
    document.body.removeChild(a);
}

// Add event listener to download button
document.getElementById("downloadBtn").onclick = downloadQR;