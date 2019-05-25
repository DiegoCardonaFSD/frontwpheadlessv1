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
                        <tr>
                            <th scope="row">1</th>
                            <td>text 1</td>
                            <td>text 2</td>
                            <td>text 3</td>
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


export default {
    name: 'ListInterviews', 
}
</script>

