<html>
<body>

<?php
    $receiverEmail = 'dimitar@uoguelph.ca';

    $subject = $_POST["contact-subject"];
    $message = $_POST["contact-message"];
    $from = $_POST["contact-email"];
    $headers =  'From: $from' . "\r\n" .
                'Reply-To: $from' . "\r\n" .
                'X-Mailer: PHP/' . phpversion();

    if (!empty($from) And !empty($message))
    {
        $mailDelivery = mail($receiverEmail, $subject, $message, $headers);
        if ($mailDelivery)
        {
            echo "SUCCESS";
        }
        else
        {
            echo "FAILURE";
        }
    }
?>

</body>
</html>
