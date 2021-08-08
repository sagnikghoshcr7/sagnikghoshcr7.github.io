import React from "react";
import Section from "../components/Section";

import { BsTrophy } from "react-icons/bs"
import { RiFilePaper2Fill } from "react-icons/ri"

export default function Achievements() {
  return (
    <React.Fragment>
      <Section id="achievements" title="Achievements &amp; Certifications">
        <ul className="fa-ul mb-0">
          <div>
            <span className="fa-li p-2">
              <i className="fas fa-trophy text-warning"><BsTrophy /></i>
            </span>
            <a href="https://drive.google.com/file/d/1AffY67ZamCGlrocrvHkmAT9NEYu3GNHd/view?usp=sharing">
              Google Hash Code 2021
            </a>
          </div>
          <div>
            <span className="fa-li p-2">
              <i className="fas fa-trophy text-warning"><BsTrophy /></i>
            </span>
            <a href="https://drive.google.com/file/d/13RZHo6PMYYJ2C5r2QT5BPARK_DWS9Wcj/view?usp=sharing">
              Google Code Jam 2021
            </a>
          </div>
          <div>
            <span className="fa-li p-2">
              <i className="fas fa-trophy text-warning"><BsTrophy /></i>
            </span>
            <a href="https://www.codechef.com/users/sagnikghoshcr7/">
              4⭐ on Codechef
            </a>
          </div>
          <div>
            <span className="fa-li p-2">
              <i className="fas fa-trophy text-warning"><RiFilePaper2Fill /></i>
            </span>
            <a href="https://drive.google.com/file/d/191YHoGUN6K-Jj-1ExgD0HlXf6G81_4PC/view?usp=sharing">
              Google Digital Garage
            </a>
          </div>
          <div>
            <span className="fa-li p-2">
              <i className="fas fa-trophy text-warning"><RiFilePaper2Fill /></i>
            </span>
            <a href="https://www.udemy.com/certificate/UC-54585c1b-50b5-4471-ac9c-ae39d8b0a0a5/">
              CNN for Computer Vision with Keras and TensorFlow in Python
            </a>
          </div>
          <div>
            <span className="fa-li p-2">
              <i className="fas fa-trophy text-warning"><RiFilePaper2Fill /></i>
            </span>
            <a href="https://www.udemy.com/certificate/UC-cd27566a-419f-4b82-b4fb-956328fdf98f/">
              Neural Networks in Python: Deep Learning
            </a>
          </div>
          <div>
            <span className="fa-li p-2">
              <i className="fas fa-trophy text-warning"><RiFilePaper2Fill /></i>
            </span>
            <a href="https://www.udemy.com/certificate/UC-3caea225-1334-472c-83ec-a2046bc19a2b/">
              Modern React with Redux
            </a>
          </div>
          <div>
            <span className="fa-li p-2">
              <i className="fas fa-trophy text-warning"><RiFilePaper2Fill /></i>
            </span>
            <a href="https://www.udemy.com/certificate/UC-9cce26a1-c7be-48b1-8dec-e60515641792/">
              Flutter & Dart - The Complete Guide
            </a>
          </div>
          <div>
            <span className="fa-li p-2">
              <i className="fas fa-trophy text-warning"><RiFilePaper2Fill /></i>
            </span>
            <a href="https://www.udemy.com/certificate/UC-735685b2-f95b-4e7f-b2bc-77a65ca8ceda/">
              The Complete Flutter and Dart Guide
            </a>
          </div>
        </ul>
      </Section>
    </React.Fragment>
  );
}
