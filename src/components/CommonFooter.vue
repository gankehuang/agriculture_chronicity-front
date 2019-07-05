<template>
  <div class="CommonFooter container-main">
    <Row>
      <Col span="24" class="content-l">
        <div class="footerInfo">
          <ul class="shortcut">
            <li class="item"><a href="/aboutus">网站首页</a></li>
            <li class="item"><a href="/contactus">工作网络</a></li>
            <li class="item"><a href="/statement">监测任务</a></li>
            <li class="item"><a href="#">新闻动态</a></li>
            <li class="item"><a href="#">关于我们</a></li>
          </ul>
          <span class="title-unit">地址：</span>
          <ul class="unit-list">
            <li class="item">北京市海淀区中关村南大街12号</li>
          </ul>
          <span class="title-unit">电话：</span>
          <ul class="unit-list">
            <li class="item">8210-6267</li>
          </ul>
          <span class="title-unit">联系邮箱：</span>
          <ul class="unit-list">
            <li class="item">basicagridata@caas.cn </li>
          </ul>
          <div class="tips">
            <Icon type="alert-circled"></Icon>  
            建议您使用IE9版本以上的浏览器
          </div>
        </div>
      </Col>
      
    </Row>
  </div>
</template>

<script>
export default {
  name: 'CommonFooter'
}
</script>

<style lang="less">
@import '../assets/styles/common.less';

.CommonFooter{
  text-align: center;
  color: white;

  .content-l{
    
    .footerInfo{
      display: inline-block;
      margin-left: 50px;
      text-align: left;
      vertical-align: top;
    }
  }

  .shortcut{
    margin-bottom: 15px;

    .item{
      display: inline-block;
      margin: 0 50px;
      a{
        color: white;
      }

      &:first-of-type{
        margin-left: 0;
      }
    }
  }

  .title-unit{
    float: left;
  }

  .unit-list{
    margin-left: 80px;
  }

  .tips{
    margin-top: 15px;
    color: @text-light-color;
  }

  .content-r{
    .img-wx{
      margin-left: 50px;
    }
  }
}
</style>
