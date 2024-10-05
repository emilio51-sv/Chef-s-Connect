function closeForm(formId) {
    document.getElementById(formId).style.display = 'none';
}

function toggleForm(showFormId, hideFormId) {
    document.getElementById(showFormId).style.display = 'block';
    document.getElementById(hideFormId).style.display = 'none';
}

document.getElementById('job-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const restaurantName = document.getElementById('restaurant-name').value;
    const restaurantType = document.getElementById('restaurant-type').value;
    const position = document.getElementById('position').value;
    const salary = document.getElementById('salary').value;
    const requirements = document.getElementById('requirements').value;
    const jobDescription = document.getElementById('job-description').value;

    const jobData = {
        restaurantName,
        restaurantType,
        position,
        salary,
        requirements,
        jobDescription
    };

    fetch('/post-job', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(jobData)
    })
    .then(response => response.text())
    .then(data => {
        alert('Job posted successfully!');
        closeForm('post-job-form');
    })
    .catch(error => {
        console.error('Error posting job:', error);
        alert('Error posting job. Please try again.');
    });
});

document.getElementById('cv-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const fileInput = document.getElementById('cv-file');
    const file = fileInput.files[0];

    if (file && file.type === 'application/pdf') {
        const formData = new FormData();
        formData.append('cv-file', file);

        fetch('/upload-cv', {
            method: 'POST',
            body: formData
        })
        .then(response => response.text())
        .then(data => {
            alert('CV uploaded successfully!');
            closeForm('upload-cv-form');
        })
        .catch(error => {
            console.error('Error uploading CV:', error);
            alert('Error uploading CV. Please try again.');
        });
    } else {
        alert('Please upload a valid PDF file.');
    }
});
