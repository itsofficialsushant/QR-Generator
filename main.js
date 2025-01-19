// Using goqr.me for QR code generation API
function generateQRCode() {
    const inputText = document.getElementById("inputtext").value;
    const qrImage = document.getElementById("imgqr");

    if (inputText.trim() === "") {
        alert("Please enter url to generate a QR Code.");
        return;
    }

    // API URL
    const apiUrl = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${encodeURIComponent(inputText)}`;

    // Set the QR code image source to the API URL
    qrImage.src = apiUrl;
    qrImage.alt = "Generated QR Code";
}