# Agent Slide Builder Specification

## Overview

This application allows a user to enter content in the form of Markdown text and/or chart images and then uses OpenAI o3 to create speaker notes and BCG-style slide content formatted as a Vue.js template.  Each step of the process including writing the speaker notes script, describing the slide content and formatting and editing the Vue template is visible to the user and the user can edit any of these intermediate steps with the edits carried through to subsequent steps.

## Screens

- New Slide - New slide screen shows a text field where the user can type / paste in content to be put into a slide.  The user may upload an image which can also be passed into the LLM as part of the generation of the slide content / format description.  Any uploaded images are stored attached to this slide.
- Edit Speaker Notes - Once a slide has been created, this screen shows the speaker notes that contain the full detailed narrative of the content of this slide.  The user may interact wtih a chatbot on this screen to ask for edits of the speaker notes which are then reflected in the screen.  The user may also directly edit the speaker notes.
- Edit Slide Content - Once the speaker notes have been created, this screen shows the description of the content and layout of the slide.  User BCG-style slide formatting which has a title for the main point, an optional sub-title and then well-structured and detailed content.  The user may interact wtih a chatbot on this screen to ask for edits of the content which are then reflected in the screen.
- Edit Layout - Once the content is created for the for slide, this page will show the layout of the slide rendered as a Vue.js template.  There is a chatbot that allows the user to ask for changes to the layout or content of this slide.  The user may toggle between seeing the Vue javascript template and the rendering of the Vue code.  A button on the page uses the OpenAI TTS API to generate and play the speaker notes over the slide.

## UI

- Top Nav - shows logo and user profile menu
- Left Nav - provides navigation at top level to select which slide to work on and when a slide is selected navigates to the different screens for that slide.
- Main Panel - shows content of screen

## Architecture

- Front-end React/Typescript served with Vite
- Back-end NodeJS/Typescript
- Database Postgres using Drizzle ORM
- LLM: use OpenAI only - o3 for slide generation and gpt-4o-mini for chatbot functionality
- Deployment through Replit