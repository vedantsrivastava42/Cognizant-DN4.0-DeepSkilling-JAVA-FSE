# Blogger App - Conditional Rendering Techniques

This React application demonstrates **20+ different conditional rendering techniques** across three main components: Book Details, Blog Details, and Course Details.

## 🎯 Conditional Rendering Techniques Implemented

### 1. **If Statement (Early Return)**
```javascript
if (!showBooks) {
  return <div className="message">Books are hidden</div>;
}
```
**Location**: BookDetails.js, CourseDetails.js
**Use Case**: Quick exit from render when condition is not met

### 2. **Ternary Operator (?:)**
```javascript
{book.price > 600 ? 'Premium Book' : 'Budget Friendly'}
```
**Location**: All components
**Use Case**: Simple conditional text/element rendering

### 3. **Logical AND (&&)**
```javascript
{hasBooks && (
  <div className="book-list">
    {/* content */}
  </div>
)}
```
**Location**: All components
**Use Case**: Conditional rendering when only showing/hiding is needed

### 4. **Logical OR (||) for Default Values**
```javascript
{course.description || 'No description available'}
```
**Location**: CourseDetails.js
**Use Case**: Providing fallback content

### 5. **Switch Statement**
```javascript
const getCategoryIcon = (category) => {
  switch (category) {
    case 'tutorial': return '📚';
    case 'guide': return '📖';
    default: return '📝';
  }
};
```
**Location**: BlogDetails.js, App.js
**Use Case**: Multiple condition branching

### 6. **Function-Based Conditional Rendering**
```javascript
const renderBlogStatus = (published) => {
  if (published) {
    return <span className="status published">Published</span>;
  }
  return <span className="status draft">Draft</span>;
};
```
**Location**: BlogDetails.js, CourseDetails.js
**Use Case**: Complex conditional logic extraction

### 7. **IIFE (Immediately Invoked Function Expression)**
```javascript
const renderContent = (() => {
  if (!showBlogs) {
    return <div className="message">Blog content is hidden</div>;
  }
  // more logic...
})();
```
**Location**: BlogDetails.js
**Use Case**: Complex conditional logic with multiple conditions

### 8. **Object-Based Conditional Rendering**
```javascript
const levelConfig = {
  beginner: { icon: '🟢', color: 'green' },
  intermediate: { icon: '🟡', color: 'orange' },
  advanced: { icon: '🔴', color: 'red' }
};
```
**Location**: CourseDetails.js, App.js
**Use Case**: Configuration-driven rendering

### 9. **Array Filter with Conditional Logic**
```javascript
const filteredBlogs = blogs.filter(blog => {
  if (filterBy === 'published') return blog.published;
  if (filterBy === 'draft') return !blog.published;
  return true;
});
```
**Location**: BlogDetails.js, CourseDetails.js
**Use Case**: Data filtering before rendering

### 10. **Conditional Class Assignment**
```javascript
const getCourseClassName = (course) => {
  let className = 'course-item';
  if (!course.active) className += ' inactive';
  if (course.level === 'advanced') className += ' premium';
  return className;
};
```
**Location**: CourseDetails.js
**Use Case**: Dynamic CSS class application

### 11. **Multiple Logical AND Conditions**
```javascript
{course.active && course.level === 'beginner' && (
  <div className="beginner-friendly">👶 Perfect for beginners!</div>
)}
```
**Location**: All components
**Use Case**: Complex conditional rendering with multiple criteria

### 12. **Nested Ternary Operators**
```javascript
{courses.length === 0 ? (
  <div className="no-data">No courses available</div>
) : recommendedCourses.length === 0 ? (
  <div className="no-matches">No courses match your level preference</div>
) : (
  <div className="course-list">
    {/* content */}
  </div>
)}
```
**Location**: CourseDetails.js, App.js
**Use Case**: Multiple fallback conditions

### 13. **Conditional Rendering with Date Comparison**
```javascript
{new Date(course.date) > new Date('2021-01-01') && (
  <div className="recent">🆕 Recent Course</div>
)}
```
**Location**: CourseDetails.js
**Use Case**: Time-based conditional rendering

### 14. **Conditional Rendering with String Length**
```javascript
{blog.content && blog.content.length > 20 && (
  <div className="long-content">📄 Long Read</div>
)}
```
**Location**: BlogDetails.js
**Use Case**: Content-length based rendering

### 15. **Render Prop Pattern Simulation**
```javascript
const renderCourseLevel = (level) => {
  const config = levelConfig[level] || { icon: '⚪', color: 'gray' };
  return (
    <span className="level" style={{ color: config.color }}>
      {config.icon} {level.toUpperCase()}
    </span>
  );
};
```
**Location**: CourseDetails.js
**Use Case**: Reusable conditional rendering logic

### 16. **Complex Conditional with Multiple Operators**
```javascript
{userLevel && userLevel !== 'all' && (
  <div className="filter-info">
    Showing courses for: <strong>{userLevel}</strong> level
  </div>
)}
```
**Location**: App.js, CourseDetails.js
**Use Case**: Multi-step conditional validation

### 17. **Conditional Rendering with Array Methods**
```javascript
{['books', 'blogs', 'courses'].map(tab => (
  <button
    key={tab}
    className={`tab-button ${activeTab === tab ? 'active' : ''}`}
    onClick={() => setActiveTab(tab)}
  >
    {tab.charAt(0).toUpperCase() + tab.slice(1)}
  </button>
))}
```
**Location**: App.js
**Use Case**: Dynamic list rendering with conditional styling

### 18. **Conditional Styling with Template Literals**
```javascript
<div className={`App ${isDarkMode ? 'dark-mode' : 'light-mode'}`}>
```
**Location**: App.js
**Use Case**: Dynamic CSS class application

### 19. **Conditional Rendering with Null Checks**
```javascript
{tabComponents[activeTab] && tabComponents[activeTab]()}
```
**Location**: App.js (commented example)
**Use Case**: Safe method invocation

### 20. **Fragment with Conditional Rendering**
```javascript
{activeTab === 'blogs' && (
  <>
    <label>
      <input type="checkbox" />
      Show Blogs
    </label>
    <select>
      <option value="all">All Blogs</option>
    </select>
  </>
)}
```
**Location**: App.js
**Use Case**: Multiple elements under single condition

## 🚀 Running the Application

1. Make sure you're in the bloggerapp directory:
```bash
cd "d:\WEB DEVELOPMENT\COGNIZANT DEEP LEARNING\Cognizant-DN4.0-DeepSkilling-JAVA-FSE\WEEK7\EXERCISE 13\bloggerapp"
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

4. Open your browser to `http://localhost:3000`

## 🎮 Features to Test

### Interactive Controls:
- **Tab Navigation**: Switch between Books, Blogs, and Courses
- **Theme Toggle**: Switch between light and dark mode
- **Visibility Controls**: Show/hide content for each component
- **Filters**: Filter blogs by status, courses by level
- **Responsive Design**: Test on different screen sizes

### Conditional Rendering Examples:
- Books show different badges based on price
- Blogs display status indicators and category icons
- Courses show level indicators and warnings
- Dynamic footer content based on active tab
- Conditional control panels based on selected tab

## 📱 Component Structure

```
App.js (Main container with tab navigation)
├── BookDetails.js (Books with price-based conditions)
├── BlogDetails.js (Blogs with status and category conditions)
└── CourseDetails.js (Courses with level and activity conditions)
```

## 🎨 Styling Features

- **Gradient backgrounds** for each component type
- **Hover effects** with transform animations
- **Conditional styling** based on data properties
- **Responsive grid layouts**
- **Dark/Light theme** support
- **Color-coded indicators** for different content types

## 📊 Data Structure

The app uses three main data arrays:
- **Books**: id, bname, price
- **Blogs**: id, title, author, content, published, category
- **Courses**: id, name, date, level, active

Each component demonstrates different conditional rendering techniques based on these data properties.
