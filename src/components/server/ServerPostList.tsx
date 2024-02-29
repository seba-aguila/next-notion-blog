import React from "react";
import { PostList } from "../client/BlogSection";
import { PageObjectResponse } from "@notionhq/client/build/src/api-endpoints";
import { getPages } from "../../lib/notion";

export const ServerPostList = async ({ ITEMS_PER_PAGE }: { ITEMS_PER_PAGE: number }) => {
  const pages = await getPages();
  let suggestions: number[] = [];

  for (let i = 0; i < pages.results.length && i < 3; i++) {
    const suggestion = pages.results[i] as PageObjectResponse;
    if (suggestion.properties.ID.type == "number") {
      suggestions.push(suggestion.properties.ID.number as number);
    }
  }

  return (
    <PostList
      pages={pages.results as PageObjectResponse[]}
      suggestions={suggestions}
      ITEMS_PER_PAGE={12}
    />
  )
}