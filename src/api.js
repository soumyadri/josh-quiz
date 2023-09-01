export const getQuestion = async (params) => {
      const result = await fetch(`https://opentdb.com/api.php?amount=${params}`).then((res)=>res.json());
      return result.results;
}