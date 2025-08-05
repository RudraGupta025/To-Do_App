<Todo
  todos={todos}
  onComplete={(id) => {
    fetch("http://localhost:3003/completed", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id }),
    })
      .then((res) => res.json())
      .then(() => alert("Todo marked as completed"));
  }}
/>
