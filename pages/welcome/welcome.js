Page({
    data:{

    },
    onContainerTap:function(event){
        // console.log('onTap');
        // navigateTo使用父级跳转到
        // 用navigateTo要注意，只能跳转5级，这是小程序的限制（以保证简洁性）
        // wx.navigateTo({
        //     url:'../post/post'
        // });
        // 就不会出现返回按钮了
        // wx.redirectTo({
        //     url: '../post/post'
        // }),
        wx.redirectTo({
            url: '../post/post',
            success:function(event){
                console.log('success:' + event)
                console.log(event)
            },
            fail:function(){
            },
            complete:function(){
                
            }
        });
        console.log('welcome onContainerTap')
    },
    // 此事件的触发证明了父级页面时（navigateTo跳转的）被隐藏起来了
    onHide: function () {
        console.log('onHide')
    },
     // 此事件的触发证明了父级页面时（redirectTo跳转的）被卸载起来了
    onUnload: function () {
        console.log('onUnload')
    },
    // 出现冒泡排序
    onTextTap: function () {
        console.log('onTextTap')
    },
    // 解决冒泡问题：将子节点的事件由bindtap改为catchtap

})