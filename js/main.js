// Javascript code
console.log ('jsCode');
let movies = [
    {
      title: "The Northman",
      year: 2022,
      posterSrc: "./images/upcoming-1.png",
      duration: 137,
      rating: 8.5,
      isHD: true
    },
    {
      title: "Doctor Strange in the Multiverse of Madness",
      year: 2022,
      posterSrc: "./images/upcoming-2.png",
      duration: 148,
      rating: 8.8,
      isHD: true
    },
    {
      title: "Memory",
      year:2022,
      posterSrc: "./images/upcoming-3.png",
      duration: 175,
      rating: 9.2,
      isHD: false
    },
  ];
  // loop
 movies.forEach(movie => {
    console.log(movie)
  const ul= document.getElementById("movies-list")
  const li= document.createElement("li")
  const div= document.createElement("div")
  const link= document.createElement("a")
  const figure= document.createElement("figure")
  const img= document.createElement ("img")
  const titleWrapper = document.createElement("div");
  const titleLink = document.createElement("a");
  const title = document.createElement("h3");
  const releaseYear = document.createElement("time");
  const cardMeta = document.createElement("div");
  const hdBadge = document.createElement("div");
  const duration = document.createElement("div");
  const durationIcon = document.createElement("ion-icon");
  const durationTime = document.createElement("time");
  const rating = document.createElement("div");
  const ratingIcon = document.createElement("ion-icon");
  const ratingData = document.createElement("data");
  //console log just to test
  console.log(ul)
  ul.append(li)   
  li.append (div)
  div.classList.add("movie-card") 
  div.append(link)
  link.href = "./movie-details.html"
  figure.classList.add ("card-banner")
link.append(figure)
img.src=movie.posterSrc
figure.append(img)
img.alt=movie.title
titleWrapper.classList.add("title-wrapper");
div.append(titleWrapper);
titleWrapper.append(titleLink);
titleLink.href = "./movie-details.html";
titleLink.append(title);
title.classList.add("card-title");
title.textContent = movie.title;
titleWrapper.append(releaseYear);
releaseYear.setAttribute("datetime", movie.year);
releaseYear.textContent = movie.year;

div.append(cardMeta);
cardMeta.classList.add("card-meta");
cardMeta.append(hdBadge);
hdBadge.classList.add("badge", "badge-outline");
hdBadge.textContent = movie.isHD ? "HD" : "SD";
cardMeta.append(duration);
duration.classList.add("duration");
duration.append(durationIcon);
durationIcon.setAttribute("name", "time-outline");
duration.append(durationTime);
duration.setAttribute("datetime", `PT${movie.duration}M`);
durationTime.textContent = `${movie.duration} min`;
cardMeta.append(rating);
rating.classList.add("rating");
rating.append(ratingIcon);
ratingIcon.setAttribute("name", "star");
rating.append(ratingData);
ratingData.textContent = movie.rating;
});
  

let movieCard =[



]