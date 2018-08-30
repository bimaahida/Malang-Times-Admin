<template>
    <div class="container">
		<img src="images/logo.png" alt="" class="img-responsive col-md-4 col-md-offset-4 col-sm-8 col-sm-offset-2" style="margin-top: 30px">    
		
		<div id="loginbox" style="margin-top:25px;" class="mainbox col-md-6 col-md-offset-3 col-sm-8 col-sm-offset-2">                    
			<div class="panel panel-info" >
				<div class="panel-heading">
					<div class="panel-title">Sign In</div>
				</div> 

				<div style="padding-top:30px" class="panel-body" >
					<div style="display:none" id="login-alert" class="alert alert-danger col-sm-12"></div>
						<div style="margin-bottom: 25px" class="input-group">
							<span class="input-group-addon"><i class="glyphicon glyphicon-user"></i></span>
							<input id="login-username" type="text" class="form-control" name="username" value="" placeholder="username or email" v-model="user.username">                                        
						</div>

						<div style="margin-bottom: 25px" class="input-group">
							<span class="input-group-addon"><i class="glyphicon glyphicon-lock"></i></span>
							<input id="login-password" type="password" class="form-control" name="password" placeholder="password" v-model="user.password">
						</div>

						<div style="margin-top:10px" class="form-group">
							<div class="col-sm-12 controls">
                                <button class="btn btn-success" @click="loginMethod">Login</button>
							</div>
						</div>   
				</div>                     
			</div>  
		</div>
	</div>
</template>
<script>
import  UserApi  from "@/service/api/User";
export default {
    name: 'login',
    data() {
        return{
            users : [],
            user : {
                username : '',
                password : '',
            },
        }
    },
    mounted() {
		
    },
    methods: {
        loginMethod(){
            var data = {
                username : this.user.username,
                password : this.user.password,
            }
            console.log(data);
            UserApi.loginAction(data).then((res) => {
                this.users = res.data.data;
                console.log(res);
                
            }).catch((err) => {
                console.log(err);
            });
        }
    }
}
</script>

