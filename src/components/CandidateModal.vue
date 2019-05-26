
<template>
    <div class="container">
        <div v-if="showModal">
            <transition name="modal">
                <div class="modal-mask">
                    <div class="modal-wrapper">

                    <div class="modal-dialog" role="document">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title">Candidate</h5>
                                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true" @click="closeModal">&times;</span>
                                </button>
                            </div>
                            <div class="modal-body">
                                <div class="media text-muted pt-3">
                                    <table class="table table-bordered">
                                        <tbody>
                                            <tr>
                                                <th>Name</th>
                                                <td v-text="candidate.acf.name"></td>
                                            </tr>
                                            <tr>
                                                <th>LastName</th>
                                                <td v-text="candidate.acf.lastname"></td>
                                            </tr>
                                            <tr>
                                                <th>Email</th>
                                                <td v-text="candidate.acf.email"></td>
                                            </tr>
                                            <tr>
                                                <th>PhoneNumber</th>
                                                <td v-text="candidate.acf.phonenumber"></td>
                                            </tr>
                                            <tr>
                                                <th>Position</th>
                                                <td v-text="candidate.acf.position"></td>
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
    name: 'CandidateModal', 
    data(){
        return{
            showModal:true,
            id: this.$route.params.id,
        }
    },
    computed: {
        ...mapState(['candidates','candidate'])
    },
    created(){
        this.SET_CANDIDATE(this.id);
    },
    methods: {
        ...mapMutations(['SET_CANDIDATE']),
        closeModal(){
            this.SET_CANDIDATE(0);
            this.showModal = false;
            this.$router.push( '/candidates' );
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
</style>
