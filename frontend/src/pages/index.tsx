import Header from "@/components/Header";
import AddCountryForm from "@/components/AddCountryForm";
import CountryList from "@/components/CountryList";
import { gql, useQuery } from "@apollo/client";




export default function Home() { 


  return (
    <div>
      <Header />
      <AddCountryForm />
      
    </div>

  )
}