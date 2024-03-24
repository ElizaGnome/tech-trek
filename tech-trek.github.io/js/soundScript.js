document.addEventListener('DOMContentLoaded', function() {
    // Load your pixel music audio file
	const audio = new Audio('/tech-trek.github.io/sound/Lufia & the Fortress of Doom - A Reunion. And.mp3');

		audio.play();
		audio.loop = true; 
		
    // Initially, the audio is playing
    let isAudioPlaying = true;

    // Event listener for the sound icon
    const soundIcon = document.getElementById('sound-icon');
    if (soundIcon) {
        soundIcon.addEventListener('click', function() {
            if (isAudioPlaying) {
                // Pause audio and change icon to sound off
                audio.pause();
                soundIcon.src = '/tech-trek.github.io/img/sound_off.png';
            } else {
                // Play audio and change icon to sound on
                audio.play();
                soundIcon.src = '/tech-trek.github.io/img/sound_on.png';
            }
            // Toggle audio playback state
            isAudioPlaying = !isAudioPlaying;
        });
    } else {
        console.error('Element with id "sound-icon" not found.');
    }
});
