function loadScript(url, callback)
{
    // Adding the script tag to the head as suggested before
    var head = document.getElementsByTagName('head')[0];
    var script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = url;

    // Then bind the event to the callback function.
    // There are several events for cross browser compatibility.
    script.onreadystatechange = callback;
    script.onload = callback;

    // Fire the loading
    head.appendChild(script);
}

var main = function () {

    var loadHTML = function () {
        $('head').load('head.html');
        $('header').load('header.html');
        $('footer').load('footer.html', updateCopyright);
    };

    var updateCopyright = function () {
        var date = new Date();
        $("#copyright-date").html(date.getFullYear());
    };

    loadHTML();
}

// Load JQuery and then call main
loadScript('js/lib/jquery-1.11.1.min.js', main);
