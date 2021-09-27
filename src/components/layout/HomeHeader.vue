<template>
  <header>
    <div class="container">
      <nav class="navbar navbar-expand-lg">
        <a class="navbar-brand me-4" href="#">
          <img src="static/img/logo.png" alt="" class="img-fluid img-contain" />
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
              <a class="nav-link active" href="#1">Services</a>
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
</template>

<script>
/* eslint-disable */
export default {
  name: "HomeHeader"
};
</script>

<style>
/* HEADER */
header {
  height: 120px;
  display: flex;
  align-items: center;
}

.navbar-brand {
  width: 35px;
}

.header-search {
  max-width: 420px;
  width: 100%;
}

.navbar-expand-lg .navbar-nav .nav-link {
  padding: 0.5rem 1.5rem;
}

header .nav-link {
  font-weight: 500;
  color: var(--text-dark);
}
/* HEADER END */
</style>
