import React from 'react';

const BlogDetails = ({ blogs, showBlogs, filterBy }) => {
  // Method 1: Function-based conditional rendering
  const renderBlogStatus = (published) => {
    if (published) {
      return <span className="status published">Published</span>;
    }
    return <span className="status draft">Draft</span>;
  };

  // Method 2: Switch statement for category rendering
  const getCategoryIcon = (category) => {
    switch (category) {
      case 'tutorial':
        return 'Tutorial';
      case 'guide':
        return 'Guide';
      case 'advanced':
        return 'Advanced';
      default:
        return 'General';
    }
  };

  // Method 3: Filter with conditional logic
  const filteredBlogs = blogs.filter(blog => {
    if (filterBy === 'published') return blog.published;
    if (filterBy === 'draft') return !blog.published;
    return true; // show all
  });

  // Method 4: IIFE (Immediately Invoked Function Expression)
  const renderContent = (() => {
    if (!showBlogs) {
      return <div className="message">Blog content is hidden</div>;
    }

    if (filteredBlogs.length === 0) {
      return <div className="no-data">No blogs match the current filter</div>;
    }

    return (
      <div className="blog-list">
        {filteredBlogs.map((blog) => (
          <div key={blog.id} className="blog-item">
            <h3>
              {getCategoryIcon(blog.category)} {blog.title}
            </h3>
            <p className="author">By: {blog.author}</p>
            <p className="content">{blog.content}</p>
            
            {/* Method 5: Logical AND with complex condition */}
            {blog.published && blog.category === 'tutorial' && (
              <div className="featured">Featured Tutorial</div>
            )}
            
            {/* Method 6: Function call for conditional rendering */}
            {renderBlogStatus(blog.published)}
            
            {/* Method 7: Null check with optional chaining simulation */}
            {blog.content && blog.content.length > 20 && (
              <div className="long-content">Long Read</div>
            )}
          </div>
        ))}
      </div>
    );
  })();

  return (
    <div className="blog-container">
      <h1>Blog Details</h1>
      {renderContent}
    </div>
  );
};

export default BlogDetails;
