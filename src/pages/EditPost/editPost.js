import React, { useState, useEffect } from "react";
import { useQuery, useMutation } from "@apollo/client";
import { useParams } from "react-router-dom";

import { ContentWrapper, PostField } from "../../components";
import { UPDATE_A_POST } from "../../graphql/mutations";
import { GET_A_POST } from "../../graphql/queries";

export default function EditPost(props) {
  const { history } = props;
  const { id } = useParams();

  const [updateAPost] = useMutation(UPDATE_A_POST);
  const { data } = useQuery(GET_A_POST(id));

  const [inputValue, setInputValue] = useState({
    title: "",
    body: "",
  });

  useEffect(() => {
    if (data) setInputValue({ title: data.post.title, body: data.post.body });
  }, [data]);

  const handleOnChange = (_, data) => {
    setInputValue((prevState) => ({ ...prevState, body: data.data }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const _inputValue = { ...inputValue };
    delete _inputValue.title;
    updateAPost({ variables: { id, input: _inputValue } }).then(() => {
      setInputValue({ title: "", body: "" });
      history.push("/");
    });
  };

  return (
    <ContentWrapper>
      <PostField
        isEdit
        onChange={handleOnChange}
        value={inputValue}
        onSubmit={handleSubmit}
      />
    </ContentWrapper>
  );
}
