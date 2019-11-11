function enable() {
    chrome.tabs.executeScript(null, {
        code: 'document.body.innerHTML += "<style>*{background:#0066cc!important;color:#fff!important;outline:solid #fff 1px!important;}</style>";'
    });
}

function disable() {
    chrome.tabs.executeScript(null, {
        code: 'var elements = document.body.getElementsByTagName("*");' +
            'var items = [];' +
            'for (var i = 0; i < elements.length; i++) {' +
            'if (elements[i].innerHTML.indexOf("background:#0066cc!important;color:#fff!important;outline:solid #fff 1px!important;") != -1) {' +
            'items.push(elements[i]);' +
            '}' +
            '}' +

            'if (items.length > 0) {' +
            'for (var i = 0; i < items.length; i++) {' +
            'document.body.removeChild(items[i]);' +
            '}' +
            '}'
    });
}

document.addEventListener("DOMContentLoaded", function (event) {
    var toggle = document.getElementById("toggle");

    // enable at start
    toggle.checked = true;
    enable();

    toggle.addEventListener('click', function () {
        if (toggle.checked) {
            enable();
        } else {
            disable();
        }
    });
});