<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <Layout style="background: #FFFFFF;">
        <Header v-bind:class="{ fix: isFixed }">
          <CommonHeader />
          <CommonNav />
        </Header>
        <Content v-bind:class="{ fix: isFixed }" style="padding-top: 0; margin-top: 147px">
          <router-view/>
        </Content>
        <Footer>
          <CommonFooter />
        </Footer>
    </Layout>
  </div>
</template>

<script>
import CommonHeader from '@/components/CommonHeader'
import CommonNav from '@/components/CommonNav'
import CommonFooter from '@/components/CommonFooter'

export default {
  name: 'App',
  components: {
    CommonHeader: CommonHeader,
    CommonNav: CommonNav,
    CommonFooter: CommonFooter
  },
  data: function () {
    return {
      isFixed: false
    }
  },
  mounted: function () {
    window.addEventListener('scroll', this.onScroll);

    this.$Message.config({
        top: 200,
        duration: 5
    });
  },
  methods: {
    onScroll: function () {
      if (event) event.preventDefault()
      let scrollY = window.scrollY
      if (scrollY > 60) {
        this.isFixed = true
      } else {
        this.isFixed = false
      }
    }
  }
}
</script>

<style lang="less">
@import './assets/styles/common.less';

#app {
  min-height: 100%;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: @text-color;
}

.ivu-layout{
  position: absolute;
  width: 100%;
  min-height: 100%;


  .ivu-layout-header{
    position: fixed;
    width: 100%;
    height: auto;
    padding: 0;
    line-height: 1;
    background: #007072;
    z-index: 1000;

    *{
      transition: all .5s;
    }
  }

  .ivu-layout-content{
    margin-top: 155px;
    padding: 10px 0;

    /*&.fix{
      margin-top: 55px;
    }*/
  }

  .ivu-layout-footer{
    padding: 20px 0;
    background: #007072;
  }
}
</style>
