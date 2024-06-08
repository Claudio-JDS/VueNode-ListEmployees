<script setup lang="ts">

</script>

<template>
  <div>
    <nav class="navbar navbar-expand-sm bg-dark navbar-dark">

      <div class="container">
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01"
          aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
          <ul class="navbar-nav mr-auto mt-2 mt-lg-1">
            <li class="nav-item">
              <RouterLink class="nav-link" to="/">Create new Employee</RouterLink>
            </li>
            <li class="nav-item">
              <RouterLink class="nav-link" to="/list-employess">List All Employees</RouterLink>
            </li>
            <li class="nav-item">
              <RouterLink class="nav-link" to="/edite-employee/:id">Update Employee</RouterLink>
            </li>
          </ul>

          <form class="form-inline my-2 my-lg-0">
            <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
            <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
          </form>

        </div>

      </div>

    </nav>
  </div>
</template>

<style scoped>
</style>