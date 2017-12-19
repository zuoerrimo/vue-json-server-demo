<template>
  <div>
    <el-container>
      <el-header>
         <el-row>
         <el-col :span="18">
          </el-col>
         <el-col :span="6" :offset="18" class="header-setting">
          <el-dropdown>
            <span class="el-dropdown-link">
              设置<i class="el-icon-arrow-down el-icon--right"></i>
            </span>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item @click.native="logOut">退出</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </el-col>
        </el-row>
      </el-header>
      <el-container>
        <el-aside width="200px">
         <el-row class="tac">
          <el-col :span="24">
            <el-menu
            :router="true"
            class="el-menu-vertical-demo">
              <template v-for="(menuItem, index) in menu">
                <el-menu-item :index="menuItem.path">
                  <i :class="menuItem.icon"></i>
                  <span slot="title">{{menuItem.text}}</span>
                </el-menu-item>
              </template>
            </el-menu>
          </el-col>
        </el-row>
      </el-aside>
        <el-container>
          <el-main>
            <router-view></router-view> 
          </el-main>
        </el-container>
      </el-container>
    </el-container>
  </div>
</template>
<script type="application/ecmascript">
import * as types from '@/store/types'
import menu from '@/common/menu'
export default {
  name: 'Index',
  data () {
    return {
      menu: [],
    }
  },
  methods: {
    init() {
      this.menu = menu
    },
    logOut() {
     this.$store.commit(types.LOGOUT)
     this.$router.push({
      path: '/'
    })
   },
  },
  mounted(){
    this.init()
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
  .header-setting {
    text-align: right;
    .el-dropdown {
      vertical-align: top;
    }
  }
</style>