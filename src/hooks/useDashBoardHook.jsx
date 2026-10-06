import codingQuestions from "../data/codingQuestion"

export const useDashBoard=()=>{

 let dsaCompleted=JSON.parse(localStorage.getItem("completeDsa"))||[]
  let codingCompleted=JSON.parse(localStorage.getItem("codingComlete"))||[]
  let interviewCompleted=JSON.parse(localStorage.getItem("interviewComplete"))||[]
  let recentlyCodingQuestion=codingQuestions.filter((val)=>{
    return codingCompleted.includes(val.id)
  })
  if(recentlyCodingQuestion.length>3){
    recentlyCodingQuestion= recentlyCodingQuestion.slice(0,3)
  }


    return {dsaCompleted,codingCompleted,interviewCompleted,recentlyCodingQuestion}
}