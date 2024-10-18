# PREMIUM MOVERS
This project is dedicated to providing comprehensive transportation and logistics solutions to our customers.

# Table of Contents
Project Overview
Features
Technologies Used
Setup and Installation
Usage
API Endpoints
Contributing
License

# Project Overview
The Globally Transportation website is a comprehensive platform designed to showcase our transportation and logistics services. Our goal is to provide a seamless and user-friendly experience for our clients to learn about our services, read our latest blog posts, and contact us for quotes or further information.
# Features
The website is fully responsive, ensuring a great user experience on all devices.
Dynamic Blog Section: Users can view, add, edit, and delete blog posts.
Contact Form: A contact form to get a free quote for transportation services.
Service Overview: Detailed information about the different transportation services we offer.

# Technologies Used
HTML: Website structure.
CSS: Styling of the website.
javaScript:For interactive features and functionality.
Font Awesome: For icons.
Google For custom fonts(poppit)
JSON server: For mocking API endpoints

# Setup And Installation
1.git clone the repo: https://github.com/Bazanty/Transnamic

2.install JSON server:npm install -g json-server

3.Start the JSON Server:json-server --watch db.json

4.Open index.html in the browser to view the website (live server)


# Usage 
Display Blog Posts
they are all fetched from the json server. the post are displayed dynamically on the blog section of the website.

# Add Blog Post 
To add a new blog, click the "Add Blog" Button on enterthe title, contact,and author name in the prompts.

# Edit Blog Post 
To edit an existing blog post, click the "Edit" button on the post you wish to edit.
Enter the new title and content in the prompts.

# Delete Blog Post 
To Delete a blog post, click the "Delete" button on the post you wish to remove.

# contact Form
Fill out the contact from with you email,cargo type,destination, and message to request a free quote.

API Endpoints 
.GET/POST: Fetching all blogs post 
.POST/post: Add a new blog-post
.PATCH/posts/:edit an existing blog post.
DELETE/posts/: Delete a blog post.
POST/user:Submit contact form data.

# Contribution 
we welcome contribution to improve the Globally Transportation website to ,make it ease and safety on DElivering the items.
to contribute, please follow thes steps:
1.Fork the repo
2.Create a new branch: git checkout -b feature/your-feature-name.
3.Make your changes and commit them:git commit -m 'Add your feature'
4.Push to the branch: git push origin feature/your-feature-name.
5.Submit a pull request.

# License
This project is licensed under the MIT License. See the LICENSE file for more information.





