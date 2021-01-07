console.log("main.js started");

// For asynchronously loading the qr code library, loadQRLib returns a promise
// which will be resolved when the library is loaded.
var qrLibProm;
var loadQRLib = () => {
    if (qrLibProm) { return qrLibProm; }
    qrLibProm = new Promise((resolve, reject) => {
        console.log("loading qrcode.min.js");
        var script = document.createElement('script');
        script.src = "/assets/qrcode.min.js";
        script.async = true;
        script.onload = () => { resolve(); };
        document.querySelectorAll('head')[0].appendChild(script);
    });
    return qrLibProm;
};

document.addEventListener("DOMContentLoaded", () => {
    console.log("DOM loaded");

    // Get the modal
    const modal = document.getElementById("modal");
    const modalContent = document.getElementById("modal-content");
    const modalClose = document.getElementById("modal-close");

    modalClose.onclick = function() {
        modal.style.display = "none";
    }

    const showModal = function() {
        modalContent.innerHTML = '';
        for (var i = 0; i < arguments.length; i++) {
            modalContent.appendChild(arguments[i]);
        }
        modal.style.display = "block";

        // When the user clicks anywhere outside of the modal, close it
        window.onclick = function(event) {
            if (event.target == modal) {
                modal.style.display = "none";
                window.onclick = "undefined";
            }
        }
    }

    const cryptoDisplay = document.querySelector('#crypto-display');
    const clearCryptoDisplay = () => {
        cryptoDisplay.innerHTML = '&nbsp;';
    };

    console.log("setting up crypto buttons");
    document.querySelectorAll('.crypto').forEach((el) => {
        const href = el.href;
        el.href="#";
        el.onclick = () => {
            var parts = href.split(":");
            if (parts.length != 2) {
                console.error(el, "href not properly formatted");
                return;
            }
            var currency = parts[0];
            var address = parts[1];

            var cryptoDisplayQR = document.createElement('div');
            cryptoDisplayQR.id = "crypto-display-qr";

            var cryptoDisplayAddr = document.createElement('div');
            cryptoDisplayAddr.id = "crypto-display-addr";
            cryptoDisplayAddr.innerHTML = '<span>'+currency + " address: " + address + '</span>';

            loadQRLib().then(() => {
                new QRCode(cryptoDisplayQR, {
                    text: currency,
                    width: 512,
                    height: 512,
                });
            });

            showModal(cryptoDisplayQR, cryptoDisplayAddr);
        };
    });
})
