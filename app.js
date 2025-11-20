document.getElementById("orderForm").addEventListener("submit", function(e){
    e.preventDefault();

    const name = document.getElementById("name").value;
    const phone = document.getElementById("phone").value;
    const email = document.getElementById("email").value;

    const templateParams = { name, phone, email };

    // Use window.emailjs from v4
    window.emailjs.send('service_0ng5v9e', 'template_8rdbz5c', templateParams)
      .then((response) => {
          console.log('SUCCESS:', response);
          document.getElementById("status").innerText = "Email sent successfully!";
          document.getElementById("status").style.color = "green";
      }, (error) => {
          console.error('FAILED:', error);
          document.getElementById("status").innerText = "Email sending failed! Check console.";
          document.getElementById("status").style.color = "red";
      });

    document.getElementById("orderForm").reset();
});
