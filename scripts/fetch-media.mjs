// Downloads the site's images and video from the old Wix media library into
// src/assets/media/. Files that already exist are skipped, so once you've
// committed the media folder this script does nothing.
//
// Run locally with:  npm run media
// The GitHub Actions deploy runs it automatically before each build.
import { mkdir, access, writeFile } from "node:fs/promises";

const OUT = "src/assets/media";
const img = (id, w) => `https://static.wixstatic.com/media/${id}/v1/fit/w_${w},h_4000,q_90/file.jpg`;

const files = {
  "hero.jpg": img("61f47f_6a9b0b3e3a8848a68760bfdaf76b2a45~mv2.jpg", 1400),
  "apps-band.jpg": img("61f47f_a490512c1ab644519bf90c97fef62774~mv2.jpg", 1600),
  "about.jpg": img("61f47f_9da3c7eccdd74cd1a89d3930921e9879~mv2.jpg", 1400),
  "fretninja-main.jpg": img("61f47f_c2fed5835719491baae6f73dbe8c03db~mv2.png", 700),
  "fretninja-ghost-map.jpg": img("61f47f_27c317da2f124e68b36bb47e878e2e3c~mv2.jpg", 700),
  "fretninja-playable.jpg": img("61f47f_d2314cb9390b4c4b9ae167a08f84b45b~mv2.png", 700),
  "fretninja-voice-leading.jpg": img("61f47f_e8a68380bb934ea68d0cbee4956c43df~mv2.png", 700),
  "fretninja-settings.jpg": img("61f47f_8c536e3045ca4c0eb8148cbcd74d4505~mv2.png", 700),
  "fretninja-details.jpg": img("61f47f_72e14354c8104378ba96041427c8ddf7~mv2.png", 700),
  "fretninja-review-poster.jpg": "https://static.wixstatic.com/media/61f47f_a5d06e46905f4faeb3a69c8d55427578f000.jpg",
  "fretninja-review.mp4": "https://video.wixstatic.com/video/61f47f_a5d06e46905f4faeb3a69c8d55427578/720p/mp4/file.mp4",
};

await mkdir(OUT, { recursive: true });
let failed = 0;
for (const [name, url] of Object.entries(files)) {
  const path = `${OUT}/${name}`;
  try { await access(path); console.log(`skip  ${name} (already there)`); continue; } catch {}
  try {
    const res = await fetch(url);
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    await writeFile(path, Buffer.from(await res.arrayBuffer()));
    console.log(`saved ${name}`);
  } catch (e) {
    failed++;
    console.warn(`FAILED ${name}: ${e.message}`);
  }
}
if (failed) console.warn(`${failed} file(s) could not be downloaded; the site still builds without them.`);
