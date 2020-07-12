 <template>
  <div id="home">
    <NavBar class="home-nav">
      <div slot="center"> 购物街</div>
    </NavBar>
    <Home-swiner :banners="banners"/>
    <RecommendView :recommends="recommends"/>
  </div>
</template>

<script>
  import NavBar from "components/common/navbar/NavBar";
  import HomeSwiner from "./chlidComps/HomeSwiner";
  import RecommendView from "./chlidComps/RecommendView";

  import {getHomeMultidata} from 'network/home'

  export default {
    name: "Home",
    components:{
      NavBar,
      HomeSwiner,
      RecommendView
    },
    data(){
      return {
        banners : [],
        keywords : [],
        recommends:[]
      }
    },
    created() {
      getHomeMultidata().then(res =>{
        this.banners = res.data.banner.list
        this.keywords = res.data.keywords.list
        this.recommends = res.data.recommend.list
      })
    }
  }
</script>

<style scoped>
.home-nav {
  background-color: var(--color-tint);
  color: #fff;
}
</style>
