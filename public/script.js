$(document).ready(function () {
  // Add smooth scrolling to all links and buttons
  $("a").on("click", function (event) {
    // Uzimanje id-a sekcije iz href ili onclick atributa
    var targetId = $(this)
      .attr("href")
      .match(/'(.*?)'/)[1];

    if (targetId) {
      // Sprečava defaultnu akciju (ako je link)
      event.preventDefault();

      // Koristi jQuery animate da izvršiš scroll
      $("html, body").animate(
        {
          scrollTop: $(targetId).offset().top,
        },
        800
      ); // 800 ms za smooth scroll
    }
  });
});

function sendMail() {
  console.log(
    document.getElementById("name").value,
    document.getElementById("email"),
    document.getElementById("message")
  );
  var params = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,

    message: document.getElementById("message").value,
  };

  const serviceId = "service_l4eiav4";

  const templateId = "template_qhxt2ke";

  emailjs
    .send(serviceId, templateId, params)
    .then((res) => {
      document.getElementById("name").value = "";
      document.getElementById("email").value = "";
      document.getElementById("message").value = "";
      console.log(res);
      alert("your message sent successfully");
    })
    .catch((err) => console.log(err));
}
