<template>
   <div style="padding:20px;" id="app">
        <div class="panel panel-primary">
            <div class="panel-heading">用户管理</div>
            <table class="table table-bordered table-striped text-center">
                <thead>
                    <tr>
                        <th>用户号</th>
                        <th>用户姓名</th>
						<th>性别</th>
						<th>地址</th>
                        <th>操作</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for ="user in userList">
                      <td>{{user.id}}</td>
                      <td>{{user.userName}}</td>
					  <td>{{user.gender}}</td>
					  <td>{{user.address}}</td>
                      <td>
						  <button @click="update(user)">修改</button>
						  <button v-on:click="remove(user)">刪除</button>
					  </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script>
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
			userList: ''
		}
	},
	mounted(){
		this.instance.queryAll({
			
		}).then((res)=>{
			this.userList = res.data
			//console.log(this.userList)
		})
	},
  methods: {
    update: function (user) {
    // this.$router.push({path:'update',query:{id:user.id}})
	 this.$router.push({path:'update',query:{user:user}});
    },
    remove: function (user) {
    //  this.users.splice(index, 1)
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