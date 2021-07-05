class footer extends HTMLElement{
    connectedCallback(){
        this.innerHTML = `
        <footer class="footer">
        <section class="container">
            <section class="row">
                <section class="footer-col">
                    <h2>Company</h2>
                    <ul>
                        <li><a href="../About/AboutPage.html">About Us</a></li>
                        <li><a href="../CharacterBlogs/ImagesPage.html">Our Poetry Story</a></li>
                    </ul>
                </section> 
                <section class="footer-col">
                    <h2> Reach out for help</h2>
                    <ul>
                        <li><a href="#">FAQ</a></li>
                        <li><a href="#">Buy poetry here</a></li>
                        <li><a href="#">Payment options</a></li>
                    </ul>
                   
                </section>
                <section class="footer-col">
                    <h2> Online Shop</h2>
                    <ul >
                        <li><a href="#">Poetry Book</a></li>
                        <li><a href="#">Poet's Blog Diaries</a></li>
                        <li><a href="#">Photographs</a></li>
                    </ul>
                </section>
                <section class="footer-col">
                <h2>Follow Us</h2>
                <section class="social_links">
                    <a href="#"><i class="fab fa-facebook-f"></i></a>
                    <a href="#"><i class="fab fa-twitter"></i></a>
                    <a href="#"><i class="fab fa-instagram"></i></a>
                    <a href="#"><i class="fab fa-linkedin-in"></i></a>
                </section>
        </section>
    </footer>
        `
    }   
    
}customElements.define('my-footer', footer)