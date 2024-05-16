// Loads header, sidebars, footer. Paths to .html files are full URLs to ensure compatibility with github pages - oterwise, just keeping the URLs absolute will allow this code to be ran from any page on other hosts.

document.addEventListener("DOMContentLoaded", function() {
      loadSidebarContent('header', 'https://ray-of-sunshine.net/header.html');
      loadSidebarContent('sidebar-left', 'https://ray-of-sunshine.net/sidebar-left.html');
      loadSidebarContent('sidebar-right', 'https://ray-of-sunshine.net/sidebar-right.html');
      loadSidebarContent('footer', 'https://ray-of-sunshine.net/footer.html');
  });
  
  function loadSidebarContent(elementId, filePath, callback) {
    fetch(filePath)
        .then(response => response.text())
        .then(data => {
            document.getElementById(elementId).innerHTML = data;
            if (callback) callback();
        })
        .catch(err => console.error(err));
}



// Changes languages at the press of a button

function toggleLanguage() {
    var elements = document.querySelectorAll('.eng, .ita');
    elements.forEach(function(el) {
        el.classList.toggle('hidden');
    });
}



