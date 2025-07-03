document.addEventListener('DOMContentLoaded', function () {
    // Find the Download Resume button by its text
    const buttons = document.querySelectorAll('a.btn-contact');
    buttons.forEach(btn => {
        if (btn.textContent.trim().includes('Download Resume')) {
            btn.addEventListener('click', function (e) {
                e.preventDefault();
                console.log('Download Resume button clicked');
                // Path to the PDF file (relative to the HTML file)
                const pdfPath = 'documents/vivian_otieno_cv.pdf';
                // Create a temporary link and trigger download
                const link = document.createElement('a');
                link.href = pdfPath;
                link.download = 'Vivian_Otieno_CV.pdf';
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
            });
        }
    });
});