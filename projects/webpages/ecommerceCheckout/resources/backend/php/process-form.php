<?php
// Check if the form is submitted
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Retrieve the form data
    $firstName = $_POST['firstName'];
    $lastName = $_POST['lastName'];
    $email = $_POST['email'];
    $phoneNumber = $_POST['phoneNumber'];
    
    // Process the form data or perform any desired operations
    // For example, you can store the data in a database, send an email, etc.
    
    // Print a success message
    echo "<p>Thank you for your submission, $firstName $lastName!</p>";
}
?>
<form method="POST" action="">
    <fieldset>
        <label for="firstName">Full Name</label>
        <input type="text" placeholder="First Name" class="col-1-2" id="firstName" name="firstName" required>
        <input type="text" placeholder="Last Name" class="col-1-2" id="lastName" name="lastName" required>
    </fieldset>
    <!-- Rest of your form fields -->

    <input type="submit" value="Submit" class="button button-primary float-right">
</form>
