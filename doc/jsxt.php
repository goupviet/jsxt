<?php

$base_url = 'http://jsxt.googlecode.com/svn/trunk/';

if ( isset($_GET['get_content']) ) {

	$url = $_GET['get_content'];

	$content = file_get_contents($url);

	echo $content;

	exit();

}

?>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01//EN">
<html>

<head>
<meta http-equiv="Content-Type" content="text/html; charset=windows-1251" />
<title>jsxt :: Documentation</title>
<link rel="stylesheet" href="includes/styles-main.css" type="text/css" />
<?php

echo '<script type="text/javascript" src="' . $base_url . '/js/Ajax.js"></script>';

?>
<script type="text/javascript">

(function()
{

function loadIndex()
{
	var html = '';

	var url = window.location.href.replace(/[^\/]+$/, '') + '../trunk/js/';
	var url = window.location.href + '?get_content=http://jsxt.googlecode.com/svn/trunk/js/';

	Ajax.query(url, {
		async: true,
		nocache: true,
		onreadystate: function(req)
		{
			if ( req.readyState == 2 ) {
				document.getElementById('loading').style.display = 'block';
				document.getElementById('loading').innerHTML = 'Loading...';
			}
			if ( req.readyState == 4 ) {
				document.getElementById('loading').style.display = 'none';

				if ( req.status != 200 ) {
					document.getElementById('content').innerHTML = 
						'Sorry. Try later. The next error has been encoutered: ' 
						+ req.statusText;
					return;
				}

				document.getElementById('content').innerHTML = req.responseText;
			}
		}
	});
};

if ( window.attachEvent ) {
	window.attachEvent('onload', loadIndex);
} else {
	window.addEventListener('load', loadIndex, true);
}

})();

</script>
</head>

<body>

<div id="header">
<pre>
Dear visitor!

This is amazing cross-site AJAX-page.
It had been generated using the simplest AJAX script.

Have enjoy!

Best regards,
Ildar
</pre>
</div>

<div id="loading">Loading...</div>

<div id="menu"></div>

<div id="content"></div>

</body>
</html>
