import Header from "./components/Header";

import initialEmails from "./data/emails";
import { useState } from "react";

import "./App.css";
import emails from "./data/emails";

function App() {
  // Use initialEmails for state
  console.log(initialEmails);
  const [read, setShowReadMsg]= useState(true)
  const unreadEmail = emails.filter(email => !email.read)
const  readEmail  = emails.filter(email => email.read)

  return (
    <div className="app">
      <Header />
      <nav className="left-menu">
        <ul className="inbox-list">
          <li
            className="item active"
            // onClick={() => {}}
          >
            <span className="label">Inbox</span>
            <span className="count">?</span>
          </li>
          <li
            className="item"
            // onClick={() => {}}
          >
            <span className="label">Starred</span>
            <span className="count">?</span>
          </li>

          <li className="item toggle">
            <label htmlFor="hide-read">Hide read</label>
            <input
              id="hide-read"
              type="checkbox"
              checked={false}
              // onChange={() => {}}
            />
          </li>
        </ul>
      </nav>
      <main className="emails">
      {readEmail.map(email => (
        
        <div class="emailRowRead">
            <div class="emailRow__options">
              <input type="checkbox" 
              
            checked={email.read}
              />
              <input type="checkbox" 
              className="star-checkbox"
              
              checked={email.starred}
                />
              
              
            </div>

            <h3 class="emailRow__title">{email.sender}</h3>

            <div class="emailRow__message">
              <h4>
               {email.title}
              </h4>
            </div>

          </div>
        
        
        
        
        
        ))
       
      }
        {unreadEmail.map(email => (
        
        <div class="emailRow">
            <div class="emailRow__options">
              <input type="checkbox" 
              
            checked={email.read}
              />
              <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M22 9.24l-7.19-.62L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27 18.18 21l-1.63-7.03L22 9.24zM12 15.4l-3.76 2.27 1-4.28-3.32-2.88 4.38-.38L12 6.1l1.71 4.04 4.38.38-3.32 2.88 1 4.28L12 15.4z"/></svg>
              
              
            </div>

            <h3 class="emailRow__title">{email.sender}</h3>

            <div class="emailRow__message">
              <h4>
               {email.title}
              </h4>
            </div>

          </div>
        
        
        
        
        
        ))
       
      }
          </main>
    </div>
  );
}

export default App;
