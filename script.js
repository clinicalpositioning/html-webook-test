document.getElementById('myForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const formData = new FormData(this);
    const data = Object.fromEntries(formData);

    fetch('https://hook.eu2.make.com/oq21o9t9ntmo3cfn3pdmif2v1m4g168l', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    .then(response => {
        if (response.ok) {
            window.location.href = 'thankyou.html';
        } else {
            alert('Error submitting the form. Please try again.');
        }
    })
    .catch(error => {
        console.error('Error:', error);
        alert('Error submitting the form. Please try again.');
    });
});
