import React, { useState } from "react";
import { useMutation } from "@apollo/client";

import { ContentWrapper, PostField } from "../../components";
import { CREATE_A_POST } from "../../graphql/mutations";

export default function CreatePost(props) {
  const { history } = props;

  const [createAPost] = useMutation(CREATE_A_POST);

  const [inputValue, setInputValue] = useState({
    title: "",
    body: "",
  });

  const handleOnChange = (e, data) => {
    if (e && e.target.name === "title") {
      const { name, value } = e.target;
      setInputValue((prevState) => ({ ...prevState, [name]: value }));
    } else {
      setInputValue((prevState) => ({ ...prevState, body: data.data }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    createAPost({ variables: { input: inputValue } }).then(() => {
      history.push("/");
    });
  };

  return (
    <ContentWrapper>
      <PostField
        onChange={handleOnChange}
        value={inputValue}
        onSubmit={handleSubmit}
      />
    </ContentWrapper>
  );
}
