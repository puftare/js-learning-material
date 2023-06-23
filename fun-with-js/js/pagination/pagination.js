function createPaginationButtons(n, max) {
  const paginationContainer = document.querySelector("#pagination-container");

  // Clear any existing buttons
  paginationContainer.innerHTML = "";

  // Calculate the starting and ending page numbers based on n and max
  let currentPage = 1;

  // Function to generate buttons for a given range
  const generateButtons = () => {
    paginationContainer.innerHTML = "";
    // Calculate the starting and ending page numbers
    let startPage = Math.max(1, currentPage - Math.floor(n / 2));
    let endPage = Math.min(max, startPage + n - 1);

    // Adjust the starting page if the range is not complete
    if (endPage - startPage + 1 < n) {
      startPage = Math.max(1, endPage - n + 1);
    }

    // Create first page button
    const firstButton = document.createElement("button");
    firstButton.innerText = "<<";
    firstButton.addEventListener("click", () => {
      currentPage = 1;
      generateButtons();
    });
    paginationContainer.appendChild(firstButton);

    // Create previous button if not on first page
    if (currentPage > 1) {
      const prevButton = document.createElement("button");
      prevButton.innerText = "<";
      prevButton.addEventListener("click", () => {
        currentPage--;
        generateButtons();
      });
      paginationContainer.appendChild(prevButton);
    }

    // Create buttons for each page
    for (let i = startPage; i <= endPage; i++) {
      const button = document.createElement("button");
      button.innerText = i;
      button.addEventListener("click", () => {
        // Update current page and generate new buttons
        currentPage = i;
        generateButtons();
      });
      if (i === currentPage) {
        button.classList.add("active"); // Add "active" class to the current page button
      }
      paginationContainer.appendChild(button);
    }

    // Create next button if not on last page
    if (currentPage < max) {
      const nextButton = document.createElement("button");
      nextButton.innerText = ">";
      nextButton.addEventListener("click", () => {
        currentPage++;
        generateButtons();
      });
      paginationContainer.appendChild(nextButton);
    }

    // Create last page button
    const lastButton = document.createElement("button");
    lastButton.innerText = ">>";
    lastButton.addEventListener("click", () => {
      currentPage = max;
      generateButtons();
    });
    paginationContainer.appendChild(lastButton);

    // Hide buttons before the first page
    if (startPage > 1) {
      const ellipsisStart = document.createElement("span");
      ellipsisStart.innerText = "...";
      paginationContainer.insertBefore(
        ellipsisStart,
        paginationContainer.children[1]
      );
    }

    // Hide buttons after the last page
    if (endPage < max) {
      const ellipsisEnd = document.createElement("span");
      ellipsisEnd.innerText = "...";
      paginationContainer.insertBefore(
        ellipsisEnd,
        paginationContainer.lastChild
      );
    }
  };

  generateButtons();
}

createPaginationButtons(7, 42);
