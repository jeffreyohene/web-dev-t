<!DOCTYPE html>
<html>
    <head>
        <title>Form Submission</title>
    </head>
    <body>
        <h1>Form Submission</h1>
        <form action="/submit" method="post">
            <label for="name">Name:</label>
            <input type="text" name="name" id="name" required>
            <br>
            <label for="email">Email:</label>
            <input type="email" name="email" id="email" required>
            <br>
            <label for="phoneNumber">Phone Number:</label>
            <input type="text" name="phoneNumber" id="phoneNumber" required>
            <br>
            <input type="submit" value="Submit">
        </form>
    </body>
</html>
