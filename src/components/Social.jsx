import React from "react";

const Social = () => {
  return (
    <ul className="text-black dark:text-white">
      <li>
        <a href="www.facebook.com" target="_blank">
          <ion-icon name="logo-facebook"></ion-icon>
        </a>
      </li>
      <li>
        <a href="x.com" target="_blank">
          <ion-icon name="logo-twitter"></ion-icon>
        </a>
      </li>
      <li>
        <a href="www.instagram.com" target="_blank">
          <ion-icon name="logo-instagram"></ion-icon>
        </a>
      </li>
      <li>
        <a href="www.github.com" target="_blank">
          <ion-icon name="logo-github"></ion-icon>
        </a>
      </li>
    </ul>
  );
};

export default Social;
