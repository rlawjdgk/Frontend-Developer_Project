// books.json 파일 경로 확인
fetch("book.json")
  .then((response) => {
    if (!response.ok) {
      throw new Error("Failed to load JSON data");
    }
    return response.json();
  })
  .then((data) => {
    const bookList = document.getElementById("bookList");

    // 데이터를 DOM에 추가
    data.forEach((book) => {
      const bookItem = document.createElement("div");
      bookItem.innerHTML = `
       <img src="${book.coverImage}" alt="${book.title}" style="max-width: 200px; height: auto;"/>
        <h2>${book.title}</h2>
        <p>저자: ${book.author}</p>
      `;
      bookList.appendChild(bookItem);
    });
  })
  .catch((error) => {
    console.error("Error:", error);
  });
