<template>
    <div>
        <div class="bg-light">
            <nav class="navbar navbar-dark bg-primary navbar-expand-lg ">
            <a class="navbar-brand" href="#">HeadLess WP Test</a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav mr-auto">
                        <li class="nav-item active">
                            <router-link to="/interviews">
                                <a class="nav-link text-white">Interviews</a>
                            </router-link>
                        </li>
                        <li class="nav-item active">
                            <router-link to="/candidates">
                                <a class="nav-link text-white">Candidates</a>
                            </router-link>
                        </li>
                        <li class="nav-item active">
                            <router-link to="/interviewers">
                                <a class="nav-link text-white">Interviewers</a>
                            </router-link>
                        </li>
                    </ul>
                    <form class="form-inline my-2 my-lg-0">
                        <input class="form-control mr-sm-2 text-light light" type="search" placeholder="Search" aria-label="Search">
                        <button class="btn btn-outline-success my-2 my-sm-0 text-light" type="submit">Search</button>
                    </form>
                </div>
            </nav>
            
        </div>
    </div>
</template>

<script>
export default {
    name: 'Header'    
}
</script>

