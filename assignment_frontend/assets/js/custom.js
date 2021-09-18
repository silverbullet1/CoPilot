$(document).ready(function () {
  // CHANGE ICON COLOR ON INPUT FOCUS
  let iconInputList = document.querySelectorAll(".with-icon input");

  iconInputList.forEach((iconInput) => {
    iconInput.addEventListener("focus", function () {
      this.parentElement.classList.add("input-focused");
    });

    iconInput.addEventListener("blur", function () {
      this.parentElement.classList.remove("input-focused");
    });
  });

  // CHANGE COLOR OF DATE INPUT PLACEHOLDER
  let dateInputList = document.querySelectorAll("input[type='date']");

  function checkInputValue(currentInput) {
    if (currentInput.value === "") {
      currentInput.style.color = "#bfbfbf";
    } else {
      currentInput.style.color = "#818181";
    }
  }

  dateInputList.forEach((dateInput) => {
    checkInputValue(dateInput);

    dateInput.addEventListener("focus", function () {
      checkInputValue(dateInput);
    });

    dateInput.addEventListener("blur", function () {
      checkInputValue(dateInput);
    });
  });

  // CHANGE COLOR OF SELECT BOX
  let selectBoxList = document.querySelectorAll("select");

  selectBoxList.forEach((selectBox) => {
    checkInputValue(selectBox);

    selectBox.addEventListener("focus", function () {
      checkInputValue(selectBox);
    });

    selectBox.addEventListener("blur", function () {
      checkInputValue(selectBox);
    });
  });

  // SLICK SLIDER
  $("#studentReviewsNav").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
    arrows: false,
    asNavFor: "#studentReviewImage",
    fade: true,
  });

  $("#studentReviewImage").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: false,
    arrows: false,
    asNavFor: "#studentReviewsNav",
    fade: true,
    draggable: false,
  });
  // SLICK SLIDER END
});
