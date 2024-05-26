document.addEventListener('DOMContentLoaded', function() {
    var faqQuestions = document.querySelectorAll('.faq-question');

    faqQuestions.forEach(function(question) {
        question.addEventListener('click', function() {
            this.classList.toggle('active');
            var answer = this.nextElementSibling;
            if (answer.style.maxHeight) {
                answer.style.maxHeight = null;
            } else {
                answer.style.maxHeight = answer.scrollHeight + "px";
            }
        });
    });
});

window.onscroll = function() {
    if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
      document.querySelector('.bike').classList.add('animate');
    }
  };

  var bike = document.querySelector('.bike');

bike.addEventListener('click', function() {
  bike.classList.remove('animate');
  void bike.offsetHeight;
  
  setTimeout(function() {
    bike.classList.add('animate');
  }, 10); // Short delay to allow the browser to recognize the class removal before adding it back
});