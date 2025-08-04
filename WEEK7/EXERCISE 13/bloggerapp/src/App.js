import React, { useState } from 'react';
import './App.css';
import BookDetails from './components/BookDetails';
import BlogDetails from './components/BlogDetails';
import CourseDetails from './components/CourseDetails';
import { books, blogs, courses } from './data';

function App() {
  // State for controlling component visibility
  const [activeTab, setActiveTab] = useState('books');
  const [showBooks, setShowBooks] = useState(true);
  const [showBlogs, setShowBlogs] = useState(true);
  const [showCourses, setShowCourses] = useState(true);
  const [blogFilter, setBlogFilter] = useState('all');
  const [userLevel, setUserLevel] = useState('all');

  // Method 1: Switch statement for tab rendering
  const renderActiveComponent = () => {
    switch (activeTab) {
      case 'books':
        return <BookDetails books={books} showBooks={showBooks} />;
      case 'blogs':
        return <BlogDetails blogs={blogs} showBlogs={showBlogs} filterBy={blogFilter} />;
      case 'courses':
        return <CourseDetails courses={courses} showCourses={showCourses} userLevel={userLevel} />;
      default:
        return <div>Select a tab to view content</div>;
    }
  };

  // Method 2: Object mapping for conditional rendering
  const tabComponents = {
    books: () => <BookDetails books={books} showBooks={showBooks} />,
    blogs: () => <BlogDetails blogs={blogs} showBlogs={showBlogs} filterBy={blogFilter} />,
    courses: () => <CourseDetails courses={courses} showCourses={showCourses} userLevel={userLevel} />
  };

  return (
    <div className="App">
      <header className="app-header">
        <h1>Blogger App - Conditional Rendering Demo</h1>
      </header>

      {/* Navigation Tabs */}
      <nav className="tab-navigation">
        {['books', 'blogs', 'courses'].map(tab => (
          <button
            key={tab}
            className={`tab-button ${activeTab === tab ? 'active' : ''}`}
            onClick={() => setActiveTab(tab)}
          >
            {tab.charAt(0).toUpperCase() + tab.slice(1)}
          </button>
        ))}
      </nav>

      {/* Control Panel */}
      <div className="control-panel">
        <h3>Control Panel</h3>
        
        <div className="controls">
          {/* Method 4: Logical AND for conditional controls */}
          {activeTab === 'books' && (
            <label>
              <input
                type="checkbox"
                checked={showBooks}
                onChange={(e) => setShowBooks(e.target.checked)}
              />
              Show Books
            </label>
          )}
          
          {/* Method 5: Conditional rendering with specific tab */}
          {activeTab === 'blogs' && (
            <>
              <label>
                <input
                  type="checkbox"
                  checked={showBlogs}
                  onChange={(e) => setShowBlogs(e.target.checked)}
                />
                Show Blogs
              </label>
              <select
                value={blogFilter}
                onChange={(e) => setBlogFilter(e.target.value)}
              >
                <option value="all">All Blogs</option>
                <option value="published">Published Only</option>
                <option value="draft">Drafts Only</option>
              </select>
            </>
          )}
          
          {/* Method 6: Multiple conditions with logical AND */}
          {activeTab === 'courses' && showCourses && (
            <>
              <label>
                <input
                  type="checkbox"
                  checked={showCourses}
                  onChange={(e) => setShowCourses(e.target.checked)}
                />
                Show Courses
              </label>
              <select
                value={userLevel}
                onChange={(e) => setUserLevel(e.target.value)}
              >
                <option value="all">All Levels</option>
                <option value="beginner">Beginner</option>
                <option value="intermediate">Intermediate</option>
                <option value="advanced">Advanced</option>
              </select>
            </>
          )}
        </div>
      </div>

      {/* Main Content Area */}
      <main className="main-content">
        {/* Method 7: Using switch statement function */}
        {renderActiveComponent()}
        
        {/* Alternative Method 8: Object mapping (commented out) */}
        {/* {tabComponents[activeTab] && tabComponents[activeTab]()} */}
      </main>

      {/* Footer with conditional content */}
      <footer className="app-footer">
        {/* Method 9: Ternary with multiple conditions */}
        {activeTab === 'books' ? (
          <p>Total Books: {books.length}</p>
        ) : activeTab === 'blogs' ? (
          <p>Total Blogs: {blogs.length} | Published: {blogs.filter(b => b.published).length}</p>
        ) : (
          <p>Total Courses: {courses.length} | Active: {courses.filter(c => c.active).length}</p>
        )}
        
        {/* Method 10: Logical AND with complex condition */}
        {(activeTab === 'courses' && userLevel !== 'all') && (
          <p>Filtered for {userLevel} level courses</p>
        )}
      </footer>
    </div>
  );
}

export default App;
