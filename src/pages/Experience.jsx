import React from "react";
import Section from "../components/Section";

export default function Experience() {
  return (
    <Section id="experience" title="Experience">
      <div className="d-flex flex-column flex-md-row justify-content-between mb-5">
        <div className="flex-grow-1">
          <h3 className="mb-0">Flutter Developer Intern</h3>
          <div className="subheading mb-3">Skillablers ~ Crafting Careers...Skillfully!</div>
          <p>
            <strong>Roles/Responsibilities</strong><br />
            <li>Responsible to handle the Frontend as well as Backend.</li>
            <li>Implement new features to the apps.</li>
            <li>Make the app very efficient.</li>
            <li>Implement many alternative solution for a problem.</li>
          </p>
        </div>
        <div className="flex-shrink-0">
          <span className="text-primary">June 2021 - Present</span>
        </div>
      </div>
      <div className="d-flex flex-column flex-md-row justify-content-between mb-5">
        <div className="flex-grow-1">
          <h3 className="mb-0">Full Stack Developer Intern</h3>
          <div className="subheading mb-3">Kaglorsys Technologies Pvt. Ltd.</div>
          <p>
            <li>Responsible to handle the Frontend as well as Backend.</li>
            <li>Make the Mobile & Web App very efficient.</li>
            <li>Implement ML/AI Models to the App.</li>
            <li>Implement many alternative solution for a problem.</li>
          </p>
        </div>
        <div className="flex-shrink-0">
          <span className="text-primary">June 2021 - Present</span>
        </div>
      </div>
      <div className="d-flex flex-column flex-md-row justify-content-between mb-5">
        <div className="flex-grow-1">
          <h3 className="mb-0">Lead</h3>
          <div className="subheading mb-3">Microsoft Student Ambassadors Community KIIT</div>
          <p>
            <li>In-charge of App Dev, Web Dev & ML Team.</li>
            <li>I do projects along with my team.</li>
            <li>Responsible to take core decisions for MSAC.</li>
            <li>Organize College, National and International level events.</li>
          </p>
        </div>
        <div className="flex-shrink-0">
          <span className="text-primary">July 2020 - Present</span>
        </div>
      </div>
    </Section>
  );
}
