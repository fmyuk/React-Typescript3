import React, { FC } from "../../components/templates/node_modules/react";
import { useHistory } from "react-routers-dom";
import HomeButton from "components/molecules/HomeButton";

const EnhancedHomeButton: FC = () => {
  const history = useHistory();

  return <HomeButton redirectToHome={() => history.push("/")} />;
};

export default EnhancedHomeButton;
