module.exports=function(){
  var faker=require('faker');
  faker.locale='zh_CN';
  var _ = require('lodash');
  return {
    //伪造20条关于people的数据
    people: _.times(20,function(n){
      return {
        id: n + 1,
        name: faker.name.findName(),
        avatar: faker.internet.avatar()
      }
    }),
    users: _.times(20,function(n){
      return {
        id: n,
        name: faker.name.findName(),
        password: faker.internet.password()
      }
    })
  }
}
