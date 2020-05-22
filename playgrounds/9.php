<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
        <title>brought to you by php</title>
        <link href="/favicon.png" rel=icon>
        <meta name="viewport" content="width=device-width,initial-scale=1.0" />
        <link href="css/9.css" rel="stylesheet">
    </head>
        
    <body>
        <?php
		date_default_timezone_set('America/New_York');
		$today = date("l");
	    ?>
        
        <?php if($today == "Sunday") : ?>
            <div class="sky"></div>
            <div class="sign sunday">
                <p>
                    happy sunday! here's a thursday playlist!
                    <br><br>
                 </p>
            </div>

        <?php else : ?>
            <div class="shutter"></div>

            <div class="sign">
                <p>
                    sorry, it's not thursday <br>
                    <br> check next thursday for a treat!
                 </p>
        </div>
        <?php endif ?>

        <script src="js/jquery-2.1.4.min.js"></script>
    </body>
</html>