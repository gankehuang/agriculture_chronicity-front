<template>
  <div class="Home container-main">

    <Carousel autoplay v-model="carousel" loop height="500px" autoplay-speed="5000">
        <CarouselItem v-for="(item, index) in autoNew" v-if="item.Recommend==1" :key="index">
            <div class="demo-carousel">
                <!-- <img :src="item.Pic" alt="" style="width: 100%"> -->
                <div class="itemImg" v-bind:style="{background:'url('+item.Pic+') no-repeat center', backgroundSize:'cover'}"></div>
            </div>
        </CarouselItem>
        
    </Carousel>
    
    <div style="padding: 5px; font-size: 16px; border-bottom: 1px solid #CCCCCC; margin-top: 15px">
      <span style="color: #02B2B5; border-left: 6px solid #02B2B5; padding: 0px 10px">通知公告</span>
    </div>
    <div style="color: black; margin-top: 5px">
        <marquee width="100%" height="28px" direction="left" scrollamount="3" 
          onmouseover="this.stop()" onmouseout="this.start()">
            {{notificationAnnouncement.Content}}
        </marquee>
    </div>
    <img src="../assets/img/new.png" alt="" style="width: 100%; margin-top: 50px">
    <div class="new_box" >
        <div>
            <span class="title">工作动态</span>
            <div>
                <img :src="workTrend.Pic" style="width: 100%">
                <p class="p_one">{{workTrend.Title}}</p>
                <p class="p_two">{{workTrend.Synopsis}}</p>
                <div class="bottom">
                    <span>{{workTrend.Time}}</span>
                    <router-link :to="{name:'newlist', params:{listid:'3-1'}}"><Button style=" float: right"  size="small">查看更多</Button></router-link>
                </div>
            </div>
        </div>
        <div>
            <span class="title">行业资讯</span>
            <div>
                <img :src="industryInformation.Pic" style="width: 100%">
                <p class="p_one">{{industryInformation.Title}}</p>
                <p class="p_two">{{industryInformation.Synopsis}}</p>
                <div class="bottom">
                    <span>{{industryInformation.Time}}</span>
                    <router-link :to="{name:'newlist', params:{listid:'3-2'}}"><Button style="float: right"  size="small">查看更多</Button></router-link>
                </div>
            </div>
        </div>
        <div>
            <span class="title">学术资讯</span>
            <div>
                <img :src="AcademicInformation.Pic" style="width: 100%">
                <p class="p_one">{{AcademicInformation.Title}}</p>
                <p class="p_two">{{AcademicInformation.Synopsis}}</p>
                <div class="bottom">
                    <span>{{AcademicInformation.Time}}</span>
                    <router-link :to="{name:'newlist', params:{listid:'3-3'}}"><Button style=" float: right"  size="small">查看更多</Button></router-link>
                </div>
            </div>
        </div>
    </div>

    <img src="../assets/img/xueshu.png" alt="" style="width: 100%; margin-top: 70px;">

    <div class="data_center">
        <div v-for="item in dataCenter">
            <img :src="item.Pic" alt="" style="width: 100%">
            <p>{{item.Title}}</p>
        </div>
        

    </div>
    <img src="../assets/img/sjsyzdfb.png" alt="" style="width: 100%; margin-top: 70px;">
    <img src="../assets/img/aboutus.png" alt="" style="width: 100%;">

    <div style="position: relative; bottom: 290px; left: 600px; font-size: 20px; width: 500px;">{{aboutUs.Content}}</div>

    
  </div>
</template>
<script>
import HomeInfoBox from '@/components/HomeInfoBox'

export default {
    name: 'Home',
    components: {
      HomeInfoBox: HomeInfoBox
    },
    data: function () {
      return {

          autoNew: '',  //轮播
          carousel: 0,
          workTrend: '',  //工作动态
          industryInformation: '',   //行业资讯
          AcademicInformation: '',   //学术资讯
          dataCenter: '',   //数据中心
          notificationAnnouncement: '',   //通知公告
          aboutUs: '',  //关于我们
      }
    },
    created() {
        this.getData('3-1,3-2,3-3');

        this.getData('3-1');
        this.getData('3-2');
        this.getData('3-3');
        this.getData('1-1-2');  //数据中心
        this.getData('4');  //关于我们
        this.getData('5');  //通知公告
    },
    methods: {
        getData(type) {
            const _this = this;
            const prommise_getInfoList = _this.global.$post({
                '_this': _this,
                'url': _this.global.API.DataManageService.GetAllData,
                'data': {
                    draw: 0, 
                    start: 0, 
                    length: 10, 
                    retrievalInfo : JSON.stringify({'Type': type }),
                },
                'f_resolve': function(res){
                    //console.log(res)
                    let resData = JSON.parse(res.data);
                    for(let i=0; i<resData.length; i++) {
                        if(resData[i].Picture){
                            resData[i].Pic = _this.global.Domain.resource + resData[i].Picture;
                        }
                    }
                    if(type === '3-1') {
                        _this.workTrend = resData[0]
                    }else if(type === '3-2'){
                        _this.industryInformation = resData[0]
                    }else if(type === '3-3'){
                        _this.AcademicInformation = resData[0]
                    }else if(type === '1-1-2'){
                        _this.dataCenter = resData;
                    }else if(type === '4'){
                        _this.aboutUs = resData[0];
                    }else if(type === '5'){
                        _this.notificationAnnouncement = resData[0];
                    }else{
                        _this.autoNew = resData
                        //console.log(resData);
                    }
                    
                    
                }
            });


        },
    }

}
</script>

<style lang="less" scoped>
.Home{

  .itemImg{
      width: 100%;
      height: 500px;
  }
  .new_box{
      width: 100%; background: #F2F2F2; margin-top: 20px; padding: 50px;
  }
  .new_box>div{
    position: relative;
      display: inline-block;
      vertical-align: top;
      height: 500px;
      .title{ text-align: center; font-size: 16px; display: inline-block; width: 100%; background: #F2F2F2; font-size: 20px; font-weight: bold; color:#007072; padding-bottom: 20px; }
      width: 30%;
      margin: 0 15px;
      background: #ffffff;
      .p_one{ font-size: 16px; margin-top: 5px; padding: 10px;}
      .p_two{ font-size: 14px; margin-top: 5px; padding: 0 10px;}
      .bottom{ 
          padding: 0 10px;
          padding-bottom: 10px;
          position: absolute;
          bottom: 5px;
          width: 100%;
      }
   
  }
  .data_center{
      width: 100%;
      padding: 20px 60px; 
      div{
          display: inline-block;
          width: 21.5%;
          margin: 17px;
          p{ text-align: center; }
      }
  }
}
</style>
