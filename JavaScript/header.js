class header extends HTMLElement{
    connectedCallback(){
        this.innerHTML = `
        <nav>
        <header class="logo">
               <h1>Poet's Blog </h1>
            </header>
            <ul class= "nav-links">
                <li>
                    <a href="../index.html">Home</a>
                </li>
                <li>
                    <a href= "../About/AboutPage.html">About</a>
                    
                </li>
                <li>
                    <a href="../TheoryBlogPosts/BlogPage.html">Theory Blogs </a>
                       <ul>
                           <li>
                              <a href="../TheoryBlogPosts/Blog1.html"> Library of Babel</a> 
                           </li>   
                           <li>
                               <a href="../TheoryBlogPosts/Blog2.html">Technology and the development and Spread of Internet Culture</a>
                           </li>
                           <li>
                               <a href="../TheoryBlogPosts/Blog3.html">What is a browser?</a>
                           </li>
                           <li>
                               <a href="../TheoryBlogPosts/Blog4.html">Medium is the message</a>
                           </li>
                           <li>
                              <a href="../TheoryBlogPosts/Blog5.html">History of Web Robots</a> 
                           </li>
                           <li>
                               <a href="../TheoryBlogPosts/Blog6.html">Methods of UX and UI analysis</a>
                           </li>
                           <li>
                              <a href="../TheoryBlogPosts/Blog7.html">Usability</a> 
                           </li>
                           <li>
                               <a href="../TheoryBlogPosts/Blog8.html">More Blogs</a>
                           </li>
                           <li>
                               <a href="../TheoryBlogPosts/BonusBlog.html">Bonus Blogs</a>
                               </li>
                           <li>
                        <a href="../TheoryBlogPosts/Wireframes.html">Wireframes</a>
                            </li>
                       </ul>
                </li>
                    <li> 
                        <a href="../CharacterBlogs/CharacterBlogPage.html">Character Blogs</a>
                        <ul>
                           <li>
                              <a href="../CharacterBlogs/CharacterBlog1.html"> Is the internet ruining creatives?</a> 
                           </li> 
                           <li>
                               <a href="../CharacterBlogs/ImagesPage.html">Poetry Diaries</a>
                           </li>
                           <li>
                               <a href="../CharacterBlogs/cityblog.html">City Blog</a>
                           </li>
                           <li>
                    <a href="../CharacterBlogs/photography.html">Photography Diaries</a>
                </li>
                        </ul>
                    </li>
                        <li>
                            <a href="../ContactUs/ContactPage.html">Contact Us</a>
                        </li>
                    </ul>
                    <svg class= "svg" viewBox="0 0 100 80" width="30" height="30">
                        <rect width="100" height="15"></rect>
                        <rect y="30" width="100" height="15"></rect>
                        <rect y="60" width="100" height="15"></rect>
                      </svg>
                </nav>
        `
    }   
    
}customElements.define('my-header', header)