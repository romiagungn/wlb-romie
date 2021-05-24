import gql from "graphql-tag";

export const GET_A_POST = (id) => gql`
  query {
    post(id: ${id}) {
      id
      title
      body
    }
  }
`;
