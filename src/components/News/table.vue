<template>
    <div class="tables">
        <div class="table-responsive bs-example widget-shadow">
        <h4>Data Table</h4>
        <p style="margin-bottom: 1em"><a href="#"><button  @click="initAdd()" class="btn btn-success">TAMBAH</button></a></p>
        <table class="table table-bordered table-data">
            <thead>
            <tr>
                <th>#</th>
                <th>Date Publish</th>
                <th>Title</th>
                <th>Viewer</th>
                <th>Writer</th>
                <th>Action</th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="(article,index) in articles.data" :key="article.id">
                <td>{{index+1}}</td>
                <td>{{article.news_datepub}}</td>
                <td>{{article.news_title}}</td>
                <td>{{article.news_view}}</td>
                <td>{{article.news_writer}}</td>
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
									<input type="text" name="kategori" id="kategori" class="form-control" v-model="craete.catnews_id" required>
								</div>
                                <div class="form-group">	
                                    <label class="control-label">Editor</label>
                                    <input type="text" name="editor" id="editor" class="form-control" v-model="craete.editor_id" required>
								</div>
                                <div class="form-group">	
                                    <label class="control-label">Date Publish</label>
                                    <input type="date" name="date_publish" id="date_publish" class="form-control" v-model="craete.news_datepub" required>
								</div>
                                <div class="form-group">
                                    <label class="control-label">Headline</label>
                                    <select name="headline" id="headline" class="form-control" v-model="craete.news_headline">
                                        <option value="1">True</option>
                                        <option value="0">False</option>
                                    </select>
                                    
                                </div>
                                <div class="form-group">
                                    <label class="control-label">Title</label>
                                    <input type="text" name="title" id="title" class="form-control" v-model="craete.news_title" required>
                                </div>
                                <div class="form-group">
                                    <label class="control-label">Caption</label>
                                    <input type="text" name="caption" id="caption" class="form-control" v-model="craete.news_caption" required>
                                </div>
                                <div class="form-group">
                                    <label class="control-label">Description</label>
                                    <textarea class="form-control" name="description" id="description" placeholder="Description" v-model="craete.news_description"></textarea>
                                </div>
                                <div class="form-group">
                                    <label class="control-label">Content</label>
                                    <textarea class="form-control" name="description" id="description" placeholder="Content" v-model="craete.news_content"></textarea>
                                </div>
                                <div class="form-group">
                                    <label class="control-label">Writer</label>
                                    <input type="text" name="writer" id="writer" class="form-control" v-model="craete.news_writer" required>
                                </div>
                                <div class="form-group">
                                    <label class="control-label">Image</label>
                                    <input type="file" name="image" id="image" class="form-control" @change="fileSelected" required>
                                    <div v-if="craete.news_image">
                                        <img :src="craete.news_image" width="300px" class="img">
                                        <button type="button" class="btn btn-danger" @click="removeImage"><i class="fa fa-fw fa-trash"></i></button>
                                    </div>
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
									<input type="text" name="kategori" id="kategori" class="form-control" v-model="update.catnews_id" required>
								</div>
                                <div class="form-group">	
                                    <label class="control-label">Editor</label>
                                    <input type="text" name="editor" id="editor" class="form-control" v-model="update.editor_id" required>
								</div>
                                <div class="form-group">	
                                    <label class="control-label">Date Publish</label>
                                    <input type="date" name="date_publish" id="date_publish" class="form-control" v-model="update.news_datepub" required>
								</div>
                                <div class="form-group">
                                    <label class="control-label">Headline</label>
                                    <select name="headline" id="headline" class="form-control" v-model="update.news_headline">
                                        <option value="1">True</option>
                                        <option value="0">False</option>
                                    </select>
                                    
                                </div>
                                <div class="form-group">
                                    <label class="control-label">Title</label>
                                    <input type="text" name="title" id="title" class="form-control" v-model="update.news_title" required>
                                </div>
                                <div class="form-group">
                                    <label class="control-label">Caption</label>
                                    <input type="text" name="caption" id="caption" class="form-control" v-model="update.news_caption" required>
                                </div>
                                <div class="form-group">
                                    <label class="control-label">Description</label>
                                    <textarea class="form-control" name="description" id="description" placeholder="Description" v-model="update.news_description"></textarea>
                                </div>
                                <div class="form-group">
                                    <label class="control-label">Content</label>
                                    <textarea class="form-control" name="description" id="description" placeholder="Content" v-model="update.news_content"></textarea>
                                </div>
                                <div class="form-group">
                                    <label class="control-label">Writer</label>
                                    <input type="text" name="writer" id="writer" class="form-control" v-model="update.news_writer" required>
                                </div>
                                 <div class="form-group">
                                    <label class="control-label">Image</label>
                                    <input type="file" name="image" id="image" class="form-control" @change="fileSelected" required>
                                    <div v-if="update.news_image">
                                        <img :src="update.news_image" width="300px" class="img">
                                        <button type="button" class="btn btn-danger" @click="removeImage"><i class="fa fa-fw fa-trash"></i></button>
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
									<input type="text" name="kategori" id="kategori" class="form-control" v-model="delete_data.catnews_id" readonly>
								</div>
                                <div class="form-group">	
                                    <label class="control-label">Editor</label>
                                    <input type="text" name="editor" id="editor" class="form-control" v-model="delete_data.editor_id" readonly>
								</div>
                                <div class="form-group">	
                                    <label class="control-label">Date Publish</label>
                                    <input type="date" name="date_publish" id="date_publish" class="form-control" v-model="delete_data.news_datepub" readonly>
								</div>
                                <div class="form-group">
                                    <label class="control-label">Headline</label>
                                    <select name="headline" id="headline" class="form-control" v-model="delete_data.news_headline" readonly>
                                        <option value="1">True</option>
                                        <option value="0">False</option>
                                    </select>
                                    
                                </div>
                                <div class="form-group">
                                    <label class="control-label">Title</label>
                                    <input type="text" name="title" id="title" class="form-control" v-model="delete_data.news_title" readonly>
                                </div>
                                <div class="form-group">
                                    <label class="control-label">Caption</label>
                                    <input type="text" name="caption" id="caption" class="form-control" v-model="delete_data.news_caption" readonly>
                                </div>
                                <div class="form-group">
                                    <label class="control-label">Description</label>
                                    <textarea class="form-control" name="description" id="description" placeholder="Description" v-model="delete_data.news_description" readonly></textarea>
                                </div>
                                <div class="form-group">
                                    <label class="control-label">Content</label>
                                    <textarea class="form-control" name="description" id="description" placeholder="Content" v-model="delete_data.news_content" readonly></textarea>
                                </div>
                                <div class="form-group">
                                    <label class="control-label">Writer</label>
                                    <input type="text" name="writer" id="writer" class="form-control" v-model="delete_data.news_writer" readonly>
                                </div>
                                <div class="form-group">
                                    <label class="control-label">Image</label>
                                    <img v-if="delete_data.news_image !== undefined" :src="'http://localhost:8000/'+delete_data.news_image" :alt="delete_data.news_caption">
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
import  NewsApi  from "@/service/api/News";
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
                catnews_id: '',
                editor_id: '',
                news_datepub: '',
                news_headline: '',
                news_title: '',
                news_caption: '',
                news_description: '',
                news_content: '',
                news_writer: '',
                news_image: '',
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

        },
        initAdd() {
            $('#addModal').modal('show')
        },

        initDelete(index) {
            $("#deleteModal").modal('show')
            status = 'delete';
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
            this.imgTmp = this.update.news_image;
            this.update.news_image = 'http://localhost:8000/'+this.update.news_image;
            console.log(this.update);
            
        },
        reset() {
            this.craete.catnews_id = '',
            this.craete.editor_id= '',
            this.craete.news_datepub= '',
            this.craete.news_headline= '',
            this.craete.news_title= '',
            this.craete.news_caption= '',
            this.craete.news_description= '',
            this.craete.news_content= '',
            this.craete.news_writer= '',
            this.craete.news_image= ''
        },
        fileSelected: function(e) {
            let files = e.target.files || e.dataTransfer.files;
            if (!files.length) {
                    return;
            }
            this.createImage(files[0]);
        },

        createImage(file) {
            let image = new Image();
            let reader = new FileReader();

            reader.onload = (e) => {
                this.craete.news_image = e.target.result;
                this.update.news_image = e.target.result;
                // console.log(this.craete.news_image);
                
            };
            reader.readAsDataURL(file);
        },

        removeImage: function (e) {
            this.craete.news_image = '';
            this.update.news_image = '';
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
                catnews_id: this.craete.catnews_id,
                editor_id: this.craete.editor_id,
                news_datepub: this.craete.news_datepub,
                news_headline: this.craete.news_headline,
                news_title: this.craete.news_title,
                news_caption: this.craete.news_caption,
                news_description: this.craete.news_description,
                news_content: this.craete.news_content,
                news_writer: this.craete.news_writer,
                news_image: this.craete.news_image,
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
            var img;
            if (this.imgTmp == this.update.news_image.split('http://localhost:8000/')[1]) {
                img = null
            }else{
                img = this.update.news_image
            }
            var data = {
                catnews_id: this.update.catnews_id,
                editor_id: this.update.editor_id,
                news_datepub: this.update.news_datepub,
                news_headline: this.update.news_headline,
                news_title: this.update.news_title,
                news_caption: this.update.news_caption,
                news_description: this.update.news_description,
                news_content: this.update.news_content,
                news_writer: this.update.news_writer,
                news_image: img,
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

