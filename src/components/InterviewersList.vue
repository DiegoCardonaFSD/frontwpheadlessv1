<template>
    <div>
        <div class="my-3 p-3 bg-white rounded shadow-sm">
            <h6 class="pb-2 mb-0">Interviewers</h6>
            <div class="media text-muted pt-3 d-block d-md-none">
                <table class="table table-striped">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Name</th>
                            <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="item of interviewers" :key="item.id">
                            <th scope="row" v-text="item.id">1</th>
                            <td v-text="item.acf.name +' '+ item.acf.lastname "></td>
                            <td>
                                <i class="fas fa-eye"></i>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div class="media text-muted pt-3 d-none d-md-block">
                <table class="table table-striped ">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Name</th>
                            <th scope="col">Email</th>
                            <th scope="col">PhoneNumber</th>
                            <th scope="col">Technologies Evaluated</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="item of interviewers" :key="item.id">
                            <th scope="row" v-text="item.id">1</th>
                            <router-link :to="{ name: 'interviewer', params: { id: item.id }}">
                                <td v-text="item.acf.name +' '+ item.acf.lastname "></td>
                            </router-link>
                            <td v-text="item.acf.email"></td>
                            <td v-text="item.acf.phonenumber"></td>
                            <td v-text="item.acf.technologies_evaluated"></td>
                        </tr>
                        
                    </tbody>
                </table>
            </div>
        </div>

    </div>
</template>

<script>

import {mapState} from 'vuex'

export default {
    name: 'InterviewersList', 
    computed: {
        ...mapState(['interviewers'])
    }
}
</script>

