<script setup>
import list from './components/data.vue'
import search from './components/search.vue'
import bootmarks from './components/bootmarks.vue'

import wincontent from './components/screen/content.vue'
import winedit from './components/screen/edit.vue'
import winadd from './components/screen/add.vue'
</script>

<template>
  <div class="screen1">

    <!-- <component :is="currentComponent"></component> -->
    <!-- <wincontent /> -->
  </div>

  <div class="content-wrap">

    <header>
      <div class="head">
        <h1>HIHISO</h1>
        <svg width="71" height="16" viewBox="0 0 71 16" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M10.1289 15H7.41406V8.83789H3.39062V15H0.666016V0.78125H3.39062V6.61133H7.41406V0.78125H10.1289V15ZM13.3613 0.78125H21.584V2.99805H18.8105V12.793H21.584V15H13.3613V12.793H16.0664V2.99805H13.3613V0.78125Z"
            fill="#78F8E1" />
          <path
            d="M34.1523 15H31.4375V8.83789H27.4141V15H24.6895V0.78125H27.4141V6.61133H31.4375V0.78125H34.1523V15ZM37.3848 0.78125H45.6074V2.99805H42.834V12.793H45.6074V15H37.3848V12.793H40.0898V2.99805H37.3848V0.78125ZM56.1738 11.2891C56.1738 11.0352 56.1283 10.7975 56.0371 10.5762C55.9525 10.3548 55.806 10.1465 55.5977 9.95117C55.3828 9.76237 55.1029 9.58984 54.7578 9.43359C54.4193 9.27083 53.9961 9.12109 53.4883 8.98438C52.7005 8.76953 52.0072 8.50911 51.4082 8.20312C50.8158 7.89714 50.3307 7.56185 49.9531 7.19727C49.5755 6.83268 49.2891 6.42904 49.0938 5.98633C48.9049 5.54362 48.8105 5.06185 48.8105 4.54102C48.8105 3.94206 48.9375 3.39844 49.1914 2.91016C49.4453 2.42188 49.7969 2.00521 50.2461 1.66016C50.6953 1.3151 51.2259 1.05143 51.8379 0.869141C52.4499 0.680339 53.1139 0.585938 53.8301 0.585938C54.5723 0.585938 55.2493 0.693359 55.8613 0.908203C56.4798 1.12305 57.0104 1.42253 57.4531 1.80664C57.8958 2.19727 58.2409 2.65951 58.4883 3.19336C58.7357 3.72721 58.8594 4.31315 58.8594 4.95117H56.1836C56.1706 4.63216 56.112 4.33919 56.0078 4.07227C55.9102 3.80534 55.7637 3.57422 55.5684 3.37891C55.3665 3.1901 55.1159 3.04362 54.8164 2.93945C54.5234 2.82878 54.1784 2.77344 53.7812 2.77344C53.4167 2.77344 53.0911 2.81901 52.8047 2.91016C52.5247 2.99479 52.2871 3.11523 52.0918 3.27148C51.8965 3.43424 51.7467 3.6263 51.6426 3.84766C51.5449 4.0625 51.4961 4.29688 51.4961 4.55078C51.4961 4.81771 51.5612 5.05859 51.6914 5.27344C51.8281 5.48828 52.0234 5.68034 52.2773 5.84961C52.5312 6.02539 52.8372 6.1849 53.1953 6.32812C53.5599 6.47135 53.9701 6.60482 54.4258 6.72852C54.9141 6.86523 55.3796 7.03125 55.8223 7.22656C56.265 7.42188 56.6719 7.64648 57.043 7.90039C57.6029 8.31706 58.0488 8.80208 58.3809 9.35547C58.7129 9.90885 58.8789 10.5469 58.8789 11.2695C58.8789 11.8945 58.752 12.4512 58.498 12.9395C58.2507 13.4212 57.9056 13.8281 57.4629 14.1602C57.0202 14.4987 56.4928 14.7559 55.8809 14.9316C55.2689 15.1009 54.6016 15.1855 53.8789 15.1855C53.1693 15.1855 52.4661 15.0814 51.7695 14.873C51.0794 14.6582 50.4772 14.3457 49.9629 13.9355C49.4746 13.5319 49.0872 13.0566 48.8008 12.5098C48.5208 11.9629 48.3809 11.3216 48.3809 10.5859H51.0762C51.0892 11.0156 51.1641 11.3835 51.3008 11.6895C51.4375 11.9954 51.6296 12.2461 51.877 12.4414C52.1178 12.6367 52.4076 12.7799 52.7461 12.8711C53.0911 12.9622 53.4688 13.0078 53.8789 13.0078C54.2435 13.0078 54.5658 12.9655 54.8457 12.8809C55.1322 12.7962 55.373 12.679 55.5684 12.5293C55.7637 12.3796 55.9134 12.2005 56.0176 11.9922C56.1217 11.7773 56.1738 11.543 56.1738 11.2891ZM70.7246 8.93555C70.7246 9.54753 70.6693 10.1302 70.5586 10.6836C70.4479 11.2305 70.2884 11.7383 70.0801 12.207C69.8587 12.6758 69.5853 13.1055 69.2598 13.4961C68.9342 13.8867 68.5632 14.2122 68.1465 14.4727C67.7689 14.7005 67.3522 14.8763 66.8965 15C66.4473 15.1302 65.9622 15.1953 65.4414 15.1953C64.888 15.1953 64.377 15.1237 63.9082 14.9805C63.4395 14.8372 63.013 14.6354 62.6289 14.375C62.2513 14.1016 61.9128 13.7728 61.6133 13.3887C61.3138 12.998 61.0632 12.5586 60.8613 12.0703C60.679 11.6211 60.5391 11.1328 60.4414 10.6055C60.3503 10.0781 60.3047 9.52148 60.3047 8.93555V6.86523C60.3047 6.24023 60.3568 5.64779 60.4609 5.08789C60.5716 4.52799 60.7311 4.01042 60.9395 3.53516C61.1413 3.08594 61.3854 2.67904 61.6719 2.31445C61.9648 1.94987 62.3001 1.63737 62.6777 1.37695C63.0488 1.12305 63.4655 0.927734 63.9277 0.791016C64.39 0.654297 64.8913 0.585938 65.4316 0.585938C65.9785 0.585938 66.4896 0.657552 66.9648 0.800781C67.4466 0.9375 67.8796 1.13607 68.2637 1.39648C68.6478 1.64388 68.9831 1.94336 69.2695 2.29492C69.5625 2.64648 69.8132 3.03385 70.0215 3.45703C70.2493 3.9388 70.4219 4.46615 70.5391 5.03906C70.6628 5.61198 70.7246 6.2207 70.7246 6.86523V8.93555ZM67.9414 6.8457C67.9414 6.48112 67.9219 6.13607 67.8828 5.81055C67.8503 5.47852 67.7949 5.17253 67.7168 4.89258C67.6191 4.54102 67.4889 4.22852 67.3262 3.95508C67.1634 3.67513 66.9714 3.44727 66.75 3.27148C66.5742 3.14128 66.3757 3.04036 66.1543 2.96875C65.9395 2.89714 65.6986 2.86133 65.4316 2.86133C65.1777 2.86133 64.9466 2.89388 64.7383 2.95898C64.5365 3.02409 64.3542 3.11849 64.1914 3.24219C63.9701 3.42448 63.7812 3.65234 63.625 3.92578C63.4753 4.19922 63.3581 4.51823 63.2734 4.88281C63.2083 5.16276 63.1595 5.46875 63.127 5.80078C63.1009 6.13281 63.0879 6.48112 63.0879 6.8457V8.93555C63.0879 9.2806 63.1009 9.61263 63.127 9.93164C63.153 10.2507 63.1986 10.5469 63.2637 10.8203C63.3353 11.1654 63.4395 11.4811 63.5762 11.7676C63.7194 12.0475 63.8854 12.2754 64.0742 12.4512C64.25 12.6074 64.4486 12.7279 64.6699 12.8125C64.8978 12.8971 65.1549 12.9395 65.4414 12.9395C65.7148 12.9395 65.9655 12.9004 66.1934 12.8223C66.4212 12.7441 66.623 12.6302 66.7988 12.4805C67.0202 12.2982 67.2057 12.0703 67.3555 11.7969C67.5117 11.5169 67.6354 11.2012 67.7266 10.8496C67.7982 10.5762 67.8503 10.2767 67.8828 9.95117C67.9219 9.62565 67.9414 9.28711 67.9414 8.93555V6.8457Z"
            fill="white" />
        </svg>
      </div>

      <nav>
        <ul>
          <li>导航</li>
          <li>热榜</li>
          <li>活动</li>
          <li>订阅</li>
          <li>
            <button @click="loadComponent('winedit')">设置</button>
            <button @click="loadComponent('winadd')">添加订阅</button>
            <button @click="loadComponent('wincontent')">文章内容</button>
          </li>

        </ul>
      </nav>

    </header>

    <main ref="container">

      <div ref="left" class="left" :style="{ width: leftPanelWidth + '%' }">
        <list />
        <div class="resizer" @mousedown="startResize">
        </div>
      </div>

      <div ref="right" class="right" :style="{ width: rightPanelWidth + '%' }">
        <div class="search-wrap">
          <search />
        </div>
        <bootmarks />
      </div>

    </main>

  </div>
</template>
<script>
export default {
  data() {
    return {
      isResizing: false,
      startX: 0,
      initialLeftPanelWidth: 20, // 初始左侧面板宽度百分比
      containerWidth: 0, // 容器宽度，初始为0
      leftPanelWidth: 20, // 左侧面板宽度百分比
      rightPanelWidth: 80, // 右侧面板宽度百分比
      currentComponent: null,
    };
  },

  components: {
    winedit,
    winadd,
    wincontent
  },

  mounted() {
    // 在组件挂载完成后获取容器的宽度
    this.$nextTick(() => {
      this.containerWidth = this.$refs.container.clientWidth;
      this.leftPanelWidth = this.$refs.left.clientWidth / this.containerWidth * 100;
      this.rightPanelWidth = 100 - this.leftPanelWidth;
    });



  },

  methods: {

    startResize(event) {
      this.isResizing = true;
      this.startX = event.clientX;
      this.initialLeftPanelWidth = this.leftPanelWidth;
      document.addEventListener('mousemove', this.handleMouseMove);
      document.addEventListener('mouseup', this.stopResize);
    },
    handleMouseMove(event) {
      if (this.isResizing) {
        const deltaX = event.clientX - this.startX;
        const newLeftPanelWidth = this.initialLeftPanelWidth + (deltaX / this.containerWidth) * 100;
        this.leftPanelWidth = Math.max(10, Math.min(80, newLeftPanelWidth));
        this.rightPanelWidth = 100 - this.leftPanelWidth;
      }
    },
    stopResize() {
      this.isResizing = false;
      document.removeEventListener('mousemove', this.handleMouseMove);
      document.removeEventListener('mouseup', this.stopResize);
    },
    // 调入组件
    loadComponent(componentName) {
      this.currentComponent = componentName;
    }
  }
};
</script>



<style scoped lang="scss">
.screen {
  position: absolute;
  background-color: #2a7a9d;
  width: 100%;
  height: 100%;
  z-index: 999;
  // opacity: 0.5;
}

.content-wrap {
  position: absolute;
  width: 100%;
  height: 100%;
}

header {
  width: 100%;
  display: flex;
  height: 50px;
  background: #252B34;
  flex-wrap: nowrap;
  flex-direction: row;
  align-items: center;
  padding: 0 30px;

  h1 {
    position: absolute;
    font-size: 0;
  }

  nav {
    width: 100%;
    height: 100%;


    ul {
      display: flex;
      flex-direction: row;
      column-gap: 20px;
      height: 100%;
      justify-content: center;

      li {
        min-width: 100px;
        display: flex;
        align-items: center;
        justify-content: center;
        height: 100%;
        background-color: transparent;
        transition: all 0.3s ease;
        cursor: pointer;
        user-select: none;
      }

      li:hover {
        background-color: #2b3340;
        color: #fff;
      }

    }

  }

}

main {
  position: relative;
  display: flex;
  width: 100%;
  height: calc(100% - 50px);
  flex-direction: row;
  background-color: #21252b;

  .left {
    position: relative;
    // padding: 30px;
    // width: 30%;
  }


  .resizer {
    width: 6px;
    height: 100%;
    background-color: transparent;
    cursor: ew-resize;
    position: absolute;
    top: 0;
    right: -3px;
    transition: all 0.2s ease;

    &:hover {
      background-color: #2a7a9d;
    }
  }

  .right {
    display: flex;
    padding: 0 40px;
    align-items: center;
    justify-content: flex-start;
    width: 70%;
    flex-direction: column;

    .search-wrap {
      display: flex;
      width: 100%;
      height: 40%;
      align-items: center;
      justify-content: center;
    }


  }
}
</style>
