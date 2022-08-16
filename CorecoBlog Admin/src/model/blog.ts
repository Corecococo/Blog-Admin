export interface BlogDtoInterface{
    title:string|undefined,
    author:string|undefined,
    contribution:string|undefined,
    summary:string|undefined,
    publishDate:Date|undefined,
    publishTime:Date|undefined,
    category:string|undefined,
    tags:string[],
    blogFile:File|null,
}

export class BlogDto implements BlogDtoInterface{
    author: string | undefined = undefined;
    blogFile: File | null = null;
    category: string | undefined = undefined;
    contribution: string | undefined = undefined;
    publishDate: Date | undefined = undefined;
    publishTime: Date | undefined = undefined;
    summary: string | undefined =undefined;
    tags: string[]  = [];
    title: string | undefined = undefined;

}