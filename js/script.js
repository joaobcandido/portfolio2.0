function downloadCV() {
    const link = document.createElement('a');
    link.href = 'Profile.pdf';
    link.download = 'meu_cv.pdf';
    link.click();
}