# Project Blueprint: BTK Akademi Clone

## Overview

This document outlines the plan for creating a web application that clones the [BTK Akademi](https://www.btkakademi.gov.tr/) website. The goal is to build a modern, responsive, and user-friendly platform for online learning, replicating the look and feel of the original site.

## Current State

The application has been significantly redesigned to more closely match the modern aesthetics of the BTK Akademi website. The following milestones have been achieved:

*   **New Homepage Layout:** The homepage now features a two-column layout with a sidebar for categories and a main content area with a hero banner and horizontally scrolling carousels for different course sections.
*   **Redesigned Header:** The header has been updated with the official BTK Akademi logo, a more prominent search bar, and a user profile section.
*   **Enhanced Styling:** The overall styling has been refined with a lighter color scheme, improved spacing, and more modern card designs.
*   **Dynamic Content:** The homepage is now populated with a wider variety of courses, including "Devam Ettiğim Eğitimler" (Continuing Courses) and "Popüler Eğitimler" (Popular Courses).

## Design and Style

*   **Color Palette:** The new design uses a lighter color palette, with a white background and shades of gray for different sections. The primary color is still blue (`#1976d2`), but it is used more sparingly.
*   **Typography:** The default Material-UI typography is still in use, but with more emphasis on bold headings and a clearer visual hierarchy.
*   **Iconography:** Material Icons are used throughout the application, including in the sidebar and header.
*   **Layout:** The layout has been updated to a more modern two-column design on the homepage, while other pages retain a single-column layout.

## Features

### 1. Header
*   Official BTK Akademi logo.
*   "Eğitimler" (Courses) navigation button with a menu icon.
*   A prominent, centered search bar.
*   A user profile section with a notification bell, user name, and avatar.

### 2. Home Page
*   A sidebar with a list of course categories.
*   A large hero banner in the main content area.
*   Horizontally scrolling carousels for "Devam Ettiğim Eğitimler" and "Popüler Eğitimler".
*   Modern card design for courses with images, titles, and level tags.

### 3. Courses Page
*   A grid view of available courses.
*   A search bar for filtering courses.
*   Each course has a card with an image and title.

### 4. News Page
*   A list of news articles.
*   Each article has a title, image, and summary.

### 5. Footer
*   Links to various sections of the site.
*   Social media links.
*   Copyright notice.

## Implementation Plan

1.  **Setup:** The project is already set up with React and Vite. (Completed)
2.  **Styling:** Material-UI has been used to style the application. (Completed)
3.  **Components:** The following components have been created and updated:
    *   `Header.jsx` (Updated)
    *   `Footer.jsx` (Completed)
    *   `HomePage.jsx` (Updated)
    *   `CoursesPage.jsx` (Completed)
    *   `NewsPage.jsx` (Completed)
4.  **Routing:** `react-router-dom` is in place for navigation. (Completed)
5.  **Data:** Static data for courses and news has been added and expanded. (Completed)
