// Sample data for the blogger app
export const books = [
  { id: 101, bname: 'Master React', price: 670 },
  { id: 102, bname: 'Deep Dive into Angular 11', price: 800 },
  { id: 103, bname: 'Mongo Essentials', price: 450 },
];

export const blogs = [
  { 
    id: 1, 
    title: 'React Learning', 
    author: 'Stephen Biz', 
    content: 'Welcome to learning React!',
    published: true,
    category: 'tutorial'
  },
  { 
    id: 2, 
    title: 'Installation', 
    author: 'Schwzdenier', 
    content: 'You can install React from npm.',
    published: true,
    category: 'guide'
  },
  { 
    id: 3, 
    title: 'Advanced Concepts', 
    author: 'John Doe', 
    content: 'Learn about hooks and context.',
    published: false,
    category: 'advanced'
  },
];

export const courses = [
  { id: 1, name: 'Angular', date: '4/5/2021', level: 'intermediate', active: true },
  { id: 2, name: 'React', date: '6/3/20201', level: 'beginner', active: true },
  { id: 3, name: 'Vue.js', date: '1/1/2022', level: 'advanced', active: false },
];
