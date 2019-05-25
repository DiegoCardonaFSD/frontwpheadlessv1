<template>
    <div>
        <div class="my-3 p-3 bg-white rounded shadow-sm">
            <h6 class="pb-2 mb-0">Latest Interviews</h6>
            <div class="media text-muted pt-3">
                <table class="table table-striped">
                    <thead>
                        <tr>
                        <th scope="col">#</th>
                        <th scope="col">Interviewer</th>
                        <th scope="col">Candidate</th>
                        <th scope="col">Date</th>
                        <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="item of interviews" :key="item.id">
                                <th scope="row" v-text="item.id">1</th>
                                <td v-text="item.acf.interviewer.post_title"></td>
                                <td v-text="item.acf.candidate.post_title"></td>
                                <td  v-text="item.acf.date"></td>
                                <td>
                                    <i class="fas fa-search-plus"></i>
                                </td>
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
    name: 'ListInterviews', 
    computed: {
        ...mapState(['interviews'])
    }
}
</script>

