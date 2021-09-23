<template>
  <body>
    <header>
      <div class="container">
        <nav class="navbar navbar-expand-lg">
          <a class="navbar-brand me-4" href="#">
            <img
              src="static/img/logo.png"
              alt=""
              class="img-fluid img-contain"
            />
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>

          <div class="collapse navbar-collapse" id="navbarNav">
            

            <ul class="navbar-nav me-auto ms-4">
            <li>
            <div class="header-search">
                <div class="form-group with-icon">
                  <span class="input-icon">
                    <i class="ri-search-2-line"></i>
                  </span>
                  <input
                    type="search"
                    placeholder="Search"
                    class="form-input"
                  />
                </div>
            </div>
            </li>
              <li class="nav-item">
                <a class="nav-link active" href="#1"
                  >Services</a
                >
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#2">Study Material</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#3">Blog</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#4">Order Now</a>
              </li>
            </ul>

            <div class="header-user-actions">
              <button class="custom-btn light-btn">Login</button>
              <button class="custom-btn dark-btn ms-2">Signup</button>
            </div>
          </div>
        </nav>
      </div>
    </header>

    <main>
      <div class="container">
        <div class="home-banner bg-theme">
          <div class="row align-items-center">
            <div class="col-md-6">
              <div class="home-banner-text">
                <h1 class="fw-bold mb-4 text-pure-white">
                  We help you complete your assignment on time!
                </h1>
                <p class="mb-5">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam
                  nemo aut quisquam maxime numquam sit iusto excepturi
                  architecto minima quia?
                </p>

                <h5 class="fw-medium feature-title text-pure-white">
                  Price starts at just <strong>$10</strong> only
                </h5>
                <ul class="with-checkmark">
                  <li>Unlimited revisions</li>
                  <li>Our expert team</li>
                  <li>Downloadable samples</li>
                </ul>
              </div>
            </div>
            <div class="col-md-6">
              <form action="" class="home-banner-form bg-theme-dark">
                <h4 class="mb-4 fw-bold text-pure-white">Hire Now!</h4>

                <div class="row">
                  <div class="col-6 mb-3">
                    <div class="form-group">
                      <label for="fullName" class="mb-2">Full Name</label>
                      <input
                        id="fullName"
                        type="text"
                        class="form-input"
                        placeholder="Enter word count"
                      />
                    </div>
                  </div>
                  <div class="col-6 mb-3">
                    <div class="form-group">
                      <label for="emailAddress" class="mb-2"
                        >Email Address</label
                      >
                      <input
                        id="emailAddress"
                        type="email"
                        class="form-input"
                        placeholder="Enter email address"
                      />
                    </div>
                  </div>
                  <div class="col-6 mb-3">
                    <div class="form-group">
                      <label for="subject" class="mb-2">Subject</label>
                      <select name="subjects" id="subject" class="form-input">
                        <option value="">Choose Subject</option>
                        <option value="Maths">Maths</option>
                        <option value="Science">Science</option>
                        <option value="SocialScience">Social Science</option>
                      </select>
                    </div>
                  </div>
                  <div class="col-6 mb-3">
                    <div class="form-group">
                      <label for="deadline" class="mb-2">Deadline</label>
                      <input
                        type="date"
                        name="deadline"
                        id="deadline"
                        class="form-input"
                      />
                    </div>
                  </div>

                  <div class="col-12 mb-3">
                    <label for="wordCountRange" class="form-label"
                      >Select Word Count</label
                    >
                    <input
                      type="range"
                      class="form-range"
                      id="wordCountRange"
                    />
                  </div>

                  <div class="col-6 mb-3">
                    <div class="form-group">
                      <label for="wordCount" class="mb-2">Word Count</label>
                      <input
                        type="number"
                        name="wordCount"
                        id="wordCount"
                        class="form-input"
                        placeholder="Enter Word Count"
                      />
                    </div>
                  </div>
                  <div class="col-6 mb-3">
                    <div class="form-group">
                      <label for="phone" class="mb-2">Phone Number</label>
                      <input
                        type="tel"
                        name="phone"
                        id="phone"
                        class="form-input"
                        placeholder="Enter Phone Number"
                      />
                    </div>
                  </div>
                  <div class="col-12 text-end mt-3">
                    <button type="submit" class="custom-btn dark-btn">
                      Let's Start
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </main>

    <section class="spacing-top-large spacing-bottom-large">
      <div class="container" id = "1">
        <div class="row">
          <div class="col-md-5 pe-5">
            <div class="sticky-title-box">
              <h2 class="mb-4 fw-semi-bold">
                Free value added services for HD grade assignments
              </h2>
              <p class="mb-4 text-gray">
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet sint. Velit officia consequat duis enim velit mollit.
                Exercitation veniam consequat.
              </p>
              <a href="javascript:void(0)" class="custom-btn dark-btn"
                >Read More</a
              >
            </div>
          </div>
          <div class="col-md-7 ps-5">
            <div class="services-grid">
              <div class="service-item pe-4">
                <div class="service-item-icon">
                  <img
                    src="static/img/icons/service-report.svg"
                    alt=""
                    class="img-fluid img-contain mb-4"
                  />
                </div>
                <div class="service-item-content">
                  <h4 class="fw-semi-bold mb-2">Turnetit report</h4>
                  <p class="text-gray clamp">
                    Amet minim mollit non deserunt ullamcot sit aliqua dolor do
                    amet sint. Velit officia oi consequat duis enim velit
                    mollit. ercitation veniam consequat.
                  </p>
                </div>
              </div>
              <div class="service-item pe-4">
                <div class="service-item-icon">
                  <img
                    src="static/img/icons/service-checked.svg"
                    alt=""
                    class="img-fluid img-contain mb-4"
                  />
                </div>
                <div class="service-item-content">
                  <h4 class="fw-semi-bold mb-2">Quality Check</h4>
                  <p class="text-gray clamp">
                    Amet minim mollit non deserunt ullamcot sit aliqua dolor do
                    amet sint. Velit officia oi consequat duis enim velit
                    mollit. ercitation veniam consequat.
                  </p>
                </div>
              </div>
              <div class="service-item pe-4">
                <div class="service-item-icon">
                  <img
                    src="static/img/icons/service-edit.svg"
                    alt=""
                    class="img-fluid img-contain mb-4"
                  />
                </div>
                <div class="service-item-content">
                  <h4 class="fw-semi-bold mb-2">Proofreading & Editing</h4>
                  <p class="text-gray clamp">
                    Amet minim mollit non deserunt ullamcot sit aliqua dolor do
                    amet sint. Velit officia oi consequat duis enim velit
                    mollit. ercitation veniam consequat.
                  </p>
                </div>
              </div>
              <div class="service-item pe-4">
                <div class="service-item-icon">
                  <img
                    src="static/img/icons/service-consulting.svg"
                    alt=""
                    class="img-fluid img-contain mb-4"
                  />
                </div>
                <div class="service-item-content">
                  <h4 class="fw-semi-bold mb-2">Proofreading & Editing</h4>
                  <p class="text-gray clamp">
                    Amet minim mollit non deserunt ullamcot sit aliqua dolor do
                    amet sint. Velit officia oi consequat duis enim velit
                    mollit. ercitation veniam consequat.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="bg-theme-light spacing-top-large spacing-bottom-large">
      <div class="container" id = "2">
        <div class="row">
          <div class="col-md-3">
            <div class="stat-box text-center">
              <div class="stat-icon mb-4">
                <img
                  src="static/img/icons/assignment.svg"
                  alt=""
                  class="img-fluid img-contain"
                />
              </div>
              <h4 class="fw-medium mb-2">10K+</h4>
              <h6 class="fw-reguler">Assignments Complete</h6>
            </div>
          </div>
          <div class="col-md-3">
            <div class="stat-box text-center">
              <div class="stat-icon mb-4">
                <img
                  src="static/img/icons/rating.svg"
                  alt=""
                  class="img-fluid img-contain"
                />
              </div>
              <h4 class="fw-medium mb-2">8+</h4>
              <h6 class="fw-reguler">Experties In This field</h6>
            </div>
          </div>
          <div class="col-md-3">
            <div class="stat-box text-center">
              <div class="stat-icon mb-4">
                <img
                  src="static/img/icons/student.svg"
                  alt=""
                  class="img-fluid img-contain"
                />
              </div>
              <h4 class="fw-medium mb-2">10K+</h4>
              <h6 class="fw-reguler">Happy Students</h6>
            </div>
          </div>
          <div class="col-md-3">
            <div class="stat-box text-center">
              <div class="stat-icon mb-4">
                <img
                  src="static/img/icons/trophy.svg"
                  alt=""
                  class="img-fluid img-contain"
                />
              </div>
              <h4 class="fw-medium mb-2">200</h4>
              <h6 class="fw-reguler">Awards Won</h6>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="spacing-top-large spacing-bottom-large">
      <div class="container">
        <div class="row">
          <div class="col-md-5 pe-5">
            <div class="sticky-title-box">
              <h2 class="mb-4 fw-semi-bold">Trusted by educators at</h2>
              <p class="mb-4 text-gray">
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet sint. Velit officia consequat duis enim velit mollit.
                Exercitation veniam consequat.
              </p>
            </div>
          </div>
          <div class="col-md-7 ps-5">
            <div class="university-grid">
              <div class="university-item">
                <img
                  src="static/img/uni/bond_uni.png"
                  alt=""
                  class="img-inherit img-contain"
                />
              </div>
              <div class="university-item">
                <img
                  src="static/img/uni/csu_uni.png"
                  alt=""
                  class="img-inherit img-contain"
                />
              </div>
              <div class="university-item">
                <img
                  src="static/img/uni/latrobe_uni.png"
                  alt=""
                  class="img-inherit img-contain"
                />
              </div>
              <div class="university-item">
                <img
                  src="static/img/uni/acu_uni.png"
                  alt=""
                  class="img-inherit img-contain"
                />
              </div>
              <div class="university-item">
                <img
                  src="static/img/uni/UNSW-University.png"
                  alt=""
                  class="img-inherit img-contain"
                />
              </div>
              <div class="university-item">
                <img
                  src="static/img/uni/ust_uni.png"
                  alt=""
                  class="img-inherit img-contain"
                />
              </div>
              <div class="university-item">
                <img
                  src="static/img/uni/Australian-national-University.png"
                  alt=""
                  class="img-inherit img-contain"
                />
              </div>
              <div class="university-item">
                <img
                  src="static/img/uni/FlindersUniversity.png"
                  alt=""
                  class="img-inherit img-contain"
                />
              </div>
              <div class="university-item">
                <img
                  src="static/img/uni/JamesCookUniversity.png"
                  alt=""
                  class="img-inherit img-contain"
                />
              </div>
              <div class="university-item">
                <img
                  src="static/img/uni/deakin-uni.png"
                  alt=""
                  class="img-inherit img-contain"
                />
              </div>
              <div class="university-item">
                <img
                  src="static/img/uni/macquarie-University.png"
                  alt=""
                  class="img-inherit img-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section
      class="features bg-theme-light spacing-bottom-large spacing-top-large"
    >
      <div class="container">
        <div class="title-bar text-center mb-5">
          <h4 class="fw-semi-bold clamp">
            Exceptional online assignment help in Australia
          </h4>
          <p class="text-gray mx-auto paragraph-contain">
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim velit mollit. Exercitation
            veniam consequat.
          </p>
        </div>

        <div class="row gy-4">
          <div class="col-lg-4">
            <div class="feature-item bg-white">
              <div class="feature-icon">
                <img
                  src="static/img/icons/graduated.svg"
                  alt=""
                  class="img-inherit img-contain"
                />
              </div>
              <h4 class="fw-semi-bold clamp mb-2">
                Dissertation writing service
              </h4>
              <p class="text-gray">
                Amet minim mollit non deserunt ullamcot sit liqua dolor do amet
                sint. Velit officia oi consequat duis enim velit mollit.
                ercitation veniam consequat.
              </p>
            </div>
          </div>
          <div class="col-lg-4">
            <div class="feature-item bg-white">
              <div class="feature-icon">
                <img
                  src="static/img/icons/service-edit.svg"
                  alt=""
                  class="img-inherit img-contain"
                />
              </div>
              <h4 class="fw-semi-bold clamp mb-2">Essay writing</h4>
              <p class="text-gray">
                Amet minim mollit non deserunt ullamcot sit liqua dolor do amet
                sint. Velit officia oi consequat duis enim velit mollit.
                ercitation veniam consequat.
              </p>
            </div>
          </div>
          <div class="col-lg-4">
            <div class="feature-item bg-white">
              <div class="feature-icon">
                <img
                  src="static/img/icons/grad-hat.svg"
                  alt=""
                  class="img-inherit img-contain"
                />
              </div>
              <h4 class="fw-semi-bold clamp mb-2">Thesis writing</h4>
              <p class="text-gray">
                Amet minim mollit non deserunt ullamcot sit liqua dolor do amet
                sint. Velit officia oi consequat duis enim velit mollit.
                ercitation veniam consequat.
              </p>
            </div>
          </div>
          <div class="col-lg-4">
            <div class="feature-item bg-white">
              <div class="feature-icon">
                <img
                  src="static/img/icons/docs.svg"
                  alt=""
                  class="img-inherit img-contain"
                />
              </div>
              <h4 class="fw-semi-bold clamp mb-2">Research proposal writing</h4>
              <p class="text-gray">
                Amet minim mollit non deserunt ullamcot sit liqua dolor do amet
                sint. Velit officia oi consequat duis enim velit mollit.
                ercitation veniam consequat.
              </p>
            </div>
          </div>
          <div class="col-lg-4">
            <div class="feature-item bg-white">
              <div class="feature-icon">
                <img
                  src="static/img/icons/write.svg"
                  alt=""
                  class="img-inherit img-contain"
                />
              </div>
              <h4 class="feature-title fw-semi-bold clamp mb-2">
                Case study writing
              </h4>
              <p class="text-gray">
                Amet minim mollit non deserunt ullamcot sit liqua dolor do amet
                sint. Velit officia oi consequat duis enim velit mollit.
                ercitation veniam consequat.
              </p>
            </div>
          </div>
          <div class="col-lg-4">
            <div class="feature-item bg-white">
              <div class="feature-icon">
                <img
                  src="static/img/icons/monitor.svg"
                  alt=""
                  class="img-inherit img-contain"
                />
              </div>
              <h4 class="fw-semi-bold mb-2">Online exam & Quiz assistance</h4>
              <p class="text-gray">
                Amet minim mollit non deserunt ullamcot sit liqua dolor do amet
                sint. Velit officia oi consequat duis enim velit mollit.
                ercitation veniam consequat.
              </p>
            </div>
          </div>
          <div class="col-12 text-center mt-5">
            <a href="javascript:void(0)" class="custom-btn dark-btn"
              >Explore More</a
            >
          </div>
        </div>
      </div>
    </section>

    <section class="spacing-bottom-large spacing-top-large">
      <div class="container">
        <div class="title-bar text-center mb-5">
          <h4 class="fw-semi-bold clamp">
            Our subject expertise in online assignment help
          </h4>
          <p class="text-gray mx-auto paragraph-contain">
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim velit mollit. Exercitation
            veniam consequat.
          </p>
        </div>

        <div class="row gy-4">
          <div class="col-xxl-3">
            <div class="expertise-card">
              <div class="expertise-icon me-5">
                <img
                  src="static/img/icons/management.svg"
                  alt=""
                  class="img-inherit img-contain"
                />
              </div>
              <h6 class="text-pure-black fw-semi-bold mb-0">Management</h6>
            </div>
          </div>
          <div class="col-xxl-3">
            <div class="expertise-card">
              <div class="expertise-icon me-5">
                <img
                  src="static/img/icons/nurse.svg"
                  alt=""
                  class="img-inherit img-contain"
                />
              </div>
              <h6 class="text-pure-black fw-semi-bold mb-0">Nursing</h6>
            </div>
          </div>
          <div class="col-xxl-3">
            <div class="expertise-card">
              <div class="expertise-icon me-5">
                <img
                  src="static/img/icons/balance.svg"
                  alt=""
                  class="img-inherit img-contain"
                />
              </div>
              <h6 class="text-pure-black fw-semi-bold mb-0">Law</h6>
            </div>
          </div>
          <div class="col-xxl-3">
            <div class="expertise-card">
              <div class="expertise-icon me-5">
                <img
                  src="static/img/icons/bar-chart.svg"
                  alt=""
                  class="img-inherit img-contain"
                />
              </div>
              <h6 class="text-pure-black fw-semi-bold mb-0">Statistics</h6>
            </div>
          </div>
          <div class="col-xxl-3">
            <div class="expertise-card">
              <div class="expertise-icon me-5">
                <img
                  src="static/img/icons/accounting.svg"
                  alt=""
                  class="img-inherit img-contain"
                />
              </div>
              <h6 class="text-pure-black fw-semi-bold mb-0">Accounting</h6>
            </div>
          </div>
          <div class="col-xxl-3">
            <div class="expertise-card">
              <div class="expertise-icon me-5">
                <img
                  src="static/img/icons/engineering.svg"
                  alt=""
                  class="img-inherit img-contain"
                />
              </div>
              <h6 class="text-pure-black fw-semi-bold mb-0">Engineering</h6>
            </div>
          </div>
          <div class="col-xxl-3">
            <div class="expertise-card">
              <div class="expertise-icon me-5">
                <img
                  src="static/img/icons/coding.svg"
                  alt=""
                  class="img-inherit img-contain"
                />
              </div>
              <h6 class="text-pure-black fw-semi-bold mb-0">IT</h6>
            </div>
          </div>
          <div class="col-xxl-3">
            <div class="expertise-card">
              <div class="expertise-icon me-5">
                <img
                  src="static/img/icons/global.svg"
                  alt=""
                  class="img-inherit img-contain"
                />
              </div>
              <h6 class="text-pure-black fw-semi-bold mb-0">Economics</h6>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="bg-theme-light spacing-top-large spacing-bottom-large">
      <div class="container">
        <div class="row">
          <div class="col-lg-6">
            <div class="student-review-section-content">
              <div class="title-bar mb-5">
                <h2 class="fw-semi-bold">What our Students say about us</h2>
                <p class="text-gray">
                  Amet minim mollit non deserunt ullamco est sit aliqua dolor
                  amet sint.
                </p>
              </div>

              <div id="studentReviewsNav" class="review-slider">
                <div class="student-review-item">
                  <div class="stu-review-text mb-5">
                    <q class="fw-semi-bold stu-review-head mb-3"
                      >Excellent work</q
                    >
                    <p class="text-gray">
                      Amet minim mollit non deserunt ullamco est sit aliqua
                      dolor do amet sint. Velit officia consequat duis enim
                      velit mollit. Exercitation veniam consequat.
                    </p>
                  </div>

                  <div class="stu-review-by mb-4">
                    <h4 class="fw-semi-bold mb-2">Jesicca Doe</h4>
                    <h4 class="fw-reguler">California, United States</h4>
                  </div>
                </div>

                <div class="student-review-item">
                  <div class="stu-review-text mb-5">
                    <q class="fw-semi-bold stu-review-head mb-3"
                      >Very useful website</q
                    >
                    <p class="text-gray">
                      Amet minim mollit non deserunt ullamco est sit aliqua
                      dolor do amet sint. Velit officia consequat duis enim
                      velit mollit. Exercitation veniam consequat.
                    </p>
                  </div>

                  <div class="stu-review-by mb-4">
                    <h4 class="fw-semi-bold mb-2">Arthur Morgan</h4>
                    <h4 class="fw-reguler">West Virginia, United States</h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-6">
            <div id="studentReviewImage" class="review-img-slider">
              <div class="stu-review-img">
                <img
                  src="static/img/student1.png"
                  alt=""
                  class="img-contain img-inherit"
                />
              </div>
              <div class="stu-review-img">
                <img
                  src="static/img/student1.png"
                  alt=""
                  class="img-contain img-inherit"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="spacing-bottom-large spacing-top-large">
      <div class="container">
        <div class="title-bar text-center mb-5">
          <h4 class="fw-semi-bold clamp">Our latest Blog</h4>
          <p class="text-gray mx-auto paragraph-contain">
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim velit mollit. Exercitation
            veniam consequat.
          </p>
        </div>

        <div class="card-grid mb-5">
          <article>
            <a href="javascript:void(0)" class="card-item">
              <div class="card-image">
                <img
                  src="static/img/blog-image-1.jpg"
                  alt=""
                  class="img-inherit img-cover"
                />
              </div>
              <div class="card-content">
                <p class="card-date text-gray">8 Sept, 2021</p>
                <h6 class="card-title text-pure-black fw-semi-bold clamp">
                  Brand Ambassador
                </h6>
                <p class="card-description text-gray clamp">
                  Amet minim mollit non deserunt ullamco est sit tyo aliqua
                  dolor do amet sint. Velit officia consequat pt duis enim velit
                  mollit. Exercitation
                </p>
              </div>
            </a>
          </article>
          <article>
            <a href="javascript:void(0)" class="card-item">
              <div class="card-image">
                <img
                  src="static/img/blog-image-2.jpg"
                  alt=""
                  class="img-inherit img-cover"
                />
              </div>
              <div class="card-content">
                <p class="card-date text-gray">15 Sept, 2021</p>
                <h6 class="card-title text-pure-black fw-semi-bold clamp">
                  Area Sales Manager
                </h6>
                <p class="card-description text-gray clamp">
                  Amet minim mollit non deserunt ullamco est sit tyo aliqua
                  dolor do amet sint. Velit officia consequat pt duis enim velit
                  mollit. Exercitation
                </p>
              </div>
            </a>
          </article>
          <article>
            <a href="javascript:void(0)" class="card-item">
              <div class="card-image">
                <img
                  src="static/img/blog-image-3.jpg"
                  alt=""
                  class="img-inherit img-cover"
                />
              </div>
              <div class="card-content">
                <p class="card-date text-gray">20 Sept, 2021</p>
                <h6 class="card-title text-pure-black fw-semi-bold clamp">
                  Business Development
                </h6>
                <p class="card-description text-gray clamp">
                  Amet minim mollit non deserunt ullamco est sit tyo aliqua
                  dolor do amet sint. Velit officia consequat pt duis enim velit
                  mollit. Exercitation
                </p>
              </div>
            </a>
          </article>
          <article>
            <a href="javascript:void(0)" class="card-item">
              <div class="card-image">
                <img
                  src="static/img/blog-image-2.jpg"
                  alt=""
                  class="img-inherit img-cover"
                />
              </div>
              <div class="card-content">
                <p class="card-date text-gray">15 Sept, 2021</p>
                <h6 class="card-title text-pure-black fw-semi-bold clamp">
                  Area Sales Manager
                </h6>
                <p class="card-description text-gray clamp">
                  Amet minim mollit non deserunt ullamco est sit tyo aliqua
                  dolor do amet sint. Velit officia consequat pt duis enim velit
                  mollit. Exercitation
                </p>
              </div>
            </a>
          </article>
        </div>

        <section class="bg-theme dots-bg text-center spacing-large">
          <div class="newsletter-wrap">
            <h2 class="fw-semi-bold text-pure-white">
              Subscribe to our newsletter
            </h2>
            <p class="text-light mb-4">
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis enim velit mollit.
            </p>

            <form action="">
              <div class="form-group with-append">
                <input
                  type="email"
                  class="form-input"
                  placeholder="Email Address"
                />
                <button class="custom-btn dark-btn">Subscribe</button>
              </div>
            </form>
          </div>
        </section>
      </div>
    </section>

    <footer>
      <div class="footer-links bg-black">
        <div class="container">
          <div class="row">
            <div class="col">
              <div class="footer-links-list">
                <h6 class="footer-list-title text-gray">Quick Links</h6>
                <ul>
                  <li>
                    <a href="javascript:void(0)" class="link-light">Home</a>
                  </li>
                  <li>
                    <a href="javascript:void(0)" class="link-light">Services</a>
                  </li>
                  <li>
                    <a href="javascript:void(0)" class="link-light">Samples</a>
                  </li>
                  <li>
                    <a href="javascript:void(0)" class="link-light">Blogs</a>
                  </li>
                  <li>
                    <a href="javascript:void(0)" class="link-light">FAQ</a>
                  </li>
                  <li>
                    <a href="javascript:void(0)" class="link-light">Offers</a>
                  </li>
                  <li>
                    <a href="javascript:void(0)" class="link-light">Careers</a>
                  </li>
                  <li>
                    <a href="javascript:void(0)" class="link-light"
                      >Contact us</a
                    >
                  </li>
                </ul>
              </div>
            </div>
            <div class="col d-flex">
              <div class="footer-links-list mt-auto">
                <ul>
                  <li>
                    <a href="javascript:void(0)" class="link-light"
                      >Value added service</a
                    >
                  </li>
                  <li>
                    <a href="javascript:void(0)" class="link-light">About Us</a>
                  </li>
                  <li>
                    <a href="javascript:void(0)" class="link-light"
                      >User reviews</a
                    >
                  </li>
                  <li>
                    <a href="javascript:void(0)" class="link-light"
                      >Review Us</a
                    >
                  </li>
                  <li>
                    <a href="javascript:void(0)" class="link-light"
                      >Our Policies</a
                    >
                  </li>
                  <li>
                    <a href="javascript:void(0)" class="link-light"
                      >Privacy Policy</a
                    >
                  </li>
                  <li>
                    <a href="javascript:void(0)" class="link-light"
                      >Revision Policy</a
                    >
                  </li>
                  <li>
                    <a href="javascript:void(0)" class="link-light"
                      >Terms & Conditions</a
                    >
                  </li>
                </ul>
              </div>
            </div>
            <div class="col">
              <div class="footer-links-list">
                <h6 class="footer-list-title text-gray">Services</h6>
                <ul>
                  <li>
                    <a href="" class="link-light">Assignments</a>
                  </li>
                  <li>
                    <a href="" class="link-light">Dissertation</a>
                  </li>
                  <li>
                    <a href="" class="link-light">Thesis</a>
                  </li>
                  <li><a href="" class="link-light">TAFE</a></li>
                  <li>
                    <a href="" class="link-light">Essay</a>
                  </li>
                  <li>
                    <a href="" class="link-light">Reports</a>
                  </li>
                  <li>
                    <a href="" class="link-light">Literature review</a>
                  </li>
                  <li>
                    <a href="" class="link-light">Research Proposal</a>
                  </li>
                </ul>
              </div>
            </div>
            <div class="col">
              <div class="footer-links-list">
                <h6 class="footer-list-title text-gray fw-semi-bold">
                  Subjects
                </h6>
                <ul>
                  <li>
                    <a href="javascript:void(0)" class="link-light"
                      >Engineering</a
                    >
                  </li>
                  <li>
                    <a href="javascript:void(0)" class="link-light"
                      >Marketing</a
                    >
                  </li>
                  <li>
                    <a href="javascript:void(0)" class="link-light">Nursing</a>
                  </li>
                  <li>
                    <a href="javascript:void(0)" class="link-light"
                      >Accounting</a
                    >
                  </li>
                  <li>
                    <a href="javascript:void(0)" class="link-light"
                      >Management</a
                    >
                  </li>
                  <li>
                    <a href="javascript:void(0)" class="link-light">Law</a>
                  </li>
                  <li>
                    <a href="javascript:void(0)" class="link-light"
                      >Statistics</a
                    >
                  </li>
                  <li>
                    <a href="javascript:void(0)" class="link-light"
                      >IT/ Computer Science</a
                    >
                  </li>
                </ul>
              </div>
            </div>
            <div class="col">
              <div class="footer-links-list">
                <h6 class="footer-list-title text-gray fw-semi-bold">
                  Library
                </h6>
                <ul>
                  <li>
                    <a href="javascript:void(0)" class="link-light"
                      >Questions</a
                    >
                  </li>
                  <li>
                    <a href="javascript:void(0)" class="link-light"
                      >Resources</a
                    >
                  </li>
                  <li>
                    <a href="javascript:void(0)" class="link-light">News</a>
                  </li>
                  <li>
                    <a href="javascript:void(0)" class="link-light"
                      >Ask Your Question</a
                    >
                  </li>
                  <li>
                    <a href="javascript:void(0)" class="link-light"
                      >Help & Support</a
                    >
                  </li>
                </ul>
              </div>
              <h6 class="footer-list-title text-gray fw-semi-bold">
                Download our app
              </h6>
              <ul class="social-list">
                <li class="social-item">
                  <a
                    href="https://play.google.com"
                    class="social-link link-light"
                    target="_blank"
                  >
                    <i class="ri-android-fill"></i>
                  </a>
                </li>
                <li class="social-item">
                  <a
                    href="https://www.apple.com/app-store/"
                    class="social-link link-light"
                    target="_blank"
                    ><i class="ri-apple-fill"></i
                  ></a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div class="copyright bg-theme-light text-center">
        <p class="mb-0">Copyright @ 2021 All rights Reserved.</p>
      </div>
    </footer>
  </body>
</template>

<script>
/* eslint-disable */
export default {};
$(document).ready(function() {
		$('a[href*=#]').bind('click', function(e) {
				e.preventDefault(); // prevent hard jump, the default behavior

				var target = $(this).attr("href"); // Set the target as variable

				// perform animated scrolling by getting top-position of target-element and set it as scroll target
				$('html, body').stop().animate({
						scrollTop: $(target).offset().top
				}, 600, function() {
						location.hash = target; //attach the hash (#jumptarget) to the pageurl
				});

				return false;
		});
});

$(window).scroll(function() {
		var scrollDistance = $(window).scrollTop();

		// Show/hide menu on scroll
		//if (scrollDistance >= 850) {
		//		$('nav').fadeIn("fast");
		//} else {
		//		$('nav').fadeOut("fast");
		//}
	
		// Assign active class to nav links while scolling
		$('.container').each(function(i) {
				if ($(this).position().top <= scrollDistance) {
						$('.nav-link a.active').removeClass('active');
						$('.nav-link a').eq(i).addClass('active');
				}
		});
}).scroll();
</script>

<style>
@import url("https://fonts.googleapis.com/css?family=Montserrat:400,600&display=swap");

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

/* RESET CSS */
html,
body {
  background-color: white !important;
}
/* RESET CSS END */

body {
  font-family: "Montserrat", sans-serif;
}

a,
.btn {
  transition: 0.3s all;
}
</style>
