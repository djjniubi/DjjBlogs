<template>
    <div class="tool-bar-r">
        <div>

        </div>
       <span class="username">admin</span>
       <div class="avatar">
			<img src="../../../assets/images/avatar.gif" alt="avatar" />
		</div>
    </div>
</template>
<style lang="scss" scoped>
.tool-bar-r{
    display: flex;
    align-items: center;
    justify-content: center;
}
    .avatar {
	width: 40px;
	height: 40px;
	overflow: hidden;
	cursor: pointer;
	border-radius: 50%;
	img {
		width: 100%;
		height: 100%;
	}
}

.username{
    margin: 0 20px;
}
</style>