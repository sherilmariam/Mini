<?php
header("Access-Control-Allow-Origin: *"); // Allow all origins
header("Content-Type: application/json; charset=UTF-8"); // Set content type to JSON

include 'db_connection.php';

$sql = "SELECT * FROM hotels"; // replace 'hotels' with your actual table name
$result = $conn->query($sql);

$hotels = array();
if ($result->num_rows > 0) {
    while ($row = $result->fetch_assoc()) {
        $hotels[] = $row;
    }
} else {
    echo json_encode(array("message" => "0 results"));
}

echo json_encode($hotels);

$conn->close();
?>
