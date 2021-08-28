<template>
  <!-- eslint-disable -->
  <section>
    <b-navbar>
      <template #brand>
        <b-navbar-item tag="router-link" :to="{ path: '/' }">
          <img
            src="/static/img/logo.png"
            alt="Lightweight UI components for Vue.js based on Bulma"
          />
        </b-navbar-item>
      </template>
      <template #start>
        <b-navbar-item href="#"> Home </b-navbar-item>
        <b-navbar-item href="#"> About us </b-navbar-item>
        <!-- <b-navbar-dropdown label="Info"> -->
        <b-navbar-item href="#"> Blog </b-navbar-item>
        <b-navbar-item href="#"> Offers </b-navbar-item>
        <b-navbar-item href="#"> Contact </b-navbar-item>
        <!-- </b-navbar-dropdown> -->
      </template>

      <template #end>
        <b-navbar-item tag="div">
          <div class="buttons">
            <!-- <a class="button is-primary">
              <strong>Sign up</strong>
            </a> -->
            <a class="button is-light"> Log in </a>
          </div>
        </b-navbar-item>
      </template>
    </b-navbar>

<div class='signup-container'>
  <div class='left-container'>
    <h1>
      <i class='fas fa-book-reader'></i>
      My Assignment Service
    </h1>
    <div class='puppy'>
      <img src='/static/img/idea.png'>
    </div>
  </div>
  <div class='right-container'>
    <header>
      <h1>Yay, puppies! Ensure your pup gets the best care!</h1>
      <div class='set'>
        <div class='pets-name'>
          <label for='pets-name'>Name</label>
          <input id='pets-name' placeholder="Pet's name" type='text'>
        </div>
        <div class='pets-photo'>
          <button id='pets-upload'>
            <i class='fas fa-camera-retro'></i>
          </button>
          <label for='pets-upload'>Upload a photo</label>
        </div>
      </div>
      <div class='set'>
        <div class='pets-breed'>
          <label for='pets-breed'>Breed</label>
          <input id='pets-breed' placeholder="Pet's breed" type='text'>
        </div>
        <div class='pets-birthday'>
          <label for='pets-birthday'>Birthday</label>
          <input id='pets-birthday' placeholder='MM/DD/YYYY' type='text'>
        </div>
      </div>
      <div class='set'>
        <div class='pets-gender'>
          <label for='pet-gender-female'>Gender</label>
          <div class='radio-container'>
            <input checked='' id='pet-gender-female' name='pet-gender' type='radio' value='female'>
            <label for='pet-gender-female'>Female</label>
            <input id='pet-gender-male' name='pet-gender' type='radio' value='male'>
            <label for='pet-gender-male'>Male</label>
          </div>
        </div>
        <div class='pets-spayed-neutered'>
          <label for='pet-spayed'>Spayed or Neutered</label>
          <div class='radio-container'>
            <input checked='' id='pet-spayed' name='spayed-neutered' type='radio' value='spayed'>
            <label for='pet-spayed'>Spayed</label>
            <input id='pet-neutered' name='spayed-neutered' type='radio' value='neutered'>
            <label for='pet-neutered'>Neutered</label>
          </div>
        </div>
      </div>
      <div class='pets-weight'>
        <label for='pet-weight-0-25'>Weight</label>
        <div class='radio-container'>
          <input checked='' id='pet-weight-0-25' name='pet-weight' type='radio' value='0-25'>
          <label for='pet-weight-0-25'>0-25 lbs</label>
          <input id='pet-weight-25-50' name='pet-weight' type='radio' value='25-50'>
          <label for='pet-weight-25-50'>25-50 lbs</label>
          <input id='pet-weight-50-100' name='pet-weight' type='radio' value='50-100'>
          <label for='pet-weight-50-100'>50-100 lbs</label>
          <input id='pet-weight-100-plus' name='pet-weight' type='radio' value='100+'>
          <label for='pet-weight-100-plus'>100+ lbs</label>
        </div>
      </div>
    </header>
    <footer>
      <div class='set'>
        <button id='back'>Back</button>
        <button id='next'>Next</button>
      </div>
    </footer>
  </div>
</div>

    <!-- <b-carousel :progress="progress" :progress-type="progressType">
      <b-carousel-item v-for="(carousel, i) in carousels" :key="i">
        <section :class="`hero is-medium is-white`">
          <div class="hero-body has-text-centered">
            <h1 class="title">{{ carousel.title }}</h1>
          </div>
        </section>
      </b-carousel-item>
    </b-carousel> -->
    <!-- <b-steps
      position="right"
      label-position="right"
      size="small"
      rounded="true"
      vertical
    > -->
      <!-- <b-step-item label="Account" icon="account-key"> -->
        <!-- <div class="columns">
          <div class="column firsthalf is-half textcontainer">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod
          </div> -->

          <!-- <div class="column is-two-fifths">
            <div class="container is-fluid">
              <div class="notification is-primary">
                <b-field label="Name" horizontal>
                  <b-input placeholder = "John Doe" v-model="name"></b-input>
                </b-field>

                <b-field
                  label="Email"
                  horizontal
                >
                  <b-input type="email" placeholder="johndoe@gmail.com" maxlength="30"> </b-input>
                </b-field>
                <b-field label="Subject" horizontal>
                  <b-select placeholder="Select a subject" expanded>
                    <option value="1">Economics</option>
                    <option value="2">Humanities</option>
                    <option value="2">Psychology</option>
                    <option value="2">Mathematics</option>
                  </b-select>
                </b-field>
                <b-field grouped label="Words" horizontal>
                  <b-input v-model="value" type="number"></b-input>
                </b-field>
                <b-field>
                  <b-slider v-model="value" lazy></b-slider>
                </b-field>
                <b-button rounded expanded>Submit</b-button>
              </div>
            </div>
          </div> -->
        </div>
      <!-- </b-step-item> -->
      <!-- <b-step-item label="Profile" icon="account">
        Profile: Lorem ipsum dolor sit amet. <br />
        Profile: Lorem ipsum dolor sit amet.? <br />
        Profile: Lorem ipsum dolor sit amet. <br />
        Profile: Lorem ipsum dolor sit amet.
      </b-step-item>

      <b-step-item label="Social" icon="account-plus" disabled>
        Social: Lorem ipsum dolor sit amet. <br />
        Social: Lorem ipsum dolor sit amet. <br />
        Social: Lorem ipsum dolor sit amet. <br />
        Social: Lorem ipsum dolor sit amet. <br />
        Social: Lorem ipsum dolor sit amet.
      </b-step-item>
    </b-steps> -->
  </section>
</template>

<script>
/* eslint-disable */
export default {
  data() {
    return {
      labelPosition: "bottom",
      progress: true,
      progressType: "is-primary",
      carousels: [
        { title: "Slide 1", color: "grey" },
        { title: "Slide 2", color: "dark" },
        { title: "Slide 3", color: "primary" },
        { title: "Slide 4", color: "info" },
      ],
      value: 20,
    };
  },
};
</script>

<style>


.button.is-primary {
  /* background-color: #7957d5; */
  padding: 2%;
  border-color: transparent;
  color: #000;
}
@import url("https://fonts.googleapis.com/css?family=Montserrat:400,600&display=swap");
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  align-items: center;
  background: #D8AA96 !important;
  color: rgba(0, 0, 0, 0.8);
  display: grid;
  font-family: "Montserrat", sans-serif;
  font-size: 14px;
  font-weight: 400;
  height: 100vh;
  justify-items: center;
  weight: 100vw;
}

.signup-container {
  display: grid;
  grid-template-areas: "left right";
  max-width: 900px;
}

.left-container {
  background: #807182;
  overflow: hidden;
  padding: 40px 0 0 0;
  position: relative;
  text-align: center;
  width: 300px;
}
.left-container h1 {
  color: rgba(0, 0, 0, 0.8);
  display: inline-block;
  font-size: 24px;
}
.left-container h1 i {
  background: #b0dff1;
  border-radius: 50%;
  color: #ffffff;
  font-size: 24px;
  margin-right: 5px;
  padding: 10px;
  transform: rotate(-45deg);
}
.left-container .puppy {
  bottom: -5px;
  position: absolute;
  text-align: center;
}
.left-container .puppy:before {
  background: #807182;
  content: "";
  height: 100%;
  left: 0;
  opacity: 0.4;
  position: absolute;
  width: 100%;
  z-index: 1;
}
.left-container img {
  filter: sepia(100%);
  width: 70%;
}

.right-container {
  background: #f9c7c2;
  display: grid;
  grid-template-areas: "." ".";
  width: 500px;
}
.right-container h1:nth-of-type(1) {
  color: rgba(0, 0, 0, 0.8);
  font-size: 28px;
  font-weight: 600;
}
.right-container .set {
  display: flex;
  justify-content: space-between;
  margin: 10px 0;
}
.right-container input {
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 4px;
  height: 38px;
  line-height: 38px;
  padding-left: 5px;
}
.right-container input, .right-container label {
  color: rgba(0, 0, 0, 0.8);
}
.right-container header {
  padding: 40px;
}
.right-container label, .right-container input, .right-container .pets-photo {
  width: 176px;
}
.right-container .pets-photo {
  align-items: center;
  display: grid;
  grid-template-areas: ". .";
}
.right-container .pets-photo button {
  border: none;
  border-radius: 50%;
  height: 38px;
  margin-right: 10px;
  outline: none;
  width: 38px;
}
.right-container .pets-photo button i {
  color: rgba(0, 0, 0, 0.8);
  font-size: 16px;
}
.right-container .pets-weight .radio-container {
  display: flex;
  justify-content: space-between;
  width: 100%;
}
.right-container footer {
  align-items: center;
  background: #fff;
  display: grid;
  padding: 5px 40px;
}
.right-container footer button {
  border: 1px solid rgba(0, 0, 0, 0.2);
  height: 38px;
  line-height: 38px;
  width: 100px;
  border-radius: 19px;
  font-family: "Montserrat", sans-serif;
}
.right-container footer #back {
  background: #fff;
  transition: 0.2s all ease-in-out;
}
.right-container footer #back:hover {
  background: #171A2B;
  color: white;
}
.right-container footer #next {
  background: #807182;
  border: 1px solid transparent;
  color: #fff;
}
.right-container footer #next:hover {
  background: #171A2B;
}

.pets-name label, .pets-breed label, .pets-birthday label, .pets-gender label, .pets-spayed-neutered label, .pets-weight label {
  display: block;
  margin-bottom: 5px;
}

.radio-container {
  background: #fff;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 4px;
  display: inline-block;
  padding: 5px;
}

.radio-container label {
  background: transparent;
  border: 1px solid transparent;
  border-radius: 2px;
  display: inline-block;
  height: 26px;
  line-height: 26px;
  margin: 0;
  padding: 0;
  text-align: center;
  transition: 0.2s all ease-in-out;
  width: 80px;
}

.radio-container input[type=radio] {
  display: none;
}

.radio-container input[type=radio]:checked + label {
  background: #F7B1AB;
  border: 1px solid rgba(0, 0, 0, 0.1);
}

</style>
