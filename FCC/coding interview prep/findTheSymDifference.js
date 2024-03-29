function sym() {
    let arr = []
    for(let i =0; i<arguments.length; i++){
      arr.push(arguments[i])
    }
    const diff=(a,b)=>{
      if(!a.length) return b
      if(!b.length) return a
      let obja = {}
      let objb={}
      a.forEach(x=>{
        obja[x]=true
      })
      b.forEach(x=>{
        objb[x]=true
      })
      let res=[]
      for(let i in obja){
        if(obja[i] && !objb[i]) res.push(+i)
      }
      for(let i in objb){
        if(objb[i] && !obja[i]) res.push(+i)
      }
      return res
      
  
    }
    let res=arr[0]
    for(let i=1; i<arr.length; i++){
      res = diff(res,arr[i])
    }
    return res
  }
  
  sym([1, 2, 3], [5, 2, 1, 4])



//   The mathematical term symmetric difference (△ or ⊕) of two sets is the set of elements which are in either of the two sets but not in both. For example, for sets A = {1, 2, 3} and B = {2, 3, 4}, A △ B = {1, 4}.

// Symmetric difference is a binary operation, which means it operates on only two elements. So to evaluate an expression involving symmetric differences among three elements (A △ B △ C), you must complete one operation at a time. Thus, for sets A and B above, and C = {2, 3}, A △ B △ C = (A △ B) △ C = {1, 4} △ {2, 3} = {1, 2, 3, 4}.

// Create a function that takes two or more arrays and returns an array of their symmetric difference. The returned array must contain only unique values (no duplicates).