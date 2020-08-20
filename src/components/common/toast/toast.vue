<template>
    <div class="toast" v-show="isShow">
        <div>{{message}}</div>
    </div>
</template>
<script>
export default {
    name: 'Toast',
    props: {
        message: {
            type: String,
            default() {
                return ''
            }
        },
        isShow: {
            type: Boolean,
            default: false
        }
    },
    
}
</script>
<style scoped>
.toast {
    position: fixed;
    left: 50%;
    top: 50%;
    color: #ffffff;
    background-color: rgb(0, 0, 0,.8);
    padding: .26rem .4rem;
    transform: translate(-50%,-50%);
}
</style>