/* tslint:disable:no-console */
import express from 'express';

const app = express();
const port = 6000;

app.listen(port, () => {
    console.log(`Listening on:`);
    console.log(`  http://localhost:${port}/  `);
});
