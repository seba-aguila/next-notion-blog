import { PageObjectResponse } from "@notionhq/client/build/src/api-endpoints";
export declare function getPages(): Promise<import("@notionhq/client/build/src/api-endpoints").QueryDatabaseResponse>;
export declare function getSinglePageAndBlocks(pageId: number): Promise<{
    page: PageObjectResponse | import("@notionhq/client/build/src/api-endpoints").PartialPageObjectResponse | import("@notionhq/client/build/src/api-endpoints").PartialDatabaseObjectResponse | import("@notionhq/client/build/src/api-endpoints").DatabaseObjectResponse;
    blocks: (import("@notionhq/client/build/src/api-endpoints").PartialBlockObjectResponse | import("@notionhq/client/build/src/api-endpoints").BlockObjectResponse)[];
}>;
export declare function getPageMetadata(pageId: number): Promise<PageObjectResponse | import("@notionhq/client/build/src/api-endpoints").PartialPageObjectResponse | import("@notionhq/client/build/src/api-endpoints").PartialDatabaseObjectResponse | import("@notionhq/client/build/src/api-endpoints").DatabaseObjectResponse>;
export declare function getPagesByID(pagesIDs: number[]): Promise<PageObjectResponse[]>;
