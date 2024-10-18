
document.addEventListener("DOMContentLoaded", () => {
  const blogPostsContainer = document.getElementById("blog-posts");
  const addButton = document.getElementById("add-button");
  const editForm = document.getElementById("edit-form");
  const editTitle = document.getElementById("edit-title");
  const editContent = document.getElementById("edit-content");
  const updatePostButton = document.getElementById("update-post");

  let editingPostId = null;

  // Fetch and display blog posts

  function displayPosts() {
    blogPostsContainer.innerHTML = "";
    fetch("http://localhost:3000/posts")
      .then((r) => r.json())
      .then((posts) =>
        posts.forEach((post) => {
          const postElement = document.createElement("div");
          postElement.className = "blog-post";
          postElement.innerHTML = `
                <h3>${post.title}</h3>
                <p>${post.content}</p>
                <p><strong>Author:</strong> ${post.author}</p>
                <div class="buttons">
                <button class="edit-btn" data-id="${post.id}">Edit</button>
                <button class="delete-btn" data-id="${post.id}">Delete</button>
                </div>
            `;
            postElement.querySelector(".edit-btn").addEventListener("click",() => {
                function edit(){
                    let tittleInput = prompt(`Edit ${post.author}'s post title`, post.title);
                    let contentinput = prompt(`Edit ${post.author}'s post content`, post.content);
                    if(tittleInput != null && contentinput != null && tittleInput !== "" && contentinput !== ""){
                      fetch(`http://localhost:3000/posts/${post.id}`, {
                        method: "PATCH",
                        headers: {
                            "Content-Type": "application/json",
                        },
                        body: JSON.stringify({
                            title: tittleInput,
                            content: contentinput,
                        }),

                    }).then((r) => r.json())
                    .then((data) => {
                        postElement.querySelector("h3").textContent = tittleInput;
                        postElement.querySelector("p").textContent = contentinput;
                    })
                    }
                    
                }
                edit();
            })
            postElement.querySelector(".delete-btn").addEventListener("click", ()=>{
                fetch(`http://localhost:3000/posts/${post.id}`, {
                  method: "DELETE",
                  headers: {
                      "Content-Type": "application/json",
                  },

              }).then((r) => r.json())
              .then((data) => {
                postElement.remove();
              })
            })
          blogPostsContainer.appendChild(postElement);
        })
      );

    document.querySelectorAll(".edit-btn").forEach((btn) => {
      btn.addEventListener("click", handleEdit);
    });

    document.querySelectorAll(".delete-btn").forEach((btn) => {
      btn.addEventListener("click", handleDelete);
    });
  }
  displayPosts();

  // Handle add blog post
  addButton.addEventListener("click", async () => {
    const title = prompt("Enter the blog title:");
    const content = prompt("Enter the blog content:");
    const author = prompt("Enter the author name:");

    if (!title || !content || !author) return;

    const newPost = {
      title,
      content,
      author,
      date: new Date().toISOString().split("T")[0],
      comments: [],
    };

    try {
      const response = await fetch("http://localhost:3000/posts", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newPost),
      });

      if (response.ok) {
        displayPosts();
      } else {
        console.error("Failed to add the new post.");
      }
    } catch (error) {
      console.error("Error adding post:", error);
    }
  });

  // Handle form submission to the users route
  const form = document.querySelector("form");
  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const formData = {
      name: document.getElementById("name").value,
      email: document.getElementById("email").value,
      type: document.getElementById("type").value,
      destination: document.getElementById("destination").value,
      message: document.getElementById("message").value,
    };

    try {
      const response = await fetch("http://localhost:3000/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert("Form submitted successfully!");
        form.reset();
      } else {
        alert("Failed to submit form.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  });
});
