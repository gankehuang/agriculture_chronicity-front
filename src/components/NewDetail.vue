<template>
<div class="CountryDetail container-main">
    
    <div class="layout-breadcrumb" style="margin: 10px 0;">
      <Breadcrumb>
        <Breadcrumb-item href="/home">首页</Breadcrumb-item>
        <Breadcrumb-item onclick="history.go(-1)"><a>返回上一级</a></Breadcrumb-item>
        <Breadcrumb-item>{{detail.Title}}</Breadcrumb-item>
      </Breadcrumb>
    </div>

    <div class="Detail">
      <div class="block-l">
        
        <div class="block">
          <div class="title">{{detail.Title}}</div>
          <div style="text-align: right; padding: 10px;" v-if="detail.Time">时间：{{detail.Time}}</div>
          <div class="content" id="newContent" v-html="newContent">
              
          </div>
        </div>

      </div>
    </div>

</div>
</template>

<script>
export default {
  name: 'NewDetail',
  data: function(){
    return {
      'detail': {},
      'newContent': '',
      'newUrl': '',
      'active_shareToWX': false
    }
  },
  created(){
    var _this = this;
    let newid = this.$route.params.newid

    // 获取新闻详情
    const prommise_getCountryDetail = _this.global.$post({
      '_this': _this,
      'url': _this.global.API.DataManageService.GetDataInfoByID,
      'data': {
        ID: newid
      },
      'f_resolve': function(res){
          console.log(res);
          _this.detail = res;

          let contentUrl = _this.global.normalResourceUrl(res.Content)
          _this.newUrl = contentUrl
          //console.log(contentUrl);
          _this.getNewContent(contentUrl)
      }
    });


  },
  methods: {
    'getNewContent':function(url) {
        const _this = this;

        this.$.ajax({
          'url': url,
          'type': 'GET',
          'success': function(data, status){
            if(status == 'success'){
              _this.newContent = data;
              setTimeout(function(){
                _this.$('#newContent').find('img').map(function(index,item){
                  _this.$(item).attr('src', _this.global.normalResourceUrl('/Word/'+ _this.$(item).attr('src')));
                });
              }, 500);
            }
            else{
              
            }
          },
          'error': function(err){
            
          }
        });
    },
  }
} 
</script>

<style lang="less" scoped>
@import '../assets/styles/common.less';

.CountryDetail{
  background: white;
  
  .layout-breadcrumb{
    padding:10px 30px;
    background: #eee;
  }

  .Detail{
    display: flex;
    border-top: 1px solid @border-color-base;

    .block-l{
      width: 100%;
      border: 1px solid @border-color-base;
    }

    .block{
      .title{
        padding: 5px 30px;
        font-size: 20px;
        text-align: center;
        color: #007072;
        font-weight: bold;
        background: @title-bg;
      }

      .content{
        padding: 20px 30px;
      }
    }

    .block-r{
      flex: 1;
      padding: 20px;
    }

   
  }
} 
</style>