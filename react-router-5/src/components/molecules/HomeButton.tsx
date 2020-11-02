import React, { FC } from "../templates/node_modules/react";
import { Button, Icon } from "../templates/node_modules/semantic-ui-react";

const HomeButton: FC<{ redirectToHome?: () => void }> = ({
  redirectToHome = () => undefined,
}) => (
    <Button basic color="grey" onClick={redirectToHome}>
      <Icon name="home" />
      ホームへ
    </Button>
  );

export default HomeButton;
