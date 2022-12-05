$(function () {
		// Плавное перемещение к секции
	$(".header__nav-list a, .footer__bottom-nav-list a").on("click", function (e) {
		e.preventDefault()
		var id = $(this).attr('href'),
		top = $(id).offset().top
		$('body,html').animate({ scrollTop: top }, 900)
	})
	
		// Бургер
		$('.burger').on('click', () => {
			$('.burger').toggleClass('actives');
			$('.header__nav').toggleClass('open');
			$('.header__nav-list').toggleClass('show');
		});
		for (let a = 1; a <= $(".header__nav-item").length; a++){
			$(".header__nav-item:nth-child("+ a +")").css("animation-delay", "."+ (a+1) +"s");   
		}
		$('.header__nav a').on('click', function (e) {
				e.preventDefault()
				$('.burger').removeClass('actives')
				$('.header__nav').removeClass('open')
				$('.header__nav-list').removeClass('show')
		})
})



var coll = document.getElementsByClassName("faq__item-btn");
var i;

for (i = 0; i < coll.length; i++) {
coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.maxHeight){
    content.style.maxHeight = null;
    } else {
    content.style.maxHeight = content.scrollHeight + "px";
    } 
});
}


// акардеон футора

var toggler = document.getElementsByClassName("footer__top-title--arrow");
var i;

for (i = 0; i < toggler.length; i++) {
	toggler[i].addEventListener("click", function() {
    	this.parentElement.querySelector(".footer__top-list-nested").classList.toggle("footer__top-list-nested-active");
    	this.classList.toggle("footer__top-title--arrow-down");
	});
}





/* Когда пользователь нажимает на кнопку, переключаться раскрывает содержимое */
function myFunction() {
	document.getElementById("mylanguage").classList.toggle("show");
  }
  // Закрыть раскрывающийся список, если пользователь щелкнет за его пределами.
  window.onclick = function(event) {
	if (!event.target.matches('.language-btn')) {
	  var languages = document.getElementsByClassName("language-content");
	  var i;
	  for (i = 0; i < languages.length; i++) {
		var openlanguage = languages[i];
		if (openlanguage.classList.contains('show')) {
		  openlanguage.classList.remove('show');
		}
	  }
	}
  }