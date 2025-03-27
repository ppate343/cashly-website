function showPost(event, blogId) {
    event.preventDefault(); // Prevent page from jumping

    // Hide all blog posts
    const allPosts = document.querySelectorAll('.blog-post');
    allPosts.forEach(post => {
        post.style.display = 'none';
    });

    // Show the selected blog post
    const selectedPost = document.getElementById(blogId);
    if (selectedPost) {
        selectedPost.style.display = 'block';
    }
}
