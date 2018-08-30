<template>
    <div class="tables">
        <div class="table-responsive bs-example widget-shadow">
        <h4>Data Table</h4>
        <p style="margin-bottom: 1em"><a href="#"><button  @click="initAdd()" class="btn btn-success">TAMBAH</button></a></p>
        <table class="table table-bordered table-data">
            <thead>
            <tr>
                <th>#</th>
                <th>Kategori</th>
                <th>Action</th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="(article,index) in articles.data" :key="article.id">
                <td>{{index+1}}</td>
                <td>{{article.kategori}}</td>
                <td>
                    <button @click="initRead(index)" class="btn btn-info"><span class="fa fa-eye"></span></button>
                    <button @click="initUpdate(index)" class="btn btn-warning"><span class="fa fa-pencil"></span></button>
                    <button @click="initDelete(index)" class="btn btn-danger"><span class="fa fa-trash"></span></button>
                </td>
            </tr>
            </tbody>
        </table>
        <app-pagination :data="articles" @pagination-change-page="getResults"></app-pagination>
        </div>
        <div class="modal fade bs-example-modal-lg" id="addModal" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel">
			<div class="modal-dialog modal-lg" role="document">
				<div class="modal-content">
					<div class="modal-header">
						<div class="form-title">
							<h4 class="modal-title" id="myModalLabel">Tambah Data Kategori</h4>
						</div>
					</div>
					<div class="modal-body">
						<div class="form-body">
							<div class="form-horizontal">
                                <div class="form-group">	
                                    <label for="" class="control-label">Kategori</label>
									<input type="text" name="kategori" id="kategori" class="form-control" v-model="craete.kategori" required>
								</div>
								<div style="text-align: right">
									<button class="btn btn-success" @click="createMetod">SIMPAN</button>
                                    <button class="btn btn-default" @click="closeModal">Cancel</button>
								</div>
							</div>
						</div>
      				</div>
				</div>
			</div>
		</div>
        <div class="modal fade bs-example-modal-lg" id="updateModal" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel">
			<div class="modal-dialog modal-lg" role="document">
				<div class="modal-content">
					<div class="modal-header">
						<div class="form-title">
							<h4 class="modal-title" id="myModalLabel">Update Data Kategori</h4>
						</div>
					</div>
					<div class="modal-body">
						<div class="form-body">
							<div class="form-horizontal">
                                <div class="form-group">	
                                    <label for="" class="control-label">Kategori</label>
									<input type="text" name="kategori" id="kategori" class="form-control" v-model="update.kategori" required>
								</div>
                            </div>
							<div style="text-align: right">
								<button class="btn btn-success" @click="UpdateMetod">SIMPAN</button>
                                <button class="btn btn-default" @click="closeModal">Cancel</button>
							</div>
						</div>
      				</div>
				</div>
			</div>
		</div>
        <div class="modal fade bs-example-modal-lg" id="deleteModal" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel">
			<div class="modal-dialog modal-lg" role="document">
				<div class="modal-content">
					<div class="modal-header">
						<div class="form-title">
							<h4 class="modal-title" id="myModalLabel">Delete Data Kategori</h4>
						</div>
					</div>
					<div class="modal-body">
						<div class="form-body">
							<div class="form-horizontal">
                                <div class="form-group">	
                                    <label for="" class="control-label">Kategori</label>
									<input type="text" name="kategori" id="kategori" class="form-control" v-model="delete_data.kategori" readonly>
								</div>
								<div style="text-align: right">
									<button v-if="status == 'delete'" class="btn btn-success" @click="deleteMetod">Delete</button>
                                    <button class="btn btn-default" @click="closeModal">Cancel</button>
								</div>
							</div>
						</div>
      				</div>
				</div>
			</div>
		</div>
    </div>
</template>
<script>
import  NewsApi  from "@/service/api/Kategori";
import Pagination from "laravel-vue-pagination";
export default {
    name: 'table_news',
    components:{
        'app-pagination': Pagination,
    },
    data () {
        return {
            articles: {},
            delete_data : {},
            delete_index :null,
            status : null,
            imgTmp: null,
            errors: [],
            update : {},
            craete : {
                kategori: '',
            }

        }
    },
    mounted() {
		// Fetch initial results
		this.getResults();
	},
    methods: {
		// Our method to GET results from a Laravel endpoint
        closeModal() {
            $('.modal').modal('hide')
            this.status = null;

        },
        initAdd() {
            $('#addModal').modal('show')
        },

        initDelete(index) {
            $("#deleteModal").modal('show')
            this.status = 'delete';
            this.delete_data = this.articles.data[index];
            this.delete_index = index;
        },
        initRead(index) {
            $("#deleteModal").modal('show')
            this.delete_data = this.articles.data[index];
            this.delete_index = index;
        },
        initUpdate(index) {
            this.errors = [];
            $('#updateModal').modal('show')
            this.update = this.articles.data[index];
            console.log(this.update);
            
        },
        reset() {
            this.craete.kategori = '';
        },
        getResults(page = 1) {
            NewsApi.getAll(page).then((result) => {
                // console.log(result);
                this.articles = result.data.data;
            }).catch((err) => {
                console.log(err);
            }).finally(()=>{
                this.loading = false
            });
        },
        deleteMetod() {
            NewsApi.destroy(this.articles.data[this.delete_index].id).then((result) => {
                this.articles.data.splice(this.delete_index, 1);
                this.closeModal();
            }).catch((err) => {
                this.errors = [];
                this.errors.push(err);
                console.log(err);
            })
        },
        createMetod() {
            var data = {
                kategori: this.craete.kategori,
            }
            NewsApi.post(data).then((result) => {
                // console.log(result);
                this.reset();
                this.getResults();
                this.closeModal();
            }).catch((err) => {
                this.errors = [];
                this.errors.push(err);
                console.log(err);
            })
        },
        UpdateMetod() {
            var data = {
                kategori: this.update.kategori,
            }
            NewsApi.update(data,this.update.id).then((result) => {
                console.log(data);
                this.getResults();
                this.closeModal();
            }).catch((err) => {
                this.errors = [];
                this.errors.push(err);
                console.log(err);
            })
        },
	}
}
</script>

