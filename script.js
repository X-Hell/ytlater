document.getElementById('video-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const videoUrl = document.getElementById('video-url').value;
    const videoId = getYouTubeVideoId(videoUrl);
    
    if (videoId) {
      addVideoCard(videoId);
      document.getElementById('video-url').value = '';
    } else {
      alert('Please enter a valid YouTube URL.');
    }
  });
  
  function getYouTubeVideoId(url) {
    const regex = /(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:[^\/\n\s]+\/\S+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([a-zA-Z0-9_-]{11})/;
    const match = url.match(regex);
    return match ? match[1] : null;
  }
  
  function addVideoCard(videoId) {
    const videoCards = document.getElementById('video-cards');
    
    const videoCard = document.createElement('div');
    videoCard.classList.add('video-card');
    
    const thumbnail = document.createElement('img');
    thumbnail.src = `https://img.youtube.com/vi/${videoId}/0.jpg`;
    thumbnail.alt = 'Video Thumbnail';
    
    const link = document.createElement('a');
    link.href = `https://www.youtube.com/watch?v=${videoId}`;
    link.target = '_blank';
    link.textContent = 'Watch on YouTube';
    
    videoCard.appendChild(thumbnail);
    videoCard.appendChild(link);
    videoCards.appendChild(videoCard);
  }
3  