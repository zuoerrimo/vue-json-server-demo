<template>
  <div>
  	<el-container>
      <el-dialog :title="addUserModal.title" :visible.sync="addUserModal.show">
        <el-form>
          <el-form-item label="用户名" :label-width="addUserModal.formLabelWidth">
            <el-input v-model="addUserModal.name" auto-complete="off"></el-input>
          </el-form-item>
          <el-form-item label="地址" :label-width="addUserModal.formLabelWidth">
            <el-input v-model="addUserModal.avatar" auto-complete="off"></el-input>
          </el-form-item>
        </el-form>
        <div slot="footer" class="dialog-footer">
          <el-button @click="addUserModal.show = false">取 消</el-button>
          <el-button type="primary" @click="addUserModal.approve">确 定</el-button>
        </div>
      </el-dialog>
  		<el-header class="table-title">userList</el-header>
  		<el-main>
        <div class="table-operation">
          <el-button type="primary" @click="showAddModal">添加</el-button>
        </div>
        <el-table
        ref="multipleTable"
        :data="tableData"
        stripe
        border
        style="width: 100%">
        <el-table-column
          prop="id"
          label="编号"
          width="180">
          </el-table-column>
          <el-table-column
          prop="name"
          label="姓名"
          width="180">
          </el-table-column>
            <el-table-column
            prop="avatar"
            label="地址">
          </el-table-column>
          <el-table-column
          fixed="right"
          label="操作"
          width="100">
          <template slot-scope="scope">
            <el-button @click="showModifyModal(scope.row)" type="text" size="small">修改</el-button>
            <el-button @click="deleteUser(scope.row)" type="text" size="small">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
      </el-main>
  	</el-container>
  </div>
</template>
<script>
import api from '@/api/index'
import axios from 'axios'
var _ = require('lodash');
export default {
  name: 'Login',
  data () {
  	return {
  		tableData: [],
      addUserModal: {
        title: '',
        id: '',
        show: false,
        name: '',
        avatar: '',
        formLabelWidth: '120px',
        approve: function() {},
      }
  	}
  },
  methods: {
  	renderTable () {
      axios(api.userList).then(data => {
        this.tableData = data.data
      })
  	},

    addUser() {
      let maxId = _.maxBy(this.tableData, 'id')
      let configData = _.merge(api.addUser, {
        data: {
          id: maxId.id + 1,
          name: this.addUserModal.name,
          avatar: this.addUserModal.avatar,
        }

      }) 
      axios(configData).then(data => {
        this.renderTable()
      })
      this.addUserModal.show = false
    },

    showModifyModal(row) {
      this.addUserModal.show = true
      this.addUserModal.title = 'modify user'
      this.addUserModal.approve = this.modifyUser
      this.addUserModal.name = row.name
      this.addUserModal.id = row.id
      this.addUserModal.avatar = row.avatar
    },
    showAddModal() {
      this.addUserModal.show = true
      this.addUserModal.title = 'add user'
      this.addUserModal.approve = this.addUser
    },

    modifyUser(row) {
      let configData = {
        url: `/people/${this.addUserModal.id}`,
        method: 'patch',
        data: {
          name: this.addUserModal.name,
          avatar: this.addUserModal.avatar,
        }
      }
      axios(configData).then(data => {
        this.renderTable()
      })
      this.addUserModal.show = false
    },

    deleteUser(row) {
      let configData = {
        url: `/people/${row.id}`,
        method: 'delete',
      }
      axios(configData).then(data => {
        this.renderTable()
      })
    },
  },
  mounted(){
    this.renderTable()
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
  .table-title {
    font-size: 28px;
    font-weight: bold;
  }
  .table-operation {
    width:  100%;
    text-align:  right;
    margin-bottom: 10px;
  }
</style>