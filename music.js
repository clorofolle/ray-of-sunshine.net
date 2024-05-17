document.addEventListener('DOMContentLoaded', function() {  // waits until your webpage is fully loaded before running the code inside. It's important because it ensures that all the HTML elements are available for the JavaScript to manipulate.
    var audioPlayer = document.getElementById('audioPlayer'); // assigns variables to elements in html
    var playlist = document.getElementById('playlist');
    var links = playlist.getElementsByTagName('a');  // all 'a' tags (links) inside the playlist
    
    // Function to play a song. gets called each time you click a song link.
    function playSong(link) {
        var songUrl = link.getAttribute('href'); // It takes the URL (href attribute) from the link
        audioPlayer.src = songUrl;  //and sets it as the source ('src')  for the audio player
        audioPlayer.play();     //then starts playing it.
    }

    // Play next song when the current one ends
    audioPlayer.addEventListener('ended', function() { // 'ended' event listens for when a song ends. When the song finishes, it automatically plays the next song in the playlist
        var active = document.querySelector('#playlist .active'); //finds current active song
        var next = active.nextElementSibling;  //finds next song in the list
        if (next) {
            playSong(next.getElementsByTagName('a')[0]);
            active.classList.remove('active');
            next.classList.add('active');   //updates the 'active' class so you can visually see which song is active
        }
    });

    // Change song on link click
    // adds a click event listener to each song link in your playlist
    for (var i = 0; i < links.length; i++) {
        var link = links[i];
        link.addEventListener('click', function(e) {
            e.preventDefault(); // Prevent default link action aka opening it in another window
            var current = document.querySelector('#playlist .active');
            if (current) {
                current.classList.remove('active'); // When a song link is clicked, this code first removes the 'active' class from the currently playing song
            }
            this.parentNode.classList.add('active'); // then it sets the clicked song as the new active one.
            playSong(this); // then it plays the clicked song.
        });
    }
});
