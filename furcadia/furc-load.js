// Loads header, sidebars, footer

document.addEventListener("DOMContentLoaded", function() {
      loadSidebarContent('furc-header', 'furc-header.html');
      loadSidebarContent('furc-sidebar', 'furc-sidebar.html');
      loadSidebarContent('furc-footer', 'furc-footer.html');
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
