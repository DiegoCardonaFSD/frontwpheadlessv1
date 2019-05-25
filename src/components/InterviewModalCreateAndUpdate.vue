
<template>
    <div class="container">
        <div v-if="showModal">
            <transition name="modal">
                <div class="modal-mask">
                    <div class="modal-wrapper">

                    <div class="modal-dialog" role="document">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title">Interview</h5>
                                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true" @click="closeModal">&times;</span>
                                </button>
                            </div>
                            <div class="modal-body">
                                <div class="media text-muted pt-3">
                                    <table class="table table-bordered">
                                        <tbody>
                                            <tr v-if="current_id != 0">
                                                <th>Interviewer</th>
                                                <td v-text="current_id"></td>
                                            </tr>
                                            <tr>
                                                <th>Interviewer</th>
                                                <td>
                                                    <select v-model="interviewer.id">
                                                        <option disabled value="">Please select one</option>
                                                        <option v-for="item of interviewers"
                                                         :key="item.id"
                                                        v-text="item.acf.name+' '+item.acf.lastname"
                                                        v-bind:value="item.id"></option>
                                                        
                                                    </select>
                                                </td>
                                            </tr>
                                            <tr>
                                                <th>Candidate</th>
                                                <td>
                                                    <select v-model="candidate.id">
                                                        <option disabled value="">Please select one</option>
                                                        <option v-for="item of candidates"
                                                         :key="item.id"
                                                        v-text="item.acf.name+' '+item.acf.lastname"
                                                        v-bind:value="item.id"></option>
                                                        
                                                    </select>
                                                </td>
                                            </tr>
                                            <tr>
                                                <th>Date</th>
                                                <td v-text="interview.acf.date"></td>
                                            </tr>
                                            <tr>
                                                <th>Meeting Link</th>
                                                <td v-text="interview.acf.meetinglink"></td>
                                            </tr>
                                            <tr>
                                                <th>Rate</th>
                                                <td v-text="interview.acf.rate"></td>
                                            </tr>
                                            <tr>
                                                <th>Status</th>
                                                <td v-text="interview.acf.status"></td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-secondary" @click="closeModal">Close</button>
                            </div>
                        </div>
                    </div>

                    </div>
                </div>
            </transition>
        </div>
        
    </div>
</template>

<script>
import {mapState,mapMutations} from 'vuex'

export default {
    name: 'InterviewModalCreateAndUpdate', 
    props: ['showModal','current_id'],
    data(){
        return{
            //showModal:false,
            id: this.$route.params.id,
            candidate: {id:0, acf: {name: '', lastname: '', email: '', phonenumber: '', position: ''}},
            interviewer: {id:0, acf: {name: '', lastname: '', email: '', phonenumber: '', technologies_evaluated: ''}},
        }
    },
    computed: {
        ...mapState(['interviewers','interview', 'candidates'])
    },
    created(){
        this.SET_INTERVIEW(this.id);
    },
    methods: {
        ...mapMutations(['SET_INTERVIEW']),
        closeModal(){
            this.showModal = false;
            this.$emit('showModalChanged', false);
            this.$router.push( '/interviews' );
        },
        create(){
            alert('creando')
        }
    },
}

</script>

 <style scoped>
.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, .5);
  display: table;
  transition: opacity .3s ease;
}

.modal-wrapper {
  display: table-cell;
  vertical-align: middle;
}
</style>
