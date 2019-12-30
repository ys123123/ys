<template>
    <div class="list">
        <div class="lis" v-for="item in list" :key="item.num" >
            <p>{{item.num}}</p>
            <div class="content">
                <div class="left">
                    <span class="gray">申请人</span><span>{{item.people}}</span>
                    <span class="gray">加班日期</span><span>{{item.data}}</span>
                </div>
                <div class="left">
                    <span class="gray">加班类型</span><span>{{item.type}}</span>
                    <span class="gray">加班时数</span><span>{{item.hours}}</span>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            list: []
        }
    },
    created() {
        this.getList()
    },
    methods: {
        getList() {
            this.$http.get('/api/list').then(res=>{
                this.list = res.data.data
            })
        }
    },
}
</script>
<style lang="scss">
    .list{
        width: 100%;
        .lis{
            width: 100%;
            height: 120px;
            margin-bottom: 10px;
            background: #fff;
            padding: 0 20px;
            p{
                width: 100%;
                height: 40px;
                line-height: 40px;
            }
            .content{
                width: 100%;
                height: 70px;
                display: flex;
                .left{
                    flex: 1;
                    span{
                        display: inline-block;
                        width: 80px;
                        height: 30px;
                        line-height: 30px;
                        flex-wrap: wrap;
                    }
                    .gray{
                        color: #ccc;
                    }
                }
            }
        }
    }
</style>
