let redirectUrl = "";

function setRedirectUrl(url) {
    redirectUrl = url;
}

function handleLogin() {
    if (redirectUrl) {
        window.location.href = redirectUrl;
    } else {
        alert("Please select a page to redirect to first.");
    }
}