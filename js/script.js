//SLIDE SHOW hãng xe
//khai báo biến slideIndex đại diện cho slide hiện tạiasdfasdf
var slideIndex;
// KHai bào hàm hiển thị slide
function showSlides() {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }

  slides[slideIndex].style.display = "block";
  dots[slideIndex].className += " active";
  //chuyển đến slide tiếp theo
  slideIndex++;
  //nếu đang ở slide cuối cùng thì chuyển về slide đầu
  if (slideIndex > slides.length - 1) {
    slideIndex = 0
  }
  //tự động chuyển đổi slide sau 5s
  setTimeout(showSlides, 3000);
}
//mặc định hiển thị slide đầu tiên 
showSlides(slideIndex = 0);


function currentSlide(n) {
  showSlides(slideIndex = n);
}


// return to top 
$(window).scroll(function() {
  if ($(this).scrollTop() >= 50) {        // page scroll >50px
      $('#return-to-top').fadeIn(200);    // fade in
  } else {
      $('#return-to-top').fadeOut(200);   // fade out
  }
});
$('#return-to-top').click(function() {      //mũi tên lên dc click
  $('body,html').animate({
      scrollTop : 0                       // scroll top
  }, 500);
});
