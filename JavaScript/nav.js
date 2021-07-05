
const theoryBlogPosts = [

{ title: "Theory Blogs", 
href: "../TheoryBlogPosts/BlogPage.html"},

{ title: "Library of Babel", 
href:'../TheoryBlogPosts/Blog1.html'},

{ title: "Technology and the development and Spread of Internet Culture",
href:'../TheoryBlogPosts/Blog2.html'},

{ title: "What is a browser?",  
href:'../TheoryBlogPosts/Blog3.html'},

{ title:"Medium is the message",  
href:'../TheoryBlogPosts/Blog4.html'},

{ title: "History of Web Robots", 
href:'../TheoryBlogPosts/Blog5.html'},

{ title:"User Experience", 
href:'../TheoryBlogPosts/Blog6.html'},

{ title:"Usability",
href:'../TheoryBlogPosts/Blog7.html'},

{ title:"More Blogs", 
href:'../TheoryBlogPosts/Blog8.html'},

{ title:"Wireframes", 
href:'../TheoryBlogPosts/wireframes.html'},

{ title:"Character", 
href:'../TheoryBlogPosts/character.html'},

{ title: "Bonus Blogs", 
href: "../TheoryBlogPosts/BonusBlog.html"},
];

const characterBlogs = [

    { title:"Character Blogs",  
    
    href: "../CharacterBlogs/CharacterBlogPage.html"},

    { title:"Is the internet destroying creativity",  
    
    href: "../CharacterBlogs/CharacterBlog1.html"},
    
    { title:"City Blog",
    href: "../CharacterBlogs/cityblog.html"},
    
    { title:"Poetry Diaries", 
    href:"../CharacterBlogs/ImagesPage.html"},
    
    { title: "Photography Diaries", 
    href: "../CharacterBlogs/photography.html"},

    { title: "Joburg Photographers", 
    href: "../CharacterBlogs/jhbphotopgraphers.html"},
    ];
    
    



const navlinks = [
    {title: 'Home', link: '../index.html'},

    {title: 'About', link: '../About/AboutPage.html'},

    {title: 'Theory Blogs', link: '../TheoryBlogPosts/BlogPage.html'},

    {title: 'Character Blogs', link: '../CharacterBlogs/CharacterBlogPage.html'},

    {title: 'Contact Us', link: '../ContactUs/ContactPage.html'},

];

const navBar = document.querySelector('nav');
 const ul = document.querySelector(".navlinks");
const InitialiseHeader = () => 
{
  
   const navLength = navlinks.length;
    for (var i = 0; i<navLength; i++)
    { 
   const newItem = document.createElement("li");
        const newLink = document.createElement("a");
  
        newLink.href = navlinks[i].link;
        newLink.text = navlinks[i].title;
        if (navlinks [i].title == "Theory Blogs")
        {  
            createTheoryBlogs();
            newItem.appendChild(theoryBlogList);
        }
        else if (navlinks [i].title == "Character Blogs")
        { 
            createCharacterBlogs();
            newItem.appendChild(characterBloglist);
        }
    newItem.appendChild(newLink);
        ul.appendChild(newItem);
    }
    navBar.appendChild(ul);
    
};
   
      /*theoryBlogPosts.forEach(item =>
            {
                const newItemone = document.createElement("ul");
                const newItemtwo = document.createElement("li");
                const newLinkthree = document.createElement("a");
    
                newLinkthree.href = item.link;
                newLinkthree.text = item.title; //right logic, wrong coding
                

                newItemtwo.appendChild(newLinkthree);
                ulTB.appendChild(newItemone);
    
            });*/

        const theoryBlogList = document.createElement('ul');
        function createTheoryBlogs()
        { 
            
            const theorylength = theoryBlogPosts.length;
            for (i =0; i< theorylength; i++)
            {
                const newTheoryitem = document.createElement('li');
                const theoryLink = document.createElement('a');
                theoryLink.href = theoryBlogPosts[i].href;
                theoryLink.innerHTML = theoryBlogPosts[i].title;
                newTheoryitem.appendChild(theoryLink);
                theoryBlogList.appendChild(newTheoryitem);
            }
        }

        const characterBloglist = document.createElement('ul');
        function createCharacterBlogs()
        { 
            const characterBloglength = characterBlogs.length
            for (i =0; i< characterBloglength; i++)
            { 
                const newCBitem = document.createElement('li');
                const cbLink = document.createElement('a');
                cbLink.href = characterBlogs[i].href;
                cbLink.innerHTML = characterBlogs[i].title;
                newCBitem.appendChild(cbLink);
                characterBloglist.appendChild(newCBitem);
            }
        }

        
window.addEventListener('DOMContentLoaded', (event) => InitialiseHeader()) //only do this page once the page is loaded