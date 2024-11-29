document.querySelector('.animated-button').addEventListener('click', function(event) {
    event.preventDefault();
    const targetUrl = this.href;
    document.body.style.transition = 'opacity 0.5s ease';
    document.body.style.opacity = '0';

    setTimeout(() => {
        window.location.href = targetUrl; 
    }, 500); 
});

const profilePic = document.querySelector('.profile-pic');

profilePic.addEventListener('click', () => {
    profilePic.classList.toggle('clicked');
});