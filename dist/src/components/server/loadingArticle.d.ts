import React from "react";
interface BlogLoadingProps {
    classNames?: string;
    [key: string]: any;
}
declare const ArticleLoading: React.ForwardRefExoticComponent<Omit<BlogLoadingProps, "ref"> & React.RefAttributes<HTMLDivElement>>;
declare const ArticleLoadingSection: React.ForwardRefExoticComponent<React.HTMLAttributes<HTMLDivElement> & React.RefAttributes<HTMLParagraphElement>>;
declare const LoadingEffect: React.ForwardRefExoticComponent<React.HTMLAttributes<HTMLDivElement> & React.RefAttributes<HTMLParagraphElement>>;
declare const LoadingBlogSuggestions: React.ForwardRefExoticComponent<{
    loading: boolean;
} & React.HTMLAttributes<HTMLDivElement> & React.RefAttributes<HTMLParagraphElement>>;
declare const SuggestionsTitle: React.ForwardRefExoticComponent<{
    loading: boolean;
} & React.HTMLAttributes<HTMLDivElement> & React.RefAttributes<HTMLHeadingElement>>;
declare const LoadingCard: React.ForwardRefExoticComponent<{
    index: number;
} & React.HTMLAttributes<HTMLDivElement> & React.RefAttributes<HTMLDivElement>>;
export { ArticleLoading, ArticleLoadingSection, LoadingEffect, LoadingBlogSuggestions, LoadingCard as ArticleLoadingCard, SuggestionsTitle, };
