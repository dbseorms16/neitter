import React, { useState, useEffect } from "react";
import { dbService } from "fBase";
import Nweet from "components/Nweet";
const Home = ({ userObj }) => {
  const [twit, setTwit] = useState("");
  const [twits, setTwits] = useState([]);

  useEffect(() => {
    dbService.collection("nweets").onSnapshot((snapshot) => {
      const nweetArray = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setTwits(nweetArray);
    });
  }, []);

  const onSubmit = async (event) => {
    event.preventDefault();
    await dbService.collection("nweets").add({
      text: twit,
      createdAt: Date.now(),
      creatorId: userObj.uid,
    });
    setTwit("");
  };

  const onChange = (event) => {
    const {
      target: { value },
    } = event;
    setTwit(value);
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input
          onChange={onChange}
          type="text"
          value={twit}
          placeholder="today's job"
          maxLength={120}
        />
        <input type="submit" value="submit" />
      </form>
      <div>
        {twits.map((twit) => (
          <Nweet
            key={twit.id}
            nweetObj={twit}
            isOwner={twit.creatorId === userObj.uid}
          />
        ))}
      </div>
    </div>
  );
};

export default Home;
