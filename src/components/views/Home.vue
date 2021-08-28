<template>
    <!-- eslint-disable -->
    <section>
    <b-navbar>
        <template #brand>
            <b-navbar-item tag="router-link" :to="{ path: '/' }">
                <img
                    src="/static/img/logo.png"
                    alt="Lightweight UI components for Vue.js based on Bulma"
                >
            </b-navbar-item>
        </template>
        <template #start>
            <b-navbar-item href="#">
                Home
            </b-navbar-item>
            <b-navbar-item href="#">
                About us
            </b-navbar-item>
            <!-- <b-navbar-dropdown label="Info"> -->
                <b-navbar-item href="#">
                    Blog
                </b-navbar-item>
                <b-navbar-item href="#">
                    Offers
                </b-navbar-item>
                <b-navbar-item href="#">
                    Contact
                </b-navbar-item>
            <!-- </b-navbar-dropdown> -->
        </template>

        <template #end>
            <b-navbar-item tag="div">
                <div class="buttons">
                    <a class="button is-primary">
                        <strong>Sign up</strong>
                    </a>
                    <a class="button is-light">
                        Log in
                    </a>
                </div>
            </b-navbar-item>
        </template>
    </b-navbar>

     <b-carousel
            :progress="progress"
            :progress-type="progressType">
            <b-carousel-item v-for="(carousel, i) in carousels" :key="i">
                <section :class="`hero is-medium is-white`">
                    <div class="hero-body has-text-centered">
                        <h1 class="title">{{carousel.title}}</h1>
                    </div>
                </section>
            </b-carousel-item>
        </b-carousel>
    <div class="columns">
        <div class="column is-two-fifths">
            <div class="container is-fluid">
                <div class="notification is-primary">

                        <b-field label= "Name" horizontal>
                        <b-input v-model="name"></b-input>
                        </b-field>

                    <b-field label="Email"
            type="is-danger"
            message="This email is invalid"
            horizontal>
            <b-input type="email"
                value="john@"
                maxlength="30">
            </b-input>
        </b-field>
 <b-field label="Subject" horizontal>
                        <b-select placeholder="Select a subject" expanded>
                            <option value="1">Economics</option>
                            <option value="2">Humanities</option>
                            <option value="2">Psychology</option>
                            <option value="2">Mathematics</option>
                        </b-select>
                    </b-field>
                        <!--<div class="field-body">

                            <div class="file has-name is-right">
                                <label class="file-label">
                                    <input class="file-input" type="file" name="resume">
                                    <span class="file-cta">
                                    <span class="file-icon">
                                        <i class="fas fa-upload"></i>
                                    </span>
                                    <span class="file-label">
                                        Choose a file…
                                    </span>
                                    </span>
                                    <span class="file-name">
                                    Economics.pdf
                                    </span>
                                </label>
                                </div>
                                </div> -->
                                    
                                      <b-field grouped  label="Word Count" horizontal>
            <b-input v-model="value" type="number"></b-input>
        </b-field>
        <b-field>
            <b-slider v-model="value" lazy></b-slider>
        </b-field>
             <b-button rounded expanded>Submit</b-button>

                    <!-- <b-field label="Name">
                    <b-input placeholder="John Doe"></b-input>
                    </b-field>

                    <b-field label="Email"
                        message="This email is invalid">
                        <b-input type="email"
                            placeholder="john@xyz.com"
                            maxlength="30">
                        </b-input>
                    </b-field> -->

                    <!-- <b-field label="Username"
                        message="This username is available">
                        <b-input placeholder="jodhndoe" maxlength="30"></b-input>
                    </b-field>

                    <b-field label="Password"
                        :message="['Password is too short', 'Password must have at least 8 characters']">
                        <b-input value="Password" type="password" maxlength="30"></b-input>
                    </b-field>

                    <b-field label="Subject">
                        <b-select placeholder="Select a subject">
                            <option value="1">Economics</option>
                            <option value="2">Humanities</option>
                            <option value="2">Psychology</option>
                            <option value="2">Mathematics</option>
                        </b-select>
                    </b-field> -->
                </div>
            </div>      
        </div>
        <div class="column is-half textcontainer">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Purus faucibus ornare suspendisse sed nisi. Ornare lectus sit amet est placerat in egestas. Suspendisse potenti nullam ac tortor vitae. Fringilla urna porttitor rhoncus dolor purus. Enim sit amet venenatis urna. Purus faucibus ornare suspendisse sed nisi lacus sed viverra tellus. Duis convallis convallis tellus id interdum velit laoreet. Dolor magna eget est lorem. In nisl nisi scelerisque eu ultrices vitae auctor eu augue. Vitae tempus quam pellentesque nec nam aliquam sem et. Morbi tincidunt augue interdum velit euismod. Et odio pellentesque diam volutpat commodo sed. Porttitor massa id neque aliquam vestibulum. Malesuada fames ac turpis egestas sed tempus urna et pharetra. Sem et tortor consequat id porta nibh venenatis cras sed. Nisl purus in mollis nunc sed id. Aenean et tortor at risus viverra. Nunc eget lorem dolor sed viverra.

Sit amet consectetur adipiscing elit duis tristique. Elementum pulvinar etiam non quam lacus. Malesuada fames ac turpis egestas maecenas pharetra convallis posuere morbi. Ultrices in iaculis nunc sed augue. Odio tempor orci dapibus ultrices in iaculis nunc. Sed felis eget velit aliquet sagittis id consectetur. Porta nibh venenatis cras sed felis eget velit aliquet sagittis. Ante in nibh mauris cursus mattis. Massa eget egestas purus viverra accumsan. Vel elit scelerisque mauris pellentesque pulvinar. Dapibus ultrices in iaculis nunc sed augue lacus viverra vitae. Scelerisque viverra mauris in aliquam sem fringilla ut morbi tincidunt. Sollicitudin aliquam ultrices sagittis orci a scelerisque purus semper.
</div>
  </div>
    </section>
</template>

<script>
/* eslint-disable */
export default {
    data() {
        return {
            progress: true,
            progressType: 'is-primary',
            carousels: [
                { title: 'Slide 1', color: 'grey' },
                { title: 'Slide 2', color: 'dark' },
                { title: 'Slide 3', color: 'primary' },
                { title: 'Slide 4', color: 'info' }
            ],
             value: 20
        }
    }
}
</script>

<style>

section {
	background: #fafafa !important;
	margin: 0;
}

.notification.is-primary{
    background: #7d97bd !important;
}
.textcontainer {
    margin: 25px;
    /* border: 2px solid black; */
}

.button.is-primary {
    /* background-color: #7957d5; */
    padding: 2%;
    border-color: transparent;
     color: #000; 
}
</style>
