<template>
  <div class="CommonNav">
    <Menu mode="horizontal" theme="primary" active-name="1" class="container-main navlist" @on-select="routerTo">
        <MenuItem name="1">
          首页
        </MenuItem>
        <Submenu name="2">
            <template slot="title" name="sadf">
              工作网络
            </template>
            <MenuGroup title="监测网络">
                <MenuItem name="2-0">共享联盟</MenuItem>
                <MenuItem name="2-1">数据中心</MenuItem>
                <MenuItem name="2-2">实验站点</MenuItem>
            </MenuGroup>
            <MenuGroup title="砖家队伍">
                <MenuItem name="2-3">砖家队伍</MenuItem>
            </MenuGroup>
        </Submenu>
        <Submenu name="3">
            <template slot="title">
              监测任务
            </template>
            <MenuGroup title="各中心监测任务">
                <MenuItem name="3-0">各中心监测任务</MenuItem>
            </MenuGroup>
            <MenuGroup title="工作资料">
                <MenuItem name="3-1">用户手册</MenuItem>
                <MenuItem name="3-2">汇交系统FAQ</MenuItem>
            </MenuGroup>
            <MenuGroup title="应用案例">
                <MenuItem name="2-1">应用案例</MenuItem>
            </MenuGroup>
        </Submenu>
        <Submenu name="4">
          <template slot="title">
            新闻动态
          </template>
          <MenuItem name="4-0">工作动态</MenuItem>
          <MenuItem name="4-1">行业资讯</MenuItem>
          <MenuItem name="4-2">学术资讯</MenuItem>
        </Submenu>
        
        <MenuItem name="5">
            关于我们
        </MenuItem>
    </Menu>
  </div>
</template>

<script>
export default {
  name: 'CommonNav',
  methods: {
    routerTo: function (name) {
      console.log(name)
      let to = '/';
      switch(name){
        case '1': to = '/home'; break;
        case '2-0': to = '/country/list'; break;
        default: to = '/';
      }
      this.router.push(to);
    }
  },
  mounted: function () {
  }
}
</script>

<style lang="less" scoped>
@import '../assets/styles/common.less';

.CommonNav{
  background: #828282;

  .navlist{
    display: flex;
    height: 35px;
    line-height: 35px;
    background: #828282;

    & > *{
      flex: 1;
      text-align: center;
    }
    .ivu-menu-item, .ivu-menu-submenu{
      padding: 0;
    }

    a{
      /*display: block;*/
      color: white;

      &:hover{
        text-decoration: none;
      }
    }
  }
}

.ivu-menu-primary{
  .ivu-menu-horizontal{
     .ivu-menu-item-active{
        background: #007072;
     }
  }
}



</style>