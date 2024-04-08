const videos = [

            "Pranking my sister, is she okay (gone wrong)",
            
            "how to javascript",
            
            "html tutorial",
            
            "learning the piano",
            
            "html basics",
            
            "css",
            
            "java",
            
            
            "programming",
            
            
            "ui/ux"
            
            ];
            const games = [
              { title: 'Mass Effect', rating: 9.5 },
            
              { title: 'League Of Legends', rating: 5 },
            
              { title: 'Last of Us', rating: 10 },
            
              { title: 'God of war', rating: 10 },
            
              { title: 'WWE 2k20', rating: 4 },
            ];
    
            // videos.forEach(function(video){
    
            //         // for each used to display the value not for return any value
            //         return video 
                     
            // })
    
            games.forEach(function(video){
    
                    // used to display the value
                    console.log(video);
                     
            })
    
            // const newVideos = videos.map(function(video){
                    
            //         return video.toLocaleUpperCase()
            // })
    
            // console.log(newVideos)
    
            // const newVideos = videos.map(function(video){
                    
            //         return video
            // })
    
            // newVideos.push(heyyy)
    
            // console.log(newVideos)
    
            // console.log(videos);
    
    
       
    
            //       const every = games.every(function(every){
            //         return games.rating > 8
            //       })
    
            //       console.log(every)
    
    //               const some = games.some(function(every){
    //                 return games.rating < 8
    //               })

    // console.log(some)


    // const newVideos =  videos.map(function(video){
    //     if(video.length > 10){
    //         return video
    //     }
    //     else{
    //        return'nope'
    //     }
    // })

    // console.log(newVideos)


    // const count = [12,13 ,14,10,45,99,12] 
    // let countTotal = count.reduce(function(total , element){
    //     return total+element
    // })

    // console.log(countTotal)

    // const item = ["apple",'dog', 'mango', 'cat', 'banana']

    const numbers = [5, 2, 9, 1, 7];

    // Sort the numbers array
    numbers.sort(function(a, b) {
      return a - b;
    });
    
    console.log(numbers); // Output: [1, 2, 5, 7, 9]
    