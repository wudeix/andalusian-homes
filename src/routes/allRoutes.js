import React from 'react'

import RealEstate from "../pages/RealEstate/index";


import PagePrivacy from "../pages/Pages/Utility/PagePrivacy";
import PageTerms from "../pages/Pages/Utility/PageTerms";

import Blog from "../pages/Pages/DemoBlog/Blog/index";
import BlogAbout from "../pages/Pages/DemoBlog/BlogAbout";
import BlogStandardPost from "../pages/Pages/DemoBlog/BlogStandardPost";
import BlogSliderPost from "../pages/Pages/DemoBlog/BlogSliderPost";
import BlogGalleryPost from "../pages/Pages/DemoBlog/BlogGalleryPost";
import BlogBlockquotePost from "../pages/Pages/DemoBlog/BlogBlockquotePost";

import HostingBlog from "../pages/DemoCloudHosting/HostingBlog";
import HostingBlogDetail from "../pages/DemoCloudHosting/HostingBlogDetail";


const routes = [
    {path: "/", component: RealEstate},

    {path: "/blog-about", component: BlogAbout, isWithoutLayout: true},


    {path: "/hosting-blog", component: HostingBlog, isWithoutLayout: true},
    {path: "/hosting-blog-detail", component: HostingBlogDetail, isWithoutLayout: true},

    //Demo Blog
    {path: "/index-blog", component: Blog, isWithoutLayout: true},

    {path: "/blog-standard-post", component: BlogStandardPost, isWithoutLayout: true},
    {path: "/blog-slider-post", component: BlogSliderPost, isWithoutLayout: true},
    {path: "/blog-gallery-post", component: BlogGalleryPost, isWithoutLayout: true},
    {path: "/blog-blockquote-post", component: BlogBlockquotePost, isWithoutLayout: true},

    //Utility
    {path: "/page-terms", component: PageTerms, isTopbarDark: true},
    {path: "/page-privacy", component: PagePrivacy, isTopbarDark: true},

];

export default routes;
