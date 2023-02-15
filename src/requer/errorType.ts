export const errorType=(code:string|number):string=>{
   let errorMessage:string="未知错误"
   switch (code){
      case 400 :
        errorMessage="请求失败！请您稍后重试"
        break;
        case 401:
            errorMessage = '未授权，请重新登录'
            break
        case 403:
            errorMessage = '当前账号无权限访问！'
            break
        case 404:
            errorMessage = '你所访问的资源不存在！'
            break
        case 405:
            errorMessage = '请求方式错误！请您稍后重试'
            break
        case 408:
            errorMessage = '请求超时！请您稍后重试'
            break
        case 500:
            errorMessage = '服务器端出错'
            break
        case 501:
            errorMessage = '网络未实现'
            break
        case 502:
            errorMessage = '网络错误'
            break
        case 503:
            errorMessage = '服务不可用'
            break
        case 504:
            errorMessage = '网络超时'
            break
        case 505:
            errorMessage = 'http版本不支持该请求'
            break
        default:
            errorMessage = `其他连接错误 --${code}`
   }
   return errorMessage
}