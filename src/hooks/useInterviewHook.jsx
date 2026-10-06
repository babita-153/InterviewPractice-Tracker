import { useEffect, useState } from "react"
import interviewQuestions from "../data/interviewQuestion"

export const useInterview=()=>{
    const difficulties=["all","easy","medium","hard"]
    const categories=["all",...new Set(interviewQuestions.map((item)=>item.topic))]
    const [search,setSearch]=useState("")
    const [finalSearch,setFinalSearch]=useState("")
    const [category,setCategory]=useState("all")
    const [difficulty,setDifficulty]=useState("all")
    const [completed,setCompleted]=useState(JSON.parse(localStorage.getItem("interviewComplete"))||[])

    useEffect(() => {
    let timer = setTimeout(() => {
      setFinalSearch(search);
    }, 700);
    return()=> clearTimeout(timer);
  }, [search]);



    let filteredQuestions=interviewQuestions.filter((question)=>{
            const matchSearch=question.title.toLowerCase().includes(finalSearch.toLowerCase())
            const matchDifficulty=difficulty==="all"||question.difficulty.toLowerCase()===difficulty.toLowerCase()
            const matchCategory=category==="all"||question.topic.toLowerCase()===category.toLowerCase()

            return matchCategory && matchDifficulty && matchSearch
        })


const handleChance=(id)=>{
    setCompleted((prev)=>{
        let updated
        if(prev.includes(id)){
            updated=prev.filter((val)=>val!==id)
        }else{
            updated=[...prev,id]
        }
    localStorage.setItem("interviewComplete",JSON.stringify(updated))
    return updated
    })
}


      return {
        filteredQuestions,
        search,
        setSearch,category,setCategory,difficulty,setDifficulty,difficulties,categories,
        handleChance,
        completed
      }  
}

