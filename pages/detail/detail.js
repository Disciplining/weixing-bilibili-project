// pages/detail/detail.js
Page
(
    {
        /**
         * 页面的初始数据
         */
        data: 
        {
			videoInfo: null,
            othersList: []
        },

        /**
         * 生命周期函数--监听页面加载
         */
        onLoad: function (options) 
        {
            let id = options.id;
            this.getCurrentVides(id);

            this.getOthersList(id);
        },

        /**
         * 生命周期函数--监听页面初次渲染完成
         */
        onReady: function () 
        {
        },

        /**
         * 生命周期函数--监听页面显示
         */
        onShow: function () 
        {
        },

        /**
         * 生命周期函数--监听页面隐藏
         */
        onHide: function () 
        {
        },

        /**
         * 生命周期函数--监听页面卸载
         */
        onUnload: function () 
        {
        },

        /**
         * 页面相关事件处理函数--监听用户下拉动作
         */
        onPullDownRefresh: function () 
        {
        },

        /**
         * 页面上拉触底事件的处理函数
         */
        onReachBottom: function ()
        {
        },

        /**
         * 用户点击右上角分享
         */
        onShareAppMessage: function () 
        {
        },

        /**
         * 根据视频id获取视频详情
         */
        getCurrentVides: function(videoId)
        {
			let that = this;

            wx.request
            (
                {
                    url: 'https://easy-mock.com/mock/5c1dfd98e8bfa547414a5278/bili/videoDetail?id=' + videoId,
                    success: (res)=>
                    {
                        // console.log('请求成功', res);
						if(res.data.code === 0)
						{
                            // 不知为何，有时code为0但没有视频数据
                            // console.log('总数据', res)
                            // console.log('视频数据', res.data.data.videoInfo)
							that.setData
							(
								{
									videoInfo: res.data.data.videoInfo
								}
							);
						}
                    },
                    fail: ()=>
                    {
                        console.log('请求失败');
                    }
                }
            );
        },
        /**
         * 请求推荐列表数据
         */
        getOthersList: function(videoId)
        {
            let that = this;

            wx.request
            (
                {
                    url: 'https://easy-mock.com/mock/5c1dfd98e8bfa547414a5278/bili/othersList?id=' + videoId,
                    success: (res)=>
                    {
                        if (res.data.code === 0)
                        {
                            // console.log('赋值的数据', res.data.data.othersList);
                            that.setData
                            (
                                {
                                    othersList: res.data.data.othersList
                                }
                            );
                        }
                        // console.log('请求成功', res);
                    },
                    fail: ()=>
                    {
                        console.log('请求失败');
                    }
                }
            );
        }
    }
)