document.addEventListener('DOMContentLoaded', () => {
    const pages = document.querySelectorAll('.scrapbook-page');
    const tabLinks = document.querySelectorAll('.nav-tabs a');
    let currentIndex = 0;
    
    // Function to show only the active page
    function showPage(index) {
        pages.forEach((page, i) => {
            page.classList.remove('active');
            if (i === index) {
                page.classList.add('active');
            }
        });
        currentIndex = index; // Update current index
    }

    // Add click event listener to each tab link
    tabLinks.forEach((tab, index) => {
        tab.addEventListener('click', (e) => {
            e.preventDefault();
            showPage(index); // Display the corresponding page
        });
    });

    // Drag functionality variables
    let isDragging = false;
    let startX;
    let currentX;

    // Function to handle mouse down
    function handleMouseDown(event) {
        isDragging = true;
        startX = event.clientX; // Get the initial mouse position
        currentX = startX; // Set current position to start
    }

    // Function to handle mouse move
    function handleMouseMove(event) {
        if (!isDragging) return;

        currentX = event.clientX; // Update current mouse position
        let xDiff = currentX - startX; // Calculate the difference

        if (Math.abs(xDiff) > 100) { // Check if the drag is significant
            if (xDiff > 0) {
                goPrevious(); // Dragging to the right
            } else {
                goNext(); // Dragging to the left
            }
            isDragging = false; // Reset dragging state
        }
    }

    // Function to handle mouse up
    function handleMouseUp() {
        isDragging = false; // Reset dragging state
    }

    function goNext() {
        if (currentIndex < pages.length - 1) {
            showPage(currentIndex + 1);
        }
    }

    function goPrevious() {
        if (currentIndex > 0) {
            showPage(currentIndex - 1);
        }
    }

    // Attach mouse event listeners
    document.addEventListener('mousedown', handleMouseDown, false);
    document.addEventListener('mousemove', handleMouseMove, false);
    document.addEventListener('mouseup', handleMouseUp, false);

    // Show the first page initially
    showPage(currentIndex);
});
