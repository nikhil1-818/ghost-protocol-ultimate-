// Loader animation
gsap.to(".loader", {
  opacity: 0,
  duration: 1,
  delay: 1.5,
  onComplete: () => document.querySelector(".loader").style.display = "none"
});

// Cursor
const cursor = document.querySelector(".cursor");
document.addEventListener("mousemove", e => {
  cursor.style.top = e.clientY + "px";
  cursor.style.left = e.clientX + "px";
});

// Hero animation
gsap.from(".hero-content h1", {
  y: 100,
  opacity: 0,
  duration: 1
});

// Scroll animation
gsap.utils.toArray(".card").forEach(card => {
  gsap.from(card, {
    scrollTrigger: card,
    y: 100,
    opacity: 0,
    duration: 1
  });
});

// 3D tilt effect
document.querySelectorAll(".card").forEach(card => {
  card.addEventListener("mousemove", e => {
    let x = e.offsetX;
    let y = e.offsetY;
    card.style.transform =
      `rotateX(${(y - 100)/10}deg) rotateY(${(x - 100)/10}deg)`;
  });

  card.addEventListener("mouseleave", () => {
    card.style.transform = "rotateX(0) rotateY(0)";
  });
});
