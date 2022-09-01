import axios from "../../axios";
import {categoryDto} from "../../model/category";
import {BlogDto} from "../../model/blog";

export default {
    //添加一个博客分类
    addCategory(categoryName: string) {
        return axios.post(`/api/Blog/AddCategory?categoryName=${categoryName}`, {});
    },

    //查询所有分类信息
    getAllCategory() {
        return axios.get(`/api/Blog/GetAllCategory`, {});
    },

    //删除一条分类
    deleteCategory(category: categoryDto) {
        return axios.delete(`/api/Blog/DeleteCategory`, category);
    },

    //更新一条分类
    updateCategory(categoryName: string, id: string) {
        return axios.put(`/api/Blog/UpdateCategory?categoryName=${categoryName}&uuid=${id}`, "");
    },

    //添加一篇博客
    addBlog(blog: any) {
        return axios.post(`/api/Blog/AddBlog`, blog);
    },

    //按分页获取博客列表
    getBlogSummaryByPagination(currentPage:Number,size:Number){
      return axios.get(`/api/Blog/GetBlogSummaryByPagination?currentPage=${currentPage}&size=${size}`,"");
    },

    //删除一篇博客
    deleteBlog(uuid:string){
        return axios.delete(`/api/Blog/DeleteBlog?uuid=${uuid}`,"");
    }

}