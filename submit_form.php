<?php
// Database connection settings
$servername = "localhost";
$username = "root"; // default for XAMPP
$password = "";     // default is empty password
$dbname = "game_feedback"; // your database name

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
}

// Get form values
$name = $_POST['name'];
$email = $_POST['email'];
$favorite_featured = $_POST['favorite-featured'];
$games_next = $_POST['games-next'];
$favorite_game = $_POST['favorite-game'];

// Prepare SQL
$sql = "INSERT INTO feedback (name, email, favorite_featured, games_next, favorite_game)
VALUES ('$name', '$email', '$favorite_featured', '$games_next', '$favorite_game')";

if ($conn->query($sql) === TRUE) {
  echo "Thank you for your submission!";
} else {
  echo "Error: " . $sql . "<br>" . $conn->error;
}

$conn->close();
?>
