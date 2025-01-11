// Modal galleries

document.addEventListener('DOMContentLoaded', () => {
    const modal = document.getElementById('modal');
    const modalImg = document.getElementById('modal-image');
    const captionText = document.getElementById('caption');
    const closeBtn = document.getElementsByClassName('close')[0];

    document.querySelectorAll('.gallery-item img').forEach(img => {
        img.addEventListener('click', () => {
            modal.style.display = 'block';
            modalImg.src = img.src;
            captionText.innerHTML = img.alt;
        });
    });

    closeBtn.onclick = function() {
        modal.style.display = 'none';
    };

    modal.onclick = function(event) {
        if (event.target !== modalImg) {
            modal.style.display = 'none';
        }
    };
});




// Pageflip code from https://codepen.io/jabaz007/pen/yMjpYP

//first and last line addedd to make it load properly
$(document).ready(function () {

TweenLite.set(".pageBg", {xPercent: -50, yPercent: -50});
TweenLite.set(".pageWrapper", {left: "50%", perspective: 1000 });
TweenLite.set(".page", {transformStyle: "preserve-3d"});
TweenLite.set(".back", {rotationY: -180});
TweenLite.set([".back", ".front"], {backfaceVisibility: "hidden"});


$(".page").click(
	function() {
		if (pageLocation[this.id] === undefined || pageLocation[this.id] == "right") {
			zi = ($(".left").length) + 1;
			TweenMax.to($(this), 1, {force3D: true, rotationY: -180, transformOrigin: "-1px top", className: '+=left', z: zi, zIndex: zi});
			TweenLite.set($(this), {className: '-=right'});
			pageLocation[this.id] = "left";
		} else {
			zi = ($(".right").length) + 1;
			TweenMax.to($(this), 1, {force3D: true, rotationY: 0, transformOrigin: "left top", className: '+=right', z: zi, zIndex: zi
			});
			TweenLite.set($(this), {className: '-=left'});
			pageLocation[this.id] = "right";
		}
	}
);

$(".front").hover(
	function() {
		TweenLite.to($(this).find(".pageFoldRight"), 0.3, {width: "20px", height: "20px",});
	},
	function() {
		TweenLite.to($(this).find(".pageFoldRight"), 0.3, {width: "0px", height: "0px"});
	}
);

$(".back").hover(
	function() {
		TweenLite.to($(this).find(".pageFoldLeft"), 0.3, {width: "20px", height: "20px",});
	},
	function() {
		TweenLite.to($(this).find(".pageFoldLeft"), 0.3, {width: "0px", height: "0px"});
	}
)

var pageLocation = [],
	lastPage = null;
	zi = 0;

});