import React from "react";
import ReactDOM from "react-dom/client";

import "./global.css";

import twitterLogo from "./assets/logo-twitter.svg";
import {
  House,
  Hash,
  Bell,
  Envelope,
  Bookmarks,
  FileText,
  User,
  DotsThreeCircle,
  Sparkle
} from "phosphor-react";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <div className="layout">
      <aside className="sidebar">
        <img className="logo" src={twitterLogo} alt="Logo" />

        <nav className="main-navigation">
          <a className="active" href="">
            <House weight="fill" />
            Home
          </a>

          <a href="">
            <Hash />
            Explore
          </a>

          <a href="">
            <Bell />
            Notification
          </a>

          <a href="">
            <Envelope />
            Messages
          </a>

          <a href="">
            <Bookmarks />
            Bookmarks
          </a>

          <a href="">
            <FileText />
            Lists
          </a>

          <a href="">
            <User />
            Profile
          </a>

          <a href="">
            <DotsThreeCircle />
            More
          </a>
        </nav>

        <button className="new-tweet" type="button">
          Tweet
        </button>
      </aside>

      <div className="content">
        <main className="timeline">
          <div className="timeline-header">
            Home
            <Sparkle />
          </div>

          <form className="nwe-tweet-form">
            <label htmlFor="tweet">
              
            </label>
          </form>
        </main>
      </div>
    </div>
  </React.StrictMode>
);
