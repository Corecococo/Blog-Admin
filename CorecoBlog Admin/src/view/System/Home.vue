<template>
  <div class="coco-container">

    <div class="card-list">
      <el-card class="box-card">
        <template #header>
          <span class="header-title">访客数</span>
          <el-tag type="success" size="small" style="float: right">周</el-tag>
        </template>
        <div class="card-content">
          20000
          <span>
                  <svg t="1656158295552" class="icon" viewBox="0 0 1024 1024" version="1.1"
                       xmlns="http://www.w3.org/2000/svg" p-id="27011" width="48" height="48"><path
                      d="M134.656 224.597333a126.293333 126.293333 0 1 0 126.122667-126.293333 126.122667 126.122667 0 0 0-126.122667 126.293333zM431.786667 160.085333A63.658667 63.658667 0 1 0 494.933333 96.597333a63.658667 63.658667 0 0 0-63.146666 63.488zM614.4 176.298667a63.658667 63.658667 0 1 0 62.805333-63.658667A63.317333 63.317333 0 0 0 614.4 176.298667zM762.197333 257.706667a63.658667 63.658667 0 1 0 63.658667-63.488 63.658667 63.658667 0 0 0-63.658667 63.488zM454.314667 308.736c-193.536 77.141333-143.36 247.125333-12.629334 292.010667 85.333333 28.672 43.861333 127.146667 34.986667 182.613333-17.92 109.226667 77.824 135.168 172.714667 119.466667s224.768-238.933333 138.922666-452.266667c-90.453333-223.232-333.994667-141.824-333.994666-141.824z"
                      fill="#FFBE61" p-id="27012"></path></svg>
        </span>
        </div>
        <div class="card-footer">
          <span>总访问数</span>
          <span>{{ totalVisitor }}</span>
        </div>
      </el-card>

      <el-card class="box-card">
        <template #header>
          <span class="header-title">阅读数</span>
          <el-tag type="primary" size="small" style="float: right">周</el-tag>
        </template>
        <div class="card-content">
          20000
          <svg t="1656158266994" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"
               p-id="26835" width="48" height="48">
            <path d="M430.602 443.728H172.941v409.721h257.661l9.723 22.763h123.159l12.965-22.763h251.179V437.225z"
                  fill="#ED8F27" p-id="26836"></path>
            <path
                d="M563.484 888.712H440.325l-11.495-7.59-6.48-15.173H172.94l-12.5-12.5v-409.72l12.5-12.5H430.5l396.923-6.502 12.705 12.498V853.45l-12.5 12.5H583.714l-9.367 16.449-10.863 6.313z m-114.906-25h107.641l9.367-16.449 10.862-6.313h238.68V449.931l-384.525 6.298H185.44V840.95h245.162l11.495 7.59 6.481 15.172z"
                fill="#300604" p-id="26837"></path>
            <path
                d="M772.531 386.823s-221.458-42.273-266.298 50.402l-22.982 384.568h52.685l4.862-31.937h231.733V386.823z"
                fill="#FCE3C3" p-id="26838"></path>
            <path
                d="M535.936 831.793h-52.685l-9.982-10.597 22.981-384.568 0.98-3.759c11.444-23.653 33.769-41.182 66.351-52.099 24.92-8.351 56.024-12.892 92.449-13.499 61.296-1.015 116.074 9.29 118.376 9.729l8.125 9.822v403.034l-10 10H549.39l-3.568 23.441-9.886 8.496z m-42.07-20h33.477l3.568-23.441 9.886-8.495h221.734V395.259c-17.44-2.796-60.6-8.781-106.461-7.984-93.223 1.611-127.655 29.096-139.979 52.604l-22.225 371.914z"
                fill="#300604" p-id="26839"></path>
            <path d="M224.797 386.823H469.99v403.034H224.797z" fill="#FCE3C3" p-id="26840"></path>
            <path
                d="M469.99 799.856H224.797l-10-10V386.822l10-10H469.99l10 10v403.034l-10 10z m-235.193-20H459.99V396.822H234.797v383.034z"
                fill="#300604" p-id="26841"></path>
            <path
                d="M292.542 310.406s139.34 22.474 190.709 81.026c27.337 31.16 26.78 73.506 26.78 73.506v317.628c0 12.645-6.106 24.506-16.384 31.825l-10.396 7.403s0.118-26.71-27.886-44.677-162.823-66.744-162.823-66.744V310.406z"
                fill="#FCE3C3" p-id="26842"></path>
            <path
                d="M489.052 829.938l-15.801-8.189c-0.013-0.789-0.575-21.645-23.286-36.216-21.401-13.731-114.557-49.018-160.825-65.758l-6.598-9.403V310.406l11.593-9.872c5.834 0.94 143.502 23.743 196.634 84.304 29.188 33.269 29.287 77.311 29.262 80.148v317.579c0 15.851-7.694 30.793-20.583 39.971l-10.396 7.402z m-186.51-126.567c27.82 10.177 132.917 49.092 158.224 65.328 17.225 11.052 25.318 25.077 29.12 35.95a29.13 29.13 0 0 0 10.145-22.084l0.001-317.76c0.003-0.365 0.059-39.017-24.297-66.778-40.047-45.646-139.256-68.81-173.192-75.589v380.933zM610.066 444.946h123.76v27.902h-123.76zM610.066 510.959h123.76v27.902h-123.76zM665.936 689.082h62.532v27.902h-62.532zM633.087 194.47l16.4 11.448-80.858 115.834-16.4-11.448zM725.26 204.73l13.734 14.54L634.785 317.7l-13.733-14.539zM800.489 240.542l13.142 15.076-52.696 45.935-13.142-15.076zM468.638 187.397l27.52 56.292-17.968 8.784-27.52-56.292zM331.501 204.24l120.28 98.428-12.666 15.478-120.28-98.427zM243.412 238.813l42.402 17.49-7.626 18.488-42.402-17.49z"
                fill="#300604" p-id="26843"></path>
          </svg>
        </div>
        <div class="card-footer">
          <span>总阅读数</span>
          <span>{{ totalReaded }}</span>
        </div>
      </el-card>

      <el-card class="box-card">
        <template #header>
          <span class="header-title">文章数</span>
          <el-tag type="warning" size="small" style="float: right">月</el-tag>
        </template>
        <div class="card-content">
          20000
          <svg t="1656158309975" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"
               p-id="27150" width="48" height="48">
            <path d="M0 0h1024v1024H0V0z" fill="#202425" opacity=".01" p-id="27151"></path>
            <path
                d="M682.666667 341.333333a136.533333 136.533333 0 0 1 273.066666 0v546.133334a68.266667 68.266667 0 0 1-68.266666 68.266666h-204.8V341.333333z"
                fill="#FFAA44" p-id="27152"></path>
            <path
                d="M68.266667 819.2a136.533333 136.533333 0 0 0 136.533333 136.533333h682.666667a68.266667 68.266667 0 0 1-68.266667-68.266666V204.8a136.533333 136.533333 0 0 0-136.533333-136.533333H204.8a136.533333 136.533333 0 0 0-136.533333 136.533333v614.4z"
                fill="#FF7744" p-id="27153"></path>
            <path
                d="M187.733333 273.066667A51.2 51.2 0 0 1 238.933333 221.866667h68.266667a51.2 51.2 0 1 1 0 102.4H238.933333A51.2 51.2 0 0 1 187.733333 273.066667z m0 204.8A51.2 51.2 0 0 1 238.933333 426.666667h409.6a51.2 51.2 0 0 1 0 102.4H238.933333A51.2 51.2 0 0 1 187.733333 477.866667zM238.933333 631.466667a51.2 51.2 0 0 0 0 102.4h204.8a51.2 51.2 0 0 0 0-102.4H238.933333z"
                fill="#FFFFFF" p-id="27154"></path>
          </svg>
        </div>
        <div class="card-footer">
          <span>总文章数</span>
          <span>{{ totalArticle }}</span>
        </div>
      </el-card>

    </div>

    <div class="coco-tabs">
        <el-tabs v-model="activeName" @tab-click="handleTabsClick">
          <el-tab-pane label="访问趋势" name="first" >
            <div v-if="activeName==='first'" class="echarts-container" ref="visitorEchartRef"></div>
          </el-tab-pane>
          <el-tab-pane label="阅读数量" name="second" :lazy="true">
            <div v-if="activeName==='second'" class="echarts-container" ref="readEchartRef"></div>
          </el-tab-pane>
        </el-tabs>
    </div>

    <div class="card-list">
      <el-card class="echart-box">
        <template #header>
          <div><span>
            博客占比
          </span></div>
        </template>
        <div class="echarts-container" ref="percentEchartsRef"></div>
      </el-card>

      <el-card class="echart-box">
        <template #header>
          <div>
            <span>阅读排行</span>
          </div>
        </template>
        <div class="echarts-container" ref="rankEchartsRef"></div>
      </el-card>
    </div>

  </div>
</template>

<script setup lang="ts">
import * as echarts from 'echarts'
import {nextTick, onMounted, onUpdated, ref, watch} from "vue";
import {ElNotification, TabsPaneContext} from "element-plus/es";

let totalVisitor = ref(99999);
let totalReaded = ref(99999);
let totalArticle = ref(99999);
const activeName = ref('first');

let getRangeDate=( range: number, type?: string ) =>{
  const formatDate = ( time: any ) => {
    // 格式化日期，获取今天的日期
    const Dates = new Date( time );
    const year: number = Dates.getFullYear();
    const month: any = ( Dates.getMonth() + 1 ) < 10 ? '0' + ( Dates.getMonth() + 1 ) : ( Dates.getMonth() + 1 );
    const day: any = Dates.getDate() < 10 ? '0' + Dates.getDate() : Dates.getDate();
    return year + '-' + month + '-' + day;
  };
  const now = formatDate( new Date().getTime() ); // 当前时间
  const resultArr: Array<any> = [];
  let changeDate: string;
  if ( range ) {
    if ( type ) {
      if ( type === 'one' ) {
        changeDate = formatDate( new Date().getTime() + ( 1000 * 3600 * 24 * range ) );
      }
      if ( type === 'more' ) {
        if ( range < 0 ) {
          for ( let i = Math.abs( range ); i >= 0; i-- ) {
            resultArr.push( formatDate( new Date().getTime() + ( -1000 * 3600 * 24 * i ) ) );
          }
        } else {
          for ( let i = 1; i <= range; i++ ) {
            resultArr.push( formatDate( new Date().getTime() + ( 1000 * 3600 * 24 * i ) ) );
          }
        }
      }
    } else {
      changeDate = formatDate( new Date().getTime() + ( 1000 * 3600 * 24 * range ) );
    }
    return resultArr;
  }else {
    return now;
  }
}
/*echart虚拟Dom*/
let visitorEchartRef = ref();
let readEchartRef = ref();
const percentEchartsRef = ref();
const rankEchartsRef = ref();

/*标签面板切换*/
const handleTabsClick = (tab: TabsPaneContext, event: Event) => {
/*如果是阅读数量面板，绘制echart*/
  if (tab.props.label === "阅读数量") {
    /*这里加个小延迟是为了让虚拟dom容器先渲染出来，然后在挂载echart图标，因为js是异步执行
    的，如果不加延迟可能echart挂载的时候，其虚拟DOM容器还没渲染完成，导致echart挂载失败 */
    setTimeout(()=>{let readEchart = echarts.init(readEchartRef.value);
      initBarEchart(readEchart);
      window.onresize = ()=>{
        readEchart.resize();
      }},100)

  }

  /*如果是访问趋势面板，绘制echart*/
  if(tab.props.label==="访问趋势"){
    setTimeout(() => {
      let visitorEchart = echarts.init(visitorEchartRef.value);
      initLineEchart(visitorEchart);
      window.onresize = () => {
        visitorEchart.resize();
      }
    }, 100);

  }
};


//通过配置选项绘制访问趋势曲线图
let initLineEchart = (echartInstance:any) => {
  /*初始化echart实例*/
  echartInstance.setOption({
    tooltip: {},
    xAxis: {
      data: getRangeDate(-6,'more')
    },
    yAxis: {},
    series: [
      {
        name: '访客数量',
        type: 'line',
        data: [5, 20, 36, 10, 10, 20,99],
        smooth: true
      }
    ]
  });
}

//通过配置选项绘制阅读数量柱状图
let initBarEchart = (echrtInstance:any)=>{
  echrtInstance.setOption({
    tooltip:{},
    xAxis:{
      data: getRangeDate(-6, 'more'),
    },
    yAxis: {},
    series:[
      {
        type: 'bar',
        data:[23, 24, 18, 25, 27, 28, 25],
      }
    ]
  });
}

//通过配置选项绘制博客占比饼状图
const initPieEchart = (echartInstance:any)=>{
  echartInstance.setOption({
    series:[{
      type:'pie',
      data:[
        {
          value: 78,
          name:"HTML5"
        },
        {
          value: 88,
          name:"CSS3"
        },
        {
          value: 78,
          name:"JS"
        },{
          value: 98,
          name:"Vue3"
        },
        {
          value: 108,
          name:"APS.NET Core"
        }
      ]
    }]
  });
}

//TODO 通过配置选项绘制阅读排行柱状图
const initRankEcharts = (echartInstance:any)=>{
  echartInstance.setOption({
    yAxis:{
      data:['HTML5','CSS3','JS','Vue3','.NET']
    },
    xAxis: {},
    series:[
      {
        type:'bar',
        //排序逻辑从小到大，显示效果比较直观
        data:[55,66,77,88,99]
      }
    ]
  });
}

onMounted(()=>{
  /*初始化访问趋势图*/
  let visitorEchart = echarts.init(visitorEchartRef.value);
  initLineEchart(visitorEchart);

  /*初始化博客占比图*/
  const percentEchart = echarts.init(percentEchartsRef.value);
  initPieEchart(percentEchart);

  //初始化阅读排行图
  const rankEchart = echarts.init(rankEchartsRef.value);
  initRankEcharts(rankEchart);
  window.onresize = () => {
    visitorEchart.resize();
    percentEchart.resize();
  };
})


</script>

<style scoped>
.coco-container {
  width: 100%;
}

.card-list {
  width: 100%;
  display: flex;
  justify-content: space-between;
}

.box-card {
  width: 30%;
}

.echart-box{
  width: 48%;
  margin-top: 1.5rem;
}

:deep(.el-card__header) {
  font-size: .875rem;
  height: 2rem;
  padding: 0 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.card-footer {
  font-size: .875rem;
  margin-top: 1.5rem;
}

.card-footer span:nth-of-type(2) {
  float: right;
}

.card-content {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.coco-tabs{
  margin-top: 1.5rem;
}

.el-tabs {
  box-shadow: var(--el-box-shadow-light);
  padding: 0 1rem;
}

:deep(.el-tabs__item.is-top){
  font-size: 1.25rem;
}
:deep(.el-tabs__content){
  overflow: auto;
}

.echarts-container {
  width: 100%;
  min-height: 400px;
}
</style>