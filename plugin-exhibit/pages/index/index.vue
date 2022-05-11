<template>
    <view class="content">
        <view class="list">
            <view class="item" v-for="(item, index) in list" :key="index" @click="toView(item.url)">
                <view class="title">{{ item.title }}</view>
                <!-- <view class="iconfont icon-code">code</view> -->
                <view class="iconfont icon-arrow-right"></view>
            </view>
        </view>
    </view>
</template>

<script src="./js/index.js"></script>

<style lang="scss" scoped>
.content {
    min-height: 100vh;
    background-color: #f5f5f5;
    padding: 20rpx;
    box-sizing: border-box;
}
.list {
    .item {
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 100%;
        line-height: 40rpx;
        font-size: 24rpx;
        color: #333;
        padding: 20rpx;
        margin-bottom: 20rpx;
        border-radius: 8rpx;
        box-sizing: border-box;
        background-color: #ffffff;
        .title {
            flex: 1;
        }
        .icon-code,
        .icon-arrow-right {
            font-size: 42rpx;
            line-height: 50rpx;
            color: #333;
            margin-left: 12rpx;
        }
    }
}
</style>
