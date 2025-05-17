import { Router } from 'express';
import { slides } from '../state';
import { generateSpeakerNotes, generateSlideContent, generateLayout } from '../openai';

export const slideRouter = Router();

// create new slide
slideRouter.post('/', async (req, res) => {
  const { content, image } = req.body;
  const id = Date.now().toString();

  const speakerNotes = await generateSpeakerNotes(content);
  const slideContent = await generateSlideContent(speakerNotes);
  const layout = await generateLayout(slideContent);

  slides[id] = {
    id,
    content,
    image,
    speakerNotes,
    slideContent,
    layout
  };
  res.status(201).json(slides[id]);
});

// get slide by id
slideRouter.get('/:id', (req, res) => {
  const slide = slides[req.params.id];
  if (!slide) return res.sendStatus(404);
  res.json(slide);
});

// update fields
slideRouter.put('/:id', (req, res) => {
  const slide = slides[req.params.id];
  if (!slide) return res.sendStatus(404);
  Object.assign(slide, req.body);
  res.json(slide);
});
