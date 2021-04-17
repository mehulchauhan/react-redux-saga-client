import React, { useState } from "react";
import RouteInformation from "../components/RouteInformation";
import Field from "../components/translate/Field";
import Translation from "../components/translate/Translation";
import Languages from "../components/translate/Languages";

const Translate = () => {
  const [language, setLanguage] = useState("ru");
  const [text, setText] = useState("");
  return (
    <div>
      <Field label="Enter English" onChange={setText} value={text} />
      <Languages language={language} onLanguageChange={setLanguage} />
      <hr />
      <Translation text={text} language={language} />

      <br />
      <br />
      <hr />
      <RouteInformation />
    </div>
  );
};

export default Translate;
