import { PageLayout, SharedLayout } from "./quartz/cfg"
import * as Component from "./quartz/components"

// components shared across all pages
export const sharedPageComponents: SharedLayout = {
  head: Component.Head(),
  header: [],
  afterBody: [],
  footer: Component.Footer({
    links: {
      GitHub: "https://github.com/jackyzha0/quartz",
      "Discord Community": "https://discord.gg/cRFFHYye7t",
    },
  }),
}

// components for pages that display a single page (e.g. a single note)
export const defaultContentPageLayout: PageLayout = {
  beforeBody: [
    Component.Breadcrumbs(),
    Component.ArticleTitle(),
    Component.ContentMeta(),
    Component.TagList(),
  ],
  left: [
    Component.PageTitle(),
    Component.MobileOnly(Component.Spacer()),
    Component.Search(),
    Component.Darkmode(),
    Component.DesktopOnly(Component.Explorer()),
  ],
  right: [
    Component.Graph(),
    Component.DesktopOnly(Component.TableOfContents()),
    Component.Backlinks(),
  ],
}

// components for pages that display lists of pages  (e.g. tags or folders)
export const defaultListPageLayout: PageLayout = {
  beforeBody: [Component.Breadcrumbs(), Component.ArticleTitle(), Component.ContentMeta()],
  left: [
    Component.PageTitle(),
    Component.MobileOnly(Component.Spacer()),
    Component.Search(),
    Component.Darkmode(),
    Component.DesktopOnly(Component.Explorer()),
  ],
  right: [],
}

Component.Explorer({
  title: "Explorer", // title of the explorer component
  folderClickBehavior: "collapse", // what happens when you click a folder ("link" to navigate to folder page on click or "collapse" to collapse folder on click)
  folderDefaultState: "collapsed", // default state of folders ("collapsed" or "open")
  useSavedState: true, // whether to use local storage to save "state" (which folders are opened) of explorer
  // Sort order: folders first, then files. Sort folders and files alphabetically
  sortFn: (a, b) => {
    const nameOrderMap: Record<string, number> = {
      "poetry-folder": 100,
      "essay-folder": 200,
      "research-paper-file": 201,
      "dinosaur-fossils-file": 300,
      "other-folder": 400,
    }
 
    let orderA = 0
    let orderB = 0
 
    if (a.file && a.file.slug) {
      orderA = nameOrderMap[a.file.slug] || 0
    } else if (a.name) {
      orderA = nameOrderMap[a.name] || 0
    }
 
    if (b.file && b.file.slug) {
      orderB = nameOrderMap[b.file.slug] || 0
    } else if (b.name) {
      orderB = nameOrderMap[b.name] || 0
    }
 
    return orderA - orderB
  },
  filterFn: filterFn: (node) => node.name !== "tags", // filters out 'tags' folder
  mapFn: undefined,
  // what order to apply functions in
  order: ["filter", "map", "sort"],
})
