const input = document.getElementById("profile-img");
const preview = document.getElementById("profile-input");

input.addEventListener('change', function() {
    const file = this.files[0];
    console.log(file);
    
    if (file) {
        const reader = new FileReader();
        reader.onload = function(event) {
            preview.src = event.target.result;
            preview.style.display = 'block'; 
            console.log(preview.src);
            console.log(event.target.result);
            
            
        }
        reader.readAsDataURL(file);
    }
});

