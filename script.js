const videos = [
    {
        url: 'https://vhs.watchanimesub.net/?uuid=0f8c794b-aa75-4f20-8d4d-90679fec4142&pre=1&pid=932754&h=469b80042247b8bb46aefa18ed1e15ff&t=1740368533',
        title: 'Season 1 Episode 1',
        admin: 'RnD Admin'
    },
    {
        url: 'https://vhs.watchanimesub.net/?uuid=8378ecde-bdbe-4d8f-bd17-f91bb210f531&pre=1&pid=932755&h=e0adb7a67b0dbb3230ca5270cb30302f&t=1740371331',
        title: 'Season 1 Episode 2',
        admin: 'RnD Admin'
    },
    {
        url: 'https://vhs.watchanimesub.net/?uuid=cc139f32-a451-4f6e-b35c-caba039892d3&pre=1&pid=932756&h=998423b91531416c5e3dd15b87c938c5&t=1740371359',
        title: 'Season 1 Episode 3',
        admin: 'RnD Admin'
    },
    {
        url: 'https://vhs.watchanimesub.net/?uuid=188a2a2a-fc7c-4250-a822-4aa68bf63340&pre=1&pid=932757&h=d3bdb94564608bd03847f745bd083d87&t=1740370702',
        title: 'Season 1 Episode 4',
        admin: 'RnD Admin'
    },
    {
        url: 'https://vhs.watchanimesub.net/?uuid=3aee0010-02c9-471f-b375-df2315613b76&pre=1&pid=932758&h=2b862e4dfc011b8dd0de5fc1fc4ace83&t=1740371396',
        title: 'Season 1 Episode 5',
        admin: 'RnD Admin'
    }
];

let currentVideoIndex = -1;

function generateVideoTitles() {
    const videoItems = document.querySelectorAll('.video-item');

    videoItems.forEach((item, index) => {
        const video = videos[index];

        // Set the title from the video object
        item.querySelector('p').textContent = video.title;

        // Set the admin to "RnD Admin"
        video.admin = 'RnD Admin';
    });
}

function openModal(index) {
    currentVideoIndex = index;
    const video = videos[index];
    const videoPlayer = document.getElementById('videoPlayer');

    // Set the video source
    videoPlayer.src = video.url;

    // Set the title from the video object
    document.getElementById('videoTitle').textContent = video.title;

    // Set the admin
    document.getElementById('videoAdmin').textContent = video.admin;

    // Update navigation buttons
    updateNavigationButtons();

    // Show the modal
    document.getElementById('videoModal').style.display = 'block';
}

function closeModal() {
    const videoPlayer = document.getElementById('videoPlayer');
    videoPlayer.src = ''; // Stop the video
    document.getElementById('videoModal').style.display = 'none';
}

function nextVideo() {
    if (currentVideoIndex < videos.length - 1) {
        openModal(currentVideoIndex + 1);
    } else {
        closeModal(); // If there are no more videos, close the modal
    }
}

function previousVideo() {
    if (currentVideoIndex > 0) {
        openModal(currentVideoIndex - 1);
    }
}

function updateNavigationButtons() {
    const backButton = document.getElementById('backButton');
    const nextButton = document.getElementById('nextButton');
    const backVideoTitle = document.getElementById('backVideoTitle');
    const nextVideoTitle = document.getElementById('nextVideoTitle');

    // Update back button
    if (currentVideoIndex > 0) {
        backVideoTitle.textContent = videos[currentVideoIndex - 1].title;
        backButton.disabled = false;
    } else {
        backVideoTitle.textContent = 'No previous video';
        backButton.disabled = true;
    }

    // Update next button
    if (currentVideoIndex < videos.length - 1) {
        nextVideoTitle.textContent = videos[currentVideoIndex + 1].title;
        nextButton.disabled = false;
    } else {
        nextVideoTitle.textContent = 'No next video';
        nextButton.disabled = true;
    }
}

// Generate titles for the video list when the page loads
generateVideoTitles();