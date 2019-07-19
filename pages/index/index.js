Page
(
	{
        /**
         * ajx请求独轮播图数据
         */
        getWiperList: function()
        {
            let that = this;
            wx.request
            (
                {
                    url: 'https://easy-mock.com/mock/5c1dfd98e8bfa547414a5278/bili/swiperList',
                    success: (result) =>
                    {
                        if(result.data.code == 0)
                        {
                            // console.log(result.data.data.swiperList);

                            that.setData
                            (
                                {
                                    swiperList: result.data.data.swiperList
                                }
                            );
                        }
                    },
                    fail: () => 
                    {
                        console.log('请求失败');
                    },
                    complete: () =>
                    {}
                }
            );
        },

		/**
		 * ajax请求首页导航数据
		 */
		getNavList: function()
		{
			let that = this;

			wx.request
			(
				{
					url: 'https://easy-mock.com/mock/5c1dfd98e8bfa547414a5278/bili/navList',
					success: (result)=>
					{
						if(result.data.code == 0)
						{
							that.setData
							(
								{
									navList: result.data.data.navList
								}
							);
						}
					},
					fail: ()=>
					{
						console.log('请求失败');
					},
					complete: ()=>{}
				}
			);
		},

        /**
         * ajax请求视频数据
         */
        getVideosList: function()
        {
            let that = this;
            wx.request
            (
                {
                    url: 'https://easy-mock.com/mock/5c1dfd98e8bfa547414a5278/bili/videosList',
                    success: (result) => 
                    {
                        if (result.data.code == 0) 
                        {
                            that.setData
                            (
                                {
                                    videosList: result.data.data.videosList
                                }
                            );
                            console.log('数据', result.data.data.videosList);
                        }
                    },
                    fail: () => 
                    {
                        console.log('请求失败');
                    },
                    complete: () => { }
                }
            );
        },

        /**
         * 这个函数
         * 点击导航条时，下边的样式跟着改变
         */
		activeNav: function(e)
		{
			this.setData
			(
				{
					currentIndexNav: e.target.dataset.index
				}
			);
		},

		/**
		 * 页面的初始数据
		 */
		data: 
		{
			currentIndexNav: 0,
            swiperList: [],
            videosList: []
		},
	
		/**
		 * 生命周期函数--监听页面加载
		 */
		onLoad: function (options) 
		{
			this.getNavList();
            this.getWiperList();
            this.getVideosList();
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
		
		}
	}
)