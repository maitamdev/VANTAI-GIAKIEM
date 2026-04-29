import { getAverageColor } from 'fast-average-color-node';

async function run() {
  try {
    const color = await getAverageColor('./public/images/logo.png');
    console.log('Dominant color:', color.hex);
  } catch (e) {
    console.error(e);
  }
}
run();
