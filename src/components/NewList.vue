<template>
  <div class="CountryList container-main">
    <div class="layout-breadcrumb" style="margin: 10px 0;">
      <Breadcrumb>
        <Breadcrumb-item href="/home">首页</Breadcrumb-item>
        <Breadcrumb-item onclick="history.go(-1)"><a>返回上一级</a></Breadcrumb-item>
        <Breadcrumb-item>{{newType}}</Breadcrumb-item>
      </Breadcrumb>
    </div>

    <Card class="CountryInfo">
      <p slot="title" class="AreaName">
        {{newType}}
      </p>
      <div class="list">
        <router-link class="item" v-for="item in newlist" :key="item.Id" :to="{name:'newdetail', params:{newid:item.Id}}">{{item.Title}}</router-link>
      </div>
    </Card>

  </div>
</template>

<script>
export default {
  name: 'NewList',
  data: function () {
    return {
      'newlist': [],
      'newType': '',
      'listid': ''
    }
  },
  created() {
      this.getType()
      this.getData(this.listid) 
  },
  
  methods: {
    getType() {
        let listid = this.$route.params.listid
        this.listid = listid;
        if(listid === '3-1'){
            this.newType = '工作动态'
        }else if(listid === '3-2'){
            this.newType = '行业资讯'
        }else if(listid === '3-3'){
            this.newType = '学术资讯'
        }else if(listid === '1-1-1'){
            this.newType = '共享联盟'
        }else if(listid === '1-1-2'){
            this.newType = '数据中心'
        }else if(listid === '1-1-3'){
            this.newType = '实验站点'
        }else if(listid === '1-2'){
            this.newType = '专家队伍'
        }else if(listid === '2-1'){
            this.newType = '各中心检测任务'
        }else if(listid === '2-2-1'){
            this.newType = '用户手册'
        }else if(listid === '2-2-2'){
            this.newType = '汇交系统FAQ'
        }else if(listid === '2-3'){
            this.newType = '应用案例'
        }
    },
    getData(type) {
            const _this = this;
            const prommise_getInfoList = _this.global.$post({
                '_this': _this,
                'url': _this.global.API.DataManageService.GetAllData,
                'data': {
                    draw: 0, 
                    start: 0, 
                    length: 10000, 
                    retrievalInfo : JSON.stringify({'Type': type }),
                },
                'f_resolve': function(res){
                    let resData = JSON.parse(res.data);
                    console.log(resData)
                    _this.newlist = resData;
                    
                }
            });
        },
 
  },
  watch:{
     "$route":function(to,from){
        //console.log(this.$route.params.listid);
        this.getType()
        this.getData(this.$route.params.listid)
     }
  }
}
</script>

<style lang="less" scoped>
@import '../assets/styles/common.less';

.CountryList{
  .layout-breadcrumb{
    padding:10px 30px;
    background: #eee;
  }

  .CountryInfo{
    .AreaName{
      text-align: center;
    }

    .list{
        
    }

    .item{
      display: inline-block;
      padding: 10px;
      width: 100%;

      &:hover{
        background: @table-td-hover-bg;
      }
    }
  }
}
</style>