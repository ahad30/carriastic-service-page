import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const BlogWrapper = styled.section`
  padding: 50px;
`;

const BlogTitle = styled.h1`
  font-size: 36px;
  margin-bottom: 50px;
  color: #333;
`;

const BlogList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`;

const BlogListItem = styled.li`
  margin-bottom: 20px;
`;

const BlogPostTitle = styled.h2`
  font-size: 24px;
  margin: 0;
`;

const BlogPostDate = styled.p`
  font-size: 18px;
  color: #666;
  margin: 0;
`;

const BlogPostExcerpt = styled.p`
  font-size: 18px;
  margin: 0;
`;

const BlogPostLink = styled(Link)`
  font-size: 18px;
  color: #333;
  display: block;
  margin-top: 20px;
`;

const Blog = () => (
    <BlogWrapper>
        <BlogTitle>Blogs</BlogTitle>
        <BlogList>
            <BlogListItem>
                <BlogPostTitle>
                    <Link to="/blog/post-1">Post 1 Title</Link>
                </BlogPostTitle>
                <BlogPostDate>January 1, 2023</BlogPostDate>
                <BlogPostExcerpt>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                    fermentum diam at eros tincidunt, at tempor tortor elementum.
                </BlogPostExcerpt>
                <BlogPostLink to="/blog/post-1">Read More</BlogPostLink>
            </BlogListItem>
            <BlogListItem>
                <BlogPostTitle>
                    <Link to="/blog/post-2">Post 2 Title</Link>
                </BlogPostTitle>
                <BlogPostDate>January 2, 2023</BlogPostDate>
                <BlogPostExcerpt>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                    fermentum diam at eros tincidunt, at tempor tortor elementum.
                </BlogPostExcerpt>
                <BlogPostLink to="/blog/post-2">Read More</BlogPostLink>
            </BlogListItem>
        </BlogList>
    </BlogWrapper>
);

export default Blog;