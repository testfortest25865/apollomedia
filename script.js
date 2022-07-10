$(function () {
  $(".slider_smm").slick();
  $(".slider_sayt").slick();
  $(".slider_seo").slick();
  $(".slider_m_polygrafiya").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
    autoplay: true,
    autoplaySpeed: 1200,
  });
  $(".slider_port").slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000,
    responsive: [
      {
        breakpoint: 700,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });
});

const timer = document.getElementById("timer");
const startDate = new Date("10/18/2017");
startTimer();

function startTimer() {
  setInterval(function () {
    const now = new Date();
    const diferenceinms = now - startDate;
    const date = new Date(now - startDate);
    const day = Math.floor(diferenceinms / (1000 * 60 * 60 * 24));

    timer.innerHTML = `
      <div class="timer_ timer_one">
        <h4>${day}</h4>
        <h5>ДНЕЙ</h5>
      </div>
      <div class="timer_colon">
        <p>:</p>
      </div>
      <div class="timer_ timer_two">
        <h4>${date.getHours()}</h4>
        <h5>ЧАСОВ</h5>
      </div>
      <div class="timer_colon">
        <p>:</p>
      </div>
      <div class="timer_ timer_three">
        <h4>${date.getMinutes()}</h4>
        <h5>МИНУТ</h5>
      </div>
      <div class="timer_colon">
        <p>:</p>
      </div>
      <div class="timer_ timer_four">
        <h4>${date.getSeconds()}</h4>
        <h5>СЕКУНД</h5>
      </div>`;
  }, 1000);
}

let sliderIndex = 0;
let sliderInterval = 0;

slider_progress();

function slider_progress() {
  sliderInterval = setInterval(() => {
    showOneSlider(sliderIndex);
    sliderIndex = sliderIndex + 1;
    if (sliderIndex == 4) {
      sliderIndex = 0;
    }
  }, 2000);
}

function handleSliderClick(index) {
  if (sliderInterval) {
    clearInterval(sliderInterval);
  }
  showOneSlider(index);
}

function showOneSlider(index) {
  document.querySelectorAll(".number_slider").forEach((slider) => {
    slider.classList.add("d-none");
  });
  const oneSlider = document.querySelector(`[data-index="${index}"]`);
  oneSlider.classList.remove("d-none");

  document.querySelectorAll(".slider_name").forEach((slider) => {
    slider.classList.remove("activ");
  });

  const sliderName = document.querySelector(`[data-target="${index}"]`);
  sliderName.classList.add("activ");

  console.log("demo");
}

