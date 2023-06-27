import { gql } from "@apollo/client";

export const GET_CV = gql`
  query cv {
    cv {
    deskripsi
    id
    nama
    posisi
  }
  }
`;