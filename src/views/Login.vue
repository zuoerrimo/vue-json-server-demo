<template>
  <div>
  	<el-container>
  		<el-header>logo</el-header>
  		<el-main>
  			<el-row :gutter="24">
  				<el-col :span="6" :offset="9">
  					<el-input v-model="username" placeholder="用户名"></el-input>
  				</el-col>
  			</el-row>
  			<el-row :gutter="24">
  				<el-col :span="6" :offset="9">
  					<el-input v-model="password" placeholder="密码"></el-input>
  				</el-col>
  			</el-row>
  			<el-row :gutter="24">
  				<el-col :span="6" :offset="9">
  					<el-button type="primary" class="login" @click="login">Login</el-button>
  				</el-col>
  			</el-row>
  		</el-main>
  	</el-container>
  </div>
</template>
<script type="application/ecmascript">
import * as types from '@/store/types'
export default {
  name: 'Login',
  data () {
  	return {
  		username: '',
  		password: ''
  	}
  },
  methods: {
  	login () {
      this.$store.commit(types.LOGIN, this.password)
      this.$router.push({
        path: 'index'
      })
    }
  },
  mounted(){
    this.$store.commit(types.TITLE, 'Login');
  }
}
</script>
<style scoped>
	.el-row {
    margin-bottom: 20px;
    &:last-child {
      margin-bottom: 0;
    }
  }
  .el-col {
    border-radius: 4px;
  }
  .login {
  	width:  100%;
  }
</style>