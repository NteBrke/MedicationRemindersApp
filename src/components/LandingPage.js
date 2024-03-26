import React from "react";

export default function LandPage() {
  return (
    <div className="landing-container">
      <div className="left-section">
        <h1 className="firstHeader">
          Never miss a dose again. Stay on track with MedAlert, your intuitive
          medication reminder.
        </h1>
        <ul className="landingPageFeatures">
          <li>
            <span className="underline">User-Friendly Accounts:</span> Sign up
            and create your account in minutes.
          </li>
          <li>
            <span className="underline">Custom Medication Entries:</span> Easily
            input medication names and durations.
          </li>
          <li>
            <span className="underline">Flexible Reminder Options:</span> Choose
            when to receive reminders.
          </li>
          <li>
            <span className="underline">Timely Notifications:</span> Receive
            timely reminders for renewals and check-ups.
          </li>
          <li>
            <span className="underline">Stay Informed:</span> Get notified of
            medication shortages to take proactive steps.
          </li>
          <li>
            <span className="underline">
              Personalized Medication Reminders:
            </span>{" "}
            Set customized reminders for medication schedules.
          </li>
        </ul>
      </div>
      <div className="right-section">
        <p className="ctaText">
          Experience peace of mind with MedAlert. Sign up now!
        </p>
        <div className="buttons">
          <ul>
            <li>
              <a href="/signup">Sign Up</a>
            </li>
            {/* 
            <li>
              <a href="/login">Log In</a>
            </li> */}
          </ul>
        </div>
      </div>
    </div>
  );
}
