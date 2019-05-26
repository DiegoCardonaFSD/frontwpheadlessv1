<template>
    <div>
        <div class="my-3 p-3 bg-white rounded shadow-sm">
            <div class="row">
                <div class="col-6 align-middle">
                    <h6 class="pb-2 mb-0 align-middle">Latest Interviews</h6>
                </div>
                <div class="col-6">
                    <button type="button" 
                    class="btn btn-primary btn-sm float-sm-right" 
                    @click="create()">Add</button>
                </div>
            </div>
            <div class="media text-muted pt-3 d-block d-md-none">
                <table class="table table-striped ">
                    <thead>
                        <tr>
                        <th scope="col">#</th>
                        <th scope="col">Interviewer</th>
                        <th scope="col">Candidate</th>
                        <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="(item,i) of interviews" :key="`l-${i}-${item.id}`">
                                <th scope="row" v-text="item.id">1</th>
                                <td v-text="item.acf.interviewer.post_title"></td>
                                <td v-text="item.acf.candidate.post_title"></td>
                                <td>
                                    <router-link :to="{ name: 'interview', params: { id: item.id }}">
                                        <i class="fas fa-search-plus icons-right-space"></i>
                                    </router-link>
                                    <i class="fas fa-edit icons-right-space" @click="edit(item.id)"></i>
                                    <i class="fas fa-trash" @click="_deleteInterview(item.id)"></i>
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
                        <th scope="col">Interviewer</th>
                        <th scope="col">Candidate</th>
                        <th scope="col">Date</th>
                        <th scope="col">Status</th>
                        <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="(item,i) of interviews" :key="`lw-${i}-${item.id}`">
                                <th scope="row" v-text="item.id">1</th>
                                <td v-text="item.acf.interviewer.post_title"></td>
                                <td v-text="item.acf.candidate.post_title"></td>
                                <td  v-text="item.acf.date"></td>
                                <td  v-text="item.acf.status"></td>
                                <td>
                                    <router-link :to="{ name: 'interview', params: { id: item.id }}">
                                        <i class="fas fa-search-plus icons-right-space"></i>
                                    </router-link>
                                    <i class="fas fa-edit icons-right-space" @click="edit(item.id)"></i>
                                    <i class="fas fa-trash" @click="_deleteInterview(item.id)"></i>
                                </td>
                            </tr>
                        
                    </tbody>
                    </table>
            </div>
        </div>
        <InterviewModalCreateAndUpdate 
            :showModal="status" 
            :current_id="current_id"
            @showModalChanged="status = $event"></InterviewModalCreateAndUpdate>
    </div>
</template>

<script>

import {mapState, mapActions} from 'vuex'
import InterviewModalCreateAndUpdate from '@/components/InterviewModalCreateAndUpdate.vue'

export default {
    name: 'ListInterviews', 
    data(){
        return {
            status: false,
            current_id: 0,
        }
    },
    components: {
        InterviewModalCreateAndUpdate,
    },
    computed: {
        ...mapState(['interviews'])
    },
    methods: {
        ...mapActions(['deleteInterview']),
        _deleteInterview(id){
           if(confirm('Are you sure you want to delete this item?')){
                this.$store.dispatch('deleteInterview', id);
           }
        },
        create(){
            this.current_id = 0;
            this.status = true;
        },
        edit(id){
            this.current_id = id;
            this.status = true;
        }
    }
}
</script>

<style scoped>
.icons-right-space{
     margin-right: 10px
}
</style>