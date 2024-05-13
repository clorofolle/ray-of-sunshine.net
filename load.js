// Loads header, sidebars, footer. Paths to .html files are absolute to allow this code to be ran from any page.

document.addEventListener("DOMContentLoaded", function() {
      loadSidebarContent('header', '/header.html');
      loadSidebarContent('sidebar-left', '/sidebar-left.html');
      loadSidebarContent('sidebar-right', '/sidebar-right.html');
      loadSidebarContent('footer', '/footer.html');
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
