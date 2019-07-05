<template>
<div class="CountryDetail">
  <div class="Name">
    <img class="NationalFlag" :src="detail.NationalFlag" />
    <h1 class="normal">{{detail.CNLong}}</h1>
    <ul class="infolist">
      <li class="item">
        <span class="key">中文正式名称：</span><span class="value">{{detail.CNLong}}</span>
      </li>
      <li class="item">
        <span class="key">中文简称：</span><span class="value">{{detail.CNShort}}</span>
      </li>
      <li class="item">
        <span class="key">英文正式名称：</span><span class="value">{{detail.ENLong}}</span>
      </li>
      <li class="item">
        <span class="key">英文简称：</span><span class="value">{{detail.ENShort}}</span>
      </li>
    </ul>
  </div>
  <div class="Detail">
    <div class="block-l">
      <div class="block baseinfo">
        <div class="title">基本信息</div>
        <div class="content">
          <ul class="infolist">
            <li class="item">
              <span class="key">国家归属的洲：</span><span class="value">（撒发生地方）</span>
            </li>
            <li class="item">
              <span class="key">国家归属跨国区域：</span><span class="value">（撒发生地方）</span>
            </li>
            <li class="item">
              <span class="key">首都：</span><span class="value">（撒发生地方）</span>
            </li>
            <li class="item">
              <span class="key">人口数量：</span><span class="value">（撒发生地方）</span>
            </li>
            <li class="item">
              <span class="key">主要宗教：</span><span class="value">（撒发生地方）</span>
            </li>
            <li class="item">
              <span class="key">国家电话区号：</span><span class="value">（撒发生地方）</span>
            </li>
            <li class="item">
              <span class="key">道路通行：</span><span class="value">（撒发生地方）</span>
            </li>
            <li class="item">
              <span class="key">国土面积：</span><span class="value">（撒发生地方）</span>
            </li>
          </ul>
        </div>
      </div>
      <div class="block product">
        <div class="title">主要农业产品</div>
        <div class="content"></div>
      </div>
      <div class="block profile">
        <div class="title">国家概况</div>
        <div class="content"></div>
      </div>
    </div>
    <div class="block-r">
      <div class="sidebar">
        <div class="catalog">
          <h3 class="title">目录</h3>
          <ul class="linklist">
            <li class="item">基本信息</li>
            <li class="item">主要农业产品</li>
            <li class="item">国家概况</li>
            <li class="item">地理位置</li>
            <li class="item">报告与文献</li>
            <li class="item">基本信息</li>
            <li class="item">六情</li>
          </ul>
        </div>
        <div class="totop">回顶部</div>
        <div class="share">分享到：
          <a class="item sina" href="javascript:void(0);" @click="shareTo('sina')"></a>
          <a class="item qq" href="javascript:void(0);" @click="shareTo('qzone')"></a>
          <a class="item wx" href="javascript:void(0);" @mouseover="shareToWX(true)" @mouseout="shareToWX(false)"></a>
          <img src="/static/img/code-wap.jpg" class="shareToWX" :class="{'active':active_shareToWX}" />
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
      'active_shareToWX': false
    }
  },
  mounted: function(){
    var _this = this;

    // 获取国家详情
    const prommise_getCountryDetail = _this.global.$post({
      '_this': _this,
      'url': _this.global.API.Country.getDetailByID,
      'data': {
        countryID: _this.$route.params.countryid
      },
      'f_resolve': function(data){
        data.NationalFlag = _this.global.normalResourceUrl(data.NationalFlag);
        _this.detail = data;
        console.log(_this.detail)
      }
    });
  },
  methods: {
    'shareTo': function (type) {
      var title = encodeURIComponent("农业对外合作公共信息服务平台-国家信息-"+this.detail.CNLong);
      var link = encodeURIComponent(window.location.href);
      var image = encodeURIComponent(this.detail.NationalFlag);

      if (type == "sina") {
        window.open("http://v.t.sina.com.cn/share/share.php?url=" + link + "&title=" + title + "&content=utf8&pic=" + image);
      }

      // if (type == "tx") {
      //     window.open("http://v.t.qq.com/share/share.php?url=" + link + "&title=" + title + "&pic=" + image);
      // }

      if (type == "qzone") {
        window.open('http://sns.qzone.qq.com/cgi-bin/qzshare/cgi_qzshare_onekey?title=' + title + '&url=' + link + '&pics=' + image);
      }

     //  if (type == "rr") {
     //      window.open("http://widget.renren.com/dialog/share?resourceUrl=" + link + "&title=" + title  + "&pic=" + image);
     //  }

     // if (type == "douban") {
     //      window.open("http://www.douban.com/recommend/?url=" + link + "&title=" + title + "&image=" + image);
     //  }

      return false;
    },
    'shareToWX': function(status){
      this.active_shareToWX = status;
    }
  }
} 
</script>

<style lang="less">
@import '../assets/styles/common.less';

.CountryDetail{
  background: white;

  .infolist{
    display: inline-block;

    .item{
      line-height: 28px;
      text-align: left;

      .key{
        display: inline-block;
        width: 200px;
        color: @title-color;
      }

      .value{

      }
    }
  }

  .Name{
    position: relative;
    padding: 20px 100px;

    .infolist{
      margin-top: 20px;
    }
  }

  .NationalFlag{
    position: absolute;
    top: 0;
    bottom: 0;
    right: 80px;
    height: 100%;
    padding: 20px;
  }

  .Detail{
    display: flex;
    border-top: 1px solid @border-color-base;

    .block-l{
      width: 980px;
      border-right: 1px solid @border-color-base;
    }

    .block{
      .title{
        padding: 5px 30px;
        font-size: 16px;
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

    .sidebar{
      width: 100%;

      .catalog{
        padding: 20px 30px;
        background: @title-bg;

        .title{
          /*font-size: 16px;*/
        }
      }

      .totop{
        padding: 5px 0;
        text-align: center;
        background: @title-bg-dark;
      }

      .share{
        position: relative;
        margin-top: 10px;
        text-align: center;

        .item{
          display: inline-block;
          width: 28px;
          height: 28px;
          background: url('/static/img/share.png') no-repeat;
          vertical-align: middle;

          &:nth-of-type(n+2){
            margin-left: 5px;
          }
        }

        .sina{
          background-position: 0 0;
        }

        .qq{
          background-position: -36px 0;
        }

        .wx{
          background-position: -72px 0;
        }

        .shareToWX{
          display: none;
          position: absolute;
          top: 40px;
          right: 0;
          left: 0;
          width: 100%;
          height: auto;
          box-shadow: 0 1px 6px rgba(0, 0, 0, 0.2);

          &.active{
            display: block;
          }
        }
      }
    }
  }
} 
</style>