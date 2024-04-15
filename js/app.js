function myFunction() {
    // Get the text field
    var copyText = document.getElementById("Discordinpt");

    // Select the text field
    copyText.select();
    copyText.setSelectionRange(0, 99999); // For mobile devices

    try {
        // Attempt to copy the text inside the text field
        var successful = document.execCommand('copy');

        if (successful) {
            // Alert the copied text
            alert("Copied the Discord id: " + copyText.value);
        } else {
            // Handle copy failure
            alert("Unable to copy. Please try again.");
        }
    } catch (err) {
        // Handle errors
        alert("An error occurred while copying. Please try again.");
        console.error("Copy error:", err);
    }
}