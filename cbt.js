// notification popup code
const notified = document.querySelectorAll('.notified');
const notifiedHide = document.querySelector('.notified-hide');
const cancel = document.querySelectorAll('.cancel');


notified.forEach(notified => notified.addEventListener('click', () =>
    notifiedHide.style.display = 'block'
));

cancel.forEach(cancel => cancel.addEventListener('click', () =>
    notifiedHide.style.display = 'none'
));


// mobile menu control code
const mobileButton = document.querySelector('.mobile-menu-button');
const mobileCancel = document.querySelectorAll('.cancel-mobile-menu');
const mobileMenu = document.querySelector('.mobile');

mobileButton.addEventListener('click', () =>
    mobileMenu.style.display = 'block'
);

mobileCancel.forEach(cancel => cancel.addEventListener('click', () =>
    mobileMenu.style.display = 'none'
));