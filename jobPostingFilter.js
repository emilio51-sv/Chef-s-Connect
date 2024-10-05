document.getElementById('filter-button').addEventListener('click', function() {
    filterJobs();
});

// Oggetto per le descrizioni dei lavori
const jobDescriptions = {
    job1: '<h4>Chef Marco</h4><p>Job Description: Seeking a talented chef with experience in Italian cuisine.</p>',
    job2: '<h4>Chef Alessandro</h4><p>Job Description: Looking for a head chef for a new fine dining restaurant.</p>',
    job3: '<h4>Chef Matteo</h4><p>Job Description: Hiring a pastry chef with expertise in desserts.</p>',
    job4: '<h4>Chef Sofia</h4><p>Job Description: Seeking a chef for a busy Italian restaurant.</p>',
    job5: '<h4>Chef Luca</h4><p>Job Description: Looking for a freelance chef for private events.</p>',
    job6: '<h4>Chef Isabella</h4><p>Job Description: Hiring a part-time chef for a small cafe.</p>',
};

// Funzione per mostrare la descrizione del lavoro
function showJobDescription(jobId) {
    const descriptionContent = jobDescriptions[jobId] || '<p>Select a job to see the description.</p>';
    document.getElementById('descriptionContent').innerHTML = descriptionContent;
    document.getElementById('jobDescription').style.display = 'block'; // Mostra la descrizione
}

// Funzione per filtrare i lavori
function filterJobs() {
    const locationFilter = document.getElementById('location').value.toLowerCase();
    const typeFilter = document.getElementById('type').value.toLowerCase();
    const jobList = document.getElementById('job-list');
    const jobCards = jobList.getElementsByClassName('job-card');

    for (let i = 0; i < jobCards.length; i++) {
        const jobLocation = jobCards[i].getAttribute('data-location');
        const jobType = jobCards[i].getAttribute('data-type');

        if ((locationFilter === 'all' || jobLocation === locationFilter) &&
            (typeFilter === 'all' || jobType === typeFilter)) {
            jobCards[i].style.display = ''; // Mostra la scheda del lavoro
        } else {
            jobCards[i].style.display = 'none'; // Nasconde la scheda del lavoro
        }
    }
}

// Funzione per candidarsi a un lavoro
function applyJob(jobId) {
    const confirmationMessage = document.createElement('div');
    confirmationMessage.innerText = `Application submitted for ${jobId}`;
    confirmationMessage.style.position = 'fixed';
    confirmationMessage.style.top = '20px';
    confirmationMessage.style.right = '20px';
    confirmationMessage.style.background = 'lightgreen';
    confirmationMessage.style.padding = '10px';
    confirmationMessage.style.borderRadius = '5px';
    document.body.appendChild(confirmationMessage);

    setTimeout(() => {
        document.body.removeChild(confirmationMessage);
    }, 3000); // Rimuovi il messaggio dopo 3 secondi
}

// Funzione per chiudere la descrizione del lavoro
function closeJobDescription() {
    document.getElementById('jobDescription').style.display = 'none'; // Nasconde la descrizione del lavoro
}

// Mostra il pulsante "Post a Job" se l'utente è un ristoratore
const isHiringAccount = true; // Cambia questa variabile in base allo stato dell'account
if (isHiringAccount) {
    document.getElementById('post-job-button').style.display = 'block';
}
