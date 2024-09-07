async function randomUser() {
  try {
    const url = await fetch("https://randomuser.me/api/");
    const user = await url.json();
    const result = user.results[0];

    const cart = document.createElement("div");
    cart.className = "cart";
    document.body.appendChild(cart);

    const photo = document.createElement("div");
    photo.className = "photo";
    photo.style.backgroundImage = `url(${result.picture.large})`;
    cart.appendChild(photo);

    const bioData = document.createElement("div");
    bioData.className = "bioData";
    cart.appendChild(bioData);

    const name = document.createElement("h1");
    name.innerHTML = `${result.name.title} ${result.name.first} ${result.name.last}`;
    bioData.appendChild(name);

    const email = document.createElement("span");
    email.innerHTML = `Email: ${result.email}`;
    bioData.appendChild(email);

    const dob = document.createElement("span");
    let date = new Date(result.dob.date).toLocaleDateString();
    dob.innerHTML = `DOB: ${date}, Age: ${result.dob.age}, <br> Gender: ${result.gender}`;
    bioData.appendChild(dob);

    const location = document.createElement("span");
    location.innerHTML = `Address: ${result.location.city}, ${result.location.state}, ${result.location.country}, ${result.location.postcode}`;
    bioData.appendChild(location);

    const phone = document.createElement("span");
    phone.innerHTML = `Phone No: ${result.phone}`;
    bioData.appendChild(phone);
  } catch (error) {
    console.log(error);
  }
}

randomUser();

const button = document.querySelector("button");
button.addEventListener("click", (e) => {
  e.preventDefault();
  location.reload();
});
