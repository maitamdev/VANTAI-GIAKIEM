const Vibrant = require('node-vibrant');

async function run() {
  try {
    const palette = await Vibrant.from('./public/images/logo.png').getPalette();
    console.log('Vibrant:', palette.Vibrant?.hex);
    console.log('Muted:', palette.Muted?.hex);
    console.log('DarkVibrant:', palette.DarkVibrant?.hex);
    console.log('DarkMuted:', palette.DarkMuted?.hex);
    console.log('LightVibrant:', palette.LightVibrant?.hex);
    console.log('LightMuted:', palette.LightMuted?.hex);
  } catch (e) {
    console.error(e);
  }
}
run();
