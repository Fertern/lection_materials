import React, { useEffect, useState } from "react";
import { Card, Text, Row, Input } from './components'

const Example = ({ date, info }) => {
  const [name, setName] = useState("Tachana");
  const [surname, setSurname] = useState("Main");
  const [width, setWidth] = useState(window.innerWidth);
  useEffect(() => {
    document.title = name + " " + surname;
  });
  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  });
  return (
    <Card>
      <Row>
        <h1>Name</h1>
        <Input value={name} onChange={setName} />
      </Row>
      <Row>
        <h1>Surname</h1>
        <Input value={surname} onChange={setSurname} />
      </Row>
      <Row>
        <Text>Width: {width}</Text>
        <Text>Date: {date}</Text>
        <Text>Info: {info}</Text>
      </Row>
    </Card>
  );
};

export default Example;

/* Example from https://twitter.com/threepointone/status/1056594421079261185?ref_src=twsrc%5Etfw%7Ctwcamp%5Etweetembed&ref_url=https%3A%2F%2Fcdn.embedly.com%2Fwidgets%2Fmedia.html%3Ftype%3Dtext%252Fhtml%26key%3Da19fcc184b9711e1b4764040d3dc5c07%26schema%3Dtwitter%26url%3Dhttps%253A%2F%2Ftwitter.com%2Fthreepointone%2Fstatus%2F1056594421079261185%26image%3Dhttps%253A%2F%2Fi.embed.ly%2F1%2Fimage%253Furl%253Dhttps%25253A%25252F%25252Fpbs.twimg.com%25252Fmedia%25252FDqnGs6yWwAAYPXp.jpg%25253Alarge%2526key%253Da19fcc184b9711e1b4764040d3dc5c07 */