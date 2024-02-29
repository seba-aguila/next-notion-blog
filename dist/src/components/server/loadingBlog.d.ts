import React from "react";
interface BlogLoadingProps {
    classNames?: string;
    [key: string]: any;
}
declare const BlogLoading: React.ForwardRefExoticComponent<Omit<BlogLoadingProps, "ref"> & React.RefAttributes<HTMLDivElement>>;
declare const BlogLoadingTitle: React.ForwardRefExoticComponent<React.HTMLAttributes<HTMLDivElement> & React.RefAttributes<HTMLParagraphElement>>;
declare const BlogLoadingSubtitle: React.ForwardRefExoticComponent<React.HTMLAttributes<HTMLDivElement> & React.RefAttributes<HTMLParagraphElement>>;
declare const BlogLoadingSection: React.ForwardRefExoticComponent<React.HTMLAttributes<HTMLDivElement> & React.RefAttributes<HTMLParagraphElement>>;
declare const LoadingCard: React.ForwardRefExoticComponent<{
    index: number;
} & React.HTMLAttributes<HTMLDivElement> & React.RefAttributes<HTMLDivElement>>;
export { BlogLoading, BlogLoadingTitle, BlogLoadingSubtitle, BlogLoadingSection, LoadingCard as BlogLoadingCard, };
