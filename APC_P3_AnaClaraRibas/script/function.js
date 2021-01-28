function navbar() {
    document.getElementById("navbar-content").innerHTML = 
        `<div class="cover-container d-flex w-100 h-100 p-3 mx-auto flex-column">
        <header class="masthead mb-auto">
            <nav class="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
                <a class="navbar-brand" href="index.html" target="_self"><img src="../content/platejoy-logo2.png" alt="" height="36" width="78" /></a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse" id="navbarCollapse">
                    <ul class="navbar-nav mr-auto" id="buttons-navbar-left">
                        <li class="nav-item">
                            <a class="nav-link" href="form-recipes.html">Recipes</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="https://www.mealime.com/">Meal Planner</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="https://www.mealime.com/kitchen-essentials-list">Cookware</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="https://www.platejoy.com/blog">Blog</a>
                        </li>
                        <li class="nav-item active">
                            <a class="nav-link" href="form-login.html">Sign In<span class="sr-only">(current)</span></a>
                        </li>
                    </ul>
                </div>

                <form class="form-inline mt-2 mt-md-0">
                    <input class="form-control mr-sm-2" id="searchbar-textbox" type="text" placeholder="Search and Filter" aria-label="Search and Filter">
                    <button class="btn btn-outline-info my-2 my-sm-0" id="button-search-navbar" type="submit">Search</button>
                </form>
            </nav>
        </header>`;
}

function footer() {
    document.getElementById("footer-content").innerHTML = 
        `<footer class="my-5 pt-5 text-muted text-center text-small">
            <p>Bootstrap by <a href="https://www.instagram.com/aclararibas/">aclararibas</a>.</p>
            <ul class="list-inline">
                <li class="list-inline-item"><a href="#">Privacy</a></li>
                <li class="list-inline-item"><a href="#">Terms</a></li>
                <li class="list-inline-item"><a href="#">Support</a></li>
            </ul>
        </footer>`;
}

window.onload = init;

function init() {
    navbar();
    footer();
}

// Example starter JavaScript for disabling form submissions if there are invalid fields
(function () {
    'use strict'

    window.addEventListener('load', function () {
        // Fetch all the forms we want to apply custom Bootstrap validation styles to
        var forms = document.getElementsByClassName('needs-validation')

        // Loop over them and prevent submission
        Array.prototype.filter.call(forms, function (form) {
            form.addEventListener('submit', function (event) {
                if (form.checkValidity() === false) {
                    event.preventDefault()
                    event.stopPropagation()
                }
                form.classList.add('was-validated')
            }, false)
        })
    }, false)
}())


