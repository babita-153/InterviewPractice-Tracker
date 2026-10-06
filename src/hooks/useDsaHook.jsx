import { useEffect, useState } from "react";
import dsaQuestions from "../data/dsaQuestion";

export const useDsa = () => {
  const categories = ["all", "easy", "medium", "hard"];
  const [search, setSearch] = useState("");
  const [finalSearch, setFinalSearch] = useState("");
  const [category, setCategory] = useState("all");
  const [complete,setComplete]=useState(JSON.parse(localStorage.getItem("completeDsa"))||[])
  
  // const [allQuestion, setAllQuestion] = useState([]);

  useEffect(() => {
    let timer = setTimeout(() => {
      setFinalSearch(search);
    }, 700);
    return () => clearTimeout(timer);
  }, [search]);

  console.log(finalSearch);
  let filteredQuestions;
  if (finalSearch) {
    console.log("hfbhdbhs");
    filteredQuestions = dsaQuestions.filter((question) => {
      return question.title.toLowerCase().includes(finalSearch.toLowerCase());
    });
  } else {
    filteredQuestions = dsaQuestions.filter((question) => {
      if (category === "all") {
        return dsaQuestions;
      }
      return question.difficulty.toLowerCase() === category.toLowerCase();
    });
  }
 

const handleChange=(id)=>{
  setComplete((prev)=>{
    let updated
    if(prev.includes(id)){
      updated=prev.filter((val)=>{
        return val!==id
      })
    }else{
      updated=[...prev,id]
    }
    localStorage.setItem("completeDsa",JSON.stringify(updated))
    return updated
  })
 
}





  return {
    categories,
    search,
    setSearch,
    category,
    setCategory,
    filteredQuestions,
    complete,setComplete,
    handleChange
  };
};
