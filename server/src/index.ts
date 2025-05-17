import express from 'express';
import { slideRouter } from './routes/slides';

const app = express();
app.use(express.json());

app.use('/api/slides', slideRouter);

const port = process.env.PORT || 3001;
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
