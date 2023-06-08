document.addEventListener('DOMContentLoaded', () => {
    const langLv = document.getElementById('lang-lv');
    const langEn = document.getElementById('lang-en');

    langLv.addEventListener('click', () => {
        changeLanguage('lv');
    });

    langEn.addEventListener('click', () => {
        changeLanguage('en');
    });
});

document.getElementById('changeLang').addEventListener('click', function() {
    // Assuming you have 'index-en.html' for English and 'index-lv.html' for Latvian.
    const isEnglish = window.location.href.includes('index-eng.html');
    
    if (isEnglish) {
        window.location.href = 'index.html';
    } else {
        window.location.href = 'index-eng.html';
    }
});



function scrollToTop() {
  window.scrollTo({
      top: 0,
      behavior: "smooth"
  });
}

var scrollButton = document.getElementById('scrollButton');

window.onscroll = function() {
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
      scrollButton.classList.add('show-button');
  } else {
      scrollButton.classList.remove('show-button');
  }
};



document.body.addEventListener('click', function(e) {
    if (e.target.classList.contains('readMoreBtn')) {
        const dialog = e.target.parentElement.querySelector('.dialog');
        dialog.style.display = "block";
       
    }
    
    if (e.target.classList.contains('close-btn')) {
        const dialog = e.target.closest('.dialog');
        dialog.style.display = "none";
    }
});

window.onclick = function(event) {
    if (event.target.classList.contains('dialog')) {
        event.target.style.display = "none";
    }
}



const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting){
            entry.target.classList.add('showAnim');
        }
        else{
            entry.target.classList.remove('showAnim');
        }
    });
});

const elements = document.querySelectorAll('.hiddenAnim');

elements.forEach((el)=>observer.observe(el));