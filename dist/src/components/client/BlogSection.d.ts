import { PageObjectResponse } from "@notionhq/client/build/src/api-endpoints";
import React from "react";
declare const PostList: ({ pages, suggestions, ITEMS_PER_PAGE, }: {
    pages: PageObjectResponse[];
    suggestions: number[];
    ITEMS_PER_PAGE: number;
}) => React.JSX.Element;
interface CardProps {
    children: React.ReactNode;
    image: string;
    link: string;
    suggestions?: number[];
    className?: string;
}
declare const BlogCard: React.ForwardRefExoticComponent<CardProps & React.RefAttributes<HTMLDivElement>>;
export { PostList, BlogCard };
