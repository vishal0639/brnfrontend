console.log(date);
    if(field==='startDate'){}
    setFormData({...formData,[field]:date})
    if (field === 'endDate' && formData.startDate) {
      //let {startDate}=formData;
      let daysDifference=(date.getDate()-formData.startDate.getDate())+1;
      console.log(daysDifference);
      if (daysDifference > 3) {
        alert('Leave duration cannot be more than 3 days.');
        setDurationError(true);
        setFormData((prevData) => ({...prevData,endDate: null }));
        console.log(formData);
      }else{
        setDurationError(false)
        setFormData((prevData)=>({...prevData,[field]:date}));
        console.log(formData)
      }
    }


 export   let [dayGap,setDayGap]=useState();
 export const getDaysDifference = (start, end) => Math.abs((end?.getDate() - start?.getDate()) + 1);
 let a='A';
 
  
 export const handleDate = (date, field) => {
    console.log(date,field);
    setFormData((prevData) => {
      const newData = { ...prevData, [field]: date };
      if((field === 'endDate' && !prevData.startDate)){
       const newData={...prevData,startDate:date,endDate:date};
       const daysDifference = getDaysDifference(newData.startDate,newData.endDate);
        console.log(daysDifference);
        setDayGap(daysDifference);
        return {...newData};
      }else if((field === 'startDate' && (!prevData.endDate || prevData.endDate))){
        const newData={...prevData,startDate:date,endDate:date};
        const daysDifference = getDaysDifference(newData.startDate,newData.endDate);
         console.log(daysDifference);
         setDayGap(daysDifference);
         return {...newData};
       }else  if((date===null)){
        setDayGap('');
        return {...prevData};
       }
      else if ((field === 'endDate' && prevData.startDate) || (field === 'startDate' && prevData.endDate)) {
        const start = field === 'endDate' ? prevData.startDate : date;
        const end = field === 'endDate' ? date : prevData.endDate;
        const daysDifference = getDaysDifference(start, end);
        console.log(daysDifference);
        setDayGap(daysDifference);
        if (daysDifference > 3) {
          alert('Leave duration cannot be more than 3 days.Clear Both.Always Select startDate First');
          return { ...prevData, [field]: null }; // Do not update formData if condition is not met
        }
      }
  
      console.log(newData);
      return newData;
    });
  };
{/*


if (field === 'endDate' && prevData.startDate) {
        const daysDifference=(date?.getDate()-prevData.startDate?.getDate())+1
        //const daysDifference = Math.ceil((date - prevData.startDate) / (1000 * 60 * 60 * 24));
        console.log(daysDifference);
        if (daysDifference > 3) {
          alert('Leave duration cannot be more than 3 days.');
          return {...prevData,endDate:null}; // Do not update formData if condition is not met
        }
      }else if (field === 'startDate' && (prevData.endDate)){
        const daysDifference=(prevData.endDate?.getDate()-date?.getDate())+1
        //const daysDifference = Math.ceil((date - prevData.startDate) / (1000 * 60 * 60 * 24));
        console.log(daysDifference);
        if (daysDifference > 3) {
          return {...prevData,startDate:date,endDate:date}; // Do not update formData if condition is not met
        }
      }

<Pagination>
      <Pagination.First />
      <Pagination.Prev />
      <Pagination.Item>{1}</Pagination.Item>

      <Pagination.Item>{10}</Pagination.Item>
      <Pagination.Item>{11}</Pagination.Item>
      <Pagination.Item >{12}</Pagination.Item>
      <Pagination.Item>{13}</Pagination.Item>
      <Pagination.Item>{14}</Pagination.Item>

      <Pagination.Item>{20}</Pagination.Item>
      <Pagination.Next />
      <Pagination.Last />
    </Pagination>

{let active = 2;
let items = [];
for (let number = 1; number <= 5; number++) {
  items.push(
    <Pagination.Item key={number} active={number === active}>
      {number}
    </Pagination.Item>
  );
}}


let [r,setR]=useState([1,5]);
<button onClick={()=>{}}></button>

--------------------------------------------------------------------------------------
const [r, setR] = useState([1, 5]);

  const handleRangeChange = (operation) => {
    const step = operation === 'increment' ? 5 : -5;
    const newRange = [r[0] + step, r[1] + step];

    // Check if the operation is valid
    const isValid =
      (operation === 'increment' && newRange[1] <= 50) ||
      (operation === 'decrement' && newRange[0] >= 1);

    if (isValid) {
      setR(newRange);
    }
  };
  ------------------------------------------------------------------------------------------
let [r,setR]=useState([1,5]);
  let [active,setActive]=useState();
  useEffect(() => {
    console.log('active', active);
    console.log('range', r);
    if(active>r[1] ){
      console.log('active is greater than r')
      setR([r[0]+1,r[1]+1]);
      console.log(r);
    }else if(active<r[0]){
      console.log('active is less r.min');
      setR([r[0]-1,r[1]-1]);
      console.log(r);
    }
  }, [active, r]);
  const handleLast = () => {
    console.log('hl'+r)
    const newRange = [r[0] + 5, r[1] + 5];
      if (newRange[0] <= 50) {
      setR(newRange);
      setActive(r[0]);
    }
  };

  const handleFirst = () => {
    if(r[0]-5<=0 || r[1]-5<5){
     const newRange=[1,5];
    if (newRange[0] >= 1) {
      setR(newRange);
    }
    setActive(r[0]);
    }else{
      const newRange = [r[0] - 5, r[1] - 5];
      if (newRange[0] >= 1) {
      setR(newRange);
    }
    setActive(r[0]);
    }
  };
  let handleNext=()=>{
    setActive((prevActive) => {
      const newActive = prevActive + 1;
      return newActive <=50 ? newActive : 50;
    });
  }
  let handlePrev=()=>{
     setActive((prevActive) => {
      const newActive = prevActive - 1;
      return newActive >= 1 ? newActive : 1;
    })
  }

  let pItemClick=(number)=>{
   setActive(number);
   console.log(number);

  }
    let items = [];
     for (let number = r[0]; number<=r[1]; number++) {
      items.push(
        <Pagination.Item key={number} active={number === active} onFocus={()=>{pItemClick(number)}}>
          {number}
        </Pagination.Item>
      )
    } 
 _____________________________________________________________________________________   

 console.log('validate user');
  console.log(req.body);
  console.log(req.params);
  console.log(req.query);
-----------------------------------------------------------------------------------------



*/
}