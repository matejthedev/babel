(async () => {
  const response = await fetch("https://sonplaceholder.typicode.com/posts");
  const posts = await response.json();
  console.log(posts);
})();
