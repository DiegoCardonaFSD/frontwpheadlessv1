<template>
    <div>
        <div class="my-3 p-3 bg-white rounded shadow-sm">
            <div class="row">
                <div class="col-6 align-middle">
                    <h6 class="pb-2 mb-0 align-middle">Latest Candidates</h6>
                </div>
                <div class="col-6">
                    <button type="button" 
                    class="btn btn-primary btn-sm float-sm-right" 
                    @click="create()">Add</button>
                </div>
            </div>
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
                        <tr v-for="item of candidates" :key="item.id">
                            <th scope="row" v-text="item.id">1</th>
                            <td v-text="item.acf.name +' '+ item.acf.lastname "></td>
                            <td>
                                 <router-link :to="{ name: 'candidate', params: { id: item.id }}">
                                    <i class="fas fa-eye icons-right-space"></i>
                                </router-link>
                                <i class="fas fa-edit icons-right-space" @click="edit(item.id)"></i>
                                <i class="fas fa-trash" @click="_deleteCandidate(item.id)"></i>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div class="media text-muted pt-3 d-none d-md-block">
                <table class="table table-striped">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Name</th>
                            <th scope="col">Email</th>
                            <th scope="col">PhoneNumber</th>
                            <th scope="col">Position</th>
                            <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="item of candidates" :key="item.id">
                            <th scope="row" v-text="item.id">1</th>
                            <router-link :to="{ name: 'candidate', params: { id: item.id }}">
                                <td v-text="item.acf.name +' '+ item.acf.lastname "></td>
                            </router-link>
                            <td v-text="item.acf.email"></td>
                            <td v-text="item.acf.phonenumber"></td>
                            <td v-text="item.acf.position"></td>
                            <td>
                                <router-link :to="{ name: 'candidate', params: { id: item.id }}">
                                    <i class="fas fa-eye icons-right-space"></i>
                                </router-link>
                                <i class="fas fa-edit" style="margin-right: 10px" @click="edit(item.id)"></i>
                                <i class="fas fa-trash" @click="_deleteCandidate(item.id)"></i>
                            </td>
                        </tr>
                        
                    </tbody>
                </table>
            </div>
        </div>
        <CandidateModalCreateAndUpdate 
            :showModal="status" 
            :current_id="current_id"
            @showModalChanged="status = $event"></CandidateModalCreateAndUpdate>
    </div>
</template>

<script>

import {mapState,mapMutations} from 'vuex'  
import CandidateModalCreateAndUpdate from '@/components/CandidateModalCreateAndUpdate.vue'

export default {
    name: 'CandidatesList', 
    data(){
        return {
            status: false,
            current_id: 0,
        }
    },
    components: {
        CandidateModalCreateAndUpdate,
    },
    computed: {
        ...mapState(['candidates'])
    },
    methods: {
        _deleteCandidate(id){
           if(confirm('Are you sure you want to delete this item?')){
                this.$store.dispatch('deleteCandidate', id);
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