<template>
   <div style="padding:20px;" id="app">
        <div class="panel panel-primary">
            <div class="panel-heading">用户信息修改</div>
            <table class="table table-bordered table-striped text-center">
                <thead>
                    <tr>
                        <th>用户号</th>
                        <th>用户姓名</th>
                        <th>密码</th>
                        <th>地址</th>
                        <th>操作</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                      <td>{{userInfo.id}}</td>
                      <td>
                        <input type="text" v-model="userInfo.userName"/> 
                      </td>
                      <td>
                        <input type="text" v-model="userInfo.password" /> 
                      </td>
                      <td>
                        <input type="text" v-model="userInfo.address" /> 
                      </td>
                      <td>
						        <button v-on:click="save">保存</button>
					          </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>


<script>
import userInfo from '../main/main.vue'
/*export default {
  name: 'hello',
  data () {
    return {
      user: {'name': '', 'age': '', 'school': ''},
      users: [
        {'name': '李磊', 'age': '25', 'school': '洛阳理工'},
        {'name': '张成', 'age': '23', 'school': '桂林电子科技'},
        {'name': '炼心', 'age': '22', 'school': '江西电子科技'}
      ]
    }
  },*/
  export default{
	name: 'hello',
	data(){
		return{
			userInfo: {
        userName: userInfo.userName,
        password: userInfo.password,
        address: userInfo.address
      }
		}
	},
	mounted(){
    var index = this.$route.query.user.id;
		this.instance.userInfo({
       'id': index
		}).then((res)=>{
			this.userInfo = res.data;
      console.log(this.userInfo);
		})
	},
  methods: {
    save() {
      console.log(this.userInfo);
      this.instance.edit({
        'id': this.userInfo.id,
        'userName': this.userInfo.userName,
        'password':this.userInfo.password,
        'address': this.userInfo.address
      }).then((res)=>{
        console.log(res.data);
        if(res.data.code == 0){
          this.$router.push('/main');
        }
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
tr,th{
  text-align:center;
}
</style>