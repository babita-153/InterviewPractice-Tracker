import { useEffect, useState } from "react";
import codingQuestions from "../data/codingQuestion";

export const useCoding = () => {
  const [category, setCategory] = useState("all");
  const categories = [
    "all",
    ...new Set(codingQuestions.map((item) => item.category)),
  ];
  const difficulties = ["all", "easy", "medium", "hard"];
  const [search, setSearch] = useState("");
  const [finalSearch, setFinalSearch] = useState("");
const [completed,setCompleted]=useState(JSON.parse(localStorage.getItem("codingComlete"))||[])
  const [difficulty, setDifficulty] = useState("all");

  console.log(category);

  useEffect(() => {
    let timer = setTimeout(() => {
      setFinalSearch(search);
    }, 700);
    return() => clearTimeout(timer);
  }, [search]);



  const filteredQuestion = codingQuestions.filter((question) => {
    const matchSearch = question.title
      .toLowerCase()
      .includes(finalSearch.toLowerCase());
    const matchDifficulty =
      difficulty === "all" || question.difficulty.toLowerCase() === difficulty;
    const matchCategory = category === "all" || question.category === category;
    return matchSearch && matchDifficulty && matchCategory;
  });



const handleChange=(id)=>{
     setCompleted((prev)=>{
      let updated
  if(prev.includes(id)){
    updated=prev.filter((item)=>item!=id)
  }
else{
  updated=[...prev,id]
}
localStorage.setItem("codingComlete",JSON.stringify(updated))
 return updated
     })
    
     
}


  return {
    search,
    setCategory,
    setSearch,
    category,
    categories,
    filteredQuestion,
    difficulty,
    setDifficulty,
    difficulties,
    handleChange,
    completed
  };
};
