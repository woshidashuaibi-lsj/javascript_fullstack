<template>
  <div id="app">
   <h1>我是大帅逼 博客</h1>
   <button @click="showHide">show/hide highlighted post</button>
   <BlogPost v-for="blogPost in visibleBlogPosts" :key="blogPost.title" :post="blogPost" ></BlogPost>
    <!-- <router-view/> -->
  </div>
</template>

<script lang="ts">
 import BlogPost ,{ Post } from "./components/BlogPost.vue";
 import { Component,Vue } from "vue-property-decorator";

@Component({
  components:{ 
    BlogPost
     }
})


export default class App extends Vue{
 private blogPosts: Post[] = [
   {
     title:'my first blogpost ever!',
     body:'哈哈哈哈哈哈哈哈哈哈',
     author:'lsj',
     datePosted:new Date(2020,1,7)
   },
    {
     title:'my second blogpost ever!',
     body:'哈哈哈哈哈哈哈哈哈哈',
     author:'lsj',
     datePosted:new Date(2020,1,8),
     highlighted:true
   },
    {
     title:'my third blogpost ever!',
     body:'哈哈哈哈哈哈哈哈哈哈',
     author:'lsj',
     datePosted:new Date(2020,1,9)
   }
 ]

public showHighlighted:boolean=true

  get visibleBlogPosts(){
    return this.blogPosts.filter((post:Post)=>post.highlighted ===undefined|| post.highlighted===this.showHighlighted )
  }
 
  public showHide () {
   this.showHighlighted = !this.showHighlighted
 }
}
</script>

<style lang="stylus">
#app
  font-family 'Avenir', Helvetica, Arial, sans-serif
  -webkit-font-smoothing antialiased
  -moz-osx-font-smoothing grayscale
  text-align center
  color #2c3e50
  margin-top 60px
</style>
