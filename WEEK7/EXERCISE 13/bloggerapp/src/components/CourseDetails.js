import React from 'react';

const CourseDetails = ({ courses, showCourses, userLevel }) => {
  // Method 1: Object-based conditional rendering
  const levelConfig = {
    beginner: { icon: 'BEGINNER', color: 'green' },
    intermediate: { icon: 'INTERMEDIATE', color: 'orange' },
    advanced: { icon: 'ADVANCED', color: 'red' }
  };

  // Method 2: Array filter with conditional rendering
  const getRecommendedCourses = () => {
    return courses.filter(course => {
      // Multiple condition checking
      return course.active && 
             (userLevel === 'all' || course.level === userLevel);
    });
  };

  // Method 3: Conditional class assignment
  const getCourseClassName = (course) => {
    let className = 'course-item';
    if (!course.active) className += ' inactive';
    if (course.level === 'advanced') className += ' premium';
    return className;
  };

  // Method 4: Render prop pattern simulation
  const renderCourseLevel = (level) => {
    const config = levelConfig[level] || { icon: 'GENERAL', color: 'gray' };
    return (
      <span className="level" style={{ color: config.color }}>
        {config.icon} {level.toUpperCase()}
      </span>
    );
  };

  // Method 5: Early return with multiple conditions
  if (!showCourses) {
    return (
      <div className="course-container">
        <h1>Course Details</h1>
        <div className="message">Course information is currently hidden</div>
      </div>
    );
  }

  const recommendedCourses = getRecommendedCourses();

  return (
    <div className="course-container">
      <h1>Course Details</h1>
      
      {/* Method 6: Conditional rendering with nested ternary */}
      {courses.length === 0 ? (
        <div className="no-data">No courses available</div>
      ) : recommendedCourses.length === 0 ? (
        <div className="no-matches">No courses match your level preference</div>
      ) : (
        <div className="course-list">
          {recommendedCourses.map((course) => (
            <div key={course.id} className={getCourseClassName(course)}>
              <h3>{course.name}</h3>
              <p className="date">{course.date}</p>
              
              {/* Method 7: Logical OR for default values */}
              <p className="description">
                {course.description || 'No description available'}
              </p>
              
              {/* Method 8: Conditional rendering with function call */}
              {renderCourseLevel(course.level)}
              
              {/* Method 9: Multiple logical AND conditions */}
              {course.active && course.level === 'beginner' && (
                <div className="beginner-friendly">Perfect for beginners!</div>
              )}
              
              {/* Method 10: Ternary with null */}
              {course.level === 'advanced' ? (
                <div className="warning">Advanced level required</div>
              ) : null}
              
              {/* Method 11: Conditional rendering based on date */}
              {new Date(course.date) > new Date('2021-01-01') && (
                <div className="recent">Recent Course</div>
              )}
            </div>
          ))}
        </div>
      )}
      
      {/* Method 12: Complex conditional with multiple operators */}
      {userLevel && userLevel !== 'all' && (
        <div className="filter-info">
          Showing courses for: <strong>{userLevel}</strong> level
        </div>
      )}
    </div>
  );
};

export default CourseDetails;
