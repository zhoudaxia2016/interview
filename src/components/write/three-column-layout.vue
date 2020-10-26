<template>
  <div>
    <div class="wrapper">
      <!-- 可以更改元素顺序 -->
      <div class="left"></div>
      <div class="center"></div>
      <div class="right"></div>
    </div>
  </div>
</template>

<style lang="scss">
.wrapper {
  width: 100%;
}
.left {
  width: 100px;
  height: 250px;
  background: #F27781;
}
.right {
  width: 150px;
  height: 330px;
  background: #F2CF1D;
}
.center {
  height: 300px;
  background: #04BF8A;
}
</style>

<style>
/* 编写css代码实现三栏布局，左右固定宽度，中间自适应宽度 */
/* 可以使用自己喜欢的css预处理器 */
</style>