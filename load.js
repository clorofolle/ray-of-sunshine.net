// Loads header, sidebars, footer. Paths to .html files are full URLs to ensure compatibility with github pages - oterwise, just keeping the URLs absolute will allow this code to be ran from any page on other hosts.

document.addEventListener("DOMContentLoaded", function() {
    var basePath = window.location.hostname === 'clorofolle.github.io' ? '/ray-of-sunshine.net/' : '/';
    
    loadSidebarContent('header', basePath + 'header.html');
    loadSidebarContent('sidebar-left', basePath + 'sidebar-left.html');
    loadSidebarContent('sidebar-right', basePath + 'sidebar-right.html');
    loadSidebarContent('footer', basePath + 'footer.html');
});

function loadSidebarContent(elementId, filePath) {
    fetch(filePath)
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return response.text();
        })
        .then(data => {
            document.getElementById(elementId).innerHTML = data;
        })
        .catch(err => {
            console.error(`Failed to load ${filePath}:`, err);
        });
}




// Changes languages at the press of a button

function toggleLanguage() {
    var elements = document.querySelectorAll('.eng, .ita');
    var isEnglishVisible = document.querySelector('.eng:not(.hidden)') !== null;
    var htmlElement = document.documentElement;

    elements.forEach(function(el) {
        el.classList.toggle('hidden');
    });

    if (isEnglishVisible) {
        // Switch to Italian
        htmlElement.lang = 'it';
    } else {
        // Switch to English
        htmlElement.lang = 'en';
    }
}

document.addEventListener('DOMContentLoaded', function() {
    var button = document.getElementById('languageToggle');
    button.addEventListener('click', toggleLanguage);
});



