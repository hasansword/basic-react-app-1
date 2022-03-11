import React from "react";

export default function MainPage() {
  return (
      <main>
        <h1>Fun facts about react </h1>
        <ul>
          <li>Was first released in 2013🤓</li>
          <li>Was originally created by Jordan Walke🥳</li>
          <li>Has well over 150K stars on GitHub😱</li>
          <li>Is maintained by Facebook👊</li>
          <li>Powers thousands of enterprise apps, including mobile apps👑</li>
        </ul>
        <div className="container">
          <a
            href="https://github.com/facebook/react"
            target="_blank"
            className="button">
            For More Details
          </a>
        </div>
      </main>
  );
}
