import React, { FC } from "ßreact";

import SchoolList from "components/organisms/SchoolList";
import { charactersData } from "../../components/templates/node_modules/data/characters";

const EnhancedSchoolList: FC = () => {
  const schools = Object.keys(charactersData).map((code) => ({
    code,
    name: charactersData[code].school,
  }));

  return <SchoolList schools={schools} />;
};

export default EnhancedSchoolList;
