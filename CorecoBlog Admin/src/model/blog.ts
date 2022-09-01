import {UploadUserFile} from "element-plus";

export interface BlogDtoInterface{
    title:any,
    author:any,
    contribution:any,
    summary:any,
    publishDate:any,
    publishTime:any,
    category:any,
    tags:any,
    blogFile:any,
    index:Number,
    traffic:Number,
    url:any,
    uuid:string
}

export class BlogDto implements BlogDtoInterface{
    author: any  = undefined;
    blogFile: any = [];
    category: any = undefined;
    contribution: any  = undefined;
    publishDate: any  = undefined;
    publishTime: any  = undefined;
    summary: any  =undefined;
    tags: any = [];
    title: any  = undefined;
    index:Number =1;
    traffic:Number =0;
    url:any="";
    uuid:string="";
}