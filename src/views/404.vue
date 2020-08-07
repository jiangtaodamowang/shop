<template>
    <div>
        <div class="info">
            <h3>Not Found 杯具啊</h3>
        <h1>HTTP 404...</h1>
        <p>可能这个页面已经飞走了</p>
        </div>
        <div class="images">
            <img src="../assets/img/404n.png" alt="">
        </div>
    </div>
</template>
<script>
export default {
    name: 'Error'
}
</script>
<style scoped>
.info{
    text-align: center;
    margin-top: 25px;
}
    .images {
	position: absolute;
	top: 50%;
	left: 50%;
	-webkit-transform: translate(-50%, -50%);
	-moz-transform: translate(-50%, -50%);
	-ms-transform: translate(-50%, -50%);
	-o-transform: translate(-50%, -50%);
	transform: translate(-50%, -50%);
}
</style>