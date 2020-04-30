<?php 
//variables
	$name = $_POST['name'];
	$email = $_POST['email'];
	$message = $_POST['message'];
	$formcontent = "From: $name \n Message: $message";
	$recipient = "benjamin.t.smith1@maine.edu";
	$subject = "Contact Form";
	$mailheader = "From: $email \r\n";
	
	// mail to recipient with subject and header, if it fails, display error, if it sends, say thanks 

	mail($recipient, $subject, $mailheader) or die("Error!");
	echo "Thank you!";

?>