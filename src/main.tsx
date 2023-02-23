import React from "react";
import ReactDOM from "react-dom/client";
import { Tweet } from "./components/Tweet";

import "./global.css";

import { Sparkle } from "phosphor-react";
import { Sidebar } from "./components/Sidebar";
import { Header } from "./components/Header";
import { Separator } from "./components/Separator";


ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <div className="layout">
    <Sidebar />

      <div className="content">
        <main className="timeline">
          <Header title="Home" />

          <form className="new-tweet-form">
            <label htmlFor="tweet">
              <img src="https://github.com/diegobonze.png" alt="Foto do Diego Bonze" />
              <textarea id="tweet" placeholder="Whats's happening?" />
            </label>

            <button type="submit">Tweet</button>
          </form>
          
          <Separator />

          <Tweet/>
          <Tweet/>
        </main>
      </div>
    </div>
  </React.StrictMode>
);
