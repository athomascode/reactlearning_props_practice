import Contact from './components/Contact';

function App() {
  return (
    <div className='contacts'>
      <Contact 
        name="Paul"
        email="paul@gmail.com"
        number="173993"
      />
      <Contact 
        name="addf"
        email="dghjd@s"
        number={8983764}
      />
    </div>    
  );
}

// const nums = [1,2,3,4,5]
// // console.log(nums);

// const result =
//  nums.map(function(items){
//   // console.log(nums)
//   return items * 2
// })

// console.log(result)

// const names = ["aishu", "bivin", "vidya"]
// const result = names.map((name) => {
//   return name[0].toUpperCase() + name.slice(1)
// })
// console.log(result)

// const looney = ["bugsbunny","daffyduck","tweety"]
// const result = looney.map(character =>  `<p>${character}</p>`)
// console.log(result)

export default App;
