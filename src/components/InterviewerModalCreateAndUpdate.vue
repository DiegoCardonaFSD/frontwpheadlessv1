
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
                                <h5 class="modal-title" v-if="current_id == 0">Create Interviewer</h5>
                                <h5 class="modal-title" v-if="current_id != 0">Edit Interviewer</h5>
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
                                                <th>Interviewerer</th>
                                                <td v-text="current_id"></td>
                                            </tr>
                                            <tr>
                                                <th>Name</th>
                                                <td>
                                                    <input v-model="name" type="text" maxlength="100" required>
                                                </td>
                                            </tr>
                                            <tr>
                                                <th>LastName</th>
                                                <td>
                                                    <input v-model="lastname" type="text" maxlength="100" required>
                                                </td>
                                            </tr>
                                            <tr>
                                                <th>Email</th>
                                                <td>
                                                    <input v-model="email" type="email"  required>
                                                </td>
                                            </tr>
                                            <tr>
                                                <th>PhoneNumber</th>
                                                <td>
                                                    <input v-model="phonenumber" type="text"  required>
                                                </td>
                                            </tr>
                                            <tr>
                                                <th>Technologies evaluated</th>
                                                <td>
                                                    <select v-model="technologies_evaluated" required>
                                                        <option disabled value="">Please select one</option>
                                                        <option value="Ruby">Ruby</option>
                                                        <option value="PHP">PHP</option>
                                                        <option value=".NET">.NET</option>
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
import {mapState,mapMutations} from 'vuex'

export default {
    name: 'InterviewerModalCreateAndUpdate', 
    props: ['showModal','current_id'],
    data(){
        return{
            id: this.$route.params.id,
            name: '',
            lastname: '',
            email: '',
            phonenumber: '',
            technologies_evaluated: '',
            loading: false,
            saved: false,
        }
    },
    computed: {
        ...mapState(['interviewer', 'saveCb'])
    },
    created(){
        this._getInterviewer(); 
    },
    methods: {
        ...mapMutations(['GET_INTERVIEWER','SET_SAVECB']),
        closeModal(){
            this.saved = false;
            this.loading = false;
            
                this.$emit('showModalChanged', false);
                this.$router.push( '/interviewers' );
            
        },
        saveModal(e){
            e.preventDefault();
            
            let data = {
                name : this.name,
                lastname : this.lastname,
                email : this.email,
                phonenumber : this.phonenumber,
                technologies_evaluated : this.technologies_evaluated,
            };
             if(this.current_id == 0){
                this.$store.dispatch('createInterviewer', data);
             }else{
                 data.id = this.current_id;
                this.$store.dispatch('updateInterviewer', data); 
             }
             this.loading = true;
             return false;
        },
        _getInterviewer(){
            if(this.current_id != 0){
                this.GET_INTERVIEWER(this.current_id);
            }else{
                this.name = '';
                this.lastname = '';
                this.email = '';
                this.phonenumber = '';
                this.technologies_evaluated = '';
            }
        }
    },
    watch: {
        current_id: function(val, oldval){
            
        },
        interviewer: function(){
            if(this.interviewer.id != ''){
                this.name = this.interviewer.acf.name;
                this.lastname = this.interviewer.acf.lastname;
                this.email = this.interviewer.acf.email;
                this.phonenumber = this.interviewer.acf.phonenumber;
                this.technologies_evaluated = this.interviewer.acf.technologies_evaluated;
            }
        },
        saveCb: function(){
            this.loading = false;
            this.saved = true;
        },
        showModal: function(){
            this._getInterviewer();
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
