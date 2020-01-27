const andar1 = document.querySelector('#floor1')


function loadData(floor) {
fetch(`http://localhost:3333/floors/${floor}`,{ 
          method: 'GET'
          }).then(datas => { 
              datas.json()
          }).then((datas)=>{
              console.log(datas)
          })    
}

loadData(1)
