<template>
  <div class="task-bar">
    <div></div>
    <ul class="app-list">
      <li>win logo</li>
      <li>win logo</li>
      <li>win logo</li>
      <li>win logo</li>
    </ul>
    <div></div>
  </div>
</template>

<style lang="scss">
.task-bar {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 50px;
  padding: 5px;
  background-color: #e2ebf8;

  .app-list {
    display: flex;
    align-items: center;
    justify-content: center;
  }
}
</style>
