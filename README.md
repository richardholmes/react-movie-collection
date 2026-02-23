# 🎬 React Exercise --- Movie Collection

## 🎯 Objective

Build a small React application that manages a movie collection.

⚠️ **Do NOT use any AI tools (ChatGPT, Copilot, etc.).**

------------------------------------------------------------------------

## 📦 1. Project Setup

1.  Create a public GitHub repository: react-movie-collection

2.  Initialize a new React project using Vite.

------------------------------------------------------------------------

## 📁 2. Data Integration

You are provided with a `movies.json` file.

Your tasks:

-   Import the data into the application
-   Consume the .json file to display the list of movies on the screen

------------------------------------------------------------------------

## 🖼 3. Display the Movies

Each movie must display:

-   Title
-   Year
-   Genre
-   Rating
-   Delete button
-   Edit button

You are free to structure your components as you wish, but proper
separation of concerns is expected.

------------------------------------------------------------------------

## ❌ 4. Delete Movie

Each movie must include a **Delete** button.

When clicked:

-   The movie disappears from the list
-   No page reload
-   No direct array mutation
-   Proper state update

------------------------------------------------------------------------

## ✏️ 5. Edit Movie (Random Update)

Each movie must include an **Edit** button.

When clicked:

-   The movie is automatically modified
-   The modification must be random (for example):
    -   Change the rating
    -   Change the year
    -   Append something to the title
-   Only the selected movie should be updated

------------------------------------------------------------------------

## 🔘 6. Global Action Buttons (Top of the Page)

Add 4 buttons above the movie collection.

### 1️⃣ Add One Movie

Adds a randomly generated movie:

-   Unique ID
-   Random title
-   Random year
-   Random rating
-   Random genre

### 2️⃣ Add Multiple Movies

Adds 3 to 5 randomly generated movies at once.

They must:

-   Have unique IDs
-   Appear correctly in the list

### 3️⃣ Remove First 4 Movies

Removes the first 4 movies in the list.

If fewer than 4 exist: - Remove all of them

### 4️⃣ Reset to Default Movies

Resets the collection to the original dataset. Any updates will be reset and the list from the .json will be shown.