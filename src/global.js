const Domain = {

  'api': 'http://10.121.14.103:8013',   
  'resource': 'http://10.121.14.103:8013/File',
}


const API = {
  'UserManageService': {
      'Login': Domain.api + '/UserManageService.asmx/Login',     //登录
      'LogOff': Domain.api + '/UserManageService.asmx/LogOff',      //退出登录
  },

  'UploadManageService': {
      'UploadExcel': Domain.api + '/UploadManageService.asmx/UploadExcel',
      'UploadAll': Domain.api + '/UploadManageService.asmx/UploadAll'
  },
  'DataManageService': {   
      'GetAllData': Domain.api + '/DataManageService.asmx/GetAllData',  //获取数据
      'AddorEditData': Domain.api + '/DataManageService.asmx/AddorEditData',  //添加编辑
      'DelData': Domain.api + '/DataManageService.asmx/DelData',  //删除
      'GetDataInfoByID': Domain.api + '/DataManageService.asmx/GetDataInfoByID',  //获取详情
  },

}

export default {
  'Domain': Domain,
  'API': API,
  // 发送ajax POST请求；参数option包含项：_this, url, data, f_resolve
  '$post': function(option){
    let prommise = new Promise(function(resolve, reject){
      option._this.$.ajax({
        'url': option.url,
        'type': 'POST',
        'data': option.data,
        'success': function(data, status){
          if(status == 'success' && data.success == 1){
            resolve(JSON.parse(data.resultData));
          }
          else{
            reject(data.message);
          }
        },
        'error': function(err){
          reject(err.responseText);
        }
      });
    });

    prommise
    .then(data => {
      option.f_resolve(data);
    })
    .catch(err => {
      option._this.$Message.error({
        content: err,
        closable: true
      });
    });

    return prommise;
  },
  // 补全服务器资源访问路径
  'normalResourceUrl': function(url){
    if(typeof url === 'string'){
      if(url.indexOf('http://')===0 || url.indexOf('https://')===0){
        return url;
      }
      else{
        return Domain.resource + url;
      }
    }
    else{
      return url;
    }
  }
}