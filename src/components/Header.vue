<template>
    <div>
        <div class="bg-light">
            <nav class="navbar navbar-dark bg-primary navbar-expand-lg ">
                <router-link to="/">
                    <a class="navbar-brand text-white">HeadLess WP Test</a>
                </router-link>
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

