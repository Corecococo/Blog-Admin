import {createRouter, createWebHashHistory, RouteRecordRaw, RouterOptions} from "vue-router";
import Login from "../view/Login/Login.vue"
import Layout from "../view/System/Layout.vue";
import Home from "../view/System/Home.vue"
import BlogPublish from "../view/System/BlogPublish.vue"
import SysManager from "../view/System/SysManager.vue";
import CategoryManager from "../view/System/CategoryManager.vue"
import ArticleManager from "../view/System/ArticleManager.vue"
import Workbench from "../view/System/Workbench.vue"

const routes: RouteRecordRaw[] = [
    {path: "/", component: Login},
    {
        path: "/coco",
        component: Layout,
        children: [
            {path:"/coco/home",component:Home,meta:{name:'Home'}},
            {path:"/coco/blogpublish",component:BlogPublish,meta:{name:'BlogPublish'}},
            {path:"/coco/categorymanager",component:CategoryManager,meta:{name:'CategoryManager'}},
            {path:"/coco/sysmanager",component:SysManager,meta:{name:'SysManager'}},
            {path:"/coco/articlemanager",component:ArticleManager,meta:{name:'ArticleManager'}},
            {path:"/coco/workbench",component:Workbench,meta:{name:'Workbench'}},
        ]
    }
]

let options: RouterOptions = {
    routes,
    history: createWebHashHistory()
}

const router = createRouter(options)

export default router;