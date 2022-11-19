<template>
  <el-card class="box-card" shadow="always">
    <div class="common-layout">
      <el-container>
        <el-header>Header</el-header>
        <el-container>
          <el-aside width="200px">Aside</el-aside>
          <el-container>
            <el-main>
              <router-view></router-view>
            </el-main>
            <el-footer><AudioPlayer /></el-footer>
          </el-container>
        </el-container>
      </el-container>
    </div>
  </el-card>
</template>

<script setup>
import Home from '@/views/home'
import AudioPlayer from '@/components/AudioPlayer'
</script>

<style lang="scss" scoped>
.box-card {
  margin: 30px 50px;
  background-color: rgba(0, 0, 0, 0.3);
  border: none;
  .common-layout {
    height: 700px;
  }
  .el-header {
    height: 100px;
  }
  .el-aside {
    height: 600px;
  }
  .el-main {
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
    height: 500px;
    background-color: #fff;
  }
  .el-footer {
    height: 100px;
    background-color: skyblue;
  }
}
</style>