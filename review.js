function datareview() {
  const reviews = JSON.parse(localStorage.getItem("reviewsdata")); // Get stored reviews array

  let container = document.getElementById("cards"); // Get the container

  reviews.forEach(datas => {
    let card = document.createElement("div");
    card.className = "card";

    card.innerHTML = `
      <img src="${datas.userImg}" alt="User Image" class="user-img" />
      <p class="review-text">${datas.review}</p>
      <p class="rating">⭐ ${datas.rating}</p>
    `;

    container.appendChild(card);
  });
}

// Call the function on page load
datareview();



document.getElementById("review-nextpage").onclick=function() {
    window.location="about.html"
}