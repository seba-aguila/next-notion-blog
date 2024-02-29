import React from "react";
interface BlogSuggestionsParams {
    currentPostId: number;
    suggestionsIDs: number[];
    title: string;
}
export declare const BlogSuggestions: ({ currentPostId, suggestionsIDs, title, }: BlogSuggestionsParams) => Promise<React.JSX.Element>;
export {};
