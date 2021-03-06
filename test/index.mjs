import {Statuspage, StatuspageUpdates} from '../build/src/index.js';
import assert from 'assert';

const pageId = 'wgbgn12kd4gt';

const st = new Statuspage(pageId);

st.summary().then(({status}) =>
  assert(status.description === 'All Systems Operational')
);

const s = new StatuspageUpdates(pageId);

s.on('start', state => {
  assert(state.state === 'started');
});

s.on('incident_update', incident => {
  console.log(incident.status);
});

s.start();
