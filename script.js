let menuVisible = false;
//Función que oculta o muestra el menu
function mostrarOcultarMenu(){
    if(menuVisible){
        document.getElementById("nav").classList ="";
        menuVisible = false;
    }else{
        document.getElementById("nav").classList ="responsive";
        menuVisible = true;
    }
}

function seleccionar(){
    //oculto el menu una vez que selecciono una opcion
    document.getElementById("nav").classList = "";
    menuVisible = false;
}
//Funcion que aplica las animaciones de las habilidades
function efectoHabilidades(){
    var skills = document.getElementById("skills");
    if(!skills) return; // safe-guard: algunas páginas no tienen sección de skills
    var distancia_skills = window.innerHeight - skills.getBoundingClientRect().top;
    if(distancia_skills >= 300){
        let habilidades = document.getElementsByClassName("progreso");
        habilidades[0].classList.add("ofimatica");
        habilidades[1].classList.add("javascript");
        habilidades[2].classList.add("htmlcss")
        habilidades[3].classList.add("comunicacion");
        habilidades[4].classList.add("trabajo");
        habilidades[5].classList.add("resolucion");
        habilidades[6].classList.add("dedicacion");
        
    }
}



//detecto el scrolling para aplicar la animacion de la barra de habilidades
window.onscroll = function(){
    efectoHabilidades();
} 


/* Theme toggle: sets theme, toggles icon and persists preference */
function setTheme(theme){
    const icon = document.getElementById('theme-icon');
    if(theme === 'light'){
        document.body.classList.add('light-theme');
        if(icon){
            icon.classList.remove('fa-moon');
            icon.classList.add('fa-sun');
        }
    } else {
        document.body.classList.remove('light-theme');
        if(icon){
            icon.classList.remove('fa-sun');
            icon.classList.add('fa-moon');
        }
    }
    try{ localStorage.setItem('theme', theme); }catch(e){ }
}

function toggleTheme(){
    const isLight = document.body.classList.contains('light-theme');
    setTheme(isLight ? 'dark' : 'light');
}

// Form submission handler
function handleFormSubmit(e){
    e.preventDefault();
    
    const form = document.getElementById('contactForm');
    const messageDiv = document.getElementById('formMessage');
    const submitBtn = document.getElementById('submitBtn');
    
    if(!form) return;
    
    // Get form data
    const formData = new FormData(form);
    
    // Show loading state
    submitBtn.disabled = true;
    messageDiv.textContent = 'Enviando...';
    messageDiv.className = 'form-message loading';
    
    // Send to PHP handler
    fetch('contact_handler.php', {
        method: 'POST',
        body: formData
    })
    .then(response => response.json())
    .then(data => {
        submitBtn.disabled = false;
        if(data.success){
            messageDiv.textContent = '¡Mensaje enviado correctamente! Te responderemos pronto.';
            messageDiv.className = 'form-message success';
            form.reset();
            // Clear message after 5 seconds
            setTimeout(() => {
                messageDiv.textContent = '';
                messageDiv.className = 'form-message';
            }, 5000);
        } else {
            messageDiv.textContent = 'Error: ' + (data.message || 'No se pudo enviar el mensaje. Intenta más tarde.');
            messageDiv.className = 'form-message error';
        }
    })
    .catch(error => {
        submitBtn.disabled = false;
        messageDiv.textContent = 'Error de conexión. Por favor intenta más tarde.';
        messageDiv.className = 'form-message error';
        console.error('Error:', error);
    });
}

// Aplicar preferencia al cargar la página
document.addEventListener('DOMContentLoaded', function(){
    const saved = (function(){ try{ return localStorage.getItem('theme'); }catch(e){ return null; } })();
    if(saved === 'light') setTheme('light');
    else setTheme('dark');
    // bind theme toggle button if present
    try{
        const btn = document.getElementById('theme-toggle');
        if(btn) btn.addEventListener('click', function(e){
            e.preventDefault();
            const isLight = document.body.classList.contains('light-theme');
            setTheme(isLight ? 'dark' : 'light');
        });
    }catch(e){}
    
    // Bind contact form handler
    try{
        const contactForm = document.getElementById('contactForm');
        if(contactForm){
            contactForm.addEventListener('submit', handleFormSubmit);
        }
    }catch(e){}
});

