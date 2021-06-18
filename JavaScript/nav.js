
const theoryBlogPosts = [
{ title: "Library of Babel", 
link:"../TheoryBlogPosts/Blog1.html"},

{ title: "Technology and the development and Spread of Internet Culture",
link: "../TheoryBlogPosts/Blog2.html"},

{ title: "What is a browser?",  
link:"../TheoryBlogPosts/Blog3.html"},

{ title:"Medium is the message",  
link: "../TheoryBlogPosts/Blog4.html"},

{ title: "History of Web Robots", 
link:"../TheoryBlogPosts/Blog5.html"},

{ title:"User Experience", 
link: "../TheoryBlogPosts/Blog6.html"},

{ title:"Usability",
link: "../TheoryBlogPosts/Blog7.html"},

{ title:"A close reading of Graham et al’s", 
link:"../TheoryBlogPosts/Blog8.html"},

{ title: "Bonus Blogs", 
link: "../TheoryBlogPosts/BonusBlog.html"},
];

const characterBlogs = [
    { title:"Is the internet destroying creativity",  
    
    link: "../CharacterBlogs/CharacterBlog1.html"},
    
    { title:"City Blog",
    link: "../CharacterBlogs/cityblog.html"},
    
    { title:"Poetry Diaries", 
    link:"../CharacterBlogs/ImagesPages.html"},
    
    { title: "Photography Diaries", 
    link: "../TheoryBlogPosts/photography.html"},
    ];



const menuItems = [
    {title: 'Home', link: '/'},
    {title: 'About', link: './About/AboutPage.html'},
    {title: 'Theory Blogs', link: './TheoryBlogPosts/BlogPage.html', children: theoryBlogPosts},
    {title: 'Character Blogs', link: './CharacterBlogs/CharacterBlogPage.html', children: characterBlogs},
    {title: 'Contact Us', link: './ContactUs/ContactPage.html'},

];

const headerElements = document.createElement("nav")
headerElements.className = "nav-links"
const navList = document.createElement("li")

const createMenuItem = (item) => {
    navigationBar= document.querySelector('.nav-links')
    const li = document.createElement('li'); //3.generate a list of new items
    li.className = ""
    const a = document.createElement('a');
    a.innerText = item.title;
    a.href = item.link;
    li.appendChild(a);
    
  
    if (item.children != null || item.children != undefined)
    {
        let ul = document.createElement('ul');

        for (let childitem of item.children)
        {
            let childMenuitem = createMenuItem(childitem);
            ul.appendChild(childMenuitem);
        }
        li.appendChild(ul);
    }
     return li; //function isnt returning anything because it is undefined so we need to return 
};

const InitialiseHeader = () => {
    const nav = document.querySelector('nav'); //1. first thing we want to get is our nav by using querySelector
    
     
    const ul = document.createElement('ul');//2. cretae list of menu items
    
    for (let item of menuItems )
    {
      const li = createMenuItem (item);
      ul.appendChild (li);

    }

    nav.appendChild(ul);
};
document.addEventListener('DOMContentLoaded', () => InitialiseHeader()) //only do this page once the page is loaded