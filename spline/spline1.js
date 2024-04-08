import { Application } from '@splinetool/runtime';

const canvas = document.getElementById('canvas3d');
const app = new Application(canvas);
app.load('https://unpkg.com/@splinetool/viewer@1.0.54/build/spline-viewer.js');
