import { gql, useQuery } from "@apollo/client";
import { useEffect, useState } from "react";
import CountryCard from "./CountryCard";




const GET_COUNTRIES = gql`
  query Country {
    countries {
      name
      code
      emoji
    }
  }
`;

export default function CountryList() { 
    
}