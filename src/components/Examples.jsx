import TabButton from "./TabButton";
import { EXAMPLES } from "../data";
import { useState } from "react";
import Section from "./Section";
import Tabs from "./Tabs";

function Examples() {
  const [selectedTopic, setSelectedTopic] = useState();

  function handleSelect(selectedButton) {
    setSelectedTopic(selectedButton);
  }
  return (
    <Section title="Examples" id="examples">
      <Tabs
        // ButtonsContainer="menu"
        buttons={Object.entries(EXAMPLES).map(([key, value]) => {
          return (
            <TabButton
              key={key}
              onClick={() => handleSelect(key)}
              isSelected={selectedTopic === key}
            >
              {value.title}
            </TabButton>
          );
        })}
      >
        {!selectedTopic && <p>Please select a topic!</p>}
        {selectedTopic && (
          <div id="tab-content">
            <h3>{EXAMPLES[selectedTopic].title}</h3>
            <p>{EXAMPLES[selectedTopic].description}</p>
            <pre>
              <code>{EXAMPLES[selectedTopic].code}</code>
            </pre>
          </div>
        )}
      </Tabs>
    </Section>
  );
}

export default Examples;
