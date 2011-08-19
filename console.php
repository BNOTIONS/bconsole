	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<link href="console_css/console.css" rel="stylesheet" />
	<script src="//ajax.googleapis.com/ajax/libs/jquery/1.5.2/jquery.min.js"></script>
	<script>window.jQuery || document.write('<script src="console_js/jquery/jquery-1.5.2.js">\x3C/script>')</script>
	<script src="console_js/jquery/jquery-ui-1.8.11.js"></script>	
    <script src="console_js/lib/qmBrowserDetect.js"></script>
	<?php include("console_utils/Mobile_Detect.php");
	$detect = new Mobile_Detect();?>
	<?php if ($detect->isMobile()) {
		if ($detect->isAndroid()) {?>
		<script>
		platform = "Mobile - Android";
		</script>
		<?php
		}	
		if ($detect->isBlackberry()) {?>
		<script>
		platform = "Mobile - Blackberry";
		</script>
		<?php		
		}
		if ($detect->isOpera()) {?>
		<script>
		platform = "Mobile - Opera";
		</script>
		<?php
		}
		if ($detect->isPalm()) {?>
		<script>
		platform = "Mobile - Palm";
		</script>
		<?php
		}
		if ($detect->isWindows()) {?>
		<script>
		platform = "Mobile - Windows";
		</script>
		<?php
		}
		if ($detect->isGeneric()) {?>
		<script>
		platform = "Mobile - Generic";
		</script>
		<?php
		}
		if ($detect->isIphone()) {?>
		<script>
		platform = "Mobile - iPhone";
		</script>
		<?php
		}
		if ($detect->isIpad()) {?>
		<script>
		platform = "Mobile - iPad";
		</script>
		<?php
		}

	}
	else{?>
	<script>
		platform = "Desktop";
	</script>
	<?php
	}
	?>
	<script src="console_js/console.js"></script>