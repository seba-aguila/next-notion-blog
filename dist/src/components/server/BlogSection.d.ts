import React from "react";
interface BlogLoadingProps {
    classNames?: string;
    [key: string]: any;
}
declare const BlogSection: React.ForwardRefExoticComponent<Omit<BlogLoadingProps, "ref"> & React.RefAttributes<HTMLDivElement>>;
declare const BlogTitle: React.ForwardRefExoticComponent<React.HTMLAttributes<HTMLDivElement> & React.RefAttributes<HTMLParagraphElement>>;
declare const BlogSubtitle: React.ForwardRefExoticComponent<React.HTMLAttributes<HTMLDivElement> & React.RefAttributes<HTMLParagraphElement>>;
interface ArticleProps {
    children: React.ReactNode;
    date: string;
    title: string;
    description: string;
    className?: string;
}
declare const BlogArticle: React.ForwardRefExoticComponent<ArticleProps & React.RefAttributes<HTMLDivElement>>;
export { BlogTitle, BlogSubtitle, BlogSection, BlogArticle };
