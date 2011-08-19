## bConsole

### what is it?

The bConsole creates a panel that sits on top of a browser-based project and provides information about the client machine and browser.

The code contained will also be useful for targeting various platforms: Operating system, Browser, Browser version, Screen size.
what does it look like?

A demo of the console at work can be seen at http://reale.ca/console

### how is it built?

This tool relies on a few libraries developed by other people and organizations:

### php-mobile-detect:

http://code.google.com/p/php-mobile-detect/ php-mobile-detect is used to determine whether the client browser is on a mobile device and is able to breakdown the specific type of mobile device (Android, iPad, iPhone, Blackberry, Windows, etc).

### Quirksmode Browser Detect

http://www.quirksmode.org/js/detect.html PPK is the man, and his JavaScript browser detection is hella useful. This JavaScript is used to detect Browser, Browser Version, and Operating System. This script is kinda sneaky though as it needs to be regularly checked whenever new browsers emerge.

### jQuery

http://jquery.com/ Don't think there is any need to explain what this does.

### jQuery UI

http://jqueryui.com/ jQuery UI is used to make the panel draggable and return the position of the panel whenever it is dragged.

### how do i use it?

Right now, this library only works in projects built in PHP or running on a server that is able to run PHP.

* Unzip the files
* Place the 'console' directory in your project, ideally in your root directory
* Use a PHP include in the <head> of your document to get all the files and dependencies in place: <?php include("console/console.php"); ?>
* That should be all you need to get it running
* If it doesn't work, check your file paths to make sure the console.php is being included properly
* Give feedback if anything doesn't work, could be better, or improvements that would make it more useful 

Thanks,

Mark