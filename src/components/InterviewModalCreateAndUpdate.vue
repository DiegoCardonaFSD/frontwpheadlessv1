
<template>
    <div class="container">
        <div v-if="showModal">
            <transition name="modal">
                <div class="modal-mask">
                    <div class="modal-wrapper">
                    <form @submit="saveModal">
                    <div class="modal-dialog" role="document">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title" v-if="current_id == 0">Create Interview</h5>
                                <h5 class="modal-title" v-if="current_id != 0">Edit Interview</h5>
                                <button type="button" class="close" v-if="!loading" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true" @click="closeModal">&times;</span>
                                </button>
                            </div>
                            <div class="modal-body">
                                
                                <div class="media text-muted pt-3 d-flex justify-content-center" 
                                    v-if="loading">
                                    <div class="spinner-border" role="status">
                                    <span class="sr-only">Loading...</span>
                                    </div>
                                    <span class="icons-left-space">Saving Data...</span>
                                </div>
                                <div class="media text-muted pt-3 d-flex justify-content-center" 
                                    v-if="saved">
                                    <span class="icons-left-space">Saved !!!</span>
                                </div>
                                <div class="media text-muted pt-3" v-if="!loading && !saved">
                                    <table class="table table-bordered">
                                        <tbody>
                                            <tr v-if="current_id != 0">
                                                <th>Interviewer</th>
                                                <td v-text="current_id"></td>
                                            </tr>
                                            <tr>
                                                <th>Interviewer</th>
                                                <td>
                                                    <select v-model="interviewer.id" required>
                                                        <option disabled value="">Please select one</option>
                                                        <option v-for="(item,i) of interviewers"
                                                        :key="`${i}-${item.id}`"
                                                        v-text="item.acf.name+' '+item.acf.lastname"
                                                        v-bind:value="item.id"></option>
                                                        
                                                    </select>
                                                </td>
                                            </tr>
                                            <tr>
                                                <th>Candidate</th>
                                                <td>
                                                    <select v-model="candidate.id" required>
                                                        <option disabled value="">Please select one</option>
                                                        <option v-for="(item,i) of candidates"
                                                        :key="`${i}-${item.id}`"
                                                        v-text="item.acf.name+' '+item.acf.lastname"
                                                        v-bind:value="item.id"></option>
                                                        
                                                    </select>
                                                </td>
                                            </tr>
                                            <tr>
                                                <th>Date</th>
                                                <td>
                                                    <date-picker v-model="date" :config="options" required></date-picker>
                                                </td>
                                            </tr>
                                            <tr>
                                                <th>Meeting Link</th>
                                                <td>
                                                    <input v-model="meetinglink" type="text" maxlength="100" required>
                                                </td>
                                            </tr>
                                            <tr>
                                                <th>Rate</th>
                                                <td>
                                                    <input v-model="rate" type="text" maxlength="30" required>
                                                </td>
                                            </tr>
                                            <tr>
                                                <th>Status</th>
                                                <td>
                                                    <select v-model="status" required>
                                                        <option disabled value="">Please select one</option>
                                                        <option value="scheduled">Scheduled</option>
                                                        <option value="completed">Completed</option>
                                                        <option value="cancelled">Cancelled</option>
                                                    </select>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                    
                                </div>
                            </div>
                            <div class="modal-footer">
                                <div v-if="!loading">
                                    <button type="submit" class="btn btn-primary" v-if="!saved">Save</button>
                                    <button type="button" class="btn btn-secondary icons-left-space" @click="closeModal">Close</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    </form>
                    </div>
                </div>
            </transition>
        </div>
        
    </div>
</template>

<script>

import datePicker from 'vue-bootstrap-datetimepicker';
import 'pc-bootstrap4-datetimepicker/build/css/bootstrap-datetimepicker.css'

import {mapState,mapMutations} from 'vuex'

export default {
    name: 'InterviewModalCreateAndUpdate', 
    props: ['showModal','current_id'],
    components: {
        datePicker,
    },
    data(){
        return{
            id: this.$route.params.id,
            candidate: {id:0, acf: {name: '', lastname: '', email: '', phonenumber: '', position: ''}},
            interviewer: {id:0, acf: {name: '', lastname: '', email: '', phonenumber: '', technologies_evaluated: ''}},
            date: '',
            meetinglink: '',
            rate: '',
            status: '',
            options: {
                format: 'YYYY/MM/DD',
                useCurrent: true,
                showClear: true,
                showClose: true,
            },
            loading: false,
            saved: false,
        }
    },
    computed: {
        ...mapState(['interviewers','interview', 'candidates', 'saveCb'])
    },
    created(){
        this._getInterview(); 
    },
    methods: {
        ...mapMutations(['GET_INTERVIEW','SET_SAVECB']),
        closeModal(){
            this.saved = false;
            this.loading = false;
            
                this.$emit('showModalChanged', false);
                this.$router.push( '/interviews' );
            
        },
        saveModal(e){
            e.preventDefault();
            let data = {
                candidate_id : this.candidate.id,
                interviewer_id : this.interviewer.id,
                date : this.date,
                meetinglink : this.meetinglink,
                rate : this.rate,
                status : this.status
            };
             if(this.current_id == 0){
                this.$store.dispatch('createInterview', data);
             }else{
                 data.id = this.current_id;
                this.$store.dispatch('updateInterview', data); 
             }
             this.loading = true;
             return false;
        },
        _getInterview(){
            if(this.current_id != 0){
                this.GET_INTERVIEW(this.current_id);
            }else{
                this.candidate.id = 0;
                this.interviewer.id = 0;
                this.date = '';
                this.meetinglink = '';
                this.rate = '';
                this.status = '';
            }
        }
    },
    watch: {
        current_id: function(val, oldval){
            
        },
        interview: function(){
            if(this.interview.id != ''){
                this.candidate.id = this.interview.acf.candidate.ID;
                this.interviewer.id = this.interview.acf.interviewer.ID;
                this.date = this.interview.acf.date;
                this.meetinglink = this.interview.acf.meetinglink;
                this.rate = this.interview.acf.rate;
                this.status = this.interview.acf.status;
            }
        },
        saveCb: function(){
            this.loading = false;
            this.saved = true;
        },
        showModal: function(){
            this._getInterview();
            this.saved = false;
            this.SET_SAVECB(false);
        }
    }
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
.icons-left-space{
     margin-left: 10px
}
</style>
