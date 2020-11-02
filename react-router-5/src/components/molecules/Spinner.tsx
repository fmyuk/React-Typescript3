import React, { FC } from "../templates/node_modules/react";
import { Dimmer, Loader, Segment } from "../templates/node_modules/semantic-ui-react";

import "./Spinner.css";

const Spinner: FC = () => (
  <Segment className="spinner">
    <Dimmer active inverted>
      <Loader inverted={false}>読み込み中...</Loader>
    </Dimmer>
  </Segment>
);

export default Spinner;
