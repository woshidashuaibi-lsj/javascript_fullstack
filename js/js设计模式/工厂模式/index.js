var XMLHttpFactory = function () {}  //简单的工厂


XMLHttpFactory.createXMLHttp = function () {
    var XMLHttp= null
    if (window.XMLHttpRequest) {
      XMLHttp = new XMLHttpRequest()
    }
    else if (window.ActiveXObject) {
        XMLHttp = new ActiveXObject("Microsoft.XMLHTTP")
    }
    return XMLHttp
}
// XMLHttpFactory.createXMLHttp() 让这个方法根据当前的环境的具体情况返回一个XMLHttp


var AjaxHander = function() {
    var XMLHttp =XMLHttpFactory.createXMLHttp() //具体操作
}
