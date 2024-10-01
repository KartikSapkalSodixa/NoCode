document.addEventListener("DOMContentLoaded", () => {
    const blobContainer = document.getElementById('blob-container');
    const colors = ['#E4449C', '#F89D24'];
    const blobs = [];

    // Get the size of the section where blobs are located
    const containerRect = blobContainer.getBoundingClientRect();

    // Function to create and animate blobs
    function createBlob(color, startX, endX, startY, endY, size) {
        const blob = document.createElement('div');
        blob.classList.add('blob');
        blob.style.width = size + 'px';
        blob.style.height = size + 'px';
        blob.style.backgroundColor = color;
        blobContainer.appendChild(blob);

        gsap.set(blob, {
            x: startX,
            y: startY,
        });

        gsap.to(blob, {
            x: endX,
            y: endY,
            duration: 10 + Math.random() * 10,
            ease: "none",
            repeat: -1,
            yoyo: true
        });

        blobs.push(blob);
    }

    // Create blobs with coordinates within the blobContainer dimensions
    const randomY1 = Math.random() * containerRect.height;
    const randomY2 = Math.random() * containerRect.height;
    createBlob(colors[0], -200, containerRect.width + 200, randomY1, containerRect.height / 2, 500);
    createBlob(colors[1], containerRect.width + 200, -200, randomY2, containerRect.height / 2, 500);

    // Navbar link animations
    const navLinks = document.querySelectorAll('.navbar a');
    navLinks.forEach((link, index) => {
        gsap.from(link, {
            y: -100, 
            opacity: 0, 
            duration: 0.5,
            delay: index * 0.1,
            ease: 'back.out(1.7)', 
        });
    });

    // Navbar register link hover animation
    const arrowRegister = document.querySelector('.register-link');
    const arrow = document.querySelector('.register-arrow');
    
    arrowRegister.addEventListener('mouseenter', () => {
        gsap.to(arrow, { y: -7, duration: 0.3, ease: 'power2.out' });
    });

    arrowRegister.addEventListener('mouseleave', () => {
        gsap.to(arrow, { y: 0, duration: 0.3, ease: 'power2.in' });
    });

  
});
