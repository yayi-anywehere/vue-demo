<template>
  <div id="tav1" class="container">
  <h1 class="tab1-title">{{tab1}}</h1>
   <svg :width='width' :height='height' >
        <a :href="tag.href" v-for='tag in tags'>
          <text :x='tag.x' :y='tag.y' :font-size='25 * (1200/(700-tag.z))' :fill-opacity='((400+tag.z)/600)'>{{tag.text}}</text>
      </a>
   </svg>
<router-view></router-view>
</div>
</template>

<script>
export default {
  name: 'tab1',
  data(){
    return {
      tab1:"擅长技术",
      width: 900, //svg width
      height: 470, //svg height
      tagsNum: 30, //tag num
      RADIUS: 300, // radius 
      tags:[]
    }
  },
  computed:{
    CX(){
      return this.width/2; //球心x坐标
    },
    CY(){
      return this.height/2; //球心y坐标
    }
  },
  created(){
    //初始化标签
    let tags=[];
    let items=["HTML","HTML5","CSS","CSS3","JavaScript","jQuery","Vue.js","Compass","Sass","SCSS","PhotoShop"]
    for(let i=0; i<this.tagsNum;i++){
      let tag={}
      let k= -1 + (2*(i+1)-1) / this.tagsNum
      let a = Math.acos(k)
      let b = a * Math.sqrt(this.tagsNum * Math.PI)
      tag.text=items[i];
      tag.x = this.CX +  this.RADIUS * Math.sin(a) * Math.cos(b);
        tag.y = this.CY +  this.RADIUS * Math.sin(a) * Math.sin(b); 
        tag.z = this.RADIUS * Math.cos(a);
        tags.push(tag)
    }
    this.tags = tags;
  }
}
 // mounted(){//使球开始旋转
 //                setInterval(() => {
 //                    this.rotateX(this.speedX);
 //                    this.rotateY(this.speedY);
 //                }, 17)
 //            },
 //            methods: {
 //                rotateX(angleX){
 //                    var cos = Math.cos(angleX);
 //                    var sin = Math.sin(angleX);
 //                    for(let tag of this.tags){
 //                        var y1 = (tag.y- this.CY) * cos - tag.z * sin  + this.CY;
 //                        var z1 = tag.z * cos + (tag.y- this.CY) * sin;
 //                        tag.y = y1;
 //                        tag.z = z1;
 //                    } 
 //                },
 //                rotateY(angleY){
 //                    var cos = Math.cos(angleY);
 //                    var sin = Math.sin(angleY);
 //                    for(let tag of this.tags){
 //                        var x1 = (tag.x - this.CX) * cos - tag.z * sin + this.CX;
 //                        var z1 = tag.z * cos + (tag.x-this.CX) * sin;
 //                        tag.x = x1;
 //                        tag.z = z1;
 //                    } 
 //                },
 //                listener(event){//响应鼠标移动
 //                    var x = event.clientX - this.CX;
 //                    var y = event.clientY - this.CY;
 //                    this.speedX = x*0.0001>0 ? Math.min(this.RADIUS*0.00002, x*0.0001) : Math.max(-this.RADIUS*0.00002, x*0.0001);
 //                    this.speedY = y*0.0001>0 ? Math.min(this.RADIUS*0.00002, y*0.0001) : Math.max(-this.RADIUS*0.00002, y*0.0001); 
 //                }
 //          }
 //        }
</script>