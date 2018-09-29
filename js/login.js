var login = (function(){

    return {
        init: function(ele) {
          this.$ele = document.querySelector(ele);
          this.$username = this.$ele.username;
          this.$password = this.$ele.password;
          this.$loginBtn= this.$ele['login-btn'];
          this.event();
        },
        event: function() {
            var _this = this;
            this.$loginBtn.onclick = function(){
                var params = {
                    method : 'POST',
                    data : {
                        username : _this.$username.value,
                        password : _this.$password.value
                    },
                    success : function(data){
                        data = JSON.parse(data);
                        _this.loginSuccess(data);
                    }
                }
                sendAjax("http://localhost:7086/myproject/login/php/login.php",params)
            }
        },
        loginSuccess: function(data) {
          if(data.code ==200){
              location.href ="manager.html";
          }else{
              alert(data.msg);
          }
        }
    }

}())