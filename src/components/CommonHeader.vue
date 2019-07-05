<template>
  <div class="CommonHeader container-main">
    <!-- <router-link to="/"><img class="logo" src="/static/img/logo.png"></router-link> -->
    <div class="logo-name">
      国家农业基础性长期性科技工作信息网
      <br><span class="en">Scientific and Technological Work Information Network of National Agricultural</span>
    </div>
    <div class="shortcut">
      <span class="username" style="color: white"><a href="http://data.basicagridata.cn:8080/nkytdm/a/login" target="blank" style="color: white; text-decoration: none">汇交系统入口</a></span>
      <!-- <a href="" class="link go-login">登录</a>
      <a href="" class="link go-register">注册</a> -->
    </div>
    <div class="search">
      <Input class="search-key" v-model="search_key" />
      <Button class="search-btn" type="primary" shape="circle" icon="ios-search"></Button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CommonHeader',
  data: function () {
    return {
      username: 'LOS',
      search_key: ''
    }
  }
}
</script>

<style lang="less">
@import '../assets/styles/common.less';

.CommonHeader{
  padding: 10px 0;
  .logo, .logo-name{
    vertical-align: middle;
  }

  .logo{
    width: 100px;
  }

  .logo-name{
    display: inline-block;
    margin-left: 10px;
    padding-top: 20px;
    padding-bottom: 20px;
    font-size: 26px;
    font-weight: bold;
    color: white;

    .en{
      font-size: 14px;
    }
  }

  .shortcut{
    position: absolute;
    right: 60px;
    top: 10px;

    .link{
      padding: 0 10px;

      &.go-login{
        border-right: 1px solid @division-color;
      }
    }
  }

  .search{
    position: absolute;
    right: 0;
    top: 40px;

    .search-key{
      width: 150px;
    }

    .search-btn{
      margin-left: 0px;
    }
  }
}

.fix .CommonHeader{
  .logo{
    width: 35px;
  }

  .logo-name{
    font-size: 16px;

    .en{
      font-size: 12px;
    }
  }

  .shortcut{
    line-height: 32px;
    right: 10px;
    top: 20px;
  }

  .search{
    top: 20px;
    right: 100px;
  }
}
</style>
