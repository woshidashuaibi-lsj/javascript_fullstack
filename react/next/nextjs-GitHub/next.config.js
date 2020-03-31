const withCss= require('@zeit/next-css')

const config = {
    //编译文件的输出目录
    distDir: 'dest',
    //页面内容缓存配置
    onDemandEntries: {
        //内容在内存中缓存的时长
        maxInactiveAge: 25 * 1000
    },
    //服务端渲染和客户端渲染都可以获取的配置
    publicRuntimeConfig: {
        staticFolder: './static'
    }
}

if (typeof require !== 'undefined') {
    require.extensions['.css'] = (file) =>{}
}


module.exports =withCss({
    distDir: 'dest'
})